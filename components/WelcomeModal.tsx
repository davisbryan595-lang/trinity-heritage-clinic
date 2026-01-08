'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogClose, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user has seen the popup
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup')

    if (!hasSeenPopup) {
      // Show popup after 1 second
      const timer = setTimeout(() => {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
        sessionStorage.setItem('hasSeenPopup', 'true')
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      // Show badge if user has already seen popup
      setShowBadge(true)
    }
  }, [])

  const handleClose = (newOpen: boolean) => {
    if (!newOpen) {
      setIsOpen(false)
      setShowBadge(true)
      document.body.style.overflow = 'auto'
    }
  }

  const handleBadgeClick = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Welcome Modal */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent
          className="w-[95vw] max-h-[85vh] rounded-2xl border-2 border-primary/20 shadow-2xl animate-in fade-in zoom-in-95 duration-500 flex flex-col"
          style={{
            maxWidth: '600px',
            overflowX: 'hidden',
            overflowY: 'auto',
            padding: '28px 28px',
          }}
          showCloseButton={true}
        >
          {/* Logo & Header */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative" style={{ width: '100px', height: '100px', marginBottom: '16px' }}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fefb70fbe8215494ca4994b20ea3d9f15%2F033a274fe2ba432ea7e74904be703d80?format=webp&width=800"
                alt="Trinity Heritage Clinic Logo"
                fill
                className="object-contain"
              />
            </div>
            <DialogTitle 
              className="font-bold font-serif text-foreground text-center w-full"
              style={{
                fontSize: 'clamp(28px, 5vw, 32px)',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Welcome!
            </DialogTitle>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-center mb-6 flex-1">
            {/* Paragraph 1 */}
            <p 
              className="text-foreground"
              style={{
                fontSize: 'clamp(14px, 2vw, 15px)',
                lineHeight: '1.6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Trinity Heritage clinic is a practice established to provide comprehensive medical services for ill and well patients in a friendly and compassionate environment.
            </p>

            {/* Paragraph 2 */}
            <p 
              className="text-foreground"
              style={{
                fontSize: 'clamp(14px, 2vw, 15px)',
                lineHeight: '1.6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              We believe in the 'art' and 'science' of medicine. Our clinical practice styles combine outstanding clinical acumen refined over the past 27 years with the latest technology and ancillary services supported by evidence based medicine.
            </p>

            {/* Paragraph 3 */}
            <p 
              className="text-foreground"
              style={{
                fontSize: 'clamp(14px, 2vw, 15px)',
                lineHeight: '1.6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Our result is maintenance of your good health and prevention of illness and/or disability.
            </p>

            {/* Paragraph 4 */}
            <p 
              className="text-foreground"
              style={{
                fontSize: 'clamp(14px, 2vw, 15px)',
                lineHeight: '1.6',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Visit us and let's talk about you and your well-being because we…
            </p>

            {/* Emphasized Cherish Health */}
            <div className="py-3 px-4 bg-primary/10 rounded-lg border-2 border-primary/30 my-4">
              <p 
                className="font-bold text-primary font-serif"
                style={{
                  fontSize: 'clamp(20px, 3vw, 24px)',
                  lineHeight: '1.5',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                ... CHERISH YOUR HEALTH!
              </p>
            </div>

            {/* Accepting New Patients Callout */}
            <div className="py-2 px-4 bg-accent text-accent-foreground rounded-lg border-2 border-accent/80 my-4">
              <p 
                className="font-bold"
                style={{
                  fontSize: 'clamp(13px, 2vw, 14px)',
                  lineHeight: '1.5',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                ALWAYS ACCEPTING NEW PATIENTS
              </p>
            </div>

            {/* Hospital Affiliations */}
            <div className="pt-4 border-t border-border text-left">
              <p 
                className="font-bold text-foreground mb-2"
                style={{
                  fontSize: 'clamp(13px, 2vw, 14px)',
                  lineHeight: '1.5',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                Dr. Nwiloh is affiliated with the following hospitals:
              </p>
              <ul 
                className="space-y-1 text-foreground pl-4"
                style={{
                  fontSize: 'clamp(13px, 2vw, 14px)',
                  lineHeight: '1.5',
                }}
              >
                <li style={{ wordWrap: 'break-word', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  • The Hospitals of Providence East Campus
                </li>
                <li style={{ wordWrap: 'break-word', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  • Del Sol Medical Center
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
            <a
              href="tel:915-300-2276"
              className="flex-1 min-w-0"
            >
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg h-11 text-sm"
                style={{
                  fontSize: '13px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Schedule Your Appointment
              </Button>
            </a>
            <DialogClose asChild>
              <Button
                onClick={() => handleClose(false)}
                variant="outline"
                className="flex-1 min-w-0 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg h-11"
                style={{
                  fontSize: 'clamp(13px, 2vw, 14px)',
                }}
              >
                Continue Browsing
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {/* Reopen Badge */}
      {showBadge && (
        <button
          onClick={handleBadgeClick}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group animate-fade-in"
          title="Welcome Info"
          aria-label="Open welcome information"
        >
          <Info className="w-6 h-6" />
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-foreground text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Welcome Info
          </span>
        </button>
      )}
    </>
  )
}
