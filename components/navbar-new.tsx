"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-lg border-b border-border"
          : "glass"
      }`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center h-24 px-4 sm:px-6 lg:px-8">
          {/* Logo - no padding on left */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-48 h-20 animate-logo-glow rounded-lg" style={{ boxShadow: '0 0 20px rgba(107, 168, 66, 0.3)' }}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                alt="Trinity Heritage Clinic"
                fill
                className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 filter brightness-110"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.parentElement?.nextElementSibling
                  if (fallback) (fallback as HTMLElement).classList.remove('hidden')
                }}
              />
              <div className="hidden flex-col">
                <span className="text-xl font-serif font-bold text-primary-foreground">Trinity Heritage</span>
                <span className="text-sm text-accent font-semibold">Clinic</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <a href="tel:915-300-2276">
              <Button
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-glow">
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Consult
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="text-accent" />
            ) : (
              <Menu size={28} className="text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-2 animate-fadeInUp border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-lg font-semibold text-foreground hover:bg-primary/20 hover:text-accent transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-border mt-4">
              <a href="tel:915-300-2276" className="block">
                <Button
                  variant="outline"
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 915.300.2276
                </Button>
              </a>
              <Link href="/contact" className="block" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Consult
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
