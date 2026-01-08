"use client"

import { useEffect, useState } from "react"

export default function DiamondPreloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Diamond Spinner */}
      <div className="relative">
        <div className="animate-diamond-spin diamond-glow">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 5L70 40L40 75L10 40L40 5Z"
              fill="var(--primary)"
              stroke="var(--accent)"
              strokeWidth="2"
            />
            <path
              d="M40 5L55 20L40 40L25 20L40 5Z"
              fill="var(--tertiary)"
              opacity="0.6"
            />
            <path
              d="M40 40L55 60L40 75L25 60L40 40Z"
              fill="var(--primary)"
              opacity="0.4"
            />
          </svg>
        </div>
        
        {/* Slogan */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-lg font-serif font-bold text-primary animate-pulse">
            Working to Keep Your Workforce Well...
          </p>
        </div>
      </div>
    </div>
  )
}
