"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/colored-logo.png" alt="Trinity Heritage Clinic Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Pricing
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-accent transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Book Free Consult</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              About
            </Link>
            <Link href="/services" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              Services
            </Link>
            <Link href="/pricing" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              Pricing
            </Link>
            <Link href="/resources" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              Resources
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-primary/20 rounded-lg">
              Contact
            </Link>
            <Link href="/contact" className="block w-full">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book Free Consult</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
