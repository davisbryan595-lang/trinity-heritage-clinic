"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Menu, X, Award, Users, CheckCircle2 } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { DiagonalShapeDivider } from "@/components/shape-dividers"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function TeamPage() {
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
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className={`transition-all duration-300 relative z-10 ${
          isScrolled
            ? "bg-white"
            : "bg-transparent"
        }`}>
          <div className="w-full">
            <div className="flex justify-between items-start lg:items-center h-auto lg:h-32 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 gap-4 lg:gap-8 px-1 xs:px-2 sm:px-3 md:px-4 lg:px-6 max-w-7xl mx-auto">
              {/* Logo */}
              <Link
                href="/"
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
                </div>
              </Link>

              {/* Desktop Navigation */}
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
                          className={`text-xs xl:text-sm font-semibold transition-all duration-300 relative group px-2 xl:px-3 py-1 ${
                            link.href === "/team" ? "text-primary font-bold" : "text-foreground hover:text-primary"
                          }`}
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="text-xs xl:text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative group px-2 xl:px-3 py-1"
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                      )}
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
                  link.href ? (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="block w-full text-left px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      onClick={() => {
                        scrollToSection(link.id)
                        setMobileMenuOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-all text-sm"
                    >
                      {link.label}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 xs:pt-40 sm:pt-48 md:pt-56 lg:pt-80 xl:pt-96 pb-16 xs:pb-20 sm:pb-24 md:pb-28 lg:pb-32 overflow-hidden"
          style={{
            backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fe956acbb04e54fb896c83542bdb88b2d%2F8b288272e0db48dd9890547636226cd8?format=webp&width=800)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black/10 to-accent/20" style={{ margin: '0 0 auto auto' }}></div>

          <div className="w-full mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 text-center pt-2 xs:pt-2 sm:pt-3 md:pt-4 lg:pt-5 pb-3 xs:pb-3 sm:pb-4 md:pb-6 lg:pb-8 backdrop-blur-lg bg-white border border-white/5 rounded-xl xs:rounded-2xl shadow-2xl -mb-12 xs:-mb-14 sm:-mb-20 md:-mb-24 lg:-mb-32" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', maxWidth: '802px' }}>
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-lg mb-4 xs:mb-4 sm:mb-5" style={{ color: '#8cc73f' }}>
                Meet Our Team
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-6 xs:mb-7 sm:mb-10 md:mb-12 leading-relaxed font-medium px-2">
                Dedicated healthcare professionals committed to your wellness
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-5 xs:top-10 sm:top-10 left-5 xs:left-10 sm:left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-20 xs:bottom-32 sm:bottom-32 right-5 xs:right-20 sm:right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 xs:mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-3 xs:px-3 sm:px-4 py-1.5 xs:py-1.5 sm:py-2 rounded-full mb-3 xs:mb-3 sm:mb-4">
                <Users className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-sm xs:text-sm sm:text-base font-semibold text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 xs:mb-3 sm:mb-4">
                Our Dedicated Healthcare Team
              </h2>
            </div>

            {/* Team Background Image */}
            <div className="relative mb-8 xs:mb-10 sm:mb-12 h-36 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl xs:rounded-2xl overflow-hidden shadow-2xl group animate-rotating-glow border-2 border-primary/20">
              <Image
                src="https://images.pexels.com/photos/6098056/pexels-photo-6098056.jpeg"
                alt="Our professional healthcare team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-accent/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4 drop-shadow-lg">
                  Our Dedicated Healthcare Team
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 relative z-20 mx-auto max-w-4xl">
              {[
                {
                  icon: Award,
                  title: "Board Certified Physician",
                  specialty: "Occupational Medicine",
                  color: "text-primary"
                },
                {
                  icon: Award,
                  title: "Certified Nurse Practitioner",
                  specialty: "Advanced Practice Nursing",
                  color: "text-accent"
                },
                {
                  icon: Users,
                  title: "Medical Assistants",
                  specialty: "Clinical Support Services",
                  color: "text-primary"
                },
                {
                  icon: Award,
                  title: "Trained Technicians",
                  specialty: "Diagnostic & Lab Services",
                  color: "text-accent"
                }
              ].map((member, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary bg-white animate-rotating-glow h-full"
                >
                  <CardContent className="p-3 xs:p-4 sm:p-6 lg:p-8 text-center flex flex-col h-full">
                    <div className="w-12 xs:w-12 sm:w-14 lg:w-16 h-12 xs:h-12 sm:h-14 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 xs:mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-300 diamond-glow flex-shrink-0">
                      <member.icon className={`w-5 xs:w-6 sm:w-7 lg:w-8 h-5 xs:h-6 sm:h-7 lg:h-8 ${member.color} group-hover:text-white`} />
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 xs:mb-1 sm:mb-2 font-serif flex-shrink-0">
                      {member.title}
                    </h3>
                    <p className="text-foreground text-sm xs:text-sm sm:text-base lg:text-base mb-2 xs:mb-2 sm:mb-3 font-medium flex-shrink-0">{member.specialty}</p>
                    <p className="text-sm xs:text-sm sm:text-base lg:text-base text-foreground italic leading-relaxed font-medium flex-grow">
                      Experienced, well-trained professional certified in specialty and licensed without restrictions
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Our Medical Leadership Section */}
            <div className="mt-16 xs:mt-18 sm:mt-20 pt-16 xs:pt-20 sm:pt-24 px-2">
              <div className="text-center mb-16 xs:mb-20 sm:mb-24">
                <div className="inline-flex items-center gap-2 px-3 xs:px-4 sm:px-4 py-1.5 xs:py-2 sm:py-2 rounded-full mb-3 xs:mb-3 sm:mb-4" style={{ backgroundColor: '#8cc73f', color: '#1a1a1a' }}>
                  <Award className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4" />
                  <span className="text-sm xs:text-sm sm:text-base font-semibold">Leadership</span>
                </div>
                <h3 className="font-serif text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4">
                  Our Medical Leadership
                </h3>
              </div>

              {/* Top Section - Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 xs:mb-20 sm:mb-24">
                {/* Left Column - Photo (40%) */}
                <div className="lg:col-span-2 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <div
                      className="relative w-full aspect-[3/4] rounded-lg overflow-hidden"
                      style={{ border: '10px solid #8B4789' }}
                    >
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F047d1840961a481cb83b4782a1b2b517%2Faef421c9420b48d1a111b122c7a0a1bc?format=webp&width=800"
                        alt="Dr. Victor Nwiloh, MD"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Lime Green Banner Overlay */}
                    <div className="absolute -bottom-24 left-0 right-0 bg-lime-green p-5 xs:p-6 sm:p-6 mx-4 rounded-lg shadow-lg" style={{ backgroundColor: '#CDDC39' }}>
                      <h3 className="font-serif font-bold text-lg xs:text-xl sm:text-2xl" style={{ color: '#8B4789' }}>
                        Dr. Victor Nwiloh
                      </h3>
                      <p className="font-bold text-sm xs:text-base" style={{ color: '#8B4789' }}>
                        Internal Medicine Clinic
                      </p>
                      <p className="text-xs xs:text-sm font-medium" style={{ color: '#8B4789' }}>
                        Board Certified In Internal Medicine
                      </p>
                      <p className="text-xs xs:text-sm font-medium" style={{ color: '#8B4789' }}>
                        Board Certified In Occupational Medicine
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Bio (60%) */}
                <div className="lg:col-span-3 flex items-center justify-center lg:pt-12">
                  <div>
                    <p 
                      className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-3xl leading-relaxed font-semibold"
                      style={{ color: '#4A90E2' }}
                    >
                      Dr. Victor Nwiloh is a board-certified internal medicine and occupational medicine physician with over 25 years of experience in various healthcare settings across the United States as a Primary care physician, Occupational Medicine / Urgent care physician and a Hospitalist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Professional Organizations */}
              <div className="mt-8 xs:mt-10 sm:mt-12 pt-6 xs:pt-8 sm:pt-10 flex justify-center">
                <div className="text-center">
                  <h4 className="font-serif text-3xl xs:text-4xl sm:text-4xl font-bold text-foreground mb-8 xs:mb-10 sm:mb-12">
                    Professional Organizations
                  </h4>
                  <div className="flex flex-col items-center gap-8 xs:gap-10 sm:gap-12">
                    {/* AMA Logo */}
                    <div className="w-24 xs:w-28 sm:w-32">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F047d1840961a481cb83b4782a1b2b517%2F85e427bbd18b45ab83decf2502141030?format=webp&width=800"
                        alt="AMA - American Medical Association"
                        width={128}
                        height={128}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* ACP Logo */}
                    <div className="w-24 xs:w-28 sm:w-32">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F047d1840961a481cb83b4782a1b2b517%2Fd21c32e6a8e54e9a9d430b276289a447?format=webp&width=800"
                        alt="ACP - American College of Physicians"
                        width={128}
                        height={128}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* ACOEM Logo */}
                    <div className="w-24 xs:w-28 sm:w-32">
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F047d1840961a481cb83b4782a1b2b517%2F89fa29494b9846a4bf7864d577d97f1b?format=webp&width=800"
                        alt="ACOEM - American College of Occupational and Environmental Medicine"
                        width={128}
                        height={128}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Services Section */}
            <div className="mt-12 xs:mt-12 sm:mt-14">
              <div className="text-center mb-10 xs:mb-12 sm:mb-12">
                <h3 className="font-serif text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-primary mb-3 xs:mb-3 sm:mb-4">
                  Why Our Team Stands Out
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-6 sm:gap-8 lg:gap-8">
                {[
                  {
                    title: "Certification & Expertise",
                    description: "All team members are fully certified and licensed in their specialties, ensuring top-tier care."
                  },
                  {
                    title: "Comprehensive Training",
                    description: "Continuous professional development keeps our team current with the latest medical practices."
                  },
                  {
                    title: "Patient-Centered Care",
                    description: "Our team is dedicated to providing personalized, compassionate care for every patient."
                  },
                  {
                    title: "Experience & Trust",
                    description: "With decades of combined experience, our team brings reliability and confidence to every interaction."
                  },
                  {
                    title: "Collaborative Approach",
                    description: "Our team works together seamlessly to ensure coordinated, comprehensive healthcare solutions."
                  },
                  {
                    title: "Accessibility & Support",
                    description: "We're here to answer your questions and provide support whenever you need us."
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-rotating-glow bg-white">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground">{item.title}</h4>
                      </div>
                      <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              <h4 className="font-semibold text-foreground mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-xs sm:text-sm md:text-base">Quick Links</h4>
              <div className="space-y-0.5 xs:space-y-1 sm:space-y-1 sm:space-y-2">
                {[
                  { id: "home", label: "Home", href: "/" },
                  { id: "about", label: "About Us", href: "/about" },
                  { id: "team", label: "Our Team", href: "/team" },
                  { id: "gallery", label: "Gallery", href: "/gallery" },
                  { id: "location", label: "Contact", href: "/location" },
                  { id: "services", label: "Services", href: "/services" },
                  { id: "wellness", label: "Wellness", href: "/wellness" },
                  { id: "contact", label: "Forms", href: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="block text-sm xs:text-sm sm:text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
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
