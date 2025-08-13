/**
 * Enhanced Animation utilities for performance optimization
 * Provides tools for conditionally rendering animations based on device capabilities,
 * network conditions, and real-time performance metrics
 */

import { useEffect, useState } from 'react';
import { Variants } from "framer-motion";
import { usePerformanceMonitor, useAnimationBudget, type AnimationBudget } from './performance-monitor';

// Types for network conditions
export type ConnectionSpeed = 'slow' | 'medium' | 'fast' | 'unknown';

/**
 * Enhanced hook to determine if animations should be enabled based on multiple factors
 * @param threshold Minimum connection speed to enable animations
 * @returns Enhanced animation configuration
 */
export function useEnhancedAnimationEnabled(threshold: ConnectionSpeed = 'medium'): {
  enabled: boolean;
  budget: AnimationBudget;
  connectionSpeed: ConnectionSpeed;
} {
  const connectionSpeed = useConnectionSpeed();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { startMonitoring } = usePerformanceMonitor();
  const budget = useAnimationBudget(connectionSpeed, prefersReducedMotion);

  useEffect(() => {
    // Start performance monitoring when animations are being used
    startMonitoring();

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [startMonitoring]);

  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return {
      enabled: false,
      budget,
      connectionSpeed
    };
  }

  // Enable animations based on connection speed
  let enabled = false;
  switch (threshold) {
    case 'slow':
      enabled = true; // Enable for all connections
      break;
    case 'medium':
      enabled = connectionSpeed === 'medium' || connectionSpeed === 'fast';
      break;
    case 'fast':
      enabled = connectionSpeed === 'fast';
      break;
    default:
      enabled = true; // Default to enabled
  }

  return {
    enabled,
    budget,
    connectionSpeed
  };
}

/**
 * Hook to detect network connection speed
 * @returns Current connection speed category
 */
export function useConnectionSpeed(): ConnectionSpeed {
  const [connectionSpeed, setConnectionSpeed] = useState<ConnectionSpeed>('unknown');

  useEffect(() => {
    // Check if the Network Information API is available
    if ('connection' in navigator) {
      // TypeScript doesn't know about the connection property
      // Using a more specific type than 'any'
      const connection = (navigator as { connection: NetworkInformation }).connection;

      // Initial detection
      detectConnectionSpeed(connection, setConnectionSpeed);

      // Set up event listener for connection changes
      const handleChange = () => detectConnectionSpeed(connection, setConnectionSpeed);
      connection.addEventListener('change', handleChange);

      // Clean up
      return () => {
        connection.removeEventListener('change', handleChange);
      };
    } else {
      // Fallback method using performance timing
      detectConnectionSpeedFallback(setConnectionSpeed);
    }
  }, []);

  return connectionSpeed;
}

/**
 * Detect connection speed using Network Information API
 */
// Define NetworkInformation type to avoid 'any'
interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  addEventListener: (event: string, handler: () => void) => void;
  removeEventListener: (event: string, handler: () => void) => void;
  [key: string]: unknown;
}

function detectConnectionSpeed(
  connection: NetworkInformation,
  setConnectionSpeed: (speed: ConnectionSpeed) => void
) {
  // Check effectiveType if available
  if (connection.effectiveType) {
    switch (connection.effectiveType) {
      case 'slow-2g':
      case '2g':
        setConnectionSpeed('slow');
        break;
      case '3g':
        setConnectionSpeed('medium');
        break;
      case '4g':
        setConnectionSpeed('fast');
        break;
      default:
        setConnectionSpeed('unknown');
    }
    return;
  }

  // Check downlink if effectiveType is not available
  if (connection.downlink !== undefined) {
    if (connection.downlink < 1) {
      setConnectionSpeed('slow');
    } else if (connection.downlink < 5) {
      setConnectionSpeed('medium');
    } else {
      setConnectionSpeed('fast');
    }
    return;
  }

  setConnectionSpeed('unknown');
}

/**
 * Fallback method to estimate connection speed using resource timing
 */
function detectConnectionSpeedFallback(
  setConnectionSpeed: (speed: ConnectionSpeed) => void
) {
  // Set initial state to unknown
  setConnectionSpeed('unknown');

  // Try to determine speed after page load
  window.addEventListener('load', () => {
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;

      if (loadTime > 3000) {
        setConnectionSpeed('slow');
      } else if (loadTime > 1000) {
        setConnectionSpeed('medium');
      } else {
        setConnectionSpeed('fast');
      }
    } catch (e) {
      console.error('Error detecting connection speed:', e);
      setConnectionSpeed('unknown');
    }
  });
}

/**
 * Hook to determine if animations should be enabled based on connection speed
 * @param threshold Minimum connection speed to enable animations
 * @returns Boolean indicating if animations should be enabled
 */
export function useAnimationEnabled(threshold: ConnectionSpeed = 'medium'): boolean {
  const connectionSpeed = useConnectionSpeed();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Disable animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return false;
  }

  // Enable animations based on connection speed
  switch (threshold) {
    case 'slow':
      return true; // Enable for all connections
    case 'medium':
      return connectionSpeed === 'medium' || connectionSpeed === 'fast';
    case 'fast':
      return connectionSpeed === 'fast';
    default:
      return true; // Default to enabled
  }
}

/**
 * Hook to get simplified animation variants based on connection speed
 * @param fullVariants The complete animation variants
 * @param simpleVariants Simplified animation variants for slower connections
 * @param threshold Minimum connection speed to use full animations
 * @returns The appropriate animation variants based on connection speed
 */
