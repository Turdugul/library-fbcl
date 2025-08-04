import { Metadata } from 'next'
import { Calendar, Users, MapPin, Clock, DollarSign, CheckCircle, Phone, Mail, ArrowRight, Star, Heart, Users2, Coffee, Wifi, Accessibility, Utensils } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hire the Library - Friern Barnet Community Library',
  description: 'Affordable, welcoming, and perfect for your event — starting from just £30/hour! Host birthdays, workshops, community groups, and more.',
}

const eventTypes = [
  { name: 'Birthdays', icon: '🎉' },
  { name: "Children's Parties", icon: '🧸' },
  { name: 'Workshops', icon: '📚' },
  { name: 'Community Groups', icon: '🕺' },
  { name: "Melon's Mini Movers", icon: '🥳' },
  { name: 'Meetings or Clubs', icon: '🗣️' },
  { name: 'Small celebrations', icon: '🧁' }
]

const facilities = [
  { name: 'Fully equipped kitchen', icon: Utensils },
  { name: 'Wheelchair access', icon: Accessibility },
  { name: 'Accessible toilet (for disabled users)', icon: Accessibility },
  { name: 'Spacious, flexible layout', icon: Users2 },
  { name: 'Community atmosphere', icon: Heart },
  { name: 'Friendly, supportive staff', icon: Users }
]

export default function HireUsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl text-secondary-400 md:text-6xl font-bold mb-6">
              Hire the Library
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Affordable, welcoming, and perfect for your event — starting from just £30/hour!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="mailto:fbcllibrary15@gmail.com?subject=Library Hire Booking">
                  Book Now
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <a href="#facilities">
                  See Facilities
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to Your Community Space
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for a warm, community-centered space to host your next event, party, or workshop? 
              Friern Barnet Community Library is available to hire from just £30 per hour!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {eventTypes.map((event, index) => (
                <Card
                  key={event.name}
                  className="text-center animate-fade-in hover-lift p-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{event.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our facilities are designed to make your event comfortable, accessible, and successful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={facility.name}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <facility.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{facility.name}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Terms & Conditions apply. Please contact us if you have specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Panel */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary-600 text-white p-8 text-center animate-fade-in">
              <h2 className="text-3xl text-secondary-400 md:text-4xl font-bold mb-4">
                Hire us from £30/hour — no hidden fees.
              </h2>
              <p className="text-xl text-gray-100 mb-6">
                Discounts for long-term bookings or recurring events.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-secondary-300" />
                      <a 
                        href="mailto:fbcllibrary15@gmail.com" 
                        className="text-gray-100 hover:text-secondary-300 underline"
                      >
                        fbcllibrary15@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-secondary-300" />
                      <a 
                        href="tel:02083610174" 
                        className="text-gray-100 hover:text-secondary-300 underline"
                      >
                        020 8361 0174
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-secondary-300" />
                      <span className="text-gray-100">
                        Or ask at the staff desk during opening hours
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Booking</h3>
                  <p className="text-gray-100 mb-4">
                    Ready to book? Send us an email with your event details and preferred dates.
                  </p>
                  <Button variant="secondary" asChild className="w-full">
                    <Link href="mailto:fbcllibrary15@gmail.com?subject=Library Hire Booking">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who have hosted events at our library.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-fade-in p-6" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Perfect venue for our children's birthday party. The staff were incredibly helpful and the space was exactly what we needed."
              </p>
              <div className="text-sm text-gray-500">- Sarah M., Local Parent</div>
            </Card>
            
            <Card className="animate-fade-in p-6" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Great community atmosphere for our workshop. The kitchen facilities were excellent and the space was very accessible."
              </p>
              <div className="text-sm text-gray-500">- David L., Workshop Leader</div>
            </Card>
            
            <Card className="animate-fade-in p-6" style={{ animationDelay: '0.3s' }}>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Affordable, welcoming, and the perfect size for our community group meetings. Highly recommend!"
              </p>
              <div className="text-sm text-gray-500">- Maria K., Community Organizer</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl text-secondary-400  md:text-4xl font-bold mb-4">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join the many community members who have successfully hosted their events at the Friern Barnet Community Library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="mailto:fbcllibrary15@gmail.com?subject=Library Hire Booking">
                  Book Your Space
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
    </div>
  )
} 