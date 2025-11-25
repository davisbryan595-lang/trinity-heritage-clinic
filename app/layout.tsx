import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"]
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Trinity Heritage Clinic | Occupational Medicine Mansfield TX | Workforce Health",
  description:
    "Working to keep your workforce well. Trinity Heritage Clinic provides comprehensive occupational medicine, internal medicine, and wellness programs in Mansfield, Texas. Always friendly. Always knowledgeable.",
  keywords: [
    "occupational medicine",
    "Mansfield TX",
    "workforce health",
    "DOT physicals",
    "drug screening",
    "work injury care",
    "pre-employment exams",
    "internal medicine",
    "wellness programs",
    "Trinity Heritage Clinic"
  ],
  openGraph: {
    title: "Trinity Heritage Clinic | Occupational Medicine Mansfield TX",
    description: "Working to keep your workforce well - Occupational medicine and healthcare services",
    type: "website",
    locale: "en_US",
    siteName: "Trinity Heritage Clinic"
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Trinity Heritage Clinic",
              "description": "Occupational medicine and internal medicine services for businesses and individuals",
              "url": "https://trinityheritageclinic.com",
              "telephone": "+1-817-453-7522",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1475 Heritage Pkwy Ste 225",
                "addressLocality": "Mansfield",
                "addressRegion": "TX",
                "postalCode": "76063",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "32.6",
                "longitude": "-97.1"
              },
              "openingHours": "Mo-Fr 08:30-17:30",
              "priceRange": "$$",
              "medicalSpecialty": ["Occupational Medicine", "Internal Medicine"],
              "slogan": "Working to Keep Your Workforce Well"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
