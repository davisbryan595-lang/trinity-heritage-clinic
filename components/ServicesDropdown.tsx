"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

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
          className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-xl p-4 min-w-[320px] animate-fadeInUp z-40"
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
        >
          <div className="space-y-3">
            <Link
              href="/services#internal-medicine"
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                Internal Medicine &amp; Family Practice
              </span>
            </Link>
            <Link
              href="/services#occupational-medicine"
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group"
            >
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                Occupational Medicine
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
