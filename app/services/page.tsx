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
  ChevronDown,
} from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { WaveShapeDivider, StairsShapeDivider, DiagonalShapeDivider } from "@/components/shape-dividers"
import AnimatedServiceCard from "@/components/AnimatedServiceCard"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

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
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
              <Link href="/wellness" className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-colors relative group">
                Wellness
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
              <Link href="/services" className="block px-4 py-2 text-primary font-bold hover:bg-primary/10 rounded">
                Services
              </Link>
              <Link href="/wellness" className="block px-4 py-2 text-foreground hover:bg-primary/10 rounded font-semibold transition-colors">
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
            Our Services
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
            Comprehensive healthcare services for your entire family and workplace wellness needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <GeometricBackground variant="grid" className="opacity-30" opacity={1} />
        <GeometricAccent className="absolute top-20 right-10 opacity-15" style={{ animationDelay: "0.5s" }} />
        <GeometricAccent className="absolute bottom-40 left-32 opacity-10 scale-90" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Introductory Section */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold mb-6" style={{ color: '#8cc73f' }}>
              Explore Our Comprehensive Services
            </h2>
            <p className="text-lg text-foreground mb-12 max-w-4xl">
              At Trinity Heritage Clinic, we offer two main areas of expertise to meet both your personal health needs and workplace wellness requirements. Select a category below to view detailed services.
            </p>

            {/* Category Teaser Sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Internal Medicine Teaser */}
              <div className="border border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4" style={{ color: '#a855f7' }}>
                  Internal Medicine &amp; Family Practice
                </h3>
                <p className="text-lg text-foreground">
                  Personalized, compassionate primary care for individuals and families (ages 10+), including preventive care, chronic condition management, pediatrics, gynecology, dermatology, and minor procedures. Ideal for routine health maintenance and acute needs.
                </p>
              </div>

              {/* Occupational Medicine Teaser */}
              <div className="border border-accent/20 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-4" style={{ color: '#8cc73f' }}>
                  Occupational Medicine
                </h3>
                <p className="text-lg text-foreground">
                  Specialized workforce health services for businesses and employees, including compliance exams, injury treatment, diagnostic testing, substance screening, and preventive wellness programs. Focused on keeping your team healthy, safe, and productive.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="mb-16">
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="w-full border-2 border-primary/30 rounded-lg p-6 flex items-center justify-between hover:bg-primary/5 transition-colors duration-300 group"
            >
              <h3 className="text-2xl font-bold font-serif text-foreground">
                View All Services Details
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  isDetailsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            {isDetailsOpen && (
              <div className="mt-8 space-y-16 animate-fadeInUp">
                {/* Internal Medicine & Family Practice Section */}
                <div className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6" style={{ color: '#a855f7' }}>
                    Internal Medicine & Family Practice
                  </h2>
                  <p className="text-lg text-foreground mb-8 max-w-4xl">
                    At Trinity Heritage, we dedicate our time to providing personalized, compassionate quality care to meet your unique health needs. Access your records from your previous doctor and fax it to us, and schedule an appointment by phone, email or online appointment request. Come in and learn more about our comprehensive services. Your health is our priority.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 relative z-20 lg:grid-cols-3">
                    {[
                      {
                        icon: HeartPulse,
                        title: "Internal Medicine",
                        items: [
                          "Preventive care",
                          "Routine visits/follow up visits",
                          "Healthy living and exercise counseling",
                          "Diabetes",
                          "Hypertension",
                          "Hyperlipidemia",
                          "Thyroid disease",
                          "Asthma/COPD management",
                          "Smoking cessation",
                          "Other chronic and acute conditions"
                        ],
                        color: "primary"
                      },
                      {
                        icon: Activity,
                        title: "Pediatrics (10 years and older)",
                        items: [
                          "Annual physicals",
                          "Routine services",
                          "Immunization recommendations and referral",
                          "Back to school/sports physicals",
                          "Sick visits"
                        ],
                        color: "accent"
                      },
                      {
                        icon: HeartPulse,
                        title: "Gynecology",
                        items: [
                          "Routine cervical examination and pap smear",
                          "STD screening and treatment",
                          "Vaginal infections & Urinary Tract Infections",
                          "Family planning – Oral and injectable implantations are referred out"
                        ],
                        color: "primary"
                      },
                      {
                        icon: Activity,
                        title: "Dermatology",
                        items: [
                          "Removal of minor skin tags, moles, and warts",
                          "Acne",
                          "Psoriasis",
                          "Athletic Foot",
                          "Eczema",
                          "Dermatitis",
                          "Scabies"
                        ],
                        color: "accent"
                      },
                      {
                        icon: HeartPulse,
                        title: "Minor Surgery",
                        items: [
                          "Laceration Repair",
                          "Minor Incision and Drainage",
                          "Simple Biopsy"
                        ],
                        color: "primary"
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
                </div>

                {/* Occupational Medicine Section */}
                <div className="mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-8" style={{ color: '#8cc73f' }}>
                    Occupational Medicine
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 relative z-20 lg:grid-cols-4">
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
                </div>
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center shadow-2xl animate-rotating-glow border-2 border-white/20">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Working to Keep Your Workforce Well
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              To learn more about how we can help your business, call us today
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
                <p className="font-semibold mb-1">Contact Us</p>
                <p className="text-white/80">2204 Joe Battle Blvd, STE D204</p>
                <p className="text-white/80">El Paso, TX 79938</p>
                <a href="tel:915-300-2276" className="text-accent hover:text-white transition-colors">915.300.2276</a>
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
