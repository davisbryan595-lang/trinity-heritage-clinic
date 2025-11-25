"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Clear, upfront pricing with flexible payment options
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">Service Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-border hover:border-accent hover:shadow-xl transition-all bg-white">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">Initial Visit</h3>
              <p className="text-accent text-3xl font-bold mb-1">$150</p>
              <p className="text-sm text-muted-foreground mb-6">90-minute comprehensive evaluation</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete medical history",
                  "Physical examination",
                  "Lab work if needed",
                  "Treatment plan development",
                  "Health goals discussion",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </Link>
            </Card>

            <Card className="p-8 border-4 border-accent bg-gradient-to-br from-accent/5 to-primary/5 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">Follow-Up Visit</h3>
              <p className="text-accent text-3xl font-bold mb-1">$100</p>
              <p className="text-sm text-muted-foreground mb-6">30-60 minute check-up</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Progress monitoring",
                  "Medication adjustments",
                  "Symptom management",
                  "Lab review & planning",
                  "Preventive guidance",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </Link>
            </Card>

            <Card className="p-8 border-2 border-border hover:border-accent hover:shadow-xl transition-all bg-white">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">Annual Wellness Package</h3>
              <p className="text-accent text-3xl font-bold mb-1">$800</p>
              <p className="text-sm text-muted-foreground mb-6">4 visits + comprehensive labs</p>
              <ul className="space-y-3 mb-8">
                {[
                  "4 scheduled visits",
                  "Annual wellness exam",
                  "Complete lab panel",
                  "Health optimization plan",
                  "Priority scheduling",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary-foreground">
            Payment & Insurance Options
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white border border-border">
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">Insurance</h3>
              <p className="text-muted-foreground mb-6">
                We accept most major insurance plans. If we don't accept your plan, we provide detailed superbills for
                insurance reimbursement.
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-primary-foreground">Accepted Insurers Include:</p>
                <p className="text-muted-foreground">BCBS, Aetna, United Healthcare, Cigna, and others</p>
                <p className="text-muted-foreground italic mt-4">
                  Please contact us to confirm your specific plan coverage.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white border border-border">
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">Self-Pay & Payment Plans</h3>
              <p className="text-muted-foreground mb-6">
                We believe quality healthcare should be accessible. We offer flexible payment options for self-pay
                patients.
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-primary-foreground">Payment Methods:</p>
                <p className="text-muted-foreground">Cash • Credit/Debit • ACH Transfer • Payment Plans Available</p>
                <p className="text-muted-foreground italic mt-4">
                  Ask about our financing options and discounts for prepayment.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Consult CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Start Your Journey</h2>
          <p className="text-xl text-white/90 mb-8">Schedule your free 15-minute consultation with Dr. Nwiloh today</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 text-lg px-8">
              Book Your Free Consult
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
