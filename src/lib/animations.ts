import { Variants } from "framer-motion"
import { createSimplifiedVariants } from "./animation-utils"

// Performance-optimized stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Performance-optimized stagger item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 15, // Reduced movement distance
    scale: 0.98 // Less scaling for better performance
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized fade in up animation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced movement distance
    scale: 0.98 // Less scaling for better performance
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized fade in animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98 // Less scaling for better performance
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -20, // Reduced movement distance
    scale: 0.98 // Less scaling for better performance
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 20, // Reduced movement distance
    scale: 0.98 // Less scaling for better performance
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized scale animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9 // Less extreme scaling for better performance
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized hover animation for cards
export const cardHover: Variants = {
  hover: {
    y: -3, // Reduced movement distance
    scale: 1.01, // Less scaling for better performance
    transition: {
      duration: 0.15, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Performance-optimized button hover animation
export const buttonHover: Variants = {
  hover: {
    scale: 1.03, // Less scaling for better performance
    transition: {
      duration: 0.15, // Shorter duration
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.97, // Less scaling for better performance
    transition: {
      duration: 0.08, // Shorter duration
      ease: "easeOut",
    },
  },
}

// Create simplified versions for performance
export const fadeInSimple: Variants = createSimplifiedVariants(fadeIn);
export const slideInSimple: Variants = createSimplifiedVariants(slideInLeft);
export const scaleInSimple: Variants = createSimplifiedVariants(scaleIn);

/**
 * Helper function to select appropriate animation variants based on performance needs
 * @param variants Original animation variants
 * @param simplifiedVariants Simplified animation variants
 * @param performanceMode Whether to use simplified animations
 * @returns The appropriate animation variants
 */
export function selectAnimationVariant(
  variants: Variants,
  simplifiedVariants: Variants,
  performanceMode: boolean
): Variants {
  return performanceMode ? simplifiedVariants : variants;
}
