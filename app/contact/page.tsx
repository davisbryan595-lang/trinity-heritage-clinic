"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // In production, this would send to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We'll contact you soon.")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-accent/20 via-background to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to cherish your health? Reach out to Trinity Heritage Clinic today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a Service</option>
                  <option value="initial">Initial Consultation</option>
                  <option value="follow-up">Follow-Up Visit</option>
                  <option value="wellness">Wellness Package</option>
                  <option value="other">Other Inquiry</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your health goals or concerns..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-8">Contact Information</h2>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      2204 Joe Battle Blvd D203
                      <br />
                      El Paso, TX 79938
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30">
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Phone</h3>
                    <a href="tel:915-300-2276" className="text-accent hover:text-accent/80 font-semibold">
                      (915) 300-2276
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30">
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Email</h3>
                    <a
                      href="mailto:Trinityheritagecliic@gmail.com"
                      className="text-accent hover:text-accent/80 break-all"
                    >
                      Trinityheritagecliic@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30">
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="font-serif text-lg font-semibold text-primary-foreground italic">
                  "Cherish Your Health... We Do!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-center">
        <h2 className="font-serif text-3xl font-bold text-accent-foreground mb-4">Still Have Questions?</h2>
        <p className="text-accent-foreground/90 mb-6">Give us a call or schedule your free consultation online</p>
        <a href="tel:915-300-2276">
          <Button size="lg" className="bg-accent-foreground text-accent hover:bg-white">
            Call (915) 300-2276
          </Button>
        </a>
      </section>
    </div>
  )
}
