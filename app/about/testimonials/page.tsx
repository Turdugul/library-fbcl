import { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Hear from our community members, volunteers, and supporters about their experiences with the Friends of the Friern Barnet Community Library.',
}

const testimonials = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Parent & Volunteer",
    rating: 5,
    quote: "The library has become a second home for my children. The volunteers are amazing and the programs have helped my kids develop a love for reading that I never thought possible.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    years: "3 years"
  },
  {
    id: 2,
    name: "John Smith",
    role: "Volunteer",
    rating: 5,
    quote: "I've been volunteering here for 5 years and it's the most rewarding experience. The community is wonderful and I've made lifelong friends while helping others discover the joy of reading.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    years: "5 years"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Student",
    rating: 5,
    quote: "The programs they offer have helped my reading skills improve dramatically. The tutors are patient and encouraging, and I've gained so much confidence in my abilities.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    years: "2 years"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Community Member",
    rating: 5,
    quote: "As a senior, the digital literacy classes have been a lifesaver. I can now stay connected with my family through video calls and social media. The instructors are wonderful.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    years: "1 year"
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Author & Event Participant",
    rating: 5,
    quote: "I've participated in several author events at the library and the community response has been incredible. The staff goes above and beyond to create meaningful experiences.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    years: "2 years"
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Donor",
    rating: 5,
    quote: "I've been donating to FBCL for years because I can see the direct impact they make in our community. The transparency and dedication of the organization is outstanding.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    years: "4 years"
  },
  {
    id: 7,
    name: "Lisa Park",
    role: "Teacher",
    rating: 5,
    quote: "I bring my students to the library regularly and the educational programs are fantastic. The staff works closely with schools to support our curriculum needs.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    years: "3 years"
  },
  {
    id: 8,
    name: "Robert Martinez",
    role: "Local Business Owner",
    rating: 5,
    quote: "The library's community events have brought so much life to our neighborhood. It's wonderful to see people of all ages coming together to learn and connect.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    years: "2 years"
  }
]

const featuredTestimonial = {
  name: "Dr. Sarah Johnson",
  role: "Board President & Long-time Supporter",
  rating: 5,
  quote: "The Friends of the Friern Barnet Community Library has transformed our community in ways I never imagined possible. From the children who discover their first book to the seniors who learn to use technology, every person who walks through our doors finds something valuable. The dedication of our volunteers and staff, combined with the generosity of our donors, creates a space where everyone belongs and everyone can grow. This isn't just a library - it's the heart of our community.",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  years: "15+ years"
}

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl text-secondary-400 md:text-6xl font-bold mb-6">
              What Our Community Says
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Hear from the people who make our library community special - volunteers, 
              patrons, donors, and supporters who have experienced the impact of the Friern Barnet Community Library.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A special message from our board president about the impact of the Friern Barnet Community Library on our community.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="text-center animate-fade-in p-8" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-6">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-secondary-500 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="h-12 w-12 text-primary-300 mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  "{featuredTestimonial.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {featuredTestimonial.name}
                  </div>
                  <div className="text-primary-600">
                    {featuredTestimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {featuredTestimonial.years} with the Library
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community Voices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people about how the Friern Barnet Community Library has made a difference in their lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary-500 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary-300 mx-auto mb-3" />
                  <blockquote className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.years} with the Library
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The real impact of our work is measured not just in numbers, but in the stories behind them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">
                Community Satisfaction Rate
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Active Volunteers
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600 font-medium">
                People Served Annually
              </div>
            </Card>
            
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">
                Years of Service
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl text-secondary-400  md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Be part of the story. Whether you want to volunteer, donate, or simply visit, 
              we'd love to welcome you to the Friern Barnet Community Library family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
              <Link href="/volunteer">
              Volunteer With Us
                  </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              <Link href="/donate">
              Make a Donation
                  </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 