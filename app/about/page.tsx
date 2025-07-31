'use client'

import Link from 'next/link'
import { Calendar, Users, BookOpen, Heart, Award, Target, ChevronLeft, ChevronRight, Mail, Linkedin, Globe } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { useState } from 'react'

const timeline = [
  {
    year: '2013',
    title: 'Foundation',
    description: 'FBCL was founded by a group of passionate community members who recognized the need for library support.',
  },
  {
    year: '2023',
    title: '10th Anniversary',
    description: 'Celebrated 10 years of service with a community-wide celebration and new programs.',
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Expanding programs to meet the evolving needs of our diverse community.',
  },
]

const values = [
  {
    icon: BookOpen,
    title: 'Literacy First',
    description: 'We believe everyone deserves access to knowledge and the joy of reading.',
  },
  {
    icon: Users,
    title: 'Community Centered',
    description: 'Our programs and services are designed with our community\'s needs in mind.',
  },
  {
    icon: Heart,
    title: 'Inclusive Access',
    description: 'We work to ensure our library serves people of all ages, backgrounds, and abilities.',
  },
  {
    icon: Target,
    title: 'Sustainable Impact',
    description: 'We focus on long-term solutions that create lasting positive change.',
  },
]

const impactStats = [
  { number: '500+', label: 'Books Donated Annually', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members Served', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
  { number: '15+', label: 'Years of Service', icon: Award },
  { number: '95%', label: 'Community Satisfaction', icon: Target },
]

const galleryImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Library interior with bookshelves',
    title: 'Our Main Reading Area'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Children reading corner',
    title: 'Children\'s Corner'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Volunteers organizing books',
    title: 'Volunteer Book Sorting'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Community event space',
    title: 'Community Events Space'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Library entrance and reception',
    title: 'Library Reception'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Exterior view of the library',
    title: 'Library Exterior'
  }
]

const awards = [
  {
    id: 1,
    title: 'Community Library of the Year',
    date: '2023',
    image: '/libr1.jpg',
    certificate: '/libr2.jpg',
    description: 'Awarded for outstanding community engagement and literacy programs that have made a significant impact on local residents.'
  },
  {
    id: 2,
    title: 'Volunteer Excellence Award',
    date: '2022',
    image: '/libr3.jpg',
    certificate: null,
    description: 'Recognized for exceptional volunteer management and the positive impact our volunteer team has on the community.'
  },
  {
    id: 3,
    title: 'Innovation in Literacy Award',
    date: '2021',
    image: '/libr4.jpg',
    certificate: '/libr5.jpg',
    description: 'Honored for innovative approaches to promoting literacy and lifelong learning in our diverse community.'
  },
  {
    id: 4,
    title: 'Community Partnership Award',
    date: '2020',
    image: '/library.jpg',
    certificate: null,
    description: 'Awarded for successful partnerships with local schools, organizations, and community groups.'
  }
]

const trustees = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Board President",
    bio: "Dr. Johnson has been a passionate advocate for literacy and education for over 20 years. She holds a PhD in Education and has dedicated her career to improving access to learning resources in underserved communities.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    email: "sarah.johnson@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2020-2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    bio: "Michael brings 15 years of experience in nonprofit management and community development. He has successfully led numerous fundraising campaigns and volunteer recruitment initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "michael.chen@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2021-2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Secretary",
    bio: "Emily is a former librarian with a deep understanding of community needs. She has been instrumental in developing our children's programs and digital literacy initiatives.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    email: "emily.rodriguez@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2022-2026"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Treasurer",
    bio: "David is a certified public accountant with extensive experience in nonprofit financial management. He ensures our organization maintains the highest standards of fiscal responsibility.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "david.thompson@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2020-2024"
  }
]