export function useOptimizedAnimations<T>(
  fullVariants: T,
  simpleVariants: T,
  threshold: ConnectionSpeed = 'medium'
): T {
  const connectionSpeed = useConnectionSpeed();
  const shouldUseFullVariants =
    (threshold === 'slow') ||
    (threshold === 'medium' && (connectionSpeed === 'medium' || connectionSpeed === 'fast')) ||
    (threshold === 'fast' && connectionSpeed === 'fast');

  return shouldUseFullVariants ? fullVariants : simpleVariants;
}

/**
 * Creates optimized animation variants with reduced properties for better performance
 * @param variants Original animation variants
 * @returns Simplified variants with only opacity transitions
 */

/**
 * Creates simplified animation variants for better performance
 */
export function createSimplifiedVariants(variants: Variants): Variants {
  const simplified: Variants = {};

  // Process each variant state (hidden, visible, etc.)
  Object.keys(variants).forEach(key => {
    // Safely access opacity or use default
    const variantState = variants[key] as Record<string, unknown>;
    const opacityValue = variantState && typeof variantState === 'object' && 'opacity' in variantState
      ? (variantState.opacity as number)
      : 1;

    // Create simplified variant
    simplified[key] = {
      opacity: opacityValue,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    };
  });

  return simplified;
}

/**
 * Creates performance-aware animation variants based on budget constraints
 */
export function createBudgetAwareVariants(
  originalVariants: Variants,
  budget: AnimationBudget
): Variants {
  if (!budget.allowComplexAnimations) {
    return createSimplifiedVariants(originalVariants);
  }

  const optimizedVariants: Variants = {};

  Object.keys(originalVariants).forEach(key => {
    const variant = originalVariants[key] as Record<string, unknown>;
    const optimizedVariant: Record<string, unknown> = { ...variant };

    // Remove blur effects if not allowed
    if (!budget.allowBlurEffects && 'filter' in optimizedVariant) {
      delete optimizedVariant.filter;
    }

    // Simplify transforms if required
    if (budget.simplifyTransforms) {
      // Remove complex transforms, keep only basic ones
      if ('rotateX' in optimizedVariant) delete optimizedVariant.rotateX;
      if ('rotateY' in optimizedVariant) delete optimizedVariant.rotateY;
      if ('rotateZ' in optimizedVariant) delete optimizedVariant.rotateZ;
      if ('skewX' in optimizedVariant) delete optimizedVariant.skewX;
      if ('skewY' in optimizedVariant) delete optimizedVariant.skewY;

      // Reduce scale variations
      if ('scale' in optimizedVariant && typeof optimizedVariant.scale === 'number') {
        const scale = optimizedVariant.scale as number;
        optimizedVariant.scale = Math.max(0.95, Math.min(1.05, scale));
      }
    }

    // Adjust animation duration
    if ('transition' in optimizedVariant && typeof optimizedVariant.transition === 'object') {
      const transition = optimizedVariant.transition as Record<string, unknown>;
      if ('duration' in transition && typeof transition.duration === 'number') {
        transition.duration = Math.min(transition.duration, budget.maxAnimationDuration / 1000);
      }
    }

    optimizedVariants[key] = optimizedVariant as Variants[string];
  });

  return optimizedVariants;
}

/**
 * Animation queue manager for respecting concurrent animation limits
 */
class AnimationQueue {
  private queue: Array<() => Promise<void>> = [];
  private running: Set<Promise<void>> = new Set();
  private maxConcurrent = 3;

  setMaxConcurrent(max: number) {
    this.maxConcurrent = Math.max(1, max);
  }

  async add(animationFn: () => Promise<void>): Promise<void> {
    return new Promise((resolve, reject) => {
      const wrappedFn = async () => {
        try {
          await animationFn();
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      this.queue.push(wrappedFn);
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.running.size >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    const animationFn = this.queue.shift();
    if (!animationFn) return;

    const promise = animationFn();
    this.running.add(promise);

    try {
      await promise;
    } finally {
      this.running.delete(promise);
      // Process next item in queue
      this.processQueue();
    }
  }

  clear() {
    this.queue = [];
  }
}

// Global animation queue
const globalAnimationQueue = new AnimationQueue();

/**
 * Hook for queued animations that respect performance budgets
 */
export function useQueuedAnimation() {
  const { budget } = useEnhancedAnimationEnabled();

  useEffect(() => {
    globalAnimationQueue.setMaxConcurrent(budget.maxConcurrentAnimations);
  }, [budget.maxConcurrentAnimations]);

  const queueAnimation = (animationFn: () => Promise<void>) => {
    return globalAnimationQueue.add(animationFn);
  };

  return { queueAnimation };
}

/**
 * Creates resource-aware animation presets
 */
export function createResourceAwarePresets(budget: AnimationBudget) {
  const baseTransition = {
    duration: Math.min(0.3, budget.maxAnimationDuration / 1000),
    ease: "easeOut" as const
  };

  return {
    // Ultra-light preset for very constrained environments
    ultraLight: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.15, ease: "linear" as const }
      }
    },

    // Light preset for slow connections
    light: {
      hidden: { opacity: 0, y: budget.simplifyTransforms ? 0 : 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition
      }
    },

    // Medium preset for moderate performance
    medium: budget.allowComplexAnimations ? {
      hidden: { opacity: 0, y: 20, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: baseTransition
      }
    } : {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition
      }
    },

    // Full preset for high performance
    full: budget.allowComplexAnimations ? {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        ...(budget.allowBlurEffects && { filter: "blur(4px)" })
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        ...(budget.allowBlurEffects && { filter: "blur(0px)" }),
        transition: {
          ...baseTransition,
          duration: Math.min(0.6, budget.maxAnimationDuration / 1000)
        }
      }
    } : {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: baseTransition
      }
    }
  };
}
