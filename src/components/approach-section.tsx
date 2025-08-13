"use client"

import { Target, Lightbulb, Rocket, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import Link from "next/link"

const steps = [
  {
    step: "01",
    icon: Target,
    title: "Defining Objectives",
    description: "Clear vision development, goal identification and clarification, strategic objective setting, and requirements analysis.",
    features: ["Vision Development", "Goal Identification", "Strategic Planning", "Requirements Analysis"]
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Developing Strategies",
    description: "Thoughtful planning and strategy formulation, solution architecture and design, strategic roadmap creation, and implementation planning.",
    features: ["Strategy Formulation", "Solution Architecture", "Roadmap Creation", "Implementation Planning"]
  },
  {
    step: "03",
    icon: Rocket,
    title: "Implementation & Support",
    description: "Precise execution of planned strategies, ongoing support and monitoring, performance tracking and optimization, and continuous improvement processes.",
    features: ["Precise Execution", "Ongoing Support", "Performance Tracking", "Continuous Improvement"]
  },
]

export function ApproachSection() {
  return (
    <section id="our-approach" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMDUpIiBzdHJva2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVzZz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      {/* Minimal floating elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-200/30 dark:bg-slate-700/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-slate-300/20 dark:bg-slate-600/20 rounded-full blur-xl"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20 max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient-brand text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Systematic Approach
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We follow a proven three-step process that drives real, measurable results for your business
          </motion.p>

          <motion.blockquote
            className="text-2xl font-medium text-slate-700 dark:text-slate-300 italic max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            &ldquo;Impactful change requires a clear vision, a thoughtful plan, and precise execution.&rdquo;
          </motion.blockquote>
        </motion.div>

        {/* Timeline connector for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <motion.div
            className="h-0.5 bg-gradient-brand"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative"
            >
              {/* Step number with glow effect */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
              </motion.div>

              <Card className="relative overflow-hidden border-0 card-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 group">
                <CardHeader className="text-center pt-8 pb-4">
                  <motion.div
                    className="mx-auto mb-6 p-4 rounded-2xl bg-surface-soft w-fit shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-10 w-10 text-accent" />
                  </motion.div>

                  <CardTitle className="text-2xl mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-brand group-hover:bg-clip-text">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed">
                    {step.description}
                  </CardDescription>

                  <div className="space-y-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

              </Card>

              {/* Connection arrow for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.3 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-8 h-8 text-accent" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="btn-brand"
            asChild
          >
            <Link href="#what-we-do">
              Explore What We Do
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
