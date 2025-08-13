"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Our Approach", href: "#our-approach" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Partners", href: "#partners" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
      <div className="container-responsive">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="touch-target">
              {/* Mobile - Only show on small screens, hide on medium and up */}
              <Image
                src="/icon_iwork.png"
                alt="iWork"
                width={32}
                height={32}
                className="h-8 w-8 md:hidden object-contain transition-transform hover:scale-105"
                priority
              />
              {/* Desktop - Light Mode Logo */}
              <Image
                src="/logo_iwork_light.png"
                alt="iWork"
                width={150}
                height={40}
                className="hidden md:block dark:md:hidden h-8 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
              {/* Desktop - Dark Mode Logo */}
              <Image
                src="/logo_iwork_dark.png"
                alt="iWork"
                width={150}
                height={40}
                className="hidden md:hidden dark:md:block h-8 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm xl:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 relative group touch-target"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl touch-target-lg"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="touch-target-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] p-0 border-l border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center w-full">
                      {/* Light Mode Logo */}
                      <Image
                        src="/logo_iwork_light.png"
                        alt="iWork Consulting Logo"
                        width={100}
                        height={40}
                        priority
                        className="h-7 w-auto dark:hidden"
                      />
                      {/* Dark Mode Logo */}
                      <Image
                        src="/logo_iwork_dark.png"
                        alt="iWork Consulting Logo"
                        width={100}
                        height={40}
                        priority
                        className="h-7 w-auto hidden dark:block"
                      />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 touch-target"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 touch-target-lg"
                    >
                      <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
