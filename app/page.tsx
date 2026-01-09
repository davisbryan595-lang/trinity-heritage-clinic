"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DiamondPreloader from "@/components/diamond-preloader"
import { DiamondsShapeDivider, DiagonalShapeDivider, WaveShapeDivider, StairsShapeDivider } from "@/components/shape-dividers"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import AnimatedServiceCard from "@/components/AnimatedServiceCard"
import { ServicesDropdown } from "@/components/ServicesDropdown"
import WelcomeModal from "@/components/WelcomeModal"
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Stethoscope,
  Users,
  Shield,
  Award,
  Briefcase,
  HeartPulse,
  Activity,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from "lucide-react"

export default function BrochurePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Calculate scroll progress
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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <DiamondPreloader />
      <WelcomeModal />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Fixed Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >

        {/* Main Navbar */}
        <div className={`transition-all duration-300 relative z-10 ${
          isScrolled
            ? "bg-white"
            : "bg-transparent"
        }`}>
          <div className="w-full">
            <div className="flex justify-between items-start lg:items-center h-auto lg:h-32 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 gap-4 lg:gap-8 px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6">
              {/* Logo - Enlarged and positioned top left with zero left padding */}
              <button
                onClick={() => scrollToSection("home")}
                className="flex flex-col items-center group cursor-pointer flex-shrink-0 w-auto pt-2 lg:pt-0 -ml-1 xs:-ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6"
              >
                <div className="relative w-32 h-24 xs:w-40 xs:h-28 sm:w-56 sm:h-40 md:w-72 md:h-52 lg:w-96 lg:h-64 xl:w-[28rem] xl:h-72">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                    alt="Trinity Heritage Healthcare Clinic"
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.parentElement?.nextElementSibling
                      if (fallback) (fallback as HTMLElement).classList.remove('hidden')
                    }}
                  />
                  <div className="hidden flex-col">
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl font-serif font-bold text-primary">Trinity Heritage Healthcare</span>
                    <span className="text-xs xs:text-sm text-accent font-semibold">Clinic</span>
                  </div>
                  <div className="absolute top-[58%] -translate-y-1/2 left-1/2 -translate-x-[40%] z-10 px-1 xs:px-2 sm:px-3 py-0.5 xs:py-1 sm:py-1.5">
                    <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-serif font-bold text-center whitespace-nowrap" style={{ color: '#6b3fa0' }}>
                      ...Cherish Your Health
                    </p>
                  </div>
                </div>
              </button>

              {/* Desktop Navigation - Left aligned */}
              <div className="hidden lg:flex flex-1 items-center justify-start gap-6 xl:gap-8 h-full pt-4">
                <div className="flex items-center gap-1 xl:gap-2">
                  {[
                    { id: "home", label: "Home", href: "/" },
                    { id: "about", label: "About", href: "/about" },
                    { id: "team", label: "Team", href: "/team" },
                    { id: "gallery", label: "Gallery", href: "/gallery" },
                    { id: "location", label: "Contact", href: "/location" },
                    { id: "wellness", label: "Wellness", href: "/wellness" },
                    { id: "contact", label: "Forms", href: "/contact" }
                  ].map((link) => (
                    <div key={link.id} className="flex items-center">
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="text-xs xl:text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative group px-2 xl:px-3 py-1"
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1 rounded-lg hover:bg-primary/10 transition-colors ml-auto mt-2"
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-primary" />
                ) : (
                  <Menu size={24} className="text-primary" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-4 space-y-1 animate-fadeInUp border-t border-border">
                {[
                  { id: "home", label: "Home", href: "/" },
                  { id: "about", label: "About", href: "/about" },
                  { id: "team", label: "Team", href: "/team" },
                  { id: "gallery", label: "Gallery", href: "/gallery" },
                  { id: "location", label: "Contact", href: "/location" },
                  { id: "wellness", label: "Wellness", href: "/wellness" },
                  { id: "contact", label: "Forms", href: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="block w-full text-left px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="overflow-hidden">
        {/* Hero Section */}
          <section
            id="home"
            className="relative w-full min-h-screen flex items-end justify-center pt-32 xs:pt-40 sm:pt-48 md:pt-56 lg:pt-80 xl:pt-96 pb-16 xs:pb-20 sm:pb-24 md:pb-28 lg:pb-32 overflow-hidden"
            style={{
              backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fe956acbb04e54fb896c83542bdb88b2d%2F8b288272e0db48dd9890547636226cd8?format=webp&width=800)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/10 to-accent/20" style={{ margin: '0 0 auto auto' }}></div>

            <div className="w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 text-center pt-2 xs:pt-2 sm:pt-3 md:pt-4 lg:pt-5 pb-3 xs:pb-3 sm:pb-4 md:pb-6 lg:pb-8 backdrop-blur-lg bg-white border border-white/5 rounded-xl xs:rounded-2xl shadow-2xl -mb-12 xs:-mb-14 sm:-mb-20 md:-mb-24 lg:-mb-32" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', maxWidth: '802px' }}>
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Main Heading with two-color design */}
                <div className="mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  <h1 className="font-serif text-sm xs:text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold leading-tight drop-shadow-lg mb-2 xs:mb-2 sm:mb-3 whitespace-nowrap" style={{ transform: 'scale(0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <span className="text-primary" style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', paddingLeft: '0', paddingRight: '0' }}>
                      <h2 style={{ margin: '0', padding: '0', whiteSpace: 'nowrap', textAlign: 'center' }}>
                        <strong>
                          <span className="ql-cursor">﻿</span>
                        </strong>
                        Internal Medicine, Family Practice Clinic
                      </h2>
                    </span>
                  </h1>
                  <p className="font-serif text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg mb-2 xs:mb-2 sm:mb-3" style={{ color: '#8cc73f' }}>
                    &
                  </p>
                  <h2 className="font-serif text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold drop-shadow-lg px-2 xs:px-3 sm:px-4" style={{ color: '#6b3fa0' }}>
                    Occupational Medicine Clinic
                  </h2>
                </div>

                {/* Tagline */}
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-6 xs:mb-7 sm:mb-10 md:mb-12 leading-relaxed font-medium px-2">
                  Always friendly and knowledgeable
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-3 xs:gap-3 sm:gap-4 md:gap-4 lg:gap-6 px-2 items-center justify-center">
                  <a href="tel:915-300-2276" className="w-full md:w-auto">
                    <Button
                      className="text-white text-sm sm:text-base md:text-lg px-4 xs:px-5 sm:px-8 py-2.5 xs:py-2.5 sm:py-3 md:py-3.5 shadow-lg transition-all duration-300 border-2 w-full rounded-lg"
                      style={{ backgroundColor: '#6b3fa0', borderColor: '#6b3fa0' }}
                    >
                      <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1.5 xs:mr-2" />
                      <span>Call Now</span>
                      <span className="hidden sm:inline ml-2 xs:ml-2 font-semibold">915.300.2276</span>
                    </Button>
                  </a>
                  <p className="text-foreground text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap" style={{ color: '#6b3fa0' }}>
                    to learn how we can help you
                  </p>
                </div>
              </div>
            </div>
          </section>
        {/* About Us Section */}
        <section id="about" className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-20" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 xs:top-16 sm:top-20 right-10 xs:right-16 sm:right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 xs:bottom-40 sm:bottom-40 left-5 xs:left-10 sm:left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 xs:mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 xs:mb-3 sm:mb-4">
                About Trinity Healthcare Clinic
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto font-medium px-2">
                Comprehensive healthcare for your professional and personal wellness
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative z-20 mb-12 xs:mb-14 sm:mb-16 px-2">
              {/* About Content */}
              <div className="space-y-6 xs:space-y-6 sm:space-y-8">
                {/* Welcome Section */}
                <div>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 xs:mb-3 sm:mb-4 font-medium">
                    Trinity Heritage clinic also known as Heritage Healthcare clinic is a family-oriented clinic that was established 12 years ago to provide excellent comprehensive medical care to adults and children.
                  </p>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 xs:mb-3 sm:mb-4 font-medium">
                    We are focused on health promotion and disease prevention. Providing education and support services to help our patients make plans and decisions that promote wellness and healthy living.
                  </p>
                </div>

                {/* Our Belief Section */}
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4 font-serif">
                    Our Belief
                  </h3>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                    We believe in the "art" and "science" of medicine. Our clinical practice styles combine outstanding clinical acumen to serve families in the El Paso metropolis utilizing the latest technology and ancillary services which is supported by evidence-based medicine.
                  </p>
                </div>

                {/* Our Vision Section */}
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4 font-serif">
                    Our Vision
                  </h3>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                    To be the preferred healthcare provider partners for your quality healthcare service.
                  </p>
                </div>

                {/* Our Mission Section */}
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4 font-serif">
                    Our Mission
                  </h3>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                    To provide the highest quality of service by transforming the promise of science, technology & medicine into service that promotes, restores, & prolongs life while preventing diseases.
                  </p>
                </div>

                {/* Our Values Section */}
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4 font-serif">
                    Our Values
                  </h3>
                  <Card className="border-2 border-primary/20 shadow-lg bg-white mb-6">
                    <CardContent className="p-4 xs:p-4 sm:p-5">
                      <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 text-foreground">
                        <li className="flex items-start gap-3 text-sm xs:text-base sm:text-base md:text-lg font-medium">
                          <CheckCircle2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Accountability</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm xs:text-base sm:text-base md:text-lg font-medium">
                          <CheckCircle2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Excellence in service</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm xs:text-base sm:text-base md:text-lg font-medium">
                          <CheckCircle2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Evidence based medicine</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm xs:text-base sm:text-base md:text-lg font-medium">
                          <CheckCircle2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Operational Efficiency</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm xs:text-base sm:text-base md:text-lg font-medium">
                          <CheckCircle2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Quality personalized care</span>
                        </li>
                      </ul>
                      <p className="mt-4 xs:mt-5 sm:mt-5 pt-4 xs:pt-5 sm:pt-5 border-t border-border text-foreground font-semibold text-sm xs:text-base sm:text-base md:text-lg">
                        Our result is maintenance of your good health and prevention of illness and/or disability.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Hospital Affiliations Section */}
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-3 sm:mb-4 font-serif" style={{ color: '#6b3fa0' }}>
                    Always Accepting New Patients
                  </h3>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg text-foreground leading-relaxed font-medium whitespace-normal">
                    Visit us and let's talk about you and your well-being because we… <span className="font-semibold text-primary">CHERISH YOUR HEALTH!</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4 font-serif">
                    Our Pledge
                  </h3>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-3 xs:mb-3 sm:mb-4 font-medium">
                    Trinity Heritage Healthcare Clinic (HHC) is committed to providing excellent occupational health services including physical exams, health surveillance, injury treatment, and occupational testing for businesses in the Dallas Fort Worth metroplex.
                  </p>
                  <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed font-medium">
                    Our experienced, well-trained health and safety professionals are certified in their specialties and licensed to practice without restrictions, ensuring your business receives the highest quality care.
                  </p>
                </div>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 xs:p-5 sm:p-6 animate-rotating-glow">
                  <h4 className="font-semibold text-primary mb-3 xs:mb-3 sm:mb-4 text-base xs:text-lg sm:text-xl">Why Choose Trinity Heritage Healthcare Clinic?</h4>
                  <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">Always Friendly. Always Knowledgeable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">Board-Certified Physicians & Healthcare Professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">Comprehensive Occupational Medicine Services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base md:text-lg text-foreground font-medium">Integrated Care & Standardized Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Team Link Section */}
        <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
          <GeometricAccent className="absolute top-5 xs:top-10 sm:top-10 left-5 xs:left-10 sm:left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-20 xs:bottom-32 sm:bottom-32 right-5 xs:right-20 sm:right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-3 xs:px-3 sm:px-4 py-1.5 xs:py-1.5 sm:py-2 rounded-full mb-3 xs:mb-3 sm:mb-4">
                <Users className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-sm xs:text-sm sm:text-base font-semibold text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 xs:mb-3 sm:mb-4">
                Meet Our Dedicated Healthcare Team
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 leading-relaxed font-medium px-2">
                Experienced, certified professionals dedicated to providing compassionate, evidence-based care
              </p>
              <Link href="/team">
                <Button className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-base md:text-lg px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-3 shadow-lg transition-all duration-300 border-2 border-primary rounded-lg">
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Sections Teaser */}
        <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
          <GeometricBackground variant="grid" className="opacity-30" opacity={1} />
          <GeometricAccent className="absolute top-10 xs:top-16 sm:top-20 right-5 xs:right-10 sm:right-10 opacity-15" style={{ animationDelay: "0.5s" }} />
          <GeometricAccent className="absolute bottom-20 xs:bottom-40 sm:bottom-40 left-16 xs:left-32 sm:left-32 opacity-10 scale-90" style={{ animationDelay: "2s" }} />

          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 xs:mb-14 sm:mb-16">
              <h2 className="font-serif text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-3 xs:mb-3 sm:mb-4" style={{ color: 'var(--tertiary)' }}>
                Learn More About Our Services
              </h2>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-foreground max-w-3xl mx-auto font-medium px-2">
                Explore our comprehensive offerings designed to keep your workforce healthy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-6 sm:gap-8 lg:gap-8 relative z-20">
              {/* Services Card */}
              <Link href="/services">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-5 xs:p-6 sm:p-8 lg:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-primary text-white mb-3 xs:mb-3 sm:mb-4">
                      <Briefcase className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-2 sm:mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Our Services
                    </h3>
                    <p className="text-foreground mb-4 xs:mb-5 sm:mb-6 font-medium text-base xs:text-base sm:text-lg flex-grow">
                      From physical exams to diagnostic testing and injury treatment, discover our full range of occupational health services.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all text-base xs:text-base sm:text-lg">
                      Learn More <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Location Card */}
              <Link href="/location">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-5 xs:p-6 sm:p-8 lg:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-primary text-white mb-3 xs:mb-3 sm:mb-4">
                      <MapPin className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-2 sm:mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Our Location
                    </h3>
                    <p className="text-foreground mb-4 xs:mb-5 sm:mb-6 font-medium text-base xs:text-base sm:text-lg flex-grow">
                      Conveniently located in El Paso, Texas. Get directions, hours, and contact information.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all text-base xs:text-base sm:text-lg">
                      Visit <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Wellness Card */}
              <Link href="/wellness">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-5 xs:p-6 sm:p-8 lg:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-primary text-white mb-3 xs:mb-3 sm:mb-4">
                      <HeartPulse className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 xs:mb-2 sm:mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Wellness & Prevention
                    </h3>
                    <p className="text-foreground mb-4 xs:mb-5 sm:mb-6 font-medium text-base xs:text-base sm:text-lg flex-grow">
                      Proactive health programs including wellness consultations, health fairs, and safety training.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all text-base xs:text-base sm:text-lg">
                      Explore <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <DiagonalShapeDivider color="accent" className="h-24 -mb-1" flip={true} />

      </div>

      {/* Footer */}
      <footer className="bg-muted border-t-4 border-primary py-8 xs:py-9 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-6 sm:gap-6 md:gap-8 lg:gap-12 mb-6 xs:mb-7 sm:mb-8">
            {/* Clinic Info */}
            <div className="text-center xs:text-center sm:text-left">
              <div className="relative w-full h-14 xs:h-16 sm:h-16 md:h-20 mb-2 xs:mb-3 sm:mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs xs:text-xs sm:text-sm text-foreground mb-2 xs:mb-3 sm:mb-4 italic font-medium">
                "Working to Keep Your Workforce Well"
              </p>
            </div>

            {/* Contact */}
            <div className="text-center xs:text-center sm:text-left">
              <h4 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-xs sm:text-sm md:text-base">Contact</h4>
              <div className="space-y-0.5 xs:space-y-1 sm:space-y-1 sm:space-y-2 text-sm xs:text-sm sm:text-sm md:text-base text-foreground font-medium">
                <p>2204 Joe Battle Blvd, STE D204</p>
                <p>El Paso, TX 79938</p>
                <p className="pt-0.5 xs:pt-1 sm:pt-1 sm:pt-2">
                  Phone: <a href="tel:915-300-2276" className="text-primary hover:underline font-semibold">915.300.2276</a>
                </p>
                <p>Fax: 866-222-5219</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center xs:text-center sm:text-left">
              <h4 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-sm sm:text-base md:text-lg">Quick Links</h4>
              <div className="space-y-0.5 xs:space-y-1 sm:space-y-1 sm:space-y-2">
                {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About Us", href: "/#about" },
                { id: "team", label: "Our Team", href: "/#team" },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Contact", href: "/location" },
                { id: "services", label: "Services", href: "/services" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "contact", label: "Forms", href: "/contact" }
              ].map((link) => (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="block text-sm xs:text-sm sm:text-base md:text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm xs:text-sm sm:text-base md:text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )
              ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-5 xs:pt-6 sm:pt-6 sm:pt-8 text-center text-sm xs:text-sm sm:text-base md:text-base text-foreground font-medium">
            <p>&copy; {new Date().getFullYear()} Trinity Heritage Healthcare Clinic. All rights reserved.</p>
            <p className="mt-1 xs:mt-2 sm:mt-2 italic font-serif text-primary text-sm xs:text-sm sm:text-base md:text-base">
              2204 Joe Battle Blvd, STE D204 El Paso, TX 79938 | 915.300.2276
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
