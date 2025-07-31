import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Search, BookMarked, Star, ArrowRight, Users, Calendar, MapPin } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Explore our extensive library catalogue including books, digital resources, and special collections at the Friern Barnet Community Library.',
}

const featuredCollections = [
  {
    title: 'Children\'s Literature',
    description: 'A carefully curated selection of books for young readers, from picture books to young adult novels.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    count: '2,500+',
    category: 'Children',
    rating: 5,
  },
  {
    title: 'Local History',
    description: 'Discover the rich history of Friern Barnet and surrounding areas through our local history collection.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    count: '500+',
    category: 'History',
    rating: 5,
  },
  {
    title: 'Digital Resources',
    description: 'Access e-books, audiobooks, and online databases through our digital collection.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    count: '10,000+',
    category: 'Digital',
    rating: 5,
  },
  {
    title: 'Adult Fiction',
    description: 'Contemporary and classic fiction for adult readers, including bestsellers and literary works.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop',
    count: '5,000+',
    category: 'Fiction',
    rating: 5,
  },
  {
    title: 'Non-Fiction',
    description: 'Comprehensive non-fiction collection covering science, technology, arts, and humanities.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    count: '8,000+',
    category: 'Non-Fiction',
    rating: 5,
  },
  {
    title: 'Reference Materials',
    description: 'Dictionaries, encyclopedias, and reference books for research and learning.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    count: '1,200+',
    category: 'Reference',
    rating: 5,
  },
]

const mainNavigationButtons = [
  {
    title: 'Collection Guides',
    description: 'Expert guides to help you navigate and discover our specialized collections.',
    icon: BookMarked,
    href: '/catalogue/guides',
    color: 'bg-secondary-100 text-secondary-600',
    buttonText: 'Browse Guides',
  },
  {
    title: 'New Books',
    description: 'Explore our latest acquisitions and recently added materials.',
    icon: Star,
    href: '/catalogue/new-books',
    color: 'bg-accent-100 text-accent-600',
    buttonText: 'View New Books',
  },
]

const stats = [
  { number: '25,000+', label: 'Total Items', icon: BookOpen },
  { number: '50+', label: 'Subject Areas', icon: BookMarked },
  { number: '100+', label: 'New Items Monthly', icon: Star },
  { number: '95%', label: 'Availability Rate', icon: Users },
]

export default function CataloguePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl  text-secondary-400 md:text-responsive-6xl font-elegant-heading mb-4 sm:mb-6">
              Our Catalogue
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 font-elegant-body">
              Discover our extensive library catalogue, from rare books to digital resources. 
              Every item tells a story and opens new worlds of knowledge and imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Navigation Buttons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Catalogue Navigation
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Access our specialized catalogue sections and discover new resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mainNavigationButtons.map((item, index) => (
              <Card
                key={item.title}
                className="animate-fade-in hover-lift p-8 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-elegant-heading mb-4">{item.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-6 text-lg">{item.description}</p>
                <Button asChild size="lg" className="w-full">
                  <Link href={item.href}>
                    {item.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Statistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Catalogue by the Numbers
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Our catalogue continues to grow, serving the diverse needs of our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in p-3 sm:p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary-600" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-elegant-heading text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-elegant-body text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Featured Collections
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Explore our most popular and comprehensive catalogue sections, carefully curated for our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCollections.map((collection, index) => (
              <Card
                key={collection.title}
                className="animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {[...Array(collection.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-secondary-500 fill-current" />
                  ))}
                </div>
                
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3 sm:mb-4"
                />
                
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-800 text-xs sm:text-sm font-medium rounded-full">
                    {collection.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-elegant-body">
                    {collection.count} items
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-elegant-heading mb-2 sm:mb-3">{collection.title}</h3>
                <p className="text-gray-600 font-elegant-body mb-3 sm:mb-4 text-sm sm:text-base">{collection.description}</p>
                
                <Button variant="outline" className="w-full">
                  Browse Collection
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Catalogue Services
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              We offer a range of services to help you make the most of our catalogue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Interlibrary Loans</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Access materials from other libraries through our interlibrary loan service.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Research Assistance</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Get help with research projects and finding the right resources for your needs.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💡</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Reading Recommendations</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Personalized reading suggestions based on your interests and preferences.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Digital Access</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Access our digital collections from anywhere with your library card.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Group Study</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Reserve study spaces and access group resources for collaborative learning.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-base sm:text-lg font-elegant-heading mb-2 sm:mb-3">Special Collections</h3>
              <p className="text-gray-600 font-elegant-body text-sm sm:text-base">
                Access rare books, archives, and special materials by appointment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Start Exploring
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-elegant-body">
              Ready to discover our catalogue? Visit the library or explore our online catalogue 
              to find your next great read.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/catalogue/guides">
                  Browse Guides
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-600">
                <Link href="/contact">
                  Get Library Card
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 