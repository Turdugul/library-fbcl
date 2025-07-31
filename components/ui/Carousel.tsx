'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export interface CarouselImage {
  id: number
  src: string
  alt: string
  title?: string
}

interface CarouselProps {
  images: CarouselImage[]
  className?: string
  showDots?: boolean
  showNavigation?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  height?: string
}

export function Carousel({
  images,
  className = '',
  showDots = true,
  showNavigation = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  height = 'h-64 sm:h-80 md:h-96'
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useState(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }
  })

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className={`relative ${height}`}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-transform duration-500"
            priority={currentIndex === 0}
          />
          {images[currentIndex].title && (
            <div className="absolute inset-0 hover:bg-yellow-400/40 flex items-end">
              <div className="p-1 rounded-3xl sm:p-4  bg-black/40">
                <h3 className="text-lg text-secondary-300 sm:text-xl font-semibold mb-2">
                  {images[currentIndex].title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      {showNavigation && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                index === currentIndex ? 'bg-secondary-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
} 