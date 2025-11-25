"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle, Heart, Pill, Users, TrendingUp, Activity } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/40 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4">
            Comprehensive Internal Medicine Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Tailored care for your unique health needs and life circumstances
          </p>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            Conditions We Treat
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Expert management of chronic and acute conditions
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Diabetes Management",
                desc: "Comprehensive care for Type 1 & Type 2 diabetes including nutrition guidance, blood sugar monitoring, and medication optimization.",
              },
              {
                icon: Heart,
                title: "Hypertension Control",
                desc: "Blood pressure management strategies combining medication, lifestyle modifications, and regular monitoring.",
              },
              {
                icon: Pill,
                title: "Hyperlipidemia",
                desc: "Cholesterol and lipid management through dietary counseling and evidence-based pharmaceutical interventions.",
              },
              {
                icon: Activity,
                title: "Thyroid Disease",
                desc: "Complete thyroid management including hormone optimization and symptom relief for hypothyroidism and hyperthyroidism.",
              },
              {
                icon: AlertCircle,
                title: "Asthma & COPD",
                desc: "Respiratory condition management with personalized treatment plans and emergency preparedness.",
              },
              {
                icon: Users,
                title: "Smoking Cessation",
                desc: "Comprehensive programs combining counseling, medications, and support to help you quit for good.",
              },
            ].map((condition, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="flex gap-4">
                  <condition.icon className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary-foreground mb-2">{condition.title}</h3>
                    <p className="text-sm text-muted-foreground">{condition.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Services */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">Treatment Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Evidence-based therapeutic approaches tailored to your needs
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Preventive Care",
                items: [
                  "Routine wellness exams",
                  "Vaccinations",
                  "Health screenings",
                  "Exercise counseling",
                  "Nutrition planning",
                ],
              },
              {
                title: "Routine Follow-Ups",
                items: [
                  "Chronic disease management",
                  "Medication reviews",
                  "Lab monitoring",
                  "Symptom assessment",
                  "Progress evaluation",
                ],
              },
              {
                title: "Healthy Living Guidance",
                items: [
                  "Lifestyle modification coaching",
                  "Dietary recommendations",
                  "Stress management",
                  "Sleep optimization",
                  "Wellness planning",
                ],
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-white border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-serif font-bold text-xl text-primary-foreground mb-6 text-center">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Populations Served */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            Populations We Serve
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Inclusive care for all ages and backgrounds
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Adults (18+)",
              "Working Professionals",
              "Families",
              "Seniors (65+)",
              "Active Lifestyle Enthusiasts",
              "Wellness-Focused Individuals",
            ].map((pop, idx) => (
              <Card
                key={idx}
                className="p-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30 text-center"
              >
                <h3 className="font-serif font-bold text-lg text-primary-foreground">{pop}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">
            What to Expect at Trinity Heritage
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Comprehensive Initial Consultation",
                desc: "We begin with a thorough assessment of your medical history, current health concerns, and wellness goals.",
              },
              {
                step: "02",
                title: "Personalized Health Plan",
                desc: "Based on our discussion and medical evaluation, we create a tailored treatment and wellness plan aligned with your needs.",
              },
              {
                step: "03",
                title: "Evidence-Based Treatment",
                desc: "We implement treatment combining the latest medical science with holistic wellness principles.",
              },
              {
                step: "04",
                title: "Ongoing Support & Monitoring",
                desc: "Regular follow-ups, progress monitoring, and plan adjustments ensure you continue thriving.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <span className="inline-block bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-center">
        <h2 className="font-serif text-3xl font-bold text-accent-foreground mb-4">
          Ready to Experience Exceptional Care?
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-accent-foreground text-accent hover:bg-white">
            Schedule Your Consultation Today
          </Button>
        </Link>
      </section>
    </div>
  )
}
