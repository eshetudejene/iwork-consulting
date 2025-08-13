"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations"
import { TechnologyIntegrationIllustration } from "./svg-illustrations"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10" />

      {/* Main Content */}
      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[80vh] lg:min-h-screen">
            {/* Left Column - Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1"
            >
              {/* Company Badge */}
              <motion.div
                variants={staggerItem}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-slate-600/50 shadow-lg"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                iWork Consulting PLC
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Smart Moves,
                </span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Quick Results
                </span>
              </motion.h1>

              {/* Mission Statement */}
              <motion.p
                variants={staggerItem}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Providing innovative consulting and smart tech solutions with next-level business advising capabilities.
              </motion.p>

              {/* Core Services */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  "Streamlining Operations",
                  "Performance Improvement",
                  "Technology Integration"
                ].map((service) => (
                  <motion.div
                    key={service}
                    variants={staggerItem}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-600/50 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">{service}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start pt-4 sm:pt-6"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 px-6 py-3 text-sm sm:text-base font-semibold touch-target-lg"
                  asChild
                >
                  <Link href="#contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm transition-all duration-200 px-6 py-3 text-sm sm:text-base font-semibold touch-target-lg"
                  asChild
                >
                  <Link href="#services">
                    Explore Services
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Background decoration */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl border border-slate-200/50 dark:border-slate-600/50">
                  <TechnologyIntegrationIllustration className="w-full h-auto max-h-[200px] sm:max-h-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
