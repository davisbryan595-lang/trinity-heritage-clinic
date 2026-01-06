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
        {/* Top Navigation Row */}
        <div className={`border-b transition-all duration-300 ${isScrolled ? "border-border" : "border-transparent"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:flex justify-center items-center h-12 gap-1 xl:gap-2">
              {[
                { id: "home", label: "Home", href: null },
                { id: "about", label: "About", href: null },
                { id: "team", label: "Team", href: null },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Location", href: "/location" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "patient-forms", label: "Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact", href: "/contact" }
              ].map((link, index) => (
                <div key={link.id} className="flex items-center">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group px-2 py-1"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-xs font-semibold text-foreground hover:text-primary transition-all duration-300 relative group px-2 py-1"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  )}
                  {index === 4 && <ServicesDropdown />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white"
            : "bg-transparent"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 sm:h-24 lg:h-32 py-2 sm:py-3 lg:py-4">
              {/* Logo */}
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
              >
                <div className="relative w-60 h-24 sm:w-[312px] sm:h-30 lg:w-[384px] lg:h-48">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                    alt="Heritage Healthcare Clinic"
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
                    <span className="text-xl font-serif font-bold text-primary">Heritage Healthcare</span>
                    <span className="text-sm text-accent font-semibold">Clinic</span>
                  </div>
                </div>
              </button>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <a href="tel:915-300-2276">
                  <Button className="bg-accent hover:bg-accent/90 text-white text-xs lg:text-sm px-3 lg:px-4 py-2 lg:py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 animate-diamond-glow animate-rotating-glow border-2 border-accent">
                    <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                    <span className="hidden lg:inline">Call Now</span>
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1 rounded-lg hover:bg-primary/10 transition-colors"
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
              <div className="lg:hidden py-6 space-y-2 animate-fadeInUp border-t border-border">
                {[
                  { id: "home", label: "Home", href: null },
                  { id: "about", label: "About Us", href: null },
                  { id: "team", label: "Our Team", href: null },
                  { id: "gallery", label: "Gallery", href: "/gallery" },
                  { id: "location", label: "Location", href: "/location" },
                  { id: "services", label: "Services", href: "/services" },
                  { id: "wellness", label: "Wellness", href: "/wellness" },
                  { id: "patient-forms", label: "Patient Forms", href: "/patient-forms" },
                  { id: "contact", label: "Contact Us", href: "/contact" }
                ].map((link) => (
                  link.href ? (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      {link.label}
                    </button>
                  )
                ))}
                <div className="px-4 pt-4 border-t border-border">
                  <a href="tel:915-300-2276" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white animate-rotating-glow border-2 border-accent">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 915.300.2276
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="overflow-hidden">
        {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden"
          >

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Main Heading with two-color design */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg mb-2 sm:mb-3">
                    <span className="text-primary">Internal Medicine, Family Practice Clinic</span>
                  </h1>
                  <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-2 sm:mb-3" style={{ color: '#8cc73f' }}>
                    &
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg whitespace-nowrap overflow-hidden text-ellipsis px-2 w-full" style={{ color: '#6b3fa0' }}>
                    Occupational Medicine Services
                  </h2>
                </div>

                {/* Tagline */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium">
                  Always friendly and knowledgeable
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-foreground text-xs sm:text-sm md:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 md:py-4 rounded-lg transition-all duration-300 font-semibold hover:opacity-90 inline-flex items-center justify-center"
                    style={{ color: '#6b3fa0' }}
                  >
                    Learn how we can help you
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </button>
                  <a href="tel:915-300-2276" className="w-full sm:w-auto">
                    <Button
                      className="text-white text-xs sm:text-sm md:text-base px-4 sm:px-8 py-2.5 sm:py-3.5 md:py-4 shadow-lg transition-all duration-300 border-2 w-full sm:w-auto"
                      style={{ backgroundColor: '#6b3fa0', borderColor: '#6b3fa0' }}
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span>Call Now</span>
                      <span className="hidden sm:inline ml-2 font-semibold">915.300.2276</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        {/* About Us Section */}
        <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-20" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-40 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                About Heritage Healthcare Clinic
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto font-medium">
                Comprehensive healthcare for your professional and personal wellness
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative z-20 mb-16">
              {/* About Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 font-serif">
                    Our Pledge
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground leading-relaxed mb-3 sm:mb-4 font-medium">
                    Heritage Healthcare Clinic (HHC) is committed to providing excellent occupational health services including physical exams, health surveillance, injury treatment, and occupational testing for businesses in the Dallas Fort Worth metroplex.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground leading-relaxed font-medium">
                    Our experienced, well-trained health and safety professionals are certified in their specialties and licensed to practice without restrictions, ensuring your business receives the highest quality care.
                  </p>
                </div>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4 sm:p-6 animate-rotating-glow">
                  <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-base sm:text-lg">Why Choose Heritage Healthcare Clinic?</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Always Friendly. Always Knowledgeable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Board-Certified Physicians & Healthcare Professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Comprehensive Occupational Medicine Services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">Integrated Care & Standardized Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Our Team Section */}
        <section id="team" className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our Dedicated Healthcare Team
              </h2>
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-foreground max-w-4xl mx-auto font-medium px-2">
                Experienced professionals certified in specialties and licensed without restrictions
              </p>
            </div>

            {/* Team Background Image */}
            <div className="relative mb-8 sm:mb-12 h-40 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group animate-rotating-glow border-2 border-primary/20">
              <Image
                src="https://images.pexels.com/photos/6098056/pexels-photo-6098056.jpeg"
                alt="Our professional healthcare team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
                  Our Dedicated Healthcare Team
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-20">
              {[
                {
                  icon: Award,
                  title: "Board Certified Physician",
                  specialty: "Occupational Medicine",
                  color: "text-primary"
                },
                {
                  icon: HeartPulse,
                  title: "Certified Nurse Practitioner",
                  specialty: "Advanced Practice Nursing",
                  color: "text-accent"
                },
                {
                  icon: Stethoscope,
                  title: "Licensed Nurse",
                  specialty: "Registered Nursing Care",
                  color: "text-primary"
                },
                {
                  icon: Users,
                  title: "Certified Psychologist",
                  specialty: "Occupational Health Psychology",
                  color: "text-accent"
                },
                {
                  icon: Activity,
                  title: "Medical Assistants",
                  specialty: "Clinical Support Services",
                  color: "text-primary"
                },
                {
                  icon: Shield,
                  title: "Trained Technicians",
                  specialty: "Diagnostic & Lab Services",
                  color: "text-accent"
                }
              ].map((member, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary bg-white animate-rotating-glow"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300 diamond-glow">
                      <member.icon className={`w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 ${member.color} group-hover:text-white`} />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1 sm:mb-2 font-serif">
                      {member.title}
                    </h3>
                    <p className="text-foreground text-xs sm:text-xs lg:text-sm mb-2 sm:mb-3 font-medium">{member.specialty}</p>
                    <p className="text-xs sm:text-xs lg:text-sm text-foreground italic leading-relaxed font-medium">
                      Experienced, well-trained professional certified in specialty and licensed without restrictions
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Founder & Leadership Section */}
            <div className="mt-20 pt-16 border-t border-border">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#8cc73f', color: '#1a1a1a' }}>
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">Leadership</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Our Medical Leadership
                </h3>
              </div>

              <div className="relative z-20 mb-16">
                {/* Founder Info */}
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white">
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-bold font-serif mb-2" style={{ color: 'var(--tertiary)' }}>
                      Medical Director
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-6">
                      Board Certified Occupational Medicine
                    </p>

                    <div className="space-y-4 mb-8">
                      <p className="text-lg text-foreground leading-relaxed">
                        Our medical director brings extensive expertise in occupational medicine and is dedicated to providing excellent, compassionate care to businesses and their employees throughout the Dallas Fort Worth area.
                      </p>

                      <div className="space-y-3 border-t border-border pt-6">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Board Certified</p>
                            <p className="text-sm text-foreground font-medium">American Board of Occupational Medicine</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                          <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Licensed & Certified</p>
                            <p className="text-sm text-foreground font-medium">State of Texas Medical License</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                          <Stethoscope className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">Specialized Training</p>
                            <p className="text-sm text-foreground font-medium">Expertise in Occupational Health & Safety</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground italic text-sm leading-relaxed">
                      "Our passion is to create a healthcare environment where working professionals and businesses receive the specialized occupational health care they deserve, combined with the personal attention that makes all the difference."
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Work Site Visits & Travel Medicine */}
              <div className="mt-12">
                <div className="text-center mb-12">
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Specialized Occupational Services
                  </h3>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white">
                    <CardContent className="p-10">
                      <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                        Work Site Visits
                      </h3>
                      <p className="font-semibold mb-6 text-foreground">
                        Comprehensive workplace assessments
                      </p>

                      <div className="space-y-4 mb-8">
                        <p className="text-foreground leading-relaxed font-medium">
                          Work site visits are available upon request by employers and provide an opportunity to identify and abate potential/actual hazards and exposures at the work site.
                        </p>

                        <div className="space-y-3 border-t border-border pt-6">
                          <h4 className="font-semibold text-foreground mb-3">Benefits Include:</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Identify and abate hazards & exposures</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Familiarize healthcare provider with work environment</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Improved occupational health & safety planning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white">
                    <CardContent className="p-10">
                      <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                        Travel Medicine
                      </h3>
                      <p className="font-semibold mb-6 text-foreground">
                        Health & wellness for business travelers
                      </p>

                      <div className="space-y-4 mb-8">
                        <p className="text-foreground leading-relaxed font-medium">
                          HHC offers focused physical exams and travel-related vaccinations and prophylactic medications/treatments intended to keep your employees healthy while on business travel.
                        </p>

                        <div className="space-y-3 border-t border-border pt-6">
                          <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Individualized travel health assessment</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Travel-specific vaccinations</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-foreground text-sm font-medium">Country-specific medical guidance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections Teaser */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          <GeometricBackground variant="grid" className="opacity-30" opacity={1} />
          <GeometricAccent className="absolute top-20 right-10 opacity-15" style={{ animationDelay: "0.5s" }} />
          <GeometricAccent className="absolute bottom-40 left-32 opacity-10 scale-90" style={{ animationDelay: "2s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--tertiary)' }}>
                Learn More About Our Services
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
                Explore our comprehensive offerings designed to keep your workforce healthy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-20">
              {/* Services Card */}
              <Link href="/services">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white mb-4">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Our Services
                    </h3>
                    <p className="text-foreground mb-6 font-medium">
                      From physical exams to diagnostic testing and injury treatment, discover our full range of occupational health services.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Location Card */}
              <Link href="/location">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white mb-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Our Location
                    </h3>
                    <p className="text-foreground mb-6 font-medium">
                      Conveniently located in El Paso, Texas. Get directions, hours, and contact information.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                      Visit <ChevronRight className="w-5 h-5 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Wellness Card */}
              <Link href="/wellness">
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-white mb-4">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: 'var(--tertiary)' }}>
                      Wellness & Prevention
                    </h3>
                    <p className="text-foreground mb-6 font-medium">
                      Proactive health programs including wellness consultations, health fairs, and safety training.
                    </p>
                    <div className="flex items-center text-primary font-semibold hover:gap-2 transition-all">
                      Explore <ChevronRight className="w-5 h-5 ml-2" />
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
      <footer className="bg-muted border-t-4 border-primary py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
            {/* Clinic Info */}
            <div>
              <div className="relative w-full h-16 sm:h-20 md:h-24 mb-3 sm:mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-foreground mb-3 sm:mb-4 italic font-medium">
                "Working to Keep Your Workforce Well"
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm md:text-base">Contact</h4>
              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-foreground font-medium">
                <p>2204 Joe Battle Blvd, STE D204</p>
                <p>El Paso, TX 79938</p>
                <p className="pt-1 sm:pt-2">
                  Phone: <a href="tel:915-300-2276" className="text-primary hover:underline font-semibold">915.300.2276</a>
                </p>
                <p>Fax: 866-222-5219</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm md:text-base">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About Us", href: "/#about" },
                { id: "team", label: "Our Team", href: "/#team" },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Location", href: "/location" },
                { id: "services", label: "Services", href: "/services" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "patient-forms", label: "Patient Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact Us", href: "/contact" }
              ].map((link) => (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="block text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )
              ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-foreground font-medium">
            <p>&copy; {new Date().getFullYear()} Heritage Healthcare Clinic. All rights reserved.</p>
            <p className="mt-2 italic font-serif text-primary text-xs sm:text-sm">
              2204 Joe Battle Blvd, STE D204 El Paso, TX 79938 | 915.300.2276
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
