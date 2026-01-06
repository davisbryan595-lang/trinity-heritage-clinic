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

interface SubServicePanelProps {
  services: typeof servicesData.internalMedicine
}

function SubServicePanel({ services }: SubServicePanelProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {services.map((service) => (
        <div key={service.title} className="space-y-2">
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
      ))}
    </div>
  )
}

interface CategoryItemProps {
  title: string
  services: typeof servicesData.internalMedicine
  isHovered: boolean
  onHover: (hovered: boolean) => void
}

function CategoryItem({ title, services, isHovered, onHover }: CategoryItemProps) {
  const [isSubHovered, setIsSubHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        onHover(true)
        setIsSubHovered(true)
      }}
      onMouseLeave={() => {
        onHover(false)
        setIsSubHovered(false)
      }}
    >
      <Link
        href="/services"
        className="block px-4 py-3 rounded-lg font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 text-sm"
      >
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSubHovered ? "translate-x-1" : ""}`} />
        </div>
      </Link>

      {/* Sub-services panel */}
      {isSubHovered && (
        <div
          className="absolute left-full top-0 ml-2 bg-white border border-border rounded-lg shadow-lg p-6 min-w-[320px] max-w-md animate-fadeInUp z-40"
          onMouseEnter={() => setIsSubHovered(true)}
          onMouseLeave={() => {
            setIsSubHovered(false)
            onHover(false)
          }}
        >
          <SubServicePanel services={services} />
        </div>
      )}
    </div>
  )
}

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [internalMedicineHovered, setInternalMedicineHovered] = useState(false)
  const [occupationalMedicineHovered, setOccupationalMedicineHovered] = useState(false)

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
        className="text-xs lg:text-sm font-semibold text-primary font-bold transition-colors relative px-2 py-1 flex items-center gap-1"
      >
        Services
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-xl p-6 min-w-[600px] max-w-2xl animate-fadeInUp z-40"
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Internal Medicine Column */}
            <div>
              <h3 className="text-sm font-bold text-primary mb-4 pb-2 border-b border-primary/20">
                Internal Medicine &amp; Family Practice
              </h3>
              <CategoryItem
                title="Internal Medicine &amp; Family Practice"
                services={servicesData.internalMedicine}
                isHovered={internalMedicineHovered}
                onHover={setInternalMedicineHovered}
              />
            </div>

            {/* Occupational Medicine Column */}
            <div>
              <h3 className="text-sm font-bold text-accent mb-4 pb-2 border-b border-accent/20">
                Occupational Medicine
              </h3>
              <CategoryItem
                title="Occupational Medicine"
                services={servicesData.occupationalMedicine}
                isHovered={occupationalMedicineHovered}
                onHover={setOccupationalMedicineHovered}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
