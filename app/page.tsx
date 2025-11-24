"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Pill, Clock, TrendingUp, Activity, AlertCircle, Users, Check, MapPin, Phone, Mail } from "lucide-react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We'll contact you soon.")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex items-center pt-20 gradient-lavender overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float-up"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-up"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent mb-6 leading-tight">
                Nurturing Your Health Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Led by <span className="font-semibold text-primary-foreground">Victor Nwiloh, MD</span> – Comprehensive
                Internal Medicine Care for Chronic & Acute Conditions
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <span className="text-accent font-semibold">Preventive Care</span> •{" "}
                <span className="text-accent font-semibold">Routine Visits</span> •{" "}
                <span className="text-accent font-semibold">Healthy Living Guidance</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow animate-pulse-glow"
                  >
                    Free 15-Min Consult
                  </Button>
                </a>
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8"
                  >
                    Learn More
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    1K+
                  </p>
                  <p className="text-sm text-muted-foreground">Patients Served</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    4.9/5
                  </p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Same Week
                  </p>
                  <p className="text-sm text-muted-foreground">Appointments</p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/female-doctor-with-stethoscope-examining-patient-c.jpg"
                  alt="Dr. Nwiloh providing compassionate patient care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 bg-gradient-to-r from-primary-foreground via-accent to-accent-green bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Tailored internal medicine solutions for your unique health needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Preventive Care",
                desc: "Routine check-ups, vaccinations, and health screenings to keep you thriving.",
                color: "accent",
              },
              {
                icon: Pill,
                title: "Chronic Management",
                desc: "Expert care for diabetes, hypertension, and long-term health conditions.",
                color: "accent-green",
              },
              {
                icon: Clock,
                title: "Acute Visits",
                desc: "Prompt treatment for sudden illnesses and immediate medical concerns.",
                color: "accent",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className={`p-8 border-2 hover:shadow-lg transition-all cursor-pointer h-full bg-gradient-to-br group ${
                  service.color === "accent-green"
                    ? "border-accent-green/20 hover:border-accent-green from-accent-green/5 to-transparent"
                    : "border-accent/20 hover:border-accent from-primary/5 to-transparent"
                }`}
              >
                <service.icon
                  className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform ${
                    service.color === "accent-green" ? "text-accent-green" : "text-accent"
                  }`}
                />
                <h3 className="font-serif text-xl font-semibold mb-3 text-primary-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <div
                  className={`mt-4 font-semibold group-hover:translate-x-2 transition-transform ${
                    service.color === "accent-green" ? "text-accent-green" : "text-accent"
                  }`}
                >
                  Learn More →
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 gradient-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/professional-male-physician-dr-victor-nwiloh-heads.jpg"
                alt="Dr. Victor Nwiloh, MD"
                className="w-full h-full object-cover"
              />
            </div>
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
                    <li className="flex items-center gap-2">
                      <span className="text-accent">•</span> Preventive medicine & wellness optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">•</span> Chronic disease management (diabetes, hypertension,
                      hyperlipidemia)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">•</span> Evidence-based treatment planning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">•</span> Holistic patient-centered approach
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-foreground mb-2">Philosophy</h4>
                  <p className="text-muted-foreground text-sm">
                    Dr. Nwiloh believes that optimal health comes from combining rigorous medical science with genuine
                    patient partnership. He's committed to creating a safe, nonjudgmental space where patients feel heard
                    and empowered on their journey to lifelong vitality.
                  </p>
                </div>
              </div>

              <a href="#contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow">
                  Schedule Your First Visit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
            Our Story
          </h2>

          <Card className="p-12 bg-gradient-to-br from-primary/5 to-transparent border-2 border-accent/30 glass-card">
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
      <section className="py-20 gradient-lavender">
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
                className="p-6 bg-white/70 border border-accent/20 hover:border-accent transition-all glass-card hover:shadow-lg group"
              >
                <h3 className="font-serif font-bold text-lg text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-foreground via-accent to-accent-green bg-clip-text text-transparent">
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
                color: "accent",
              },
              {
                icon: Heart,
                title: "Hypertension Control",
                desc: "Blood pressure management strategies combining medication, lifestyle modifications, and regular monitoring.",
                color: "accent-green",
              },
              {
                icon: Pill,
                title: "Hyperlipidemia",
                desc: "Cholesterol and lipid management through dietary counseling and evidence-based pharmaceutical interventions.",
                color: "accent",
              },
              {
                icon: Activity,
                title: "Thyroid Disease",
                desc: "Complete thyroid management including hormone optimization and symptom relief for hypothyroidism and hyperthyroidism.",
                color: "accent-green",
              },
              {
                icon: AlertCircle,
                title: "Asthma & COPD",
                desc: "Respiratory condition management with personalized treatment plans and emergency preparedness.",
                color: "accent",
              },
              {
                icon: Users,
                title: "Smoking Cessation",
                desc: "Comprehensive programs combining counseling, medications, and support to help you quit for good.",
                color: "accent-green",
              },
            ].map((condition, idx) => (
              <Card
                key={idx}
                className={`p-6 bg-gradient-to-br border-2 hover:shadow-lg transition-all group ${
                  condition.color === "accent-green"
                    ? "from-accent-green/5 to-transparent border-accent-green/20 hover:border-accent-green"
                    : "from-primary/5 to-transparent border-accent/20 hover:border-accent"
                }`}
              >
                <div className="flex gap-4">
                  <condition.icon
                    className={`w-10 h-10 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform ${
                      condition.color === "accent-green" ? "text-accent-green" : "text-accent"
                    }`}
                  />
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
      <section className="py-20 gradient-lavender">
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
              <Card key={idx} className="p-8 bg-white/70 border border-accent/20 hover:shadow-lg transition-shadow glass-card">
                <h3 className="font-serif font-bold text-xl text-primary-foreground mb-6 text-center">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-foreground via-accent to-accent-green bg-clip-text text-transparent">
            Populations We Serve
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Inclusive care for all ages and backgrounds
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Adults (18+)", color: "accent" },
              { label: "Working Professionals", color: "accent-green" },
              { label: "Families", color: "accent" },
              { label: "Seniors (65+)", color: "accent-green" },
              { label: "Active Lifestyle Enthusiasts", color: "accent" },
              { label: "Wellness-Focused Individuals", color: "accent-green" },
            ].map((pop, idx) => (
              <Card
                key={idx}
                className={`p-8 bg-gradient-to-br border-2 text-center hover:shadow-lg transition-all glass-card group ${
                  pop.color === "accent-green"
                    ? "from-accent-green/10 to-primary/5 border-accent-green/30 hover:border-accent-green"
                    : "from-accent/10 to-primary/5 border-accent/30 hover:border-accent"
                }`}
              >
                <h3
                  className={`font-serif font-bold text-lg text-primary-foreground group-hover:transition-colors ${
                    pop.color === "accent-green"
                      ? "group-hover:text-accent-green"
                      : "group-hover:text-accent"
                  }`}
                >
                  {pop.label}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 gradient-lavender">
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
              <div key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <span className="inline-block bg-gradient-to-r from-accent to-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-serif font-bold text-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                </div>
                <div className="glass-card p-4 rounded-lg flex-grow group-hover:shadow-lg transition-shadow">
                  <h3 className="font-serif font-bold text-lg text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-foreground via-accent to-accent-green bg-clip-text text-transparent">
            Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all bg-white glass-card group">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                Initial Visit
              </h3>
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
              <a href="#contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </a>
            </Card>

            <Card className="p-8 border-4 border-accent bg-gradient-to-br from-accent/10 to-primary/5 shadow-lg relative group glass-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                Follow-Up Visit
              </h3>
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
              <a href="#contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </a>
            </Card>

            <Card className="p-8 border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all bg-white glass-card group">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                Annual Wellness Package
              </h3>
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
              <a href="#contact" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Schedule Now</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-20 gradient-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary-foreground">Payment & Insurance Options</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-white/70 border border-accent/20 glass-card">
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">Insurance</h3>
              <p className="text-muted-foreground mb-6">
                We accept most major insurance plans. If we don't accept your plan, we provide detailed superbills for
                insurance reimbursement.
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-primary-foreground">Accepted Insurers Include:</p>
                <p className="text-muted-foreground">BCBS, Aetna, United Healthcare, Cigna, and others</p>
                <p className="text-muted-foreground italic mt-4">Please contact us to confirm your specific plan coverage.</p>
              </div>
            </Card>

            <Card className="p-8 bg-white/70 border border-accent/20 glass-card">
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">Self-Pay & Payment Plans</h3>
              <p className="text-muted-foreground mb-6">
                We believe quality healthcare should be accessible. We offer flexible payment options for self-pay
                patients.
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-primary-foreground">Payment Methods:</p>
                <p className="text-muted-foreground">Cash • Credit/Debit • ACH Transfer • Payment Plans Available</p>
                <p className="text-muted-foreground italic mt-4">Ask about our financing options and discounts for prepayment.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-foreground to-accent bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-center text-muted-foreground mb-16">Real experiences from individuals who found healing and hope</p>

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
              <Card key={idx} className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-accent/20 hover:border-accent hover:shadow-lg transition-all glass-card group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg animate-pulse-glow">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-foreground group-hover:text-accent transition-colors">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-accent font-semibold">{testimonial.condition}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to cherish your health? Reach out to Trinity Heritage Clinic today
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent glass-card"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent glass-card"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent glass-card"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent glass-card"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent glass-card"
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
                  className="w-full px-4 py-3 bg-white/80 border border-accent/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none glass-card"
                />

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 shadow-lg hover:shadow-xl transition-shadow">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-8">Contact Information</h3>

              <Card className="p-6 bg-white/70 gradient-lavender border-2 border-accent/30 glass-card hover:border-accent transition-all group">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      2204 Joe Battle Blvd D203
                      <br />
                      El Paso, TX 79938
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 gradient-lavender border-2 border-accent/30 glass-card hover:border-accent transition-all group">
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Phone</h4>
                    <a href="tel:915-300-2276" className="text-accent hover:text-accent/80 font-semibold">
                      (915) 300-2276
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/70 gradient-lavender border-2 border-accent/30 glass-card hover:border-accent transition-all group">
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">Email</h4>
                    <a
                      href="mailto:Trinityheritagecliic@gmail.com"
                      className="text-accent hover:text-accent/80 break-all"
                    >
                      Trinityheritagecliic@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <div className="bg-gradient-to-br from-white/80 to-primary/5 p-6 rounded-lg border border-accent/30 glass-card">
                <p className="font-serif text-lg font-semibold text-primary-foreground italic">
                  "Cherish Your Health... We Do!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">Start Your Wellness Journey Today</h2>
          <p className="text-xl text-white/90 mb-8">Join over 1,000 patients who trust Trinity Heritage Clinic with their health</p>
          <a href="#contact">
            <Button size="lg" className="bg-white text-primary-foreground hover:bg-white/90 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
              Schedule Your Free Consultation
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
