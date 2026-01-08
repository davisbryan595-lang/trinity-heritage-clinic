"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, AlertCircle, CheckCircle, Download, FileText, Menu, X, Mail } from "lucide-react"
import { GeometricBackground, GeometricAccent } from "@/components/geometric-background"
import { ServicesDropdown } from "@/components/ServicesDropdown"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    availability1: "",
    availability2: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", availability1: "", availability2: "" })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
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
              <div className="relative w-64 h-24 sm:w-80 sm:h-32 lg:w-96 lg:h-40">
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
                  <span className="text-xl font-serif font-bold text-primary">Trinity Heritage Healthcare</span>
                  <span className="text-sm text-accent font-semibold">Clinic</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-2 items-center justify-center flex-nowrap">
              {[
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/#about" },
                { id: "team", label: "Team", href: "/#team" },
                { id: "gallery", label: "Gallery", href: "/gallery" },
                { id: "location", label: "Contact", href: "/location" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "contact", label: "Forms", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-xs lg:text-sm font-semibold transition-all duration-300 relative group px-2 py-1 ${
                    link.href === "/contact" ? "text-primary font-bold" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <ServicesDropdown />
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
                { id: "location", label: "Contact", href: "/location" },
                { id: "services", label: "Services", href: "/services" },
                { id: "wellness", label: "Wellness", href: "/wellness" },
                { id: "contact", label: "Forms", href: "/contact" }
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
      <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary/15 via-background to-accent/10 overflow-hidden">
        {/* Geometric Background */}
        <GeometricBackground variant="diamonds" className="opacity-10" opacity={1} animated={true} />

        {/* Floating Geometric Accents */}
        <GeometricAccent className="absolute top-10 right-20 opacity-20 animate-diamond-float" />
        <GeometricAccent className="absolute -bottom-10 left-10 opacity-15" style={{ animationDelay: "0.5s" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 drop-shadow-lg italic">Always Accepting New Patients...</span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 drop-shadow-lg">Contact Us Today</h1>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-tertiary rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-background via-accent/3 to-primary/5 overflow-hidden">
        {/* Subtle geometric background */}
        <GeometricBackground variant="organic" className="opacity-5" opacity={1} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">

              {/* New Patient Form Card */}
              <Card className="p-6 border-2 border-accent/40 hover:border-accent/80 transition-all duration-300 bg-gradient-to-br from-accent/15 via-accent/8 to-transparent hover:shadow-lg hover:scale-105 transform">
                <div className="flex gap-4 mb-4">
                  <div className="p-3 bg-accent/25 rounded-lg">
                    <FileText className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">New Patient Form</h3>
                    <p className="text-foreground text-sm mb-4 leading-relaxed">
                      Download and complete your paperwork at home to save time at your appointment.
                    </p>
                    <a
                      href="/forms/AllForms.pdf"
                      download="AllForms.pdf"
                      className="inline-block"
                    >
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        Download Form
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              {/* How to Submit Your Forms Card */}
              <Card className="p-5 border-2 border-accent/40 hover:border-accent/80 transition-all duration-300 bg-gradient-to-br from-accent/10 to-transparent">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                  How to Submit Your Forms
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white font-bold text-xs">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs mb-0.5">Download & Print</p>
                      <p className="text-xs text-muted-foreground">
                        Click the download button above
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white font-bold text-xs">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs mb-0.5">Complete at Home</p>
                      <p className="text-xs text-muted-foreground">
                        Fill out before your appointment
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent text-white font-bold text-xs">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs mb-0.5">Bring or Fax</p>
                      <p className="text-xs text-muted-foreground">
                        866-222-5219
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Your Privacy Matters Card */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-900 mb-1 text-xs">Your Privacy Matters</p>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    Your health information is handled securely per HIPAA. We do not store your data in any online system.
                  </p>
                </div>
              </div>


              {/* Phone Card */}
              <Card className="p-6 border-2 border-tertiary/40 hover:border-tertiary/80 transition-all duration-300 bg-gradient-to-br from-tertiary/10 to-primary/5 hover:shadow-lg hover:scale-105 transform">
                <div className="flex gap-4">
                  <div className="p-3 bg-tertiary/20 rounded-lg">
                    <Phone className="w-6 h-6 text-tertiary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:915-300-2276" className="text-tertiary hover:text-tertiary/80 font-bold text-sm block transition-colors">
                      915.300.2276
                    </a>
                  </div>
                </div>
              </Card>

              {/* Fax Card */}
              <Card className="p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 bg-gradient-to-br from-primary/8 to-accent/5 hover:shadow-lg hover:scale-105 transform">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fax</h3>
                    <p className="text-foreground text-sm font-semibold">
                      866-222-5219
                    </p>
                  </div>
                </div>
              </Card>

              {/* Email Card */}
              <Card className="p-6 border-2 border-accent/40 hover:border-accent/80 transition-all duration-300 bg-gradient-to-br from-accent/10 to-tertiary/5 hover:shadow-lg hover:scale-105 transform">
                <div className="flex gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:Trinityheritageclinic@gmail.com" className="text-accent hover:text-accent/80 font-bold text-sm block transition-colors">
                      Trinityheritageclinic@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="p-8 md:p-10 border-2 border-accent/60 hover:border-accent/80 transition-all duration-300 bg-gradient-to-br from-accent/20 via-primary/12 to-tertiary/10 shadow-xl hover:shadow-2xl">
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-foreground font-medium mb-8 text-lg leading-relaxed">Fill out the form below and we'll get back to you as soon as possible.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mb-8"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-primary mb-2 block">
                      Name <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-primary mb-2 block">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-primary mb-2 block">
                      Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-primary mb-2 block">
                      Purpose of Contacting Us <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-primary mb-2 block">
                      Message <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share your message or questions here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                    />
                  </div>

                  {/* Availability Section */}
                  <div className="pt-4 border-t border-primary/20">
                    <h3 className="text-sm font-semibold text-primary mb-4">Appointment Availability <span className="text-muted-foreground text-xs">(optional)</span></h3>
                    <p className="text-sm text-muted-foreground mb-4">Please provide two suitable times when you're available for an appointment. We'll confirm which time works best.</p>

                    {/* First Availability */}
                    <div>
                      <Label htmlFor="availability1" className="text-sm font-semibold text-primary mb-2 block">
                        First Available Time
                      </Label>
                      <Input
                        id="availability1"
                        name="availability1"
                        type="datetime-local"
                        value={formData.availability1}
                        onChange={handleChange}
                        className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                      />
                    </div>

                    {/* Second Availability */}
                    <div className="mt-4">
                      <Label htmlFor="availability2" className="text-sm font-semibold text-primary mb-2 block">
                        Second Available Time
                      </Label>
                      <Input
                        id="availability2"
                        name="availability2"
                        type="datetime-local"
                        value={formData.availability2}
                        onChange={handleChange}
                        className="w-full bg-white/90 border-2 border-primary/40 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 hover:bg-white transition-colors hover:border-primary/60"
                      />
                    </div>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-tertiary/20 border-2 border-tertiary/50 rounded-lg flex gap-3 animate-slide-up">
                      <CheckCircle className="w-5 h-5 text-tertiary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Message sent successfully!</p>
                        <p className="text-sm text-foreground/80">We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg flex gap-3 animate-slide-up">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900">Error sending message</p>
                        <p className="text-sm text-red-800">Please try again or call us directly at (817) 453-7522.</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Note */}
                  <p className="text-xs text-muted-foreground text-center pt-2 leading-relaxed">
                    We'll get back to you as soon as possible. For urgent matters, please call us directly at <span className="font-semibold text-primary">915.300.2276</span>.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 pt-8 border-t border-accent/30 text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-green-700 whitespace-nowrap">
            Visit us today, walk-ins are always welcome!
          </p>
        </div>
      </section>
    </div>
  )
}
