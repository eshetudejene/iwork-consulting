"use client"

import { ExternalLink, Building2, Globe, Rocket, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import Link from "next/link"

const partners = [
  {
    name: "Bridgeport Digital",
    description: "Digital solutions and consulting partnership, providing comprehensive digital transformation services",
    website: "https://www.bridgeportdigital.com/",
    type: "Digital Solutions",
    icon: Globe,

  },
  {
    name: "Schneider Electric",
    description: "Enterprise technology and automation solutions partnership, delivering cutting-edge industrial and energy management solutions",
    website: "https://www.se.com/ww/en/",
    type: "Enterprise Technology",
    icon: Building2,

  },
  {
    name: "The Weight Loss Meds",
    description: "Healthcare and wellness solutions partnership, expanding our reach into the healthcare technology sector",
    website: "http://www.theweightlossmeds.com/",
    type: "Healthcare",
    icon: Rocket,

  }
]

export function PartnersSection() {
  return (
    <section id="partners" className="section-padding relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-surface-soft" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxLjUiIGZpbGw9InJnYmEoMTAwLCAxMDAsIDEwMCwgMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-60" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-brand opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full blur-3xl bg-slate-400/20 dark:bg-slate-600/20"
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-responsive relative z-10">
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
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Strategic Partnerships</span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl xl:text-responsive-6xl font-bold mb-4 sm:mb-6 text-gradient-brand">
            Our Strategic Partners
          </h2>

          <p className="text-responsive-lg sm:text-responsive-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborating with
            <span className="text-gradient-brand font-semibold"> leading organizations</span> to deliver
            <span className="text-accent font-semibold"> exceptional results</span> and drive innovation across Ethiopia
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className={`group relative overflow-hidden border-0 card-surface hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 h-full`}>
                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                  style={{ padding: '2px' }}
                >
                  <div className={`h-full w-full card-surface rounded-lg`} />
                </motion.div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-2xl bg-gradient-brand shadow-xl`}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <partner.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </motion.div>

                    {partner.website !== "#" && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-white/50 dark:hover:bg-slate-800/50 touch-target"
                          asChild
                        >
                          <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </div>

                  <CardTitle className="text-xl sm:text-2xl mb-3 group-hover:text-transparent group-hover:bg-gradient-brand group-hover:bg-clip-text transition-all duration-200">
                    {partner.name}
                  </CardTitle>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      className={`mb-4 bg-gradient-brand text-white border-0 shadow-lg text-xs sm:text-sm px-2 sm:px-3 py-1`}
                    >
                      {partner.type}
                    </Badge>
                  </motion.div>

                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {partner.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <motion.div
                    className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {partner.website !== "#" ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-200 touch-target"
                        asChild
                      >
                        <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-200 touch-target"
                        asChild
                      >
                        <Link href="#work-with-us">
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </motion.div>
                </CardContent>

                {/* Floating particles effect - simplified for performance */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-brand rounded-full`}
                      style={{
                        left: `${25 + i * 30}%`,
                        top: `${30 + i * 25}%`,
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

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Interested in partnering with us?
          </p>
          <Button
            size="lg"
            className="btn-brand touch-target-lg"
            asChild
          >
            <Link href="#work-with-us">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
