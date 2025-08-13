"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Star, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import Link from "next/link"

const team = [
  {
    name: "Yelekal Solomon",
    role: "Founder & Tech Lead",
    bio: "Leading the overall strategic direction and technical initiatives with over 10 years of experience in Sales, Marketing, Technology, and Finance",
    expertise: ["Sales", "Marketing", "Technology", "Finance"],
    image: "/api/placeholder/150/150",
    linkedin: "#",
    email: "yelekal@consultiwork.com"
  },
  {
    name: "Iyobel Ezra",
    role: "Co-founder & Operations Lead",
    bio: "Leading operational excellence and process optimization with extensive international expertise in business process improvements",
    expertise: ["Business Process Improvements", "Operations Management", "International Business", "Process Optimization"],
    image: "/api/placeholder/150/150",
    linkedin: "#",
    email: "iyobel@consultiwork.com"
  },
  {
    name: "Oumer Ahmed",
    role: "Co-founder & COO",
    bio: "Managing day-to-day operations and financial strategies with over 11 years of experience in business trade and financial operations",
    expertise: ["Business Trade", "Financial Operations", "Operations Management", "Strategic Planning"],
    image: "/api/placeholder/150/150",
    linkedin: "#",
    email: "oumer@consultiwork.com"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-surface-soft" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIiBwb2ludHM9IjQwLDEwIDcwLDMwIDcwLDUwIDQwLDcwIDEwLDUwIDEwLDMwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2hleCkiLz48L3N2Zz4=')] opacity-40" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-brand opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl bg-slate-400/20 dark:bg-slate-600/20"
        animate={{
          x: [0, -50, 0],
          y: [0, 35, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-responsive relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Leadership Team</span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl xl:text-responsive-6xl font-bold mb-4 sm:mb-6 text-gradient-brand">
            Our Leadership Team
          </h2>

          <p className="text-responsive-lg sm:text-responsive-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the
            <span className="text-gradient-brand font-semibold"> visionary experts</span> driving
            <span className="text-accent font-semibold"> innovation and excellence</span> at iWork Technologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card className={`group relative overflow-hidden border-0 card-surface hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-3 h-full`}>
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: '2px' }}
                >
                  <div className="h-full w-full card-surface rounded-lg" />
                </motion.div>

                <CardHeader className="text-center relative z-10 pb-4 sm:pb-6">
                  <motion.div
                    className="relative mb-4 sm:mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-brand rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <Avatar className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto border-4 border-white/50 dark:border-slate-800/50 shadow-2xl relative z-10">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-brand text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    {/* Status indicator */}
                    <motion.div
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-accent rounded-full border-2 border-white dark:border-slate-800 shadow-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-full h-full rounded-full bg-accent animate-pulse" />
                    </motion.div>
                  </motion.div>

                  <CardTitle className="text-lg sm:text-xl lg:text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-brand group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </CardTitle>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      className="mb-3 sm:mb-4 bg-gradient-brand text-white border-0 shadow-lg text-xs sm:text-sm px-2 sm:px-3 py-1"
                    >
                      {member.role}
                    </Badge>
                  </motion.div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      <p className="text-xs sm:text-sm font-medium">Core Expertise:</p>
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact buttons */}
                  <motion.div
                    className="flex gap-2 pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-700/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-300 touch-target"
                      asChild
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="w-3 h-3 mr-2" />
                        Email
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 group-hover:bg-white/50 dark:group-hover:bg-slate-800/50 transition-all duration-300 touch-target"
                      asChild
                    >
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-3 h-3 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-brand rounded-full`}
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
            Ready to work with our expert team?
          </p>
          <Button
            size="lg"
            className="btn-brand touch-target-lg"
            asChild
          >
            <Link href="#work-with-us">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
