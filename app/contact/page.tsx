"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Clock, AlertCircle, CheckCircle, Download, FileText } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

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
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with Heritage Healthcare Clinic. We're here to help and look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-6">Contact Information</h2>
              </div>

              {/* Address Card */}
              <Card className="p-6 border-2 border-primary/20 hover:border-accent/40 transition-colors">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground text-sm">
                      1475 Heritage Pkwy Ste 225<br />
                      Mansfield, TX 76063
                    </p>
                  </div>
                </div>
              </Card>

              {/* Phone Card */}
              <Card className="p-6 border-2 border-primary/20 hover:border-accent/40 transition-colors">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">Phone</h3>
                    <a href="tel:817-453-7522" className="text-accent hover:text-accent/80 font-semibold text-sm block">
                      (817) 453-7522
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">After hours urgent:</p>
                    <a href="tel:817-966-3999" className="text-accent hover:text-accent/80 text-sm">
                      (817) 966-3999
                    </a>
                  </div>
                </div>
              </Card>

              {/* Fax Card */}
              <Card className="p-6 border-2 border-primary/20 hover:border-accent/40 transition-colors">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">Fax</h3>
                    <p className="text-muted-foreground text-sm font-semibold">
                      1-866-665-6659
                    </p>
                  </div>
                </div>
              </Card>

              {/* Hours Card */}
              <Card className="p-6 border-2 border-primary/20 hover:border-accent/40 transition-colors">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      <span className="block font-semibold text-primary-foreground">Monday - Friday</span>
                      8:30 AM - 5:30 PM<br />
                      <span className="text-xs">(Closed 12:00 PM - 1:00 PM)</span>
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      <span className="block font-semibold text-primary-foreground">Saturday - Sunday</span>
                      Closed
                    </p>
                  </div>
                </div>
              </Card>

              {/* Tagline */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg border border-primary/20 mt-8">
                <p className="font-serif text-lg font-semibold text-primary-foreground italic">
                  "Always Friendly. Always Knowledgeable."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="p-8 md:p-10 border-2 border-primary/20">
                <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-primary-foreground mb-2 block">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-primary-foreground mb-2 block">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-primary-foreground mb-2 block">
                      Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(XXX) XXX-XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-primary-foreground mb-2 block">
                      Subject <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-primary-foreground mb-2 block">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please share your message or questions here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">Message sent successfully!</p>
                        <p className="text-sm text-green-800">We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
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
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 font-semibold text-base"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Note */}
                  <p className="text-xs text-muted-foreground text-center pt-2">
                    We'll get back to you as soon as possible. For urgent matters, please call us directly.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
