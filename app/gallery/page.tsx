"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, Menu, Phone, Home, Award } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { DiamondsShapeDivider, WaveShapeDivider } from "@/components/shape-dividers"
import { ServicesDropdown } from "@/components/ServicesDropdown"

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fa80897090dc043b79c8fb3093e18286f?format=webp&width=800",
    alt: "Community health fair - people interacting",
    title: "Community Health Fair"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fd0bc961173034d9aa51e52e69bda95e1?format=webp&width=800",
    alt: "Healthcare professionals providing services",
    title: "Professional Healthcare Services"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2F3f2d7c47b05c4b52b66e6ab6651004c7?format=webp&width=800",
    alt: "Medical consultation with patient",
    title: "Patient Care & Consultation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fd35cdf8d0e0d4ebcbc9744ed72489520?format=webp&width=800",
    alt: "Health screening event",
    title: "Health Screening Event"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Ff8ce0c09df964b61812c64ba014ed213?format=webp&width=800",
    alt: "Medical professional assisting patients",
    title: "Professional Medical Assistance"
  }
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

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

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

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
              <div className="relative w-80 h-32 sm:w-[416px] sm:h-40 lg:w-[512px] lg:h-64">
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
                    link.href === "/gallery" ? "text-primary font-bold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-4 xl:ml-8">
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
      </nav>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="organic" className="opacity-15" opacity={1} />

          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 right-20 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-20 left-10 opacity-8" style={{ animationDelay: "0.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div
              className={`transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                Gallery
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#8cc73f' }}>
                Our Community in Action
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Glimpses of our healthcare initiatives and professional services in action
              </p>
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <DiamondsShapeDivider color="primary" className="h-24 -mb-1" />

        {/* Gallery Grid Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
          {/* Floating Geometric Accents */}
          <GeometricAccent className="absolute top-10 left-10 opacity-10 animate-diamond-float" />
          <GeometricAccent className="absolute bottom-32 right-20 opacity-10" style={{ animationDelay: "1.5s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-accent">Photo Gallery</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our Work in Pictures
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-2xl mx-auto font-medium">
                Click on any image to view it in full screen
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group-hover:border-accent animate-rotating-glow cursor-pointer">
                    <CardContent className="p-0 relative overflow-hidden h-64 sm:h-72 md:h-80 bg-gradient-to-br from-primary/10 to-accent/10">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold text-sm sm:text-base">{image.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Shape Divider */}
        <WaveShapeDivider color="accent" className="h-24 -mb-1" />

        {/* Call to Action Section */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10 overflow-hidden">
          {/* Geometric Background */}
          <GeometricBackground variant="grid" className="opacity-20" opacity={1} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Interested in Our Services?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-medium">
              Get in touch with us today to learn more about how we can help keep your workforce healthy
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
              <a href="tel:915-300-2276">
                <Button className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm md:text-base px-6 sm:px-10 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-primary w-full sm:w-auto">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call 915.300.2276
                </Button>
              </a>
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-white text-xs sm:text-sm md:text-base px-6 sm:px-10 py-3 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-rotating-glow border-2 border-accent w-full sm:w-auto">
                  <span>Get in Touch</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Full Screen View */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl w-full h-auto max-h-[90vh] overflow-hidden p-4 sm:p-6 lg:p-8 bg-black/95 border border-accent/20 rounded-lg">
          <DialogTitle className="sr-only">
            {selectedIndex !== null ? galleryImages[selectedIndex].title : 'Gallery Image'}
          </DialogTitle>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {selectedIndex !== null && (
              <>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-accent/20 hover:bg-accent/40 transition-colors animate-rotating-glow"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Image Title and Counter */}
                <div className="w-full mt-4 sm:mt-6 text-center">
                  <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2">
                    {galleryImages[selectedIndex].title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {selectedIndex + 1} / {galleryImages.length}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 w-full">
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/30 hover:bg-white/10 text-white hover:text-white"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>

                  <div className="flex gap-1 sm:gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === selectedIndex
                            ? "bg-accent w-8 sm:w-10"
                            : "bg-white/30 w-2 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/30 hover:bg-white/10 text-white hover:text-white"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
