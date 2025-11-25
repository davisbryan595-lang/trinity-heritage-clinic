"use client"

import { useEffect, useState } from "react"

export default function LotusPreloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-background to-accent">
      {/* Lotus Animation */}
      <div className="relative">
        {/* Outer petals */}
        <div className="absolute inset-0 animate-lotus">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Center */}
            <circle cx="100" cy="100" r="20" fill="#8FBC8F" className="animate-pulse" />
            
            {/* Petals */}
            <ellipse cx="100" cy="60" rx="25" ry="45" fill="#D8BFD8" opacity="0.9" className="animate-wave" />
            <ellipse cx="140" cy="100" rx="45" ry="25" fill="#D8BFD8" opacity="0.9" className="animate-wave" style={{ animationDelay: "0.5s" }} />
            <ellipse cx="100" cy="140" rx="25" ry="45" fill="#D8BFD8" opacity="0.9" className="animate-wave" style={{ animationDelay: "1s" }} />
            <ellipse cx="60" cy="100" rx="45" ry="25" fill="#D8BFD8" opacity="0.9" className="animate-wave" style={{ animationDelay: "1.5s" }} />
            
            {/* Inner petals */}
            <ellipse cx="80" cy="80" rx="20" ry="30" fill="#8FBC8F" opacity="0.7" className="animate-float" />
            <ellipse cx="120" cy="80" rx="20" ry="30" fill="#8FBC8F" opacity="0.7" className="animate-float" style={{ animationDelay: "0.3s" }} />
            <ellipse cx="120" cy="120" rx="20" ry="30" fill="#8FBC8F" opacity="0.7" className="animate-float" style={{ animationDelay: "0.6s" }} />
            <ellipse cx="80" cy="120" rx="20" ry="30" fill="#8FBC8F" opacity="0.7" className="animate-float" style={{ animationDelay: "0.9s" }} />
          </svg>
        </div>
        
        {/* Slogan */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-2xl font-serif font-bold text-primary-foreground animate-pulse">
            Cherish Your Health... We Do!
          </p>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent animate-pulse"></div>
    </div>
  )
}
