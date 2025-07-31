'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui'
import { useState } from 'react'
import { galleryImages } from '@/lib/data'

// Lightbox Component
function Lightbox({ image, onClose, onPrevious, onNext, hasPrevious, hasNext }: {
  image: any
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  hasPrevious: boolean
  hasNext: boolean
}) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Close lightbox"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        {/* Image info */}
        <div className="mt-4 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
        
        {/* Navigation buttons */}
        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default function AboutGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="mb-6">
              <Link href="/events" className="inline-flex items-center text-secondary-300 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            <h1 className="text-responsive-3xl md:text-responsive-6xl  text-secondary-400  font-bold mb-4 sm:mb-6">
              Library Gallery
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Explore our community library through this comprehensive photo gallery showcasing our spaces, programs, and the people who make it special.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-secondary-300 text-sm sm:text-base mb-1">{image.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-200">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Back to About button */}
          <div className="text-center mt-12 sm:mt-16 animate-fade-in stagger-3">
            <Button variant="outline" asChild>
              <Link href="/events">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          image={galleryImages[selectedImage]}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={selectedImage > 0}
          hasNext={selectedImage < galleryImages.length - 1}
        />
      )}
    </div>
  )
} 