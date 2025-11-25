"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, AlertTriangle, Heart, Activity } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/40 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-foreground mb-4">Health Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Empowering your health journey with knowledge and tools
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-primary-foreground">
            Featured Wellness Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Diabetes Management",
                excerpt:
                  "A comprehensive guide to managing blood sugar levels, nutrition planning, and medication optimization for lifelong wellness.",
                icon: BookOpen,
              },
              {
                title: "Hypertension: Prevention & Control",
                excerpt:
                  "Learn evidence-based strategies for managing blood pressure through lifestyle modifications and medical treatment.",
                icon: Heart,
              },
              {
                title: "Building Your Healthy Living Plan",
                excerpt:
                  "Discover how to create sustainable wellness habits including exercise, nutrition, sleep, and stress management.",
                icon: Activity,
              },
            ].map((article, idx) => (
              <Card
                key={idx}
                className="p-6 bg-gradient-to-br from-primary/5 to-transparent border border-border hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <article.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-serif font-bold text-lg text-primary-foreground mb-3">{article.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{article.excerpt}</p>
                <a href="#" className="text-accent hover:text-accent/80 font-semibold text-sm">
                  Read More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-4 text-primary-foreground">Downloadable Tools</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Practical resources to support your wellness journey
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Personal Wellness Tracker",
                desc: "Monitor your health metrics, medications, and wellness goals in one handy PDF.",
              },
              {
                title: "Nutrition & Diet Planning Guide",
                desc: "Evidence-based nutrition recommendations for optimal health and chronic disease management.",
              },
              {
                title: "Exercise & Activity Planner",
                desc: "Personalized exercise routines and activity guidelines for different fitness levels.",
              },
              {
                title: "Medication Management Checklist",
                desc: "Keep track of your medications, dosages, and refill schedules.",
              },
            ].map((resource, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white border border-border hover:shadow-lg transition-shadow flex items-center justify-between"
              >
                <div>
                  <div className="flex gap-3 items-start mb-2">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <h3 className="font-serif font-bold text-primary-foreground">{resource.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{resource.desc}</p>
                </div>
                <Button className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 flex-shrink-0">
                  Download
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Support */}
      <section className="py-20 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/40 rounded-xl mx-4 md:mx-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-serif text-2xl font-bold text-red-900 dark:text-red-100 mb-4">24/7 Crisis Support</h2>
              <p className="text-red-800 dark:text-red-200 mb-6">
                If you're experiencing a medical emergency or mental health crisis, please reach out for immediate
                support.
              </p>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="font-semibold text-red-900 dark:text-red-100">Emergency:</span>
                  <a href="tel:911" className="text-red-600 hover:text-red-700 font-bold">
                    Call 911
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="font-semibold text-red-900 dark:text-red-100">Crisis Hotline:</span>
                  <a href="tel:988" className="text-red-600 hover:text-red-700 font-bold">
                    988 Suicide & Crisis Lifeline
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
