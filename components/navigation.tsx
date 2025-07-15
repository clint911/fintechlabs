"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white" onClick={closeMenu}>
            FinTech<span className="text-purple-400">Labs</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </a>
            <a href="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </a>
            <a href="/portfolio" className="text-white/80 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 backdrop-blur-xl bg-white/10 border-t border-white/20 rounded-b-2xl">
              <a
                href="/services"
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="/about"
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="/portfolio"
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="pt-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={closeMenu}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
