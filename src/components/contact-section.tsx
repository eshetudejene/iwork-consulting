"use client"

import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us directly for immediate assistance",
    value: "+251 913 661078",
    action: "tel:+251913661078",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    value: "hello@consultiwork.com",
    action: "mailto:hello@consultiwork.com",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our location in person",
    value: "Hager Consult Building, 2nd Floor, Addis Ababa, Ethiopia",
    action: "#",
  }
]

const features = [
  "Free initial consultation",
  "24/7 project support",
  "Flexible engagement models",
  "Proven track record"
]

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-surface-soft" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InNxdWFyZXMiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NxdWFyZXMpIi8+PC9zdmc+')] opacity-50" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-brand opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl bg-slate-400/20 dark:bg-slate-600/20"
        animate={{
          x: [0, 45, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-responsive relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-soft mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Get In Touch</span>
            </motion.div>

            <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl xl:text-responsive-6xl font-bold mb-4 sm:mb-6 text-gradient-brand">
              Let&apos;s Work Together
            </h2>

            <p className="text-responsive-lg sm:text-responsive-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Contact our
              <span className="text-accent font-semibold"> expert team</span> today to discuss your
              <span className="text-gradient-brand font-semibold"> next project</span>
            </p>
          </motion.div>

          {/* Contact Cards - Responsive Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={staggerItem} className="flex justify-center">
                <Card className={`group relative overflow-hidden border-0 card-surface hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 w-full max-w-sm h-full`}>
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ padding: '2px' }}
                  >
                    <div className={`h-full w-full card-surface rounded-lg`} />
                  </motion.div>

                  <CardHeader className="relative z-10 text-center">
                    <motion.div
                      className={`p-3 sm:p-4 rounded-2xl bg-gradient-brand shadow-xl mx-auto mb-3 sm:mb-4 w-fit`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </motion.div>

                    <CardTitle className="text-lg sm:text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-brand transition-all duration-300">
                      {info.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                      {info.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0 text-center">
                    <p className="text-sm sm:text-base font-medium mb-3 sm:mb-4 text-slate-700 dark:text-slate-300">{info.value}</p>
                    {info.action !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-300 mx-auto touch-target"
                        asChild
                      >
                        <Link href={info.action}>
                          Contact Now
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`} />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section - Centered */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-0 card-surface shadow-2xl max-w-2xl w-full">
              <div className="absolute inset-0 bg-gradient-brand opacity-10" />

              <CardHeader className="relative z-10 text-center pb-4">
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-soft mb-4 mx-auto"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-3 h-3 text-accent" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Quick Response</span>
                </motion.div>

                <CardTitle className="text-xl sm:text-2xl mb-3 text-gradient-brand">
                  Ready to Start Your Project?
                </CardTitle>

                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  Let&apos;s discuss how we can help transform your business with our expertise
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="btn-brand flex-1 sm:flex-none touch-target-lg"
                    asChild
                  >
                    <Link href="mailto:hello@consultiwork.com">
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 flex-1 sm:flex-none touch-target-lg"
                    asChild
                  >
                    <Link href="tel:+251913661078">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA section */}
        <motion.div
          className="text-center bg-gradient-brand rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY2xlcyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY2lyY2xlcykiLz48L3N2Zz4=')] opacity-20" />

          <div className="relative z-10">
            <h3 className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-bold mb-4 text-gradient-brand">
              Transform Your Business Today
            </h3>
            <p className="text-responsive-lg sm:text-responsive-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have revolutionized their operations with our expert consulting services
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 touch-target-lg"
                asChild
              >
                <Link href="#work-with-us">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
