"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Phone, Clock, AlertCircle, MapPin, FileText, Menu, X } from "lucide-react"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function PatientFormsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15">
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
            <Link
              href="/"
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
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-2 items-center flex-wrap justify-center">
              {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/#about" },
                { id: "team", label: "Team", href: "/#team" },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Location", href: "/location" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "patient-forms", label: "Forms", href: "/patient-forms" },
                { id: "contact", label: "Contact", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-xs lg:text-sm font-semibold transition-all duration-300 relative group px-2 py-1 ${
                    link.href === "/patient-forms" ? "text-primary font-bold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-8">
              <a href="tel:915-300-2276">
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
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              Patient Forms
            </h1>
            <p className="text-xl text-primary/80 mb-6 max-w-2xl mx-auto font-semibold">
              Download and complete your paperwork at home
            </p>
            <p className="text-lg text-primary/90 max-w-3xl mx-auto leading-relaxed font-medium">
              To save time during your visit, please download, print, and fill out the form below. Bring the completed form to your appointment, or fax it securely to <span className="font-semibold">1-866-665-6659</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Download Card */}
          <Card className="border-2 border-primary/40 overflow-hidden mb-12 hover:border-accent/60 transition-colors bg-white shadow-lg">
            <div className="p-8 md:p-10 bg-gradient-to-br from-white to-primary/5">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    New Patient Paperwork
                  </h2>
                  <p className="text-sm font-semibold text-primary/70">February 2018</p>
                </div>
              </div>

              <p className="text-foreground mb-8 leading-relaxed">
                This comprehensive form covers all essential patient information including:
              </p>

              <ul className="grid md:grid-cols-2 gap-3 mb-10">
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Demographics and contact information
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Insurance information
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Personal and family medical history
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Current medications and allergies
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Surgical and hospitalization history
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Social history and screening questions
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Depression screening (PHQ-2)
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Alcohol/drug history (AUDIT-C)
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Preventive tests and vaccinations
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="/forms/Heritage-Healthcare-Clinic-New-Patient-Paperwork.pdf"
                  download="Heritage-Healthcare-Clinic-New-Patient-Paperwork.pdf"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/95 hover:to-accent/85 text-accent-foreground font-bold text-lg py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download New Patient Form (PDF)
                  </Button>
                </a>
              </div>

              <div className="bg-accent/15 border-l-4 border-accent px-4 py-3 rounded">
                <p className="text-sm text-accent font-semibold">
                  ✓ Securely complete at home • ✓ Bring to your appointment or fax
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="p-8 border-2 border-primary/40 hover:border-accent/60 transition-colors bg-white shadow-md">
              <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                Contact Us
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">General Phone</p>
                  <a
                    href="tel:915-300-2276"
                    className="text-lg font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    915.300.2276
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">After Hours Urgent</p>
                  <a
                    href="tel:817-966-3999"
                    className="text-lg font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    817.966.3999
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Fax Forms</p>
                  <p className="text-lg font-bold text-foreground">1-866-665-6659</p>
                </div>
              </div>
            </Card>

            {/* Location Info */}
            <Card className="p-8 border-2 border-primary/40 hover:border-accent/60 transition-colors bg-white shadow-md">
              <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Our Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Address</p>
                  <p className="text-foreground font-medium">
                    2204 Joe Battle Blvd, STE D204
                    <br />
                    El Paso, TX 79938
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Office Hours</p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Monday - Friday:</span> 8:30 AM - 5:30 PM
                    <br />
                    <span className="text-xs text-muted-foreground">(Closed 12:00 PM - 1:00 PM)</span>
                    <br />
                    <span className="font-semibold">Saturday - Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Instructions Card */}
          <Card className="p-8 border-2 border-primary/40 hover:border-accent/60 transition-colors bg-white shadow-md">
            <h3 className="font-bold text-primary mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              How to Submit Your Forms
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Download & Print</p>
                  <p className="text-sm text-muted-foreground">
                    Click the download button above to get the PDF form
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Complete at Home</p>
                  <p className="text-sm text-muted-foreground">
                    Fill out all sections clearly and completely before your appointment
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Bring or Fax</p>
                  <p className="text-sm text-muted-foreground">
                    Bring the completed form to your appointment OR fax it to 1-866-665-6659
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* HIPAA Notice */}
          <div className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Your Privacy Matters</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                When you complete and fax or bring your form to us, your protected health information (PHI) is handled securely in accordance with HIPAA regulations. We do not store your health data in any online system, ensuring maximum privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
