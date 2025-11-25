'use client'

import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Diamond Logo Animation */}
        <div className="mb-8 diamond-spin">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Green Diamonds */}
            <path d="M20 40L40 20L60 40L40 60Z" fill="#006d5b" opacity="0.9" />
            <path d="M40 40L50 30L60 40L50 50Z" fill="#00a680" opacity="0.7" />
            <path d="M20 40L30 30L40 40L30 50Z" fill="#00a680" opacity="0.7" />
            
            {/* Purple Diamond (Center) */}
            <path d="M40 40L45 35L50 40L45 45Z" fill="#6b4c9a" opacity="0.95" />
          </svg>
        </div>

        {/* Animated Text */}
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#006d5b' }}>Trinity Heritage Clinic</h2>
        <p className="text-lg fade-in" style={{ color: '#6b4c9a' }}>
          Working to Keep Your Workforce Well...
        </p>
      </div>
    </div>
  )
}
