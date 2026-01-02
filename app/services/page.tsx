"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  HeartPulse,
  Activity,
  Shield,
  CheckCircle2,
  Phone,
  Menu,
  X,
} from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { WaveShapeDivider, StairsShapeDivider, DiagonalShapeDivider } from "@/components/shape-dividers"
import AnimatedServiceCard from "@/components/AnimatedServiceCard"

export default function ServicesPage() {
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
              <Link href="/location" className="text-foreground hover:text-primary transition-colors font-medium">
                Location
              </Link>
              <Link href="/services" className="text-primary transition-colors font-bold">
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
              <Link href="/location" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded">
                Location
              </Link>
              <Link href="/services" className="block px-4 py-2 text-primary font-bold hover:bg-primary/10 rounded">
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
            Our Services
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
            Comprehensive occupational health services designed to keep your workforce healthy, safe, and productive
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <GeometricBackground variant="grid" className="opacity-30" opacity={1} />
        <GeometricAccent className="absolute top-20 right-10 opacity-15" style={{ animationDelay: "0.5s" }} />
        <GeometricAccent className="absolute bottom-40 left-32 opacity-10 scale-90" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-20 lg:grid-cols-4">
            {[
              {
                icon: Briefcase,
                title: "Physical Exams",
                items: [
                  "Pre-Employment/Placement Exams",
                  "Annual Physical/Surveillance",
                  "Return to Work Exams",
                  "Fitness for Duty Exams",
                  "Post Exposure Exams",
                  "DOT & Respirator Exams"
                ],
                color: "primary"
              },
              {
                icon: HeartPulse,
                title: "Injury/Illness Treatment",
                items: [
                  "Work-Related Injuries",
                  "Non-Work Related Illness",
                  "Occupational Disease Care",
                  "Injury Management & Recovery",
                  "Fitness for Duty Determination",
                  "Treatment Coordination"
                ],
                color: "accent"
              },
              {
                icon: Activity,
                title: "Diagnostic Testing",
                items: [
                  "Spirometry Testing",
                  "Audiometry",
                  "Vision Screening",
                  "EKG Testing",
                  "Blood Work & Labs",
                  "Respirator Fit Testing"
                ],
                color: "primary"
              },
              {
                icon: Shield,
                title: "Substance & Health",
                items: [
                  "Alcohol Testing",
                  "Urine Drug Screening",
                  "MRO Services",
                  "Immunization",
                  "Health & Safety Consultation",
                  "Wellness & Health Promotions"
                ],
                color: "accent"
              }
            ].map((service, idx) => (
              <AnimatedServiceCard
                key={idx}
                icon={service.icon}
                title={service.title}
                items={service.items}
                color={service.color}
                itemIcon={CheckCircle2}
              />
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center shadow-2xl animate-rotating-glow border-2 border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Working to Keep Your Workforce Well
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              To learn more about how we can help your business, call us today
            </p>
            <a href="tel:817-453-7522">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-xl hover:scale-105 transition-all duration-300 animate-rotating-glow border-2 border-white font-semibold"
              >
                <Phone className="w-6 h-6 mr-3" />
                (817) 453-7522
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
                Providing comprehensive occupational health services to the DFW area.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Contact Us</p>
                <p className="text-white/80">2204 Joe Battle Blvd Ste D204</p>
                <p className="text-white/80">El Paso, TX 79938</p>
                <a href="tel:817-453-7522" className="text-accent hover:text-white transition-colors">(817) 453-7522</a>
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
