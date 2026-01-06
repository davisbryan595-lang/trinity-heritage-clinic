"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Activity,
  Briefcase,
  Users,
  HeartPulse,
  Award,
  CheckCircle2,
  Phone,
  Menu,
  X,
} from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function WellnessPage() {
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
              <div className="relative w-80 h-32">
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
              <Link href="/location" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Location
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <ServicesDropdown />
              <Link href="/wellness" className="text-xs lg:text-sm font-semibold text-primary font-bold transition-colors relative group">
                Wellness
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              </Link>
              <Link href="/patient-forms" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
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
              <Link href="/location" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Location
              </Link>
              <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Services
              </Link>
              <Link href="/wellness" className="block px-4 py-2 text-primary font-bold hover:bg-primary/10 rounded">
                Wellness
              </Link>
              <Link href="/patient-forms" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
                Patient Forms
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
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#8cc73f' }}>
            Wellness & Prevention
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
            Proactive health and prevention programs designed to keep your workforce healthy and productive
          </p>
        </div>
      </div>

      {/* Wellness Section */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <GeometricBackground variant="grid" className="opacity-15" opacity={1} />
        <GeometricAccent className="absolute top-32 left-20 opacity-10" style={{ animationDelay: "1s" }} />
        <GeometricAccent className="absolute bottom-20 right-32 opacity-10 scale-110" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20 mb-16">
            {/* Wellness Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20">
              <Image
                src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg"
                alt="Modern healthcare clinic facility with advanced wellness technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30"></div>
            </div>

            {/* Wellness Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 font-serif" style={{ color: 'var(--tertiary)' }}>
                  Health & Safety Consultation
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-4 font-medium">
                  At Heritage Healthcare Clinic, we believe that prevention is the best approach. Our comprehensive health and safety consultation programs are designed to identify occupational health risks and keep your employees healthy and productive.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Activity,
                    title: "Health Fairs & Screenings",
                    description: "On-site health screenings for employee wellness"
                  },
                  {
                    icon: Briefcase,
                    title: "Health Topics Presentations",
                    description: "Educational seminars (Lunch and Learn sessions)"
                  },
                  {
                    icon: Users,
                    title: "Seasonal Vaccinations",
                    description: "Flu shots and preventive immunizations"
                  },
                  {
                    icon: HeartPulse,
                    title: "Occupational Safety Consultation",
                    description: "Expert guidance on workplace health and safety"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/20 shadow-sm animate-rotating-glow">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wellness Stats */}
          <div className="grid md:grid-cols-3 gap-8 relative z-20 mb-12">
            {[
              {
                number: "20+",
                label: "Years of Excellence in Occupational Medicine",
                icon: Award
              },
              {
                number: "Many",
                label: "Businesses Served in DFW",
                icon: Users
              },
              {
                number: "100%",
                label: "Certified Healthcare Professionals",
                icon: CheckCircle2
              }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center border-2 border-primary/20 animate-rotating-glow bg-white shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--tertiary) 12%' }}>
                    <stat.icon className="w-8 h-8" style={{ color: 'var(--tertiary)' }} />
                  </div>
                  <p className="text-4xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>{stat.number}</p>
                  <p className="text-foreground font-semibold">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center shadow-2xl animate-rotating-glow border-2 border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Ready to Implement Wellness Programs?
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to learn how we can help develop a comprehensive wellness strategy for your organization.
            </p>
            <a href="tel:915-300-2276">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-xl hover:scale-105 transition-all duration-300 animate-rotating-glow border-2 border-white font-semibold"
              >
                <Phone className="w-6 h-6 mr-3" />
                915.300.2276
              </Button>
            </a>
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
                2204 Joe Battle Blvd, STE D204
                <br />
                El Paso, TX 79938
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Quick Links</p>
                <div className="space-y-1">
                  <Link href="/" className="text-white/80 hover:text-white transition-colors block">Home</Link>
                  <Link href="/services" className="text-white/80 hover:text-white transition-colors block">Services</Link>
                  <Link href="/location" className="text-white/80 hover:text-white transition-colors block">Location</Link>
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
