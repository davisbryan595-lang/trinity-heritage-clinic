"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Pill, Clock } from "lucide-react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 bg-gradient-to-br from-primary/40 via-background to-background overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Nurturing Your Health Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Led by <span className="font-semibold">Victor Nwiloh, MD</span> – Comprehensive Internal Medicine Care
                for Chronic & Acute Conditions
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="text-accent font-semibold">Preventive Care</span> •{" "}
                <span className="text-accent font-semibold">Routine Visits</span> •{" "}
                <span className="text-accent font-semibold">Healthy Living Guidance</span>
              </p>

              <Link href="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 mb-8 text-lg px-8">
                  Free 15-Min Consult
                </Button>
              </Link>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-accent">1K+</p>
                  <p className="text-sm text-muted-foreground">Patients Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">Same Week</p>
                  <p className="text-sm text-muted-foreground">Appointments</p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <img
                src="/female-doctor-with-stethoscope-examining-patient-c.jpg"
                alt="Dr. Nwiloh providing compassionate patient care"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">Our Core Services</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Tailored internal medicine solutions for your unique health needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Preventive Care",
                desc: "Routine check-ups, vaccinations, and health screenings to keep you thriving.",
                link: "/services",
              },
              {
                icon: Pill,
                title: "Chronic Management",
                desc: "Expert care for diabetes, hypertension, and long-term health conditions.",
                link: "/services",
              },
              {
                icon: Clock,
                title: "Acute Visits",
                desc: "Prompt treatment for sudden illnesses and immediate medical concerns.",
                link: "/services",
              },
            ].map((service, idx) => (
              <Link key={idx} href={service.link}>
                <Card className="p-8 border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all cursor-pointer h-full bg-gradient-to-br from-primary/5 to-transparent">
                  <service.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-3 text-primary-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <div className="mt-4 text-accent font-semibold">Learn More →</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            What Our Patients Say
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Real experiences from individuals who found healing and hope
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Dr. Nwiloh provided exceptional care during my health challenges. Her compassionate approach and expertise helped me develop a sustainable wellness plan. I finally feel like myself again!",
                author: "Sarah M.",
                condition: "Preventive Care",
              },
              {
                quote:
                  "Professional, knowledgeable, and truly caring. I felt heard and supported throughout my treatment journey. The personalized approach was life-changing for my chronic condition management.",
                author: "Michael R.",
                condition: "Chronic Condition Management",
              },
              {
                quote:
                  "After years of searching for the right physician, I found everything I needed at Trinity Heritage. Dr. Nwiloh's holistic approach to healthcare is exactly what I was looking for.",
                author: "Jennifer L.",
                condition: "Holistic Wellness",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 bg-white border border-border shadow-md hover:shadow-lg transition-shadow">
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-accent font-semibold">{testimonial.condition}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6 text-white">Start Your Wellness Journey Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Join over 1,000 patients who trust Trinity Heritage Clinic with their health
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 text-lg px-8">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
