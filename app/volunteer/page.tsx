import { Metadata } from 'next'
import { Users, BookOpen, Heart, Clock, Award, Target, CheckCircle } from 'lucide-react'
import { Button, Card, Input, Textarea, Select } from '@/components/ui'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join our volunteer team and make a difference in the community. Various opportunities available for all skill levels and interests.',
}

const volunteerRoles = [
  {
    title: "Story Time Assistant",
    description: "Help with children's story time sessions, including reading, crafts, and activities.",
    time: "2-3 hours/week",
    skills: ["Patience with children", "Reading skills", "Creativity"],
    icon: BookOpen
  },
  {
    title: "Book Sorting & Organization",
    description: "Assist with organizing and maintaining our book collection and library materials.",
    time: "3-4 hours/week",
    skills: ["Attention to detail", "Organization skills", "Physical stamina"],
    icon: BookOpen
  },
  {
    title: "Event Coordinator",
    description: "Help plan and coordinate library events, workshops, and community programs.",
    time: "5-8 hours/week",
    skills: ["Event planning", "Communication", "Organization"],
    icon: Users
  },
  {
    title: "Digital Literacy Tutor",
    description: "Teach basic computer skills and help community members with technology questions.",
    time: "2-4 hours/week",
    skills: ["Computer skills", "Teaching ability", "Patience"],
    icon: BookOpen
  },
  {
    title: "Fundraising Assistant",
    description: "Support our fundraising efforts through events, campaigns, and donor relations.",
    time: "3-5 hours/week",
    skills: ["Communication", "Sales experience", "Event planning"],
    icon: Heart
  },
  {
    title: "Community Outreach",
    description: "Represent FBCL at community events and help spread awareness about our programs.",
    time: "2-4 hours/week",
    skills: ["Public speaking", "Networking", "Enthusiasm"],
    icon: Users
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Make a Difference",
    description: "Directly impact literacy and education in your community."
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Connect with like-minded individuals and form lasting friendships."
  },
  {
    icon: Award,
    title: "Gain Experience",
    description: "Develop new skills and add valuable experience to your resume."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose opportunities that fit your schedule and interests."
  }
]

const successStories = [
  {
    name: "Maria Rodriguez",
    role: "Story Time Assistant",
    story: "I've been volunteering for 3 years and seeing the children's faces light up when we read together is the most rewarding experience.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "James Chen",
    role: "Digital Literacy Tutor",
    story: "Teaching seniors how to use computers has been incredibly fulfilling. I've learned as much from them as they have from me.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Sarah Thompson",
    role: "Event Coordinator",
    story: "Organizing our summer reading program has been amazing. The community response has been overwhelming and heartwarming.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

export default function VolunteerPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-responsive-4xl text-secondary-400 md:text-responsive-6xl font-bold mb-4 sm:mb-6">
                Volunteer With Us
              </h1>
              <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
                Join our dedicated team of volunteers and help make a difference in our community. 
                Whether you have a few hours or want to make a long-term commitment, 
                we have opportunities that match your interests and schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="secondary" >
                <Link href="/volunteer/apply">
                Apply Now
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"
                alt="Volunteers working together"
                className="rounded-lg shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect volunteer role that matches your skills, interests, and schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {volunteerRoles.map((role, index) => (
              <Card
                key={role.title}
                className="group animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <role.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{role.description}</p>
                
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{role.time}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Skills Needed:</h4>
                  <ul className="space-y-1">
                    {role.skills.map((skill) => (
                      <li key={skill} className="text-xs sm:text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/volunteer/apply">
                    Apply for This Role
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Discover the many benefits of joining our volunteer team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <benefit.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Volunteer Success Stories
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our volunteers about their experiences and the impact they've made.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div
                key={story.name}
                className="card animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{story.name}</h3>
                    <p className="text-xs sm:text-sm text-primary-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm sm:text-base">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4 sm:mb-6">
                How to Get Started
              </h2>
              <p className="text-responsive-lg text-gray-600 mb-6 sm:mb-8">
                Our volunteer application process is simple and designed to help you find 
                the perfect opportunity to serve our community.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Submit Application</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Fill out our online application form with your interests and availability.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Interview</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Meet with our volunteer coordinator to discuss opportunities and expectations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Training</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Complete orientation and any role-specific training required.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Start Volunteering</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Begin your volunteer work and make a difference in our community!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ready to Apply?</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We're excited to welcome you to our volunteer team! Our comprehensive application form 
                  helps us understand your interests, availability, and experience to find the perfect 
                  volunteer opportunity for you.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Quick and easy online application</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Comprehensive but user-friendly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="text-gray-700 text-sm sm:text-base">Secure and confidential</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="text-gray-700 text-sm sm:text-base">We'll be in touch within 48 hours</span>
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/volunteer/apply">
                    Start Your Application
                  </Link>
                </Button>
                
                <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center">
                  Questions? Contact us at{' '}
                  <a href="mailto:fbcllibrary15@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                    fbcllibrary15@gmail.com
                  </a>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl text-secondary-400 md:text-responsive-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join our volunteer team and help us create a more literate, connected, 
              and vibrant community. Every hour you give makes a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="btn-secondary">
                <Link href="/volunteer/apply">
                  Apply Now
                </Link>
              </Button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 