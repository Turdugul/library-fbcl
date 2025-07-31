'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  title?: string
  description?: string
  date?: string
}

interface GalleryProps {
  images: GalleryImage[]
  title?: string
  description?: string
  columns?: number
  className?: string
  showLightbox?: boolean
  showTitles?: boolean
  showDescriptions?: boolean
  height?: string
}

export function Gallery({
  images,
  title,
  description,
  columns = 3,
  className = '',
  showLightbox = true,
  showTitles = true,
  showDescriptions = false,
  height = 'h-48 sm:h-64'
}: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (image: GalleryImage, index: number) => {
    if (showLightbox) {
      setSelectedImage(image)
      setLightboxIndex(index)
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
      setSelectedImage(images[lightboxIndex - 1])
    }
  }

  const goToNext = () => {
    if (lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
      setSelectedImage(images[lightboxIndex + 1])
    }
  }

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={className}>
      {/* Gallery Header */}
      {(title || description) && (
        <div className="text-center mb-8 sm:mb-12">
          {title && (
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-elegant-heading mb-4 sm:mb-6">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-4 sm:gap-6`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(image, index)}
          >
            <div className={`relative ${height}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              
              {/* Image Info Overlay */}
              {(showTitles || showDescriptions) && (
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    {showTitles && image.title && (
                      <h3 className="text-sm text-secondary-300 sm:text-base font-semibold mb-1">
                        {image.title}
                      </h3>
                    )}
                    {showDescriptions && image.description && (
                      <p className="text-xs sm:text-sm opacity-90">
                        {image.description}
                      </p>
                    )}
                    {image.date && (
                      <p className="text-xs opacity-75 mt-1">
                        {image.date}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  disabled={lightboxIndex === 0}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  disabled={lightboxIndex === images.length - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Main Image */}
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="rounded-lg max-h-[80vh] object-contain"
                priority
              />
              
              {/* Image Info */}
              {(selectedImage.title || selectedImage.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  {selectedImage.title && (
                    <h3 className="text-lg text-secondary-300 first-letter:font-semibold mb-2">
                      {selectedImage.title}
                    </h3>
                  )}
                  {selectedImage.description && (
                    <p className="text-sm opacity-90">
                      {selectedImage.description}
                    </p>
                  )}
                  {selectedImage.date && (
                    <p className="text-xs opacity-75 mt-2">
                      {selectedImage.date}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 