// Gallery Carousel Component
function GalleryCarousel({ images }: { images: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <div className="p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{images[currentIndex].title}</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              index === currentIndex ? 'bg-secondary-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 inline-block">
              <span className="text-lg sm:text-2xl font-bold text-secondary-300">Celebrating Our 12th Anniversary!</span>
            </div>
            <h1 className="text-responsive-3xl md:text-responsive-6xl  text-secondary-400  font-bold mb-4 sm:mb-6">
              About FBCL
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Supporting literacy and community engagement through the Friern Barnet Community Library since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-responsive-lg text-gray-600 mb-4 sm:mb-6">
                The Friends of the Friern Barnet Community Library is dedicated to supporting the Friern Barnet Community Library 
                through fundraising, volunteerism, and community outreach. We believe that access to knowledge 
                and literacy resources is fundamental to a thriving community.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Our volunteers work tirelessly to ensure that everyone has the opportunity to discover the joy 
                of reading and learning, regardless of their background or circumstances. We foster a love for 
                literature, promote lifelong learning, and build stronger community connections through our 
                diverse programs and initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="secondary" asChild className="btn-secondary">
                  <Link href="/volunteer">
                    Join Our Mission
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="/library.jpg"
                alt="Community volunteers"
                className="rounded-lg shadow-xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our approach to serving the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <value.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Our History
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Nearly four decades of dedication to literacy and community service.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-6 sm:space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-10 sm:ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-6 sm:pr-8' : 'md:pl-6 sm:pl-8'
                  }`}>
                    <Card className="p-4 sm:p-6">
                      <div className="text-xl sm:text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              The numbers tell the story of our commitment to the community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in p-3 sm:p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Our Library Gallery
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our community library and see the spaces where learning and community come together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GalleryCarousel images={galleryImages} />
          </div>
          
          <div className="text-center mt-8 sm:mt-10 animate-fade-in stagger-2">
            <Button variant="outline" asChild>
              <Link href="/about/gallery">
                More Pictures
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              We're proud of the recognition we've received for our commitment to community literacy and engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {awards.map((award, index) => (
              <Card key={award.id} className="animate-fade-in hover-lift p-4 sm:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full md:w-48 h-32 sm:h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{award.title}</h3>
                      <span className="text-xs sm:text-sm text-secondary-500 font-medium bg-secondary-50 px-2 sm:px-3 py-1 rounded-full">
                        {award.date}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{award.description}</p>
                    {award.certificate && (
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-secondary-500" />
                        <span className="text-sm text-secondary-600">Certificate Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Meet Our Trustees
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated board of trustees provides leadership and guidance to ensure FBCL continues to serve our community effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustees.map((trustee, index) => (
              <Card key={trustee.id} className="text-center animate-fade-in hover-lift p-4 sm:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-3 sm:mb-4 border-4 border-gray-100 shadow-lg"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{trustee.name}</h3>
                  <p className="text-secondary-500 font-medium mb-2 text-sm sm:text-base">{trustee.role}</p>
                  <span className="text-xs sm:text-sm text-gray-500 bg-gray-50 px-2 sm:px-3 py-1 rounded-full">
                    Term: {trustee.term}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {trustee.bio}
                </p>
                
                <div className="flex justify-center space-x-2 sm:space-x-3">
                  <a
                    href={`mailto:${trustee.email}`}
                    className="text-gray-400 hover:text-secondary-500 transition-colors p-2 hover:bg-gray-50 rounded-full"
                    aria-label={`Email ${trustee.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  {trustee.linkedin !== "#" && (
                    <a
                      href={trustee.linkedin}
                      className="text-gray-400 hover:text-secondary-500 transition-colors p-2 hover:bg-gray-50 rounded-full"
                      aria-label={`${trustee.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {trustee.website !== "#" && (
                    <a
                      href={trustee.website}
                      className="text-gray-400 hover:text-secondary-500 transition-colors p-2 hover:bg-gray-50 rounded-full"
                      aria-label={`${trustee.name}'s Website`}
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-12 animate-fade-in stagger-3">
            <Button asChild variant="outline">
              <Link href="/trustees">
                View All Trustees
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl text-secondary-400 md:text-responsive-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or simply learn more about our work, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/volunteer">
                  Become a Volunteer
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters & Benefactors */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Supporters & Benefactors
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              We are grateful for the support of our benefactors who help make our mission possible.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Benefactors of Friern Barnet Community Library
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                  This list may not be up to date—please contact us for verification.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  'London Borough of Barnet',
                  'Social Investment Bank',
                  'Jesus Hospital Trust',
                  'Voluntary Care for the Elderly',
                  'Eleanor Palmer Trust',
                  'Friern Barnet Educational Trust',
                  'London Borough of Barnet Education Project'
                ].map((benefactor, index) => (
                  <div
                    key={benefactor}
                    className="flex items-center space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{benefactor}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600">
                  For the most current list of benefactors, please contact us at{' '}
                  <a href="mailto:fbcllibrary15@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                    fbcllibrary15@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 