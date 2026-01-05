import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/30 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-primary-foreground">Trinity Heritage Clinic</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Nurturing your health journey with compassionate, evidence-based internal medicine care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <p>
                  2204 Joe Battle Blvd, STE D204
                  <br />
                  El Paso, TX 79938
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:915-300-2276" className="hover:text-accent transition-colors">
                  (915) 300-2276
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <p className="text-xs">Fax: 866-222-5219</p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:Trinityheritageclinic@gmail.com" className="hover:text-accent transition-colors text-xs">
                  Trinityheritageclinic@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Trinity Heritage Clinic. All rights reserved.</p>
          <p className="text-sm font-serif italic text-primary-foreground">Cherish Your Health... We Do!</p>
        </div>
      </div>
    </footer>
  )
}
