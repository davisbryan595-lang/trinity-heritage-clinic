'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Team', href: '#team' },
    { label: 'Location', href: '#location' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed w-full top-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 diamond-glow" style={{ padding: '4px' }}>
              <svg
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path d="M20 40L40 20L60 40L40 60Z" fill="#006d5b" opacity="0.9" />
                <path d="M40 40L50 30L60 40L50 50Z" fill="#00a680" opacity="0.7" />
                <path d="M20 40L30 30L40 40L30 50Z" fill="#00a680" opacity="0.7" />
                <path d="M40 40L45 35L50 40L45 45Z" fill="#6b4c9a" opacity="0.95" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: '#006d5b' }}>
                TRINITY HERITAGE
              </div>
              <div className="text-xs font-semibold" style={{ color: '#6b4c9a' }}>
                CLINIC
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#006d5b' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn-secondary" style={{ backgroundColor: '#6b4c9a' }}>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#006d5b' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium rounded transition-colors"
                style={{ color: '#006d5b' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="#contact" className="btn-secondary w-full text-center block" style={{ backgroundColor: '#6b4c9a' }}>
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
