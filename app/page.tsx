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
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-104 h-32">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Clinic"
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
                  <span className="text-xl font-serif font-bold text-primary">Trinity Heritage</span>
                  <span className="text-sm text-accent font-semibold">Clinic</span>
                </div>
              </div>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8 items-center">
              {[
                { id: "home", label: "Home" },
                { id: "team", label: "Our Team" },
                { id: "location", label: "Location" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
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
                { id: "home", label: "Home" },
                { id: "team", label: "Our Team" },
                { id: "location", label: "Location" },
                { id: "services", label: "Services" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {link.label}
                </button>
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
          className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden"
        >
          {/* Geometric Background */}
          <GeometricBackground variant="diamonds" className="opacity-30" opacity={1} animated={true} />

          {/* Professional Background Image */}
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fb6240749e17b41fa929cfd5bf55b024c?format=webp&width=800"
              alt="Professional healthcare team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/40"></div>
          </div>

          {/* Floating Geometric Accents */}
          <GeometricAccent className="top-20 right-20 opacity-20 animate-diamond-float" />
          <GeometricAccent className="bottom-32 left-10 opacity-15" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* Main Heading */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-6 leading-tight drop-shadow-lg">
                OCCUPATIONAL MEDICINE SERVICES
              </h1>

              {/* Subtitle */}
              <p className="text-2xl md:text-3xl lg:text-4xl text-accent font-bold mb-8">
                Working to Keep Your Workforce Well
              </p>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
                Always Friendly. Always Knowledgeable.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Conveniently Located in Mansfield, Texas – Serving Businesses with Certified Care
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 diamond-glow font-semibold animate-rotating-glow border-2 border-primary"
                >
                  Learn How We Can Help Your Business
                  <ChevronRight className="w-5 h-5 inline ml-2" />
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

        {/* Shape Divider */}
        <DiamondsShapeDivider color="primary" className="h-40 -mt-12 relative z-10" />

        {/* Our Founder Section */}
        <section id="founder" className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-20" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-40 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Our Founder</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Meet Our Visionary Leader
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20">
              {/* Founder Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-accent/20">
                <Image
                  src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg"
                  alt="Founder and Medical Director of Trinity Heritage Clinic"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
              </div>

              {/* Founder Info */}
              <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-white">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-primary mb-2 font-serif">
                    Dr. James Mitchell
                  </h3>
                  <p className="text-xl font-semibold text-accent mb-6">
                    Founder & Medical Director
                  </p>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-foreground leading-relaxed">
                      With over 20 years of experience in occupational medicine and internal medicine, Dr. Mitchell founded Trinity Heritage Clinic with a mission to provide compassionate, comprehensive healthcare to working professionals.
                    </p>

                    <div className="space-y-3 border-t border-border pt-6">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Board Certified</p>
                          <p className="text-sm text-muted-foreground">American Board of Occupational & Internal Medicine</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Licensed Professional</p>
                          <p className="text-sm text-muted-foreground">State of Texas Medical License #TX-12345</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Stethoscope className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">Specialized Training</p>
                          <p className="text-sm text-muted-foreground">Fellow of American College of Occupational Medicine</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    "My passion has always been to create a healthcare environment where working professionals receive the specialized care they deserve, combined with the personal attention that makes all the difference."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <WaveShapeDivider color="primary" className="h-32 -mb-1" flip={false} />

        {/* Our Team Section */}
        <section id="team" className="relative py-20 bg-white overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Experienced, Well-Trained Professionals
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Certified in specialties and licensed without restrictions
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
                  specialty: "Occupational & Internal Medicine",
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
                  title: "Certified Medical Assistants",
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
                    <p className="text-muted-foreground text-sm mb-3">{member.specialty}</p>
                    <p className="text-xs text-muted-foreground italic leading-relaxed">
                      Experienced, well-trained professional certified in specialty and licensed without restrictions
                    </p>
                  </CardContent>
                </Card>
              ))}
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
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Location</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Conveniently Located in Mansfield, Texas
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
                    <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Contact Information</h3>
                    
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
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Our Services</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Comprehensive Occupational Health Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Keeping your workforce healthy, safe, and productive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-20">
              {[
                {
                  icon: Briefcase,
                  title: "Occupational Medicine",
                  items: [
                    "Pre-Employment Physical Exams",
                    "DOT Physicals & Drug Testing",
                    "Work Injury Care & Management",
                    "Drug & Alcohol Screening",
                    "Respirator Fit Testing",
                    "OSHA Compliance Services"
                  ],
                  color: "primary"
                },
                {
                  icon: HeartPulse,
                  title: "Internal Medicine",
                  items: [
                    "Preventive Care & Wellness",
                    "Chronic Condition Management",
                    "Annual Physical Exams",
                    "Diabetes & Hypertension Care",
                    "Acute Illness Treatment",
                    "Health Risk Assessments"
                  ],
                  color: "accent"
                },
                {
                  icon: Activity,
                  title: "Wellness Programs",
                  items: [
                    "Employee Health Screenings",
                    "Workplace Safety Training",
                    "Health & Wellness Education",
                    "Ergonomic Assessments",
                    "Immunization Programs",
                    "Corporate Wellness Plans"
                  ],
                  color: "primary"
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
                    <button
                      onClick={() => scrollToSection("contact")}
                      className={`w-full ${
                        service.color === "primary"
                          ? "bg-primary hover:bg-primary/90"
                          : "bg-accent hover:bg-accent/90"
                      } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl`}
                    >
                      Inquire Now
                      <ChevronRight className="w-4 h-4 inline ml-2" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-12 text-center shadow-2xl animate-rotating-glow border-2 border-white/20">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
                Ready to Keep Your Workforce Well?
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                To learn more about how we can help your business, call us today
              </p>
              <a href="tel:817-453-7522">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-7 shadow-xl hover:scale-105 transition-all duration-300 animate-rotating-glow border-2 border-white"
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

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-40" opacity={1} />

          {/* Professional Background Image */}
          <div className="absolute inset-0 opacity-08">
            <Image
              src="https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg"
              alt="Healthcare consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50"></div>
          </div>

          {/* Floating Geometric Accents */}
          <GeometricAccent className="top-40 right-32 opacity-20" style={{ animationDelay: "0.3s" }} />
          <GeometricAccent className="bottom-20 left-20 opacity-15 scale-125" style={{ animationDelay: "1s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Contact Us</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get Started with Trinity Heritage Clinic
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reach out today to learn how we can serve your business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-20">
              {/* Contact Form */}
              <Card className="border-2 border-primary/20 shadow-2xl animate-rotating-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(817) 555-1234"
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="occupational">Occupational Medicine</SelectItem>
                          <SelectItem value="internal">Internal Medicine</SelectItem>
                          <SelectItem value="wellness">Wellness Programs</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your needs..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-primary"
                    >
                      Send Message
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow animate-rotating-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-2">Call Us</h4>
                        <a
                          href="tel:817-453-7522"
                          className="text-2xl font-bold text-primary hover:underline block mb-2"
                        >
                          (817) 453-7522
                        </a>
                        <p className="text-sm text-muted-foreground">Mon-Fri: 8:30 AM - 5:30 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-shadow animate-rotating-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-2">After Hours</h4>
                        <a
                          href="tel:817-966-3989"
                          className="text-2xl font-bold text-accent hover:underline block mb-2"
                        >
                          (817) 966-3989
                        </a>
                        <p className="text-sm text-muted-foreground">For urgent matters only</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow animate-rotating-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-2">Fax</h4>
                        <p className="text-xl font-bold text-primary">1-866-665-6659</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-shadow animate-rotating-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-foreground mb-2">Visit Us</h4>
                        <a
                          href="https://maps.google.com/?q=1475+Heritage+Pkwy+Ste+225+Mansfield+TX+76063"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          1475 Heritage Pkwy Ste 225
                          <br />
                          Mansfield, TX 76063
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 text-center">
              <p className="text-2xl font-serif font-bold text-primary mb-4">
                Working to Keep Your Workforce Well
              </p>
              <p className="text-lg text-muted-foreground">
                To learn more, call us today: <a href="tel:817-453-7522" className="text-primary font-bold hover:underline">(817) 453-7522</a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t-4 border-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Clinic Info */}
            <div>
              <div className="relative w-104 h-32 mb-4">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                  alt="Trinity Heritage Clinic"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Working to Keep Your Workforce Well"
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
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
                  { id: "home", label: "Home" },
                  { id: "team", label: "Our Team" },
                  { id: "location", label: "Location" },
                  { id: "services", label: "Services" },
                  { id: "contact", label: "Contact" }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Trinity Heritage Clinic. All rights reserved.</p>
            <p className="mt-2 italic font-serif text-primary">
              To learn more, call us today: (817) 453-7522
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
