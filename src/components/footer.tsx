"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Management & Business Consulting", href: "#services" },
      { name: "Website Design & Development", href: "#services" },
      { name: "Enterprise Software & AI Solutions", href: "#services" },
      { name: "Our Approach", href: "#our-approach" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "What We Do", href: "#what-we-do" },
      { name: "Our Team", href: "#our-team" },
      { name: "Our Partners", href: "#our-partners" },
      { name: "Work With Us", href: "#work-with-us" }
    ]
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-responsive py-8 sm:py-12 lg:py-16">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Company Info - Centered on mobile */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">
                  ConsultiWork
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4 max-w-md mx-auto lg:mx-0">
                  iWork Technologies PLC - Providing innovative consulting and smart tech solutions with next-level business advising capabilities.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">
                  &ldquo;We make smart moves and get results quickly.&rdquo;
                </p>
              </div>

              {/* Contact info - Centered on mobile */}
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-300 justify-center lg:justify-start">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                  <Link href="mailto:hello@consultiwork.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium touch-target">
                    hello@consultiwork.com
                  </Link>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-300 justify-center lg:justify-start">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <Link href="tel:+251913661078" className="hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium touch-target">
                    +251 913 661078
                  </Link>
                </div>

                <div className="flex items-start gap-2 sm:gap-3 text-slate-600 dark:text-slate-300 justify-center lg:justify-start">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 mt-0.5" />
                  <div className="text-center lg:text-left">
                    <div className="font-medium text-xs sm:text-sm">Hager Consult Building, 2nd Floor</div>
                    <div className="text-xs sm:text-sm">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer sections - Centered on mobile */}
            {footerSections.map((section) => (
              <div key={section.title} className="text-center lg:text-left">
                <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-4 text-slate-900 dark:text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium hover:underline touch-target"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="mb-6 sm:mb-8" />

          {/* Bottom footer - Always centered and balanced */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="text-slate-600 dark:text-slate-300 text-center sm:text-left font-medium">
              &copy; {currentYear} iWork Technologies PLC. All rights reserved.
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium hover:underline touch-target">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium hover:underline touch-target">
                Terms of Service
              </Link>

              <button
                onClick={scrollToTop}
                className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-target"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
