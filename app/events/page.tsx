import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Quote } from 'lucide-react'
import { Button, Card, Input } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Discover upcoming events and programs at the Friern Barnet Community Library. From story time to author readings, there\'s something for everyone.',
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Summer Reading Program Kickoff',
    date: 'June 15, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Library Hall',
    description: 'Join us for the start of our annual summer reading challenge! Activities for all ages, including crafts, games, and book giveaways.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    category: 'Reading Program',
    attendees: 45,
    rating: 5,
  },
  {
    id: 2,
    title: 'Author Meet & Greet',
    date: 'July 8, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Community Room',
    description: 'Meet local author Sarah Johnson and discuss her latest novel "The Bay Chronicles". Book signing and Q&A session included.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    category: 'Author Event',
    attendees: 30,
    rating: 5,
  },
  {
    id: 3,
    title: 'Children\'s Story Time',
    date: 'Every Saturday',
    time: '11:00 AM - 11:30 AM',
    location: 'Children\'s Section',
    description: 'Interactive story time for children ages 3-8. Songs, crafts, and fun activities included.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Children',
    attendees: 20,
    rating: 5,
  },
  {
    id: 4,
    title: 'Book Club: "The Midnight Library"',
    date: 'July 22, 2024',
    time: '6:30 PM - 8:00 PM',
    location: 'Reading Room',
    description: 'Join our monthly book club discussion of Matt Haig\'s "The Midnight Library". New members welcome!',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    category: 'Book Club',
    attendees: 15,
    rating: 5,
  },
  {
    id: 5,
    title: 'Digital Literacy Workshop',
    date: 'August 5, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Computer Lab',
    description: 'Learn essential computer skills for beginners. Topics include email, internet safety, and basic word processing.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    category: 'Workshop',
    attendees: 12,
    rating: 5,
  },
  {
    id: 6,
    title: 'Teen Writing Workshop',
    date: 'August 12, 2024',
    time: '4:00 PM - 6:00 PM',
    location: 'Teen Space',
    description: 'Creative writing workshop for teens ages 13-18. Explore different genres and share your work with peers.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    category: 'Teen Program',
    attendees: 18,
    rating: 5,
  },
]

const pastEvents = [
  {
    id: 7,
    title: 'Spring Book Sale',
    date: 'May 20, 2024',
    description: 'Our annual spring book sale was a huge success! We raised over $2,000 for library programs.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    attendees: 150,
    rating: 5,
  },
  {
    id: 8,
    title: 'Poetry Night',
    date: 'April 15, 2024',
    description: 'Local poets shared their work in an intimate evening of poetry and community.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    attendees: 35,
    rating: 5,
  },
  {
    id: 9,
    title: 'Family Game Night',
    date: 'March 30, 2024',
    description: 'Families enjoyed an evening of board games, puzzles, and friendly competition.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    attendees: 60,
    rating: 5,
  },
]

const featuredEvent = {
  title: "Community Reading Festival",
  date: "September 15, 2024",
  time: "10:00 AM - 6:00 PM",
  location: "Library Grounds",
  description: "Our biggest event of the year! Join us for a day filled with author readings, children's activities, book signings, live music, and community celebration. This annual festival brings together readers of all ages to celebrate the joy of literature and the power of community.",
  image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
  category: "Special Event",
  attendees: 200,
  rating: 5,
}

const categories = ['All', 'Reading Program', 'Author Event', 'Children', 'Book Club', 'Workshop', 'Teen Program']

export default function EventsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl md:text-responsive-6xl text-secondary-400 font-bold mb-4 sm:mb-6">
              Library Events
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Discover exciting programs, workshops, and community gatherings at the Friern Barnet Community Library.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Featured Event
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss our biggest community celebration of the year - the annual Reading Festival!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in p-6 sm:p-8" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(featuredEvent.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 text-secondary-500 fill-current" />
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 text-xs sm:text-sm font-medium rounded-full">
                      {featuredEvent.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{featuredEvent.title}</h3>
                  
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                      <span className="text-sm sm:text-base">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                      <span className="text-sm sm:text-base">{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                      <span className="text-sm sm:text-base">{featuredEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                      <span className="text-sm sm:text-base">{featuredEvent.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {featuredEvent.description}
                  </p>
                  
                  <Button className="inline-flex items-center">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div>
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these exciting upcoming events and programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.id}
                className="animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(event.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-secondary-500 fill-current" />
                  ))}
                </div>
                
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 text-xs sm:text-sm font-medium rounded-full">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{event.title}</h3>
                
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{event.description}</p>
                
                <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center text-sm sm:text-base">
                  Register
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Statistics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl text-secondary-400 md:text-responsive-4xl font-bold mb-4">
              Our Events by the Numbers
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              The impact of our events is measured in community engagement and learning opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Events Per Year
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Annual Attendees
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Satisfaction Rate
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                6
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">
                Event Categories
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Recent Success Stories
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent successful events and community gatherings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={event.id}
                className="animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(event.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-secondary-500 fill-current" />
                  ))}
                </div>
                
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{event.title}</h3>
                <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                  {event.date} • {event.attendees} attendees
                </div>
                <p className="text-gray-600 text-sm sm:text-base">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Events Gallery
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Browse through photos of our community events, workshops, and activities that bring our library to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {[
              { src: '/libr1.jpg', alt: 'Summer reading program event', title: 'Summer Reading Program' },
              { src: '/libr2.jpg', alt: 'Author meet and greet event', title: 'Author Meet & Greet' },
              { src: '/libr3.jpg', alt: 'Children story time session', title: 'Children\'s Story Time' },
              { src: '/libr4.jpg', alt: 'Book club meeting', title: 'Adult Book Club' },
              { src: '/libr5.jpg', alt: 'Computer literacy workshop', title: 'Computer Workshop' },
              { src: '/library.jpg', alt: 'Community volunteer day', title: 'Volunteer Day' }
            ].map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                    <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-secondary-300 text-xs sm:text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 animate-fade-in stagger-2">
            <Button variant="outline" asChild>
              <Link href="/events/gallery">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Event Categories
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Find events that match your interests and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <Card
                key={category}
                className="text-center group hover:shadow-lg transition-shadow cursor-pointer animate-fade-in p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm sm:text-lg font-semibold text-primary-600">{category}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold text-secondary-400 mb-4">
              Stay Updated
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, 
              volunteer opportunities, and community news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-gray-900 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 