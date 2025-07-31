'use client'

import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Heart, Calendar, MapPin, Clock, Phone, ChevronRight, ChevronLeft, Award } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { useState } from 'react'

const stats = [
  { number: '500+', label: 'Books Donated', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
]

const featuredEvents = [
  {
    title: 'Summer Reading Program',
    date: 'June 15, 2024',
    time: '10:00 AM',
    description: 'Join us for our annual summer reading challenge for all ages.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
  },
  {
    title: 'Author Meet & Greet',
    date: 'July 8, 2024',
    time: '2:00 PM',
    description: 'Meet local author Sarah Johnson and discuss her latest novel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  },
  {
    title: 'Children\'s Story Time',
    date: 'Every Saturday',
    time: '11:00 AM',
    description: 'Interactive story time for children ages 3-8.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
]

const testimonials = [
  {
    quote: "The library has become a second home for my children. The volunteers are amazing!",
    author: "Maria Rodriguez",
    role: "Parent"
  },
  {
    quote: "I've been volunteering here for 5 years and it's the most rewarding experience.",
    author: "John Smith",
    role: "Volunteer"
  },
  {
    quote: "The programs they offer have helped my reading skills improve dramatically.",
    author: "Emma Thompson",
    role: "Student"
  }
]

const quickLinks = [
  { title: 'Join Us', description: 'Become a member and support our community library', href: '/volunteer', icon: Users },
  { title: 'Catalogue', description: 'Explore our diverse collection of books and resources', href: '/catalogue', icon: BookOpen },
  { title: 'Events', description: 'Discover upcoming events and activities', href: '/events', icon: Calendar },
  { title: 'Contact', description: 'Get in touch with our team', href: '/contact', icon: Phone },
]

const activities = [
  { name: 'Computer Classes', icon: '💻', description: 'Learn essential computer skills' },
  { name: 'Pilates', icon: '🧘', description: 'Improve flexibility and strength' },
  { name: 'Yoga', icon: '🧘‍♀️', description: 'Find your inner peace and balance' },
  { name: 'English Lessons', icon: '📚', description: 'Master the English language' },
  { name: 'Toddler Groups', icon: '👶', description: 'Early development activities' },
  { name: 'Drama Acting Groups', icon: '🎭', description: 'Express yourself through theater' },
  { name: 'Local Police Surgery', icon: '👮', description: 'Community safety discussions' },
  { name: 'Creative Writing', icon: '✍️', description: 'Unleash your creativity' },
  { name: 'Councillors Surgery', icon: '🏛️', description: 'Local government access' },
  { name: 'Many More Workshops', icon: '🎨', description: 'Explore various creative outlets' },
  { name: 'Classes & Events', icon: '📅', description: 'Regular community activities' },
  { name: 'Community Activities', icon: '🤝', description: 'Build lasting connections' }
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

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] sm:min-h-[90vh] py-16 sm:py-20 lg:py-24">
            <div className="animate-fade-in">
              <div className="mb-4 sm:mb-6">
                <span className="text-secondary-400 font-medium tracking-wide uppercase text-xs sm:text-sm bg-white/10 px-3 sm:px-4 py-2 rounded-full">
                  Established 2013
                </span>
              </div>
              <h1 className="text-responsive-4xl text-secondary-400 md:text-responsive-6xl font-elegant-heading mb-6 sm:mb-8 text-balance leading-tight">
                Supporting Literacy, 
                <span className="text-secondary-300 block">Building Community</span>
              </h1>
              <p className="text-responsive-lg mb-8 sm:mb-10 text-gray-100 font-elegant-body leading-relaxed max-w-2xl">
                Join the Friends of the Friern Barnet Community Library in fostering a love for reading, 
                learning, and community engagement. Together, we make knowledge accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="secondary" asChild className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 group">
                  <Link href="/volunteer">
                      Join Us
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 font-elegant-body text-base px-6 sm:px-8 py-3 sm:py-4">
                  <Link href="/events">
                    See Events
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in stagger-1">
              <div className="relative">
                <img
                  src="/library.jpg"
                  alt="Community library"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover shadow-2xl rounded-lg"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white text-primary-800 p-4 sm:p-6 border border-gray-200 shadow-lg rounded-lg">
                  <p className="text-xs sm:text-sm font-elegant-heading mb-1">Since 2013</p>
                  <p className="text-xs text-secondary-dark font-elegant-body">Serving our community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding-sm bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="group block animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-full group-hover:border-primary-300 transition-all duration-300 p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <link.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent group-hover:text-accent-hover transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-elegant-heading mb-2 group-hover:text-primary-dark transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-secondary-dark font-elegant-body text-sm leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center text-accent group-hover:text-accent-hover transition-colors duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Our Impact
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Discover the numbers behind our community library's success and growth.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-elegant-heading text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-dark font-elegant-body text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
                About FBCL
              </h2>
              <p className="text-responsive-lg text-secondary-dark mb-4 sm:mb-6 font-elegant-body leading-relaxed">
                The Friends of the Friern Barnet Community Library is a non-profit organization dedicated to 
                supporting the Friern Barnet Community Library through fundraising, volunteerism, and community outreach.
              </p>
              <p className="text-secondary-dark mb-6 sm:mb-8 font-elegant-body leading-relaxed">
                We believe that access to knowledge and literacy resources is fundamental to a thriving 
                community. Our volunteers work tirelessly to ensure that everyone has the opportunity 
                to discover the joy of reading and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/about" className="btn-secondary font-elegant-body">
                  Learn More
                </Link>
                <Link href="/volunteer" className="btn-outline font-elegant-body">
                  Volunteer
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-fade-in stagger-1">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop"
                alt="Volunteers working"
                className="w-full h-48 sm:h-64 object-cover hover-scale rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Community event"
                className="w-full h-48 sm:h-64 object-cover mt-8 hover-scale rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Featured Events
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Join us for exciting events that bring our community together through the love of reading and learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredEvents.map((event, index) => (
              <div
                key={event.title}
                className="card group animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <h3 className="text-lg sm:text-xl font-elegant-heading mb-2 sm:mb-3">{event.title}</h3>
                <div className="text-sm text-secondary-dark mb-3 sm:mb-4 font-elegant-body">
                  {event.date} • {event.time}
                </div>
                <p className="text-secondary-dark mb-4 sm:mb-6 font-elegant-body leading-relaxed">{event.description}</p>
                <Link href="/events" className="btn-secondary font-elegant-body inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 sm:mt-12 animate-fade-in stagger-3">
            <Link href="/events" className="btn-outline font-elegant-body">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              What Our Community Says
            </h2>
            <p className="text-responsive-lg text-secondary-dark font-elegant-body">
              Hear from the people who make our library community special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl text-accent mb-4 sm:mb-6 font-elegant-accent">"</div>
                <p className="text-secondary-dark mb-6 sm:mb-8 italic font-elegant-body leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-elegant-heading text-primary-dark">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-secondary font-elegant-body">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl !text-warm md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Get Involved
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-8 sm:mb-10 max-w-4xl mx-auto font-elegant-body leading-relaxed">
              Friern Barnet Community Library is a volunteer-run library! We would appreciate your help. 
              Ask at the staff desk if you would like to be a volunteer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild className="text-base px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/volunteer" className="font-elegant-body">
                  Volunteer With Us
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 font-elegant-body text-base px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Our Library Gallery
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Take a virtual tour of our community library and see the spaces where learning and community come together.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GalleryCarousel images={galleryImages} />
          </div>
          
          <div className="text-center mt-8 sm:mt-10 animate-fade-in stagger-2">
            <Button variant="outline" asChild className="font-elegant-body">
              <Link href="/events/gallery">
                More Pictures
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Awards & Recognition
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              We're proud of the recognition we've received for our commitment to community literacy and engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awards.map((award, index) => (
              <Card key={award.id} className="animate-fade-in hover-lift p-4 sm:p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg"
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

      {/* What's On Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              What's On at FBCL?
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Discover our diverse range of classes, workshops, and community events.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {activities.map((activity, index) => (
              <Card
                key={activity.name}
                className="text-center animate-fade-in hover-lift p-3 sm:p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{activity.icon}</div>
                <h3 className="text-sm sm:text-lg font-elegant-heading text-primary-dark mb-1 sm:mb-2">{activity.name}</h3>
                <p className="text-xs sm:text-sm text-secondary-dark font-elegant-body">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-fade-in p-4 sm:p-6">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-elegant-heading mb-2">Visit Us</h3>
              <p className="text-secondary-dark font-elegant-body text-sm sm:text-base">
                Friern Barnet Community Library<br />
                Friern Barnet, London
              </p>
            </div>
            <div className="text-center animate-fade-in stagger-1 p-4 sm:p-6">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-elegant-heading mb-2">Opening Hours</h3>
              <p className="text-secondary-dark font-elegant-body text-sm sm:text-base">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
            </div>
            <div className="text-center animate-fade-in stagger-2 p-4 sm:p-6">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-elegant-heading mb-2">Contact</h3>
              <p className="text-secondary-dark font-elegant-body text-sm sm:text-base">
                Get in touch with our team<br />
                for more information
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 