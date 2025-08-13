"use client";

import React, { useEffect, useState, useRef, ReactNode, useMemo } from "react";
import { m as motion, LazyMotion, domAnimation, Variants, TargetAndTransition, VariantLabels } from "framer-motion";
import {
  useEnhancedAnimationEnabled,
  createBudgetAwareVariants,
  createResourceAwarePresets,
  useQueuedAnimation,
  type ConnectionSpeed
} from "@/lib/animation-utils";

interface SmartAnimationProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  threshold?: number; // Visibility threshold (0-1)
  animationThreshold?: ConnectionSpeed; // Connection speed threshold
  rootMargin?: string; // IntersectionObserver rootMargin
  fallback?: ReactNode; // Content to show if animations are disabled
  initial?: VariantLabels | TargetAndTransition;
  animate?: VariantLabels | TargetAndTransition;
  transition?: Record<string, unknown>;
  viewport?: Record<string, unknown>;
  once?: boolean;
  preset?: 'ultraLight' | 'light' | 'medium' | 'full' | 'auto';
  priority?: 'low' | 'medium' | 'high'; // Animation priority for queuing
  defer?: boolean; // Whether to defer animation start
}

/**
 * SmartAnimation component with advanced performance optimizations
 * - Real-time performance monitoring
 * - Adaptive animation quality
 * - Animation queuing for better performance
 * - Resource-aware presets
 */
export default function SmartAnimation({
  children,
  variants,
  className = "",
  threshold = 0.1,
  animationThreshold = "medium",
  rootMargin = "0px",
  fallback,
  initial = "hidden",
  animate = "visible",
  transition,
  viewport,
  once = true,
  preset = 'auto',
  priority = 'medium',
  defer = false,
}: SmartAnimationProps) {
  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(!defer);
  const ref = useRef<HTMLDivElement>(null);
  const { enabled, budget, connectionSpeed } = useEnhancedAnimationEnabled(animationThreshold);
  const { queueAnimation } = useQueuedAnimation();

  // Create adaptive animation variants
  const adaptiveVariants = useMemo(() => {
    if (!variants && preset !== 'auto') {
      const presets = createResourceAwarePresets(budget);
      return presets[preset];
    }

    if (variants) {
      return createBudgetAwareVariants(variants, budget);
    }

    // Auto preset selection based on performance budget
    const presets = createResourceAwarePresets(budget);
    if (connectionSpeed === 'slow' || budget.maxConcurrentAnimations <= 2) {
      return presets.light;
    } else if (connectionSpeed === 'medium' || !budget.allowComplexAnimations) {
      return presets.medium;
    } else {
      return presets.full;
    }
  }, [variants, preset, budget, connectionSpeed]);

  // Enhanced intersection observer with performance considerations
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (priority === 'high' || !defer) {
            setIsInView(true);
            setShouldAnimate(true);
          } else {
            // Queue animation for lower priority elements
            queueAnimation(async () => {
              return new Promise<void>((resolve) => {
                setIsInView(true);
                setShouldAnimate(true);
                // Resolve after a brief delay to allow for animation start
                setTimeout(resolve, 50);
              });
            });
          }

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
          setShouldAnimate(false);
        }
      },
      {
        threshold,
        rootMargin,
        // Use larger root margin for slow connections to pre-load animations
        ...(connectionSpeed === 'slow' && { rootMargin: '100px' })
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once, priority, defer, queueAnimation, connectionSpeed]);

  // If animations are disabled, render fallback or children without animation
  if (!enabled) {
    return fallback ? (
      <div className={className}>{fallback}</div>
    ) : (
      <div className={className}>{children}</div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {isInView && shouldAnimate && (
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={initial}
            animate={isInView && shouldAnimate ? animate : initial}
            variants={adaptiveVariants}
            transition={{
              // Respect animation budget duration limits
              duration: Math.min(
                (transition as { duration?: number })?.duration ?? 0.3,
                budget.maxAnimationDuration / 1000
              ),
              ease: "easeOut",
              ...transition
            }}
            viewport={viewport}
          >
            {children}
          </motion.div>
        </LazyMotion>
      )}
      {(!isInView || !shouldAnimate) && (
        <div style={{ visibility: "hidden" }}>{children}</div>
      )}
    </div>
  );
}

/**
 * Simpler version for critical animations that should always render
 */
export function CriticalAnimation({
  children,
  variants,
  className = "",
  ...motionProps
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
} & React.ComponentProps<typeof motion.div>) {
  const { enabled, budget } = useEnhancedAnimationEnabled('slow');

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  const adaptiveVariants = variants ? createBudgetAwareVariants(variants, budget) : undefined;

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={className}
        variants={adaptiveVariants}
        transition={{
          duration: Math.min(0.3, budget.maxAnimationDuration / 1000),
          ease: "easeOut",
        }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}

/**
 * Background animation component with extreme performance optimization
 */
export function OptimizedBackgroundAnimation({
  children,
  intensity = 'auto',
}: {
  children: ReactNode;
  intensity?: 'minimal' | 'light' | 'medium' | 'full' | 'auto';
}) {
  const { enabled, budget, connectionSpeed } = useEnhancedAnimationEnabled('slow');
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Delay background animations to allow page to load first
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, connectionSpeed === 'slow' ? 2000 : 1000);

    return () => clearTimeout(timer);
  }, [connectionSpeed]);

  if (!enabled || !shouldRender || !budget.allowComplexAnimations) {
    return <>{children}</>;
  }

  const actualIntensity = intensity === 'auto'
    ? (connectionSpeed === 'fast' && budget.allowBlurEffects ? 'full'
      : connectionSpeed === 'medium' ? 'medium'
      : 'light')
    : intensity;

  const renderLight = actualIntensity === 'light';
  const renderMedium = actualIntensity === 'medium';
  const renderFull = actualIntensity === 'full';

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        {children}

        {/* Only render animations based on intensity and budget */}
        {(renderFull || renderMedium || renderLight) && budget.allowGradientAnimations && (
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-brand opacity-20 rounded-full blur-3xl"
            animate={{
              opacity: renderFull ? [0.15, 0.25, 0.15] : [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: renderFull ? 15 : 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {(renderFull || renderMedium) && budget.allowGradientAnimations && (
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-brand opacity-10 rounded-full blur-3xl"
            animate={{
              opacity: [0.08, 0.15, 0.08]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {renderFull && budget.allowComplexAnimations && (
          <>
            <motion.div
              className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400/30 rotate-45"
              animate={{
                y: [0, -15, 0],
                rotate: [45, 135, 45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-2/3 left-1/3 w-6 h-6 border-2 border-slate-400/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>
    </LazyMotion>
  );
}
