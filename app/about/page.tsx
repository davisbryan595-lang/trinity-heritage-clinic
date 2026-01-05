"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, Heart, Award, Shield, Users, CheckCircle2 } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { DiagonalShapeDivider, WaveShapeDivider } from "@/components/shape-dividers"

export default function AboutPage() {
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
          <div className="flex justify-between items-center h-20 sm:h-28 lg:h-40 py-2 sm:py-3 lg:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer flex-shrink-0"
            >
              <div className="relative w-40 h-16 sm:w-52 sm:h-20 lg:w-64 lg:h-32">
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
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-1 xl:gap-2 items-center flex-wrap justify-center">
              {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/#about" },
                { id: "team", label: "Team", href: "/#team" },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Location", href: "/location" },
                { id: "services", label: "Services", href: "/services" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "patient-forms", label: "Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-xs lg:text-sm font-semibold transition-all duration-300 relative group px-2 py-1 ${
                    link.href === "/#about" ? "text-primary font-bold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-4 xl:ml-8">
              <a href="tel:817-453-7522">
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
                <Link
                  key={link.id}
                  href={link.href}
                  className="block w-full text-left px-4 py-3 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
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
        <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-15" opacity={1} />
          
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-40 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                About Trinity Heritage Clinic
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#8cc73f' }}>
                Cherishing Your Health, Empowering Your Wellness
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Committed to providing evidence-based, patient-centered internal medicine and occupational health care
              </p>
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <DiagonalShapeDivider color="accent" className="h-24 -mb-1" />

        {/* Medical Director Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-accent/5 to-background overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16">
              {/* Image Side */}
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-rotating-glow border-2 border-primary/20 h-80 sm:h-96 md:h-[500px]">
                  <Image
                    src="/professional-male-physician-dr-victor-nwiloh-heads.jpg"
                    alt="Dr. Victor Nwiloh, MD"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="order-1 md:order-2 animate-slideInRight" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center gap-2 bg-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-primary">Medical Director</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                  Dr. Victor Nwiloh, MD
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-foreground mb-6 leading-relaxed font-medium">
                  With over 10 years of specialized experience in internal medicine, Dr. Victor Nwiloh is dedicated to providing comprehensive, compassionate care that honors each patient's unique journey. His evidence-based approach combines the latest medical research with a holistic understanding of wellness.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-base sm:text-lg">Expertise & Specializations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Preventive medicine & wellness optimization</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Chronic disease management</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Occupational medicine & workplace health</span>
                      </li>
                      <li className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-foreground font-medium">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>USCIS-certified medical examinations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm md:text-base px-6 sm:px-10 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-primary">
                    Schedule Your First Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <WaveShapeDivider color="primary" className="h-24 -mb-1" />

        {/* Our Story Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="grid" className="opacity-20" opacity={1} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground font-medium">
                A commitment to exceptional, personalized care
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-2xl animate-rotating-glow bg-gradient-to-br from-primary/5 to-white">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Trinity Heritage Clinic: A Sanctuary for Preventive & Chronic Care
                </h3>

                <div className="space-y-6 text-foreground leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                  <p>
                    Trinity Heritage Clinic was founded on the principle that every patient deserves exceptional, personalized internal medicine care. The name reflects our commitment to honoring the rich heritage of medical excellence while nurturing the trinity of health: physical wellness, mental clarity, and emotional resilience.
                  </p>

                  <p>
                    Located in the heart of El Paso, our clinic serves adults and families seeking comprehensive, evidence-based care. We specialize in preventive medicine to help you stay healthy, chronic disease management to optimize your quality of life, and acute care when you need us most.
                  </p>

                  <p>
                    What sets us apart is our unwavering dedication to seeing you as a whole person—not just a collection of symptoms. Dr. Nwiloh takes the time to listen, understand your unique health needs, and partner with you to create sustainable wellness solutions that fit your life.
                  </p>

                  <p style={{ color: 'var(--tertiary)' }} className="font-semibold italic">
                    We believe that lasting health comes from prevention, education, and genuine partnership. That's why we're here: to cherish your health, empower your choices, and support you every step of the way.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10 overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-20 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-40 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground max-w-2xl mx-auto font-medium">
                Principles that guide our care every single day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Heart, title: "Compassion", desc: "We approach every patient with genuine empathy and understanding." },
                { icon: Award, title: "Excellence", desc: "We stay current with evidence-based medicine and best practices." },
                { icon: Users, title: "Partnership", desc: "We collaborate with you to create achievable, personalized health plans." },
                { icon: Shield, title: "Integrity", desc: "We provide transparent, honest communication about your health." },
                { icon: Heart, title: "Inclusivity", desc: "We celebrate and respect the diversity of every patient and community." },
                { icon: Heart, title: "Wellness", desc: "We focus on holistic health—body, mind, and spirit." },
              ].map((value, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-rotating-glow bg-white animate-slideInUp"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto hover:bg-primary hover:scale-110 transition-all duration-300">
                      <value.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-foreground font-medium">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <DiagonalShapeDivider color="accent" className="h-24 -mb-1" flip={true} />

        {/* USCIS Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-15" opacity={1} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-accent">Certified Services</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                USCIS Authorized Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground max-w-2xl mx-auto font-medium">
                Certified Civil Surgeon Services
              </p>
            </div>

            <Card className="border-2 border-accent/20 shadow-2xl animate-rotating-glow bg-gradient-to-br from-accent/5 to-white mb-8">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-6 text-primary">
                  Immigration Medical Examinations
                </h3>

                <div className="space-y-6 text-foreground font-medium text-sm sm:text-base md:text-lg leading-relaxed">
                  <p>
                    Our physician is <span className="font-bold text-primary">USCIS certified and authorized</span> to conduct medical examinations with a designation as a civil surgeon by the United States Citizenship and Immigration Services (USCIS). This certification ensures that immigration medical exams are completed to the highest federal standards.
                  </p>

                  <p>
                    We provide comprehensive migration medical services including the USCIS Form I-693, Report of Medical Examination and Vaccination Record, which is an essential document for immigration applications and medical-based immigration cases.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
                    <div>
                      <h4 className="font-semibold text-primary mb-4 text-base sm:text-lg">Services We Provide:</h4>
                      <ul className="space-y-3">
                        {[
                          "USCIS I-693 Forms, Certified and Sealed Envelope",
                          "Patient Copy I-693",
                          "Comprehensive Physical Examination",
                          "Vaccination Status Verification",
                          "TB Testing",
                          "Complete Blood Testing"
                        ].map((service, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm md:text-base">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-4 text-base sm:text-lg">Additional Information:</h4>
                      <div className="space-y-4 text-xs sm:text-sm md:text-base">
                        <p>
                          The USCIS Form I-693 is obtainable through the official USCIS website at <span className="font-semibold">https://www.uscis.gov/i-693</span>.
                        </p>
                        <p>
                          Our team is available to assist with all medical-related questions regarding immigration medical examinations. For immigration questions that are non-medical in nature, we recommend seeking the service of an immigration attorney.
                        </p>
                        <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-4 mt-4">
                          <p className="font-semibold text-primary">
                            Call today for pricing information. Additional fees apply for vaccine administration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <a href="tel:817-453-7522">
                <Button className="bg-accent hover:bg-accent/90 text-white text-xs sm:text-sm md:text-base px-6 sm:px-10 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-accent">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call (817) 453-7522 for Pricing
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
