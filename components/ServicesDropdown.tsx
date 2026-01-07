"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const servicesData = {
  internalMedicine: [
    {
      title: "Internal Medicine",
      items: [
        "Preventive care",
        "Routine visits/follow up visits",
        "Healthy living and exercise counseling",
        "Diabetes",
        "Hypertension",
        "Hyperlipidemia",
        "Thyroid disease",
        "Asthma/COPD management",
        "Smoking cessation",
        "Other chronic and acute conditions"
      ]
    },
    {
      title: "Pediatrics (10 years and older)",
      items: [
        "Annual physicals",
        "Routine services",
        "Immunization recommendations and referral",
        "Back to school/sports physicals",
        "Sick visits"
      ]
    },
    {
      title: "Gynecology",
      items: [
        "Routine cervical examination and pap smear",
        "STD screening and treatment",
        "Vaginal infections & Urinary Tract Infections",
        "Family planning – Oral and injectable implantations are referred out"
      ]
    },
    {
      title: "Dermatology",
      items: [
        "Removal of minor skin tags, moles, and warts",
        "Acne",
        "Psoriasis",
        "Athletic Foot",
        "Eczema",
        "Dermatitis",
        "Scabies"
      ]
    },
    {
      title: "Minor Surgery",
      items: [
        "Laceration Repair",
        "Minor Incision and Drainage",
        "Simple Biopsy"
      ]
    }
  ],
  occupationalMedicine: [
    {
      title: "Physical Exams",
      items: [
        "Pre-Employment/Placement Exams",
        "Annual Physical/Surveillance",
        "Return to Work Exams",
        "Fitness for Duty Exams",
        "Post Exposure Exams",
        "DOT & Respirator Exams"
      ]
    },
    {
      title: "Injury/Illness Treatment",
      items: [
        "Work-Related Injuries",
        "Non-Work Related Illness",
        "Occupational Disease Care",
        "Injury Management & Recovery",
        "Fitness for Duty Determination",
        "Treatment Coordination"
      ]
    },
    {
      title: "Diagnostic Testing",
      items: [
        "Spirometry Testing",
        "Audiometry",
        "Vision Screening",
        "EKG Testing",
        "Blood Work & Labs",
        "Respirator Fit Testing"
      ]
    },
    {
      title: "Substance & Health",
      items: [
        "Alcohol Testing",
        "Urine Drug Screening",
        "MRO Services",
        "Immunization",
        "Health & Safety Consultation",
        "Wellness & Health Promotions"
      ]
    }
  ]
}

interface ServiceDetailPanelProps {
  service: {
    title: string
    items: string[]
  }
}

function ServiceDetailPanel({ service }: ServiceDetailPanelProps) {
  return (
    <div className="space-y-2">
      <Link
        href="/services"
        className="font-semibold text-foreground hover:text-primary transition-colors block text-sm"
      >
        {service.title}
      </Link>
      <ul className="space-y-1 pl-0">
        {service.items.map((item) => (
          <li key={item} className="text-xs text-foreground/70 hover:text-primary transition-colors">
            <span className="text-primary mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ServiceItemProps {
  service: {
    title: string
    items: string[]
  }
}

function ServiceItem({ service }: ServiceItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="/services"
        className="block px-3 py-2 rounded-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 text-sm"
      >
        <div className="flex items-center justify-between">
          <span>{service.title}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`} />
        </div>
      </Link>

      {/* Sub-service detail panel */}
      {isHovered && (
        <div
          className="absolute left-full top-0 ml-2 bg-white border border-border rounded-lg shadow-lg p-4 min-w-[280px] max-w-sm animate-fadeInUp z-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ServiceDetailPanel service={service} />
        </div>
      )}
    </div>
  )
}

interface CategoryColumnProps {
  title: string
  services: Array<{ title: string; items: string[] }>
  categoryColor: "primary" | "accent"
}

function CategoryColumn({ title, services, categoryColor }: CategoryColumnProps) {
  return (
    <div>
      <h3 className={`text-sm font-bold mb-3 pb-2 border-b ${categoryColor === "primary" ? "text-primary border-primary/20" : "text-accent border-accent/20"}`}>
        {title}
      </h3>
      <div className="space-y-1">
        {services.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </div>
    </div>
  )
}

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className="text-xs lg:text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 relative px-2 py-1 flex items-center gap-1"
      >
        Services
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-xl p-6 min-w-[600px] max-w-3xl animate-fadeInUp z-40"
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
        >
          <div className="grid grid-cols-2 gap-8">
            <CategoryColumn
              title="Internal Medicine &amp; Family Practice"
              services={servicesData.internalMedicine}
              categoryColor="primary"
            />
            <CategoryColumn
              title="Occupational Medicine"
              services={servicesData.occupationalMedicine}
              categoryColor="accent"
            />
          </div>
        </div>
      )}
    </div>
  )
}
