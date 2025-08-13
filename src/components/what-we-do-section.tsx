"use client"

import { Users, Globe, Brain, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { TechnologyIntegrationIllustration } from "./svg-illustrations"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Management & Business Consulting",
    description: "Strategic business planning and consulting expertise",
    features: [
      "Strategic business planning and consulting",
      "Management expertise and guidance",
      "Business process improvements",
      "Performance optimization strategies"
    ]
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom website creation and digital presence",
    features: [
      "Custom website creation",
      "Digital presence development",
      "User experience optimization",
      "Responsive web solutions"
    ]
  },
  {
    icon: Brain,
    title: "Enterprise Software & AI Solutions",
    description: "Advanced digital solutions and AI implementation",
    features: [
      "Advanced digital solutions",
      "Artificial Intelligence implementation",
      "Custom enterprise software development",
      "Smart technology integration"
    ]
  }
]

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section-padding relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-surface-soft" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-brand opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-responsive relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section - Center Aligned */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Service Portfolio</span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl xl:text-responsive-6xl font-bold mb-4 sm:mb-6 text-gradient-brand">
            What We Do
          </h2>

          <p className="text-responsive-lg sm:text-responsive-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive service portfolio designed to transform your business through
            <span className="text-accent font-semibold"> innovative solutions</span> and
            <span className="text-gradient-brand font-semibold"> strategic expertise</span>.
          </p>
        </motion.div>



        {/* Services Cards - Responsive Grid with Better Spacing */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className={`group relative overflow-hidden border-0 card-surface hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 h-full`}>
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  style={{ padding: '2px' }}
                >
                  <div className={`h-full w-full card-surface rounded-lg`} />
                </motion.div>

                <CardHeader className="relative z-10 pb-4">
                  <motion.div
                    className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-gradient-brand w-fit shadow-xl`}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </motion.div>

                  <CardTitle className="text-xl sm:text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-brand group-hover:bg-clip-text transition-all duration-200">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-200 touch-target"
                      asChild
                    >
                      <Link href="#work-with-us">
                        Get Started
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Floating particles effect - simplified for performance */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-brand rounded-full`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${25 + i * 20}%`,
                      }}
                      animate={{
                        y: [-5, -10, -5],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
