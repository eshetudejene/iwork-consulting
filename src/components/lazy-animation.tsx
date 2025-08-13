"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import { m as motion, LazyMotion, domAnimation, Variants, TargetAndTransition, VariantLabels } from "framer-motion";
import { useAnimationEnabled } from "@/lib/animation-utils";

interface LazyAnimationProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  threshold?: number; // Visibility threshold (0-1)
  animationThreshold?: "slow" | "medium" | "fast"; // Connection speed threshold
  rootMargin?: string; // IntersectionObserver rootMargin
  fallback?: ReactNode; // Content to show if animations are disabled
  initial?: VariantLabels | TargetAndTransition;
  animate?: VariantLabels | TargetAndTransition;
  transition?: Record<string, unknown>;
  viewport?: Record<string, unknown>;
  once?: boolean;
}

/**
 * LazyAnimation component that only renders animations when they're about to enter the viewport
 * and respects user's connection speed and reduced motion preferences
 */
export default function LazyAnimation({
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
}: LazyAnimationProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animationEnabled = useAnimationEnabled(animationThreshold);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to true when entering viewport
        if (entry.isIntersecting) {
          setIsInView(true);

          // If we only want to animate once, disconnect after it's in view
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          // If not once, toggle off when out of view
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  // If animations are disabled, render fallback or children without animation
  if (!animationEnabled) {
    return fallback ? <div className={className}>{fallback}</div> : <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {isInView && (
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={initial}
            animate={isInView ? animate : initial}
            variants={variants}
            transition={transition}
            viewport={viewport}
          >
            {children}
          </motion.div>
        </LazyMotion>
      )}
      {!isInView && <div style={{ visibility: "hidden" }}>{children}</div>}
    </div>
  );
}
