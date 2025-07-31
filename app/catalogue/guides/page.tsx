import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Search, BookMarked, Star, ArrowRight, Users, Calendar, MapPin, FileText, GraduationCap, Globe, Microscope, Palette, Code, Heart } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Collection Guides',
  description: 'Access our comprehensive research guides, subject guides, and learning resources to help you navigate our collections effectively.',
}

const guides = [
  {
    id: 1,
    title: 'Research Methods',
    description: 'Learn effective research strategies and techniques for academic and personal projects.',
    category: 'Research',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
    topics: ['Literature Review', 'Citation Methods', 'Data Analysis', 'Source Evaluation'],
    rating: 5,
    author: 'Dr. Sarah Johnson',
    lastUpdated: '2024-01-15',
  },
  {
    id: 2,
    title: 'Academic Writing',
    description: 'Master the art of academic writing with our comprehensive guide.',
    category: 'Writing',
    icon: FileText,
    color: 'bg-green-100 text-green-600',
    topics: ['Essay Structure', 'Argument Development', 'Grammar Rules', 'Style Guidelines'],
    rating: 5,
    author: 'Prof. Michael Chen',
    lastUpdated: '2024-01-10',
  },
  {
    id: 3,
    title: 'Digital Literacy',
    description: 'Navigate the digital world with confidence and critical thinking skills.',
    category: 'Technology',
    icon: Code,
    color: 'bg-purple-100 text-purple-600',
    topics: ['Online Safety', 'Digital Tools', 'Information Literacy', 'Media Evaluation'],
    rating: 5,
    author: 'Tech Team',
    lastUpdated: '2024-01-20',
  },
  {
    id: 4,
    title: 'Local History Research',
    description: 'Discover the rich history of Friern Barnet and surrounding areas.',
    category: 'History',
    icon: MapPin,
    color: 'bg-orange-100 text-orange-600',
    topics: ['Archival Research', 'Oral Histories', 'Photographic Records', 'Census Data'],
    rating: 5,
    author: 'Local History Society',
    lastUpdated: '2024-01-05',
  },
  {
    id: 5,
    title: 'Children\'s Literature',
    description: 'Explore the world of children\'s books and reading development.',
    category: 'Education',
    icon: BookOpen,
    color: 'bg-pink-100 text-pink-600',
    topics: ['Reading Levels', 'Genre Exploration', 'Author Studies', 'Reading Aloud'],
    rating: 5,
    author: 'Children\'s Librarian',
    lastUpdated: '2024-01-12',
  },
  {
    id: 6,
    title: 'Science & Technology',
    description: 'Access reliable scientific information and understand current research.',
    category: 'Science',
    icon: Microscope,
    color: 'bg-teal-100 text-teal-600',
    topics: ['Scientific Method', 'Peer Review', 'Research Ethics', 'Data Interpretation'],
    rating: 5,
    author: 'Science Department',
    lastUpdated: '2024-01-18',
  },
]

const subjectAreas = [
  { name: 'Humanities', icon: GraduationCap, count: 15 },
  { name: 'Sciences', icon: Microscope, count: 12 },
  { name: 'Arts', icon: Palette, count: 8 },
  { name: 'Technology', icon: Code, count: 10 },
  { name: 'Health', icon: Heart, count: 6 },
  { name: 'Business', icon: Users, count: 9 },
]

export default function GuidesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl text-white md:text-responsive-6xl font-elegant-heading mb-4 sm:mb-6">
              Collection Guides
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 font-elegant-body">
              Access our comprehensive research guides, subject guides, and learning resources 
              to help you navigate our collections effectively and make the most of our library services.
            </p>
          </div>
          <div className="animate-fade-in">
            <Button variant="outline" asChild className="mb-6">
              <Link href="/catalogue">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Catalogue
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Browse by Subject Area
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Find guides organized by subject area to help you navigate our collections effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {subjectAreas.map((subject, index) => (
              <Card
                key={subject.name}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <subject.icon className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
                </div>
                <h3 className="text-sm sm:text-base font-elegant-heading mb-1 sm:mb-2">{subject.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-elegant-body">{subject.count} guides</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Featured Guides
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Our most popular and comprehensive guides, carefully curated to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {guides.map((guide, index) => (
              <Card
                key={guide.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(guide.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${guide.color}`}>
                    <guide.icon className="h-5 w-5" />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                    {guide.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-elegant-heading mb-3">{guide.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-4 text-sm sm:text-base">{guide.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-900">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {guide.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By {guide.author}</span>
                  <span>Updated {guide.lastUpdated}</span>
                </div>
                
                <Button className="w-full">
                  View Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Guides */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              How to Use Our Guides
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Get the most out of our comprehensive research and learning guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg font-elegant-heading mb-3">Browse by Topic</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Explore guides organized by subject area to find relevant resources for your research.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-elegant-heading mb-3">Follow the Steps</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Each guide provides step-by-step instructions to help you navigate the research process effectively.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-elegant-heading mb-3">Get Help</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Contact our librarians for personalized assistance with your research projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Ready to Start Researching?
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-elegant-body">
              Explore our guides to enhance your research skills and discover new resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="https://app.readingcloud.net/" target="_blank" rel="noopener noreferrer">
                  Browse Catalogue
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-secondary-600">
                <Link href="/contact">
                  Contact Librarian
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 