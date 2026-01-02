"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fa80897090dc043b79c8fb3093e18286f?format=webp&width=800",
    alt: "Community health fair - people interacting",
    title: "Community Health Fair"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fd0bc961173034d9aa51e52e69bda95e1?format=webp&width=800",
    alt: "Healthcare professionals providing services",
    title: "Professional Healthcare Services"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2F3f2d7c47b05c4b52b66e6ab6651004c7?format=webp&width=800",
    alt: "Medical consultation with patient",
    title: "Patient Care & Consultation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fd35cdf8d0e0d4ebcbc9744ed72489520?format=webp&width=800",
    alt: "Health screening event",
    title: "Health Screening Event"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Ff8ce0c09df964b61812c64ba014ed213?format=webp&width=800",
    alt: "Medical professional assisting patients",
    title: "Professional Medical Assistance"
  }
]

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="transition-all duration-1000 opacity-100 translate-y-0">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              Gallery
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto font-medium">
              Glimpses of our community healthcare initiatives and professional services in action
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Our Work in Pictures
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground max-w-2xl mx-auto font-medium">
              Click on any image to view it in full screen
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <Card className="border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full group-hover:border-primary animate-rotating-glow cursor-pointer">
                  <CardContent className="p-0 relative overflow-hidden h-64 sm:h-72 md:h-80 bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-semibold text-sm sm:text-base">{image.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Screen View */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl w-full h-auto max-h-[90vh] overflow-hidden p-4 sm:p-6 lg:p-8 bg-black/95 border border-accent/20 rounded-lg">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {selectedIndex !== null && (
              <>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Image Title and Counter */}
                <div className="w-full mt-4 sm:mt-6 text-center">
                  <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2">
                    {galleryImages[selectedIndex].title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm">
                    {selectedIndex + 1} / {galleryImages.length}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 w-full">
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/30 hover:bg-white/10 text-white hover:text-white"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>

                  <div className="flex gap-1 sm:gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === selectedIndex
                            ? "bg-accent w-8 sm:w-10"
                            : "bg-white/30 w-2 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handleNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-white/30 hover:bg-white/10 text-white hover:text-white"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
