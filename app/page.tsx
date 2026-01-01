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
            ? "bg-white shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-40 py-4">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
            >
              <div className="relative w-64 h-32">
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

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-10 items-center">
              {[
                { id: "home", label: "Home", href: null },
                { id: "about", label: "About Us", href: null },
                { id: "team", label: "Our Team", href: null },
                { id: "location", label: "Location", href: null },
                { id: "services", label: "Services", href: null },
                { id: "wellness", label: "Wellness", href: null },
                { id: "patient-forms", label: "Patient Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact Us", href: "/contact" }
              ].map((link) => (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-8">
              <a href="tel:817-453-7522">
                <Button className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-diamond-glow animate-rotating-glow border-2 border-accent">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-primary" />
              ) : (
                <Menu size={28} className="text-primary" />
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
                { id: "location", label: "Location", href: null },
                { id: "services", label: "Services", href: null },
                { id: "wellness", label: "Wellness", href: null },
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
                <a href="tel:817-453-7522" className="block">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white animate-rotating-glow border-2 border-accent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (817) 453-7522
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="overflow-hidden">
        {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-48 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden"
          >
            {/* Professional Background Image */}
            <div className="absolute inset-0 opacity-55">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fd2c644fa07204d21bf75021cd10f2f3e?format=webp&width=800"
                alt="Professional healthcare team at work"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-accent/50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div
                className={`transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Main Heading – underline removed */}
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-6 leading-tight drop-shadow-lg">
                  OCCUPATIONAL MEDICINE SERVICES
                </h1>

                {/* Subtitle */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8" style={{ color: '#8cc73f' }}>
                  Working to Keep Your Workforce Well
                </p>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto mb-4 leading-relaxed font-medium">
                  Always Friendly. Always Knowledgeable.
                </p>

                <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-12 font-medium">
                  Conveniently Located in El Paso, Texas – Serving Businesses with Certified Care
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-6">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white text-lg px-10 py-6 rounded-lg shadow-2xl transition-all duration-300 diamond-glow font-semibold animate-rotating-glow border-2 flex items-center justify-center hover:opacity-90"
                    style={{ backgroundColor: '#8cc73f', borderColor: '#8cc73f' }}
                  >
                    Learn How We Can Help Your Business
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <a href="tel:817-453-7522">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-accent"
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Call (817) 453-7522
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        {/* About Us Section */}
        <section id="about" className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-20" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-40 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About Heritage Healthcare Clinic
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
                Comprehensive healthcare for your professional and personal wellness
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative z-20 mb-16">
              {/* About Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                    Our Pledge
                  </h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4 font-medium">
                    Heritage Healthcare Clinic (HHC) is committed to providing excellent occupational health services including physical exams, health surveillance, injury treatment, and occupational testing for businesses in the Dallas Fort Worth metroplex.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Our experienced, well-trained health and safety professionals are certified in their specialties and licensed to practice without restrictions, ensuring your business receives the highest quality care.
                  </p>
                </div>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
                  <h4 className="font-semibold text-primary mb-4 text-lg">Why Choose Heritage Healthcare Clinic?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Always Friendly. Always Knowledgeable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Board-Certified Physicians & Healthcare Professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Comprehensive Occupational Medicine Services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">Integrated Care & Standardized Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Our Team Section */}
        <section id="team" className="relative py-20 bg-white overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Dedicated Healthcare Team
              </h2>
              <p className="text-xl text-foreground max-w-4xl mx-auto font-medium">
                Experienced professionals certified in specialties and licensed without restrictions
              </p>
            </div>

            {/* Team Background Image */}
            <div className="relative mb-12 h-96 rounded-2xl overflow-hidden shadow-2xl group animate-rotating-glow border-2 border-primary/20">
              <Image
                src="https://images.pexels.com/photos/6098056/pexels-photo-6098056.jpeg"
                alt="Our professional healthcare team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl font-bold text-white text-center px-4 drop-shadow-lg">
                  Our Dedicated Healthcare Team
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
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
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300 diamond-glow">
                      <member.icon className={`w-8 h-8 ${member.color} group-hover:text-white`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-serif">
                      {member.title}
                    </h3>
                    <p className="text-foreground text-sm mb-3 font-medium">{member.specialty}</p>
                    <p className="text-sm text-foreground italic leading-relaxed font-medium">
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

              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20 mb-16">
                {/* Founder Image */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-accent/20">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F373e0b424ecc4cb281370906bc1721ca%2F8a6862c6f8a44dfdb1ab0d7815299ea9?format=webp&width=800"
                    alt="Founder and Medical Director of Trinity Heritage Clinic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                </div>

                {/* Founder Info */}
                <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white">
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-bold font-serif mb-2" style={{ color: '#8cc73f' }}>
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
                      <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: '#8cc73f' }}>
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
                      <h3 className="text-2xl font-bold mb-2 font-serif" style={{ color: '#8cc73f' }}>
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

        {/* Shape Divider */}
        <WaveShapeDivider color="accent" className="h-40 -mb-1" flip={true} />

        {/* Location Section */}
        <section id="location" className="relative py-20 bg-secondary overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="triangles" className="opacity-40" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-32 left-20 opacity-12" style={{ animationDelay: "0.8s" }} />
          <GeometricAccent className="absolute bottom-20 right-32 opacity-10 scale-110" style={{ animationDelay: "1.2s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Location</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Conveniently Located in El Paso, Texas
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start relative z-20">
              {/* Map Placeholder */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20">
                {/* ← REPLACE WITH BROCHURE MAP #3: /images/location-map.jpg */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7!2d-97.1!3d32.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z1475+Heritage+Pkwy+Ste+225+Mansfield+TX+76063!5e0!3m2!1sen!2sus!4v1234567890"
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
                            href="https://maps.google.com/?q=1475+Heritage+Pkwy+Ste+225+Mansfield+TX+76063"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            1475 Heritage Pkwy Ste 225
                            <br />
                            Mansfield, TX 76063
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
        </section>

        {/* Shape Divider */}
        <DiagonalShapeDivider color="primary" className="h-20 -mb-1" flip={true} />

        {/* Services Section */}
        <section id="services" className="relative py-20 bg-white overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="grid" className="opacity-30" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-10 opacity-15" style={{ animationDelay: "0.5s" }} />
          <GeometricAccent className="absolute bottom-40 left-32 opacity-10 scale-90" style={{ animationDelay: "2s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full mb-4 border-2 border-accent shadow-lg" style={{ backgroundColor: '#6B4C9A', color: '#ffffff' }}>
                <Briefcase className="w-5 h-5" />
                <span className="text-sm font-bold">Our Services</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#8cc73f' }}>
                Comprehensive Occupational Health Services
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
                Keeping your workforce healthy, safe, and productive
              </p>
            </div>

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
                <Card
                  key={idx}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                    service.color === "primary" ? "border-primary/20 hover:border-primary" : "border-accent/20 hover:border-accent"
                  } bg-white animate-rotating-glow`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                      } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform diamond-glow`}
                    >
                      <service.icon
                        className={`w-8 h-8 ${
                          service.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">
                      {service.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            service.color === "primary" ? "text-primary" : "text-accent"
                          }`} />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block w-full text-center ${
                        service.color === "primary"
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-accent hover:bg-accent/90"
                      } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl`}
                    >
                      Inquire Now
                      <ChevronRight className="w-4 h-4 inline ml-2" />
                    </Link>
                  </CardContent>
                </Card>
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
        </section>

        {/* Shape Divider */}
        <StairsShapeDivider color="accent" className="h-32 -mb-1" />

        {/* Wellness & Prevention Section */}
        <section id="wellness" className="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="grid" className="opacity-15" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-32 left-20 opacity-10" style={{ animationDelay: "1s" }} />
          <GeometricAccent className="absolute bottom-20 right-32 opacity-10 scale-110" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full mb-4 border-2 shadow-lg" style={{ backgroundColor: '#8cc73f', color: '#1a1a1a', borderColor: '#8cc73f' }}>
                <HeartPulse className="w-5 h-5" />
                <span className="text-sm font-bold">Wellness & Prevention</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#8cc73f' }}>
                Proactive Health & Prevention
              </h2>
              <p className="text-xl text-foreground max-w-3xl mx-auto font-medium">
                Keeping your workforce healthy starts with prevention and continuous wellness monitoring
              </p>
            </div>

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
                  <h3 className="text-2xl font-bold mb-4 font-serif" style={{ color: '#8cc73f' }}>
                    Health & Safety Consultation
                  </h3>
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
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-primary/20 shadow-sm">
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
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8cc73f20' }}>
                      <stat.icon className="w-8 h-8" style={{ color: '#8cc73f' }} />
                    </div>
                    <p className="text-4xl font-bold mb-2 font-serif" style={{ color: '#8cc73f' }}>{stat.number}</p>
                    <p className="text-foreground font-semibold">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <DiagonalShapeDivider color="accent" className="h-24 -mb-1" flip={true} />

      </div>

      {/* Footer */}
      <footer className="bg-muted border-t-4 border-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Clinic Info */}
            <div>
              <div className="relative w-full h-24 mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-foreground mb-4 italic font-medium">
                "Working to Keep Your Workforce Well"
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-foreground font-medium">
                <p>1475 Heritage Pkwy Ste 225</p>
                <p>Mansfield, TX 76063</p>
                <p className="pt-2">
                  Phone: <a href="tel:817-453-7522" className="text-primary hover:underline font-semibold">(817) 453-7522</a>
                </p>
                <p>Fax: 1-866-665-6659</p>
                <p>
                  After Hours: <a href="tel:817-966-3989" className="text-accent hover:underline font-semibold">(817) 966-3989</a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About Us" },
                { id: "team", label: "Our Team" },
                { id: "location", label: "Location" },
                { id: "services", label: "Services" },
                { id: "wellness", label: "Wellness" },
                { id: "patient-forms", label: "Patient Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact Us", href: "/contact" }
              ].map((link) => (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="block text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )
              ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground font-medium">
            <p>&copy; {new Date().getFullYear()} Heritage Healthcare Clinic. All rights reserved.</p>
            <p className="mt-2 italic font-serif text-primary">
              1475 Heritage Pkwy Ste 225, Mansfield, TX 76063 | (817) 453-7522
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
