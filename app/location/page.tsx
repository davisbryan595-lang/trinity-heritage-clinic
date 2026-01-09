"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, Menu, X } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { WaveShapeDivider } from "@/components/shape-dividers"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function LocationPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Fixed Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 py-2">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
            >
              <div className="relative w-40 h-16">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Healthcare Clinic"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 lg:gap-6">
              <Link href="/" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#about" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/#team" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/gallery" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/location" className="text-xs lg:text-sm font-semibold text-primary font-bold transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
              <ServicesDropdown />
              <Link href="/wellness" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Wellness
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Forms
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a href="tel:915-300-2276">
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white text-xs lg:text-sm px-3 lg:px-4 py-2 shadow-lg hover:shadow-xl transition-all animate-rotating-glow border-2 border-accent"
                >
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span className="hidden lg:inline">Call</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-border py-4 space-y-2 animate-fadeInUp">
              <Link href="/" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Home
              </Link>
              <Link href="/#about" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                About Us
              </Link>
              <Link href="/#team" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Our Team
              </Link>
              <Link href="/gallery" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Gallery
              </Link>
              <Link href="/location" className="block px-4 py-2 text-primary font-bold hover:bg-primary/10 rounded">
                Contact
              </Link>
              <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Services
              </Link>
              <Link href="/wellness" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Wellness
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Forms
              </Link>
              <a href="tel:915-300-2276" className="block">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold animate-rotating-glow border-2 border-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 915.300.2276
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-4 sm:pb-6 md:pb-8 bg-gradient-to-b from-primary/10 to-white">
        <div className="text-center">
          <h2 className="text-sm sm:text-base md:text-lg text-black font-bold whitespace-nowrap overflow-hidden">
            Conveniently Located in East El Paso, Texas – Just a few blocks from The Hospitals of Providence East Campus
          </h2>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-secondary overflow-hidden">
        <GeometricBackground variant="triangles" className="opacity-40" opacity={1} />
        <GeometricAccent className="absolute top-32 left-20 opacity-12" style={{ animationDelay: "0.8s" }} />
        <GeometricAccent className="absolute bottom-20 right-32 opacity-10 scale-110" style={{ animationDelay: "1.2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top - Clinic Image - Full Width and Centered */}
          <div className="mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F52da5d68f89948b9bbd69807a376ed7b%2F60cc38c4ac85450b82cb9d77954d2c0e?format=webp&width=1000"
                alt="Trinity Heritage Healthcare Clinic - Internal Medicine Clinic Location"
                width={900}
                height={350}
                className="w-full h-auto hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Bottom - Map and Contact Details Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-20 items-start">
            {/* Left Column - Map */}
            <div>
              {/* Map with Red Marker */}
              <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.5046662988556!2d-106.41!3d31.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75ca17cffffff%3A0x123456789!2s2204%20Joe%20Battle%20Blvd%2C%20Suite%20D204%2C%20El%20Paso%2C%20TX%2079938!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Contact Details in Single Container */}
            <Card className="border-2 border-primary/20 shadow-xl animate-rotating-glow h-[400px] sm:h-[450px] lg:h-[500px]">
              <CardContent className="p-4 space-y-1">
                {/* Phone */}
                <div className="flex items-start gap-3 pb-1">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:915-300-2276"
                      className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
                    >
                      915.300.2276
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start gap-3 pb-1">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">Fax</p>
                    <p className="text-muted-foreground font-semibold text-lg">866-222-5219</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 pb-1">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:Trinityheritageclinic@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      Trinityheritageclinic@gmail.com
                    </a>
                  </div>
                </div>

                {/* Hours of Operation */}
                <div className="flex items-start gap-3 pb-1">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground mb-1">Hours of Operation</p>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium">Monday - Friday</p>
                      <p>8:30 AM - 5:30 PM <span className="text-sm italic">(Closed for lunch 12:00 PM - 1:00 PM)</span></p>
                    </div>
                  </div>
                </div>

                {/* Weekend Hours */}
                <div className="flex items-start gap-3 pb-1">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-accent">Weekends: Closed</p>
                  </div>
                </div>

                {/* After Hours & Weekend */}
                <div className="flex items-start gap-3 pt-4 bg-accent/10 p-2 rounded-lg border border-accent/20">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-accent mb-0.5">After Hours & Weekend</p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-foreground">For urgent medical matters, call:</p>
                      <a
                        href="tel:817-966-3989"
                        className="text-sm font-semibold text-accent hover:underline"
                      >
                        817.966.3989
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Community Health Message */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white flex items-center justify-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center" style={{ color: 'var(--tertiary)' }}>
          Serving to keep the community healthy
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t-4 border-primary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="relative w-40 h-16 mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Healthcare Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-foreground">
                2204 Joe Battle Blvd, STE D204
                <br />
                El Paso, TX 79938
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1 text-foreground">Quick Links</p>
                <div className="space-y-1">
                  <Link href="/" className="text-foreground hover:text-primary transition-colors block">Home</Link>
                  <Link href="/services" className="text-foreground hover:text-primary transition-colors block">Services</Link>
                  <Link href="/wellness" className="text-foreground hover:text-primary transition-colors block">Wellness</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-foreground text-sm font-medium">
              © 2024 Trinity Heritage Healthcare Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
