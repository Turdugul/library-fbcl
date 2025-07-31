'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Library interior with bookshelves',
    title: 'Our Main Reading Area',
    description: 'The heart of our library where community members gather to read and learn.'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Children reading corner',
    title: 'Children\'s Corner',
    description: 'A dedicated space for young readers to explore the world of books.'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Volunteers organizing books',
    title: 'Volunteer Book Sorting',
    description: 'Our dedicated volunteers maintaining our collection for the community.'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Community event space',
    title: 'Community Events Space',
    description: 'Where we host workshops, readings, and community gatherings.'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Library entrance and reception',
    title: 'Library Reception',
    description: 'The welcoming entrance where visitors are greeted by our friendly staff.'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Exterior view of the library',
    title: 'Library Exterior',
    description: 'The beautiful exterior of our community library building.'
  },
  {
    id: 7,
    src: '/libr1.jpg',
    alt: 'Reading nook with comfortable seating',
    title: 'Comfortable Reading Nook',
    description: 'A cozy corner perfect for quiet reading and reflection.'
  },
  {
    id: 8,
    src: '/libr2.jpg',
    alt: 'Study area with tables',
    title: 'Study Area',
    description: 'Dedicated space for students and researchers to work.'
  },
  {
    id: 9,
    src: '/libr3.jpg',
    alt: 'Computer workstations',
    title: 'Computer Workstations',
    description: 'Modern technology access for digital literacy and research.'
  },
  {
    id: 10,
    src: '/libr4.jpg',
    alt: 'Meeting room',
    title: 'Meeting Room',
    description: 'Versatile space for community meetings and small events.'
  },
  {
    id: 11,
    src: '/libr5.jpg',
    alt: 'Display area for new books',
    title: 'New Books Display',
    description: 'Showcasing the latest additions to our collection.'
  },
  {
    id: 12,
    src: '/library.jpg',
    alt: 'Garden area',
    title: 'Library Garden',
    description: 'Peaceful outdoor space for reading and community events.'
  }
]

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
              <Link href="/about" className="inline-flex items-center text-secondary-300 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to About
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
                      <p className="text-xs sm:text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Back to About button */}
          <div className="text-center mt-12 sm:mt-16 animate-fade-in stagger-3">
            <Button variant="outline" asChild>
              <Link href="/about">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to About
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