/**
 * Enhanced Animation Performance Monitor
 * Real-time performance tracking and adaptive animation quality
 */

import { useEffect, useState, useCallback } from 'react';

export interface PerformanceMetrics {
  fps: number;
  cpuLoad: 'low' | 'medium' | 'high';
  memoryUsage: number;
  renderTime: number;
  animationStress: number;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
}

interface PerformanceWithMemory extends Performance {
  memory: MemoryInfo;
}

export interface AnimationBudget {
  maxConcurrentAnimations: number;
  allowComplexAnimations: boolean;
  allowBlurEffects: boolean;
  allowGradientAnimations: boolean;
  maxAnimationDuration: number;
  simplifyTransforms: boolean;
}

class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private renderTimes: number[] = [];
  private animationCount = 0;
  private observers: Set<(metrics: PerformanceMetrics) => void> = new Set();
  private isMonitoring = false;
  private rafId: number | null = null;

  startMonitoring() {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.tick();
  }

  stopMonitoring() {
    this.isMonitoring = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  subscribe(callback: (metrics: PerformanceMetrics) => void) {
    this.observers.add(callback);
    return () => this.observers.delete(callback);
  }

  trackAnimation(start = true) {
    this.animationCount += start ? 1 : -1;
    this.animationCount = Math.max(0, this.animationCount);
  }

  private tick = () => {
    if (!this.isMonitoring) return;

    const now = performance.now();
    const deltaTime = now - this.lastTime;

    this.frameCount++;

    // Calculate FPS every second
    if (deltaTime >= 1000) {
      this.fps = (this.frameCount * 1000) / deltaTime;
      this.frameCount = 0;
      this.lastTime = now;

      // Emit metrics
      this.emitMetrics();
    }

    this.rafId = requestAnimationFrame(this.tick);
  };

  private emitMetrics() {
    const metrics: PerformanceMetrics = {
      fps: this.fps,
      cpuLoad: this.getCpuLoad(),
      memoryUsage: this.getMemoryUsage(),
      renderTime: this.getAverageRenderTime(),
      animationStress: this.animationCount
    };

    this.observers.forEach(observer => observer(metrics));
  }

  private getCpuLoad(): 'low' | 'medium' | 'high' {
    if (this.fps > 50) return 'low';
    if (this.fps > 30) return 'medium';
    return 'high';
  }

  private getMemoryUsage(): number {
    if ('memory' in performance) {
      const memory = (performance as PerformanceWithMemory).memory;
      return memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
    return 0;
  }

  private getAverageRenderTime(): number {
    const recent = this.renderTimes.slice(-10);
    return recent.reduce((sum, time) => sum + time, 0) / recent.length || 0;
  }
}

// Global performance monitor instance
const performanceMonitor = new PerformanceMonitor();

/**
 * Hook for real-time performance monitoring
 */
export function usePerformanceMonitor(): {
  metrics: PerformanceMetrics | null;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  trackAnimation: (start: boolean) => void;
} {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe(setMetrics);
    return () => {
      unsubscribe();
    };
  }, []);

  const startMonitoring = useCallback(() => {
    performanceMonitor.startMonitoring();
  }, []);

  const stopMonitoring = useCallback(() => {
    performanceMonitor.stopMonitoring();
  }, []);

  const trackAnimation = useCallback((start: boolean) => {
    performanceMonitor.trackAnimation(start);
  }, []);

  return { metrics, startMonitoring, stopMonitoring, trackAnimation };
}

/**
 * Calculate animation budget based on current performance
 */
export function calculateAnimationBudget(
  metrics: PerformanceMetrics | null,
  connectionSpeed: 'slow' | 'medium' | 'fast' | 'unknown',
  prefersReducedMotion: boolean
): AnimationBudget {
  // If reduced motion is preferred, minimal animations only
  if (prefersReducedMotion) {
    return {
      maxConcurrentAnimations: 1,
      allowComplexAnimations: false,
      allowBlurEffects: false,
      allowGradientAnimations: false,
      maxAnimationDuration: 200,
      simplifyTransforms: true
    };
  }

  // Default budget for unknown conditions
  const budget: AnimationBudget = {
    maxConcurrentAnimations: 3,
    allowComplexAnimations: false,
    allowBlurEffects: false,
    allowGradientAnimations: false,
    maxAnimationDuration: 300,
    simplifyTransforms: true
  };

  // Adjust based on connection speed
  switch (connectionSpeed) {
    case 'fast':
      Object.assign(budget, {
        maxConcurrentAnimations: 8,
        allowComplexAnimations: true,
        allowBlurEffects: true,
        allowGradientAnimations: true,
        maxAnimationDuration: 800,
        simplifyTransforms: false
      });
      break;
    case 'medium':
      Object.assign(budget, {
        maxConcurrentAnimations: 5,
        allowComplexAnimations: true,
        allowBlurEffects: false,
        allowGradientAnimations: true,
        maxAnimationDuration: 500,
        simplifyTransforms: false
      });
      break;
    case 'slow':
      Object.assign(budget, {
        maxConcurrentAnimations: 2,
        allowComplexAnimations: false,
        allowBlurEffects: false,
        allowGradientAnimations: false,
        maxAnimationDuration: 200,
        simplifyTransforms: true
      });
      break;
  }

  // Adjust based on real-time performance metrics
  if (metrics) {
    if (metrics.cpuLoad === 'high' || metrics.fps < 30) {
      Object.assign(budget, {
        maxConcurrentAnimations: Math.max(1, Math.floor(budget.maxConcurrentAnimations * 0.5)),
        allowComplexAnimations: false,
        allowBlurEffects: false,
        allowGradientAnimations: false,
        simplifyTransforms: true
      });
    } else if (metrics.cpuLoad === 'medium' || metrics.fps < 45) {
      Object.assign(budget, {
        maxConcurrentAnimations: Math.floor(budget.maxConcurrentAnimations * 0.75),
        allowBlurEffects: false,
        simplifyTransforms: true
      });
    }

    // Reduce animation stress if too many animations are running
    if (metrics.animationStress > budget.maxConcurrentAnimations) {
      budget.maxConcurrentAnimations = Math.max(1, budget.maxConcurrentAnimations - 1);
    }
  }

  return budget;
}

/**
 * Hook for adaptive animation budgeting
 */
export function useAnimationBudget(
  connectionSpeed: 'slow' | 'medium' | 'fast' | 'unknown',
  prefersReducedMotion: boolean = false
) {
  const { metrics } = usePerformanceMonitor();

  const budget = calculateAnimationBudget(metrics, connectionSpeed, prefersReducedMotion);

  return budget;
}
