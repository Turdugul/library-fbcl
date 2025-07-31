'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Clock, Phone, ChevronRight, Award } from 'lucide-react'
import { Button, Card, Carousel, Gallery } from '@/components/ui'
import { stats, featuredEvents, testimonials, quickLinks, activities, galleryImages, awards, homeGalleryImages } from '@/lib/data'

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] sm:min-h-[90vh] py-16 sm:py-20 lg:py-24">
            <div className="animate-fade-in">
              <div className="mb-2 sm:mb-6">
                <span className="text-secondary-400 font-medium tracking-wide uppercase text-xs sm:text-sm bg-white/10 px-3 sm:px-4 py-2 rounded-full">
                  Established 2013
                </span>
              </div>
              <h1 className="text-responsive-3xl text-secondary-400 md:text-responsive-3xl font-elegant-heading mb-6 sm:mb-8 text-balance leading-tight">
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
    <Image
      src="/library.jpg"
      alt="Exterior view of the community library"
      className="object-cover rounded-lg"
      width={500}
      height={350}
      priority
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
          <Gallery
            images={homeGalleryImages}
            title="Our Library Gallery"
            description="Take a virtual tour of our community library and see the spaces where learning and community come together."
            columns={3}
            showTitles={true}
            showDescriptions={true}
            className="animate-fade-in"
          />
          
          <div className="text-center mt-8 sm:mt-10 animate-fade-in stagger-2">
            <Button variant="outline" asChild className="font-elegant-body">
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