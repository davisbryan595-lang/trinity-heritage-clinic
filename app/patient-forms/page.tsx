"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Phone, Clock, AlertCircle, MapPin, FileText } from "lucide-react"

export default function PatientFormsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-accent/5 to-primary/15 pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-primary/20 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              Patient Forms
            </h1>
            <p className="text-xl text-primary/80 mb-6 max-w-2xl mx-auto font-semibold">
              Download and complete your paperwork at home
            </p>
            <p className="text-lg text-primary/90 max-w-3xl mx-auto leading-relaxed font-medium">
              To save time during your visit, please download, print, and fill out the form below. Bring the completed form to your appointment, or fax it securely to <span className="font-semibold">1-866-665-6659</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primary Download Card */}
          <Card className="border-2 border-primary/40 overflow-hidden mb-12 hover:border-accent/60 transition-colors bg-white shadow-lg">
            <div className="p-8 md:p-10 bg-gradient-to-br from-white to-primary/5">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    New Patient Paperwork
                  </h2>
                  <p className="text-sm font-semibold text-primary/70">February 2018</p>
                </div>
              </div>

              <p className="text-foreground mb-8 leading-relaxed">
                This comprehensive 5-page form covers all essential patient information including:
              </p>

              <ul className="grid md:grid-cols-2 gap-3 mb-10">
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Demographics and contact information
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Insurance information
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Personal and family medical history
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Current medications and allergies
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Surgical and hospitalization history
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Social history and screening questions
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Depression screening (PHQ-2)
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Alcohol/drug history (AUDIT-C)
                </li>
                <li className="flex gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold">•</span>
                  Preventive tests and vaccinations
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="/forms/Heritage-Healthcare-Clinic-New-Patient-Paperwork.pdf"
                  download="Heritage-Healthcare-Clinic-New-Patient-Paperwork.pdf"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/95 hover:to-accent/85 text-accent-foreground font-bold text-lg py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download New Patient Form (PDF)
                  </Button>
                </a>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent px-4 py-3 rounded">
                <p className="text-sm text-foreground font-medium">
                  ✓ Securely complete at home • ✓ Bring to your appointment or fax
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="p-8 border-2 border-primary/20 hover:border-accent/40 transition-colors">
              <h3 className="font-semibold text-primary-foreground mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                Contact Us
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">General Phone</p>
                  <a
                    href="tel:817-453-7522"
                    className="text-lg font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    (817) 453-7522
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">After Hours Urgent</p>
                  <a
                    href="tel:817-966-3999"
                    className="text-lg font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    (817) 966-3999
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Fax Forms</p>
                  <p className="text-lg font-bold text-foreground">1-866-665-6659</p>
                </div>
              </div>
            </Card>

            {/* Location Info */}
            <Card className="p-8 border-2 border-primary/20 hover:border-accent/40 transition-colors">
              <h3 className="font-semibold text-primary-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Our Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Address</p>
                  <p className="text-foreground font-medium">
                    1475 Heritage Pkwy Ste 225
                    <br />
                    Mansfield, TX 76063
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Office Hours</p>
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Monday - Friday:</span> 8:30 AM - 5:30 PM
                    <br />
                    <span className="text-xs text-muted-foreground">(Closed 12:00 PM - 1:00 PM)</span>
                    <br />
                    <span className="font-semibold">Saturday - Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Instructions Card */}
          <Card className="p-8 border-2 border-primary/20 hover:border-accent/40 transition-colors">
            <h3 className="font-semibold text-primary-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              How to Submit Your Forms
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Download & Print</p>
                  <p className="text-sm text-muted-foreground">
                    Click the download button above to get the PDF form
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Complete at Home</p>
                  <p className="text-sm text-muted-foreground">
                    Fill out all sections clearly and completely before your appointment
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Bring or Fax</p>
                  <p className="text-sm text-muted-foreground">
                    Bring the completed form to your appointment OR fax it to 1-866-665-6659
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* HIPAA Notice */}
          <div className="mt-12 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Your Privacy Matters</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                When you complete and fax or bring your form to us, your protected health information (PHI) is handled securely in accordance with HIPAA regulations. We do not store your health data in any online system, ensuring maximum privacy and security.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
