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

      {/* Migration Service Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">
            USCIS Authorized Immigration Medical Services
          </h2>

          <Card className="p-12 bg-white border-2 border-accent/30 mb-8">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary-foreground">
              Certified Civil Surgeon Services
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our physician is <strong>USCIS certified and authorized</strong> to conduct medical examinations with a designation as a civil surgeon by the United States Citizenship and Immigration Services (USCIS). This certification ensures that immigration medical exams are completed to the highest federal standards.
              </p>

              <p>
                We provide comprehensive migration medical services including the USCIS Form I-693, Report of Medical Examination and Vaccination Record, which is an essential document for immigration applications and medical-based immigration cases.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-4">Services We Provide:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>USCIS I-693 Forms, Certified and Sealed Envelope</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Patient Copy I-693</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Comprehensive Physical Examination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Vaccination Status Verification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>TB Testing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Complete Blood Testing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-foreground mb-4">Additional Information:</h4>
                  <div className="space-y-4 text-sm">
                    <p>
                      The USCIS Form I-693 is obtainable through the official USCIS website at <strong>https://www.uscis.gov/i-693</strong>. The USCIS site offers detailed guidelines and support on how to complete the application.
                    </p>
                    <p>
                      Our team is available to assist with all medical-related questions regarding immigration medical examinations. For immigration questions that are non-medical in nature, we recommend seeking the service of an immigration attorney.
                    </p>
                    <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-primary-foreground">
                        Call today for pricing information. Additional fees apply for vaccine administration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
