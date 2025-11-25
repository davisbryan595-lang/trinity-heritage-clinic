"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4">About Trinity Heritage Clinic</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Committed to cherishing your health with evidence-based, patient-centered care in El Paso
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/professional-male-physician-dr-victor-nwiloh-heads.jpg" alt="Dr. Victor Nwiloh, MD" className="rounded-xl shadow-lg w-full" />
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4 text-primary-foreground">Victor Nwiloh, MD</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                With over 10 years of specialized experience in internal medicine, Dr. Victor Nwiloh is dedicated to
                providing comprehensive, compassionate care that honors each patient's unique journey. His
                evidence-based approach combines the latest medical research with a holistic understanding of wellness.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-2">Expertise & Specializations</h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Preventive medicine & wellness optimization</li>
                    <li>• Chronic disease management (diabetes, hypertension, hyperlipidemia)</li>
                    <li>• Evidence-based treatment planning</li>
                    <li>• Occupational medicine & workplace health</li>
                    <li>• USCIS-certified medical examinations</li>
                    <li>• Holistic patient-centered approach</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-foreground mb-2">Philosophy</h4>
                  <p className="text-muted-foreground text-sm">
                    Dr. Nwiloh believes that optimal health comes from combining rigorous medical science with genuine
                    patient partnership. He's committed to creating a safe, nonjudgmental space where patients feel
                    heard and empowered on their journey to lifelong vitality.
                  </p>
                </div>
              </div>

              <Link href="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule Your First Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">Our Story</h2>

          <Card className="p-12 bg-white border-2 border-accent/30">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary-foreground">
              Trinity Heritage Clinic: A Sanctuary for Preventive & Chronic Care
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Trinity Heritage Clinic was founded on the principle that every patient deserves exceptional,
                personalized internal medicine care. The name reflects our commitment to honoring the rich heritage of
                medical excellence while nurturing the trinity of health: physical wellness, mental clarity, and
                emotional resilience.
              </p>

              <p>
                Located in the heart of El Paso, our clinic serves adults and families seeking comprehensive,
                evidence-based care. We specialize in preventive medicine to help you stay healthy, chronic disease
                management to optimize your quality of life, and acute care when you need us most.
              </p>

              <p>
                What sets us apart is our unwavering dedication to seeing you as a whole person—not just a collection of
                symptoms. Dr. Nwiloh takes the time to listen, understand your unique health needs, and partner with you
                to create sustainable wellness solutions that fit your life.
              </p>

              <p>
                We believe that lasting health comes from prevention, education, and genuine partnership. That's why
                we're here: to cherish your health, empower your choices, and support you every step of the way.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Compassion", desc: "We approach every patient with genuine empathy and understanding." },
              { title: "Excellence", desc: "We stay current with evidence-based medicine and best practices." },
              {
                title: "Partnership",
                desc: "We collaborate with you to create achievable, personalized health plans.",
              },
              { title: "Integrity", desc: "We provide transparent, honest communication about your health." },
              { title: "Inclusivity", desc: "We celebrate and respect the diversity of every patient and community." },
              { title: "Wellness", desc: "We focus on holistic health—body, mind, and spirit." },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gradient-to-br from-primary/5 to-transparent border border-accent/20 hover:border-accent transition-colors"
              >
                <h3 className="font-serif font-bold text-lg text-primary-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
