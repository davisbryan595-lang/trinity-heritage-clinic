"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, Menu, X } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { WaveShapeDivider } from "@/components/shape-dividers"

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
                  alt="Heritage Healthcare Clinic"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </Link>
              <Link href="/#team" className="text-foreground hover:text-primary transition-colors font-medium">
                Our Team
              </Link>
              <Link href="/location" className="text-primary transition-colors font-bold">
                Location
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/wellness" className="text-foreground hover:text-primary transition-colors font-medium">
                Wellness
              </Link>
              <Link href="/#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>
              <a href="tel:817-453-7522">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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
            <div className="md:hidden bg-white border-t border-border py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Home
              </Link>
              <Link href="/#about" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                About Us
              </Link>
              <Link href="/#team" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Our Team
              </Link>
              <Link href="/location" className="block px-4 py-2 text-primary font-bold hover:bg-primary/10 rounded">
                Location
              </Link>
              <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Services
              </Link>
              <Link href="/wellness" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Wellness
              </Link>
              <Link href="/#contact" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Contact Us
              </Link>
              <a href="tel:817-453-7522" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#8cc73f' }}>
            Our Location
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
            Conveniently located in El Paso, Texas, serving the Dallas Fort Worth area with comprehensive occupational health services
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-secondary overflow-hidden">
        <GeometricBackground variant="triangles" className="opacity-40" opacity={1} />
        <GeometricAccent className="absolute top-32 left-20 opacity-12" style={{ animationDelay: "0.8s" }} />
        <GeometricAccent className="absolute bottom-20 right-32 opacity-10 scale-110" style={{ animationDelay: "1.2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-20">
            {/* Map */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.5!2d-106.41!3d31.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z2204+Joe+Battle+Blvd+Ste+D204+El+Paso+TX+79938!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 shadow-xl animate-rotating-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 font-serif" style={{ color: '#8cc73f' }}>Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Address</p>
                        <a
                          href="https://maps.google.com/?q=2204+Joe+Battle+Blvd+Ste+D204+El+Paso+TX+79938"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          2204 Joe Battle Blvd Ste D204
                          <br />
                          El Paso, TX 79938
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone</p>
                        <a
                          href="tel:817-453-7522"
                          className="text-muted-foreground hover:text-primary transition-colors text-lg font-semibold"
                        >
                          (817) 453-7522
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Fax</p>
                        <p className="text-muted-foreground">1-866-665-6659</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground mb-2">Office Hours</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 8:30 AM - 5:30 PM</p>
                          <p className="text-sm italic">(Closed for lunch 12:00 PM - 1:00 PM)</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* After Hours Banner */}
              <div className="bg-accent text-white rounded-2xl p-6 shadow-xl animate-rotating-glow border-2 border-accent">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">After Hours & Weekend</h4>
                    <p className="mb-3">For urgent medical matters, call:</p>
                    <a
                      href="tel:817-966-3989"
                      className="text-2xl font-bold hover:underline"
                    >
                      (817) 966-3989
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="relative w-40 h-16 mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Heritage Healthcare Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white/80">
                Providing comprehensive occupational health services to the DFW area.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Quick Links</p>
                <div className="space-y-1">
                  <Link href="/" className="text-white/80 hover:text-white transition-colors block">Home</Link>
                  <Link href="/services" className="text-white/80 hover:text-white transition-colors block">Services</Link>
                  <Link href="/wellness" className="text-white/80 hover:text-white transition-colors block">Wellness</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-white/60 text-sm">
              © 2024 Heritage Healthcare Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
