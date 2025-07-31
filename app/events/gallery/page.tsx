'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, X, Calendar, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui'
import { useState } from 'react'

const eventImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Summer reading program event',
    title: 'Summer Reading Program',
    description: 'Children participating in our annual summer reading challenge.',
    date: 'June 2024'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Author meet and greet event',
    title: 'Author Meet & Greet',
    description: 'Local author Sarah Johnson discussing her latest novel with community members.',
    date: 'July 2024'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Children story time session',
    title: 'Children\'s Story Time',
    description: 'Interactive story time for children ages 3-8 every Saturday.',
    date: 'Weekly Event'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Book club meeting',
    title: 'Adult Book Club',
    description: 'Monthly book club discussions for adult readers.',
    date: 'Monthly Event'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Computer literacy workshop',
    title: 'Computer Literacy Workshop',
    description: 'Teaching essential computer skills to community members.',
    date: 'Ongoing'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Community volunteer day',
    title: 'Volunteer Appreciation Day',
    description: 'Celebrating our dedicated volunteers who make everything possible.',
    date: 'Annual Event'
  },
  {
    id: 7,
    src: '/libr1.jpg',
    alt: 'Yoga class in library space',
    title: 'Community Yoga',
    description: 'Weekly yoga sessions promoting health and wellness.',
    date: 'Weekly Event'
  },
  {
    id: 8,
    src: '/libr2.jpg',
    alt: 'English language learning group',
    title: 'English Conversation Group',
    description: 'Supporting language learning and cultural exchange.',
    date: 'Weekly Event'
  },
  {
    id: 9,
    src: '/libr3.jpg',
    alt: 'Creative writing workshop',
    title: 'Creative Writing Workshop',
    description: 'Unleashing creativity through writing and storytelling.',
    date: 'Monthly Event'
  },
  {
    id: 10,
    src: '/libr4.jpg',
    alt: 'Toddler group activities',
    title: 'Toddler Group',
    description: 'Early development activities for young children and parents.',
    date: 'Weekly Event'
  },
  {
    id: 11,
    src: '/libr5.jpg',
    alt: 'Drama and acting workshop',
    title: 'Drama Acting Group',
    description: 'Expressing creativity through theater and performance.',
    date: 'Monthly Event'
  },
  {
    id: 12,
    src: '/library.jpg',
    alt: 'Community police surgery',
    title: 'Local Police Surgery',
    description: 'Community safety discussions and local policing updates.',
    date: 'Quarterly Event'
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
          <p className="text-gray-300 mb-2">{image.description}</p>
          <div className="flex items-center justify-center text-sm text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            {image.date}
          </div>
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

export default function EventsGalleryPage() {
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
    if (selectedImage !== null && selectedImage < eventImages.length - 1) {
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
            <h1 className="text-responsive-3xl md:text-responsive-6xl font-bold mb-4 sm:mb-6">
              Events Gallery
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Browse through photos of our community events, workshops, and activities that bring our library to life.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {eventImages.map((image, index) => (
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-sm sm:text-base mb-1">{image.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-200 mb-2">{image.description}</p>
                      <div className="flex items-center text-xs text-gray-300">
                        <Calendar className="h-3 w-3 mr-1" />
                        {image.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Back to Events button */}
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
          image={eventImages[selectedImage]}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={selectedImage > 0}
          hasNext={selectedImage < eventImages.length - 1}
        />
      )}
    </div>
  )
} 