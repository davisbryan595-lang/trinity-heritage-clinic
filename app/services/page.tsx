"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Heart, Activity, Shield, Award, Users, CheckCircle2, Stethoscope, PhoneOff } from "lucide-react"

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
            Occupational Medicine Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive occupational health services for your workforce
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            Our Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Heritage Healthcare Clinic provides a full range of occupational medicine services
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Physical Exams",
                items: [
                  "Pre-Employment/Placement Exams",
                  "Annual Physical/Surveillance Exams",
                  "Return to Work Exams",
                  "Fitness for Duty Exams",
                  "Post Exposure Exams",
                  "Termination Exams",
                  "DOT Exams",
                  "Respirator Exams",
                  "Executive Physical Exams"
                ]
              },
              {
                icon: Heart,
                title: "Injury & Illness Evaluation",
                items: [
                  "Work-Related Injury Assessment",
                  "Non-Work Related Illness Care",
                  "Occupational Disease Evaluation",
                  "Injury Management & Treatment",
                  "Fitness for Duty Determination",
                  "Treatment Coordination with Specialists",
                  "Medical Case Management",
                  "Return to Work Planning",
                  "Documentation & Reporting"
                ]
              },
              {
                icon: Activity,
                title: "Diagnostic Testing",
                items: [
                  "Spirometry (Lung Function Testing)",
                  "Audiometry (Hearing Tests)",
                  "Vision Screening",
                  "EKG (Electrocardiogram)",
                  "Blood Work & Routine Labs",
                  "Urinalysis",
                  "Respirator Fit Testing",
                  "Baseline Testing",
                  "Follow-up Testing"
                ]
              },
              {
                icon: Shield,
                title: "Substance Testing & Health",
                items: [
                  "Alcohol Testing",
                  "Urine Drug Screening",
                  "MRO (Medical Review Officer) Services",
                  "Immunization Services",
                  "Health & Safety Consultation",
                  "Wellness & Health Promotions",
                  "Travel Medicine",
                  "Occupational Health Counseling",
                  "Documentation Services"
                ]
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-white border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary-foreground">{service.title}</h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            Specialized Occupational Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Additional services to support your business health and safety needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-2 border-accent/20">
              <h3 className="font-serif font-bold text-2xl text-primary-foreground mb-4">
                Work Site Visits
              </h3>
              <p className="text-muted-foreground mb-6">
                Work site visits are available upon request by employers and provide an opportunity to identify and abate potential/actual hazards and exposures at the work site.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Identify and abate hazards and exposures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Familiarize healthcare provider with work environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Improved occupational health and safety planning</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border-2 border-accent/20">
              <h3 className="font-serif font-bold text-2xl text-primary-foreground mb-4">
                Travel Medicine
              </h3>
              <p className="text-muted-foreground mb-6">
                Heritage Healthcare Clinic offers focused physical exams and travel-related vaccinations and prophylactic medications/treatments intended to keep your employees healthy while on business travel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Individualized travel health assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Travel-specific vaccinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Country-specific medical guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* On-Site Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">
            On-Site Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Bring healthcare services directly to your workplace
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Health Fairs & Screening",
                desc: "On-site employee health screenings and wellness fairs to identify health risks and promote employee wellness."
              },
              {
                icon: Briefcase,
                title: "Health Topics Presentations",
                desc: "Educational seminars and 'Lunch and Learn' presentations on relevant health and safety topics for your workforce."
              },
              {
                icon: Activity,
                title: "Seasonal Flu Vaccination",
                desc: "On-site flu vaccination clinics to protect your employees during flu season and minimize workplace illness."
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-white border-2 border-primary/20 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-lg bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">
            Why Choose Heritage Healthcare Clinic
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "Board Certified Physicians",
                desc: "Experienced occupational medicine physicians certified and licensed to practice without restrictions."
              },
              {
                icon: Stethoscope,
                title: "Comprehensive Services",
                desc: "Full range of occupational medicine services from physical exams to injury treatment to diagnostic testing."
              },
              {
                icon: Shield,
                title: "Integrated Care",
                desc: "We coordinate with your employee's physicians and specialists to ensure optimal health outcomes."
              },
              {
                icon: Users,
                title: "Standardized Communication",
                desc: "Professional occupational health service reporting system that meets the needs of most businesses."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 bg-white border-2 border-accent/20">
                <div className="flex gap-4">
                  <feature.icon className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent text-center">
        <h2 className="font-serif text-3xl font-bold text-accent-foreground mb-4">
          Ready to Partner with Heritage Healthcare Clinic?
        </h2>
        <p className="text-accent-foreground/90 mb-6">Contact us today to discuss your occupational health needs</p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-accent-foreground text-accent hover:bg-white">
              Contact Us
            </Button>
          </Link>
          <a href="tel:817-453-7522">
            <Button size="lg" className="bg-accent-foreground text-accent hover:bg-white">
              Call (817) 453-7522
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
