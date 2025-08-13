"use client"

import { Settings, TrendingUp, Zap, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations"
import Link from "next/link"

const services = [
  {
    icon: Settings,
    title: "Streamlining Operations",
    description: "Process optimization and efficiency improvement through operational workflow enhancement.",
    features: ["Process Optimization", "Workflow Enhancement", "Efficiency Analysis"]
  },
  {
    icon: TrendingUp,
    title: "Performance Improvement",
    description: "Business performance analysis and enhancement with strategic performance optimization.",
    features: ["Performance Analysis", "Strategic Optimization", "KPI Enhancement"]
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description: "Digital transformation solutions with technology implementation and support.",
    features: ["Digital Transformation", "Tech Implementation", "Smart Solutions"]
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-30" />

      <div className="container-responsive relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200/50 dark:border-blue-800/50 mb-6 sm:mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">Core Services</span>
            </motion.div>

            <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl xl:text-responsive-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-slate-900 dark:text-white">Data-Driven Solutions That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Deliver Real Impact
              </span>
            </h2>
            <p className="text-responsive-lg sm:text-responsive-xl lg:text-responsive-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              We provide innovative solutions designed to deliver measurable results where it matters most
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="group relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl h-full">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />

                  <CardHeader className="relative z-10 text-center pb-4 sm:pb-6 pt-6 sm:pt-8">
                    <motion.div
                      className="mx-auto mb-4 sm:mb-6 p-3 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 w-fit shadow-xl"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200 font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 text-center px-4 sm:px-6 pb-6 sm:pb-8">
                    <CardDescription className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-blue-600 hover:text-purple-600 hover:bg-transparent transition-colors duration-200 touch-target"
                      asChild
                    >
                      <Link href="#contact">
                        <span className="font-semibold text-sm sm:text-base">Learn More</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>

                  {/* Floating particles effect - simplified for performance */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-brand rounded-full`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [-5, -10, -5],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold touch-target-lg"
              asChild
            >
              <Link href="#our-approach">
                Discover Our Approach
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
