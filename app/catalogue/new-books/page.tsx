import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Star, ArrowRight, Calendar, User, Heart, Eye, Clock, TrendingUp } from 'lucide-react'
import { Button, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'New Books',
  description: 'Explore our latest acquisitions and recently added materials at the Friern Barnet Community Library.',
}

const newBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
    category: 'Fiction',
    format: 'Hardcover',
    rating: 4.8,
    acquisitionDate: 'January 15, 2024',
    isbn: '978-0525559474',
    pages: 288,
    available: true,
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. Learn how to make time for new habits and break bad ones.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    category: 'Self-Help',
    format: 'Paperback',
    rating: 4.9,
    acquisitionDate: 'January 12, 2024',
    isbn: '978-0735211292',
    pages: 320,
    available: true,
  },
  {
    id: 3,
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    category: 'Fiction',
    format: 'Hardcover',
    rating: 4.7,
    acquisitionDate: 'January 10, 2024',
    isbn: '978-1501161933',
    pages: 400,
    available: true,
  },
  {
    id: 4,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop',
    category: 'Science Fiction',
    format: 'Hardcover',
    rating: 4.6,
    acquisitionDate: 'January 8, 2024',
    isbn: '978-0593135204',
    pages: 496,
    available: true,
  },
  {
    id: 5,
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    description: 'From the bestselling author of Never Let Me Go and The Remains of the Day, a stunning new novel about the nature of love and humanity.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    category: 'Literary Fiction',
    format: 'Hardcover',
    rating: 4.5,
    acquisitionDate: 'January 5, 2024',
    isbn: '978-0593318171',
    pages: 320,
    available: true,
  },
  {
    id: 6,
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    description: 'From the number-one bestselling author of The Nightingale and The Great Alone comes a powerful American epic about love and heroism.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=400&fit=crop',
    category: 'Historical Fiction',
    format: 'Hardcover',
    rating: 4.4,
    acquisitionDate: 'January 3, 2024',
    isbn: '978-0312577230',
    pages: 464,
    available: true,
  },
]

const categories = [
  { name: 'Fiction', count: 45, color: 'bg-blue-100 text-blue-800' },
  { name: 'Non-Fiction', count: 38, color: 'bg-green-100 text-green-800' },
  { name: 'Children\'s', count: 52, color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Young Adult', count: 28, color: 'bg-purple-100 text-purple-800' },
  { name: 'Science Fiction', count: 15, color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Mystery', count: 22, color: 'bg-red-100 text-red-800' },
]

const stats = [
  { number: '150+', label: 'New Books This Month', icon: TrendingUp },
  { number: '25', label: 'Categories', icon: BookOpen },
  { number: '95%', label: 'Availability Rate', icon: Eye },
  { number: '24h', label: 'Reservation Time', icon: Clock },
]

export default function NewBooksPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-600 to-accent-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl text-white md:text-responsive-6xl font-elegant-heading mb-4 sm:mb-6">
              New Books
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 font-elegant-body">
              Discover our latest acquisitions and recently added materials. 
              Stay up to date with the newest releases and upcoming releases, and special collections.
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

      {/* Latest Acquisitions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Latest Acquisitions
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Our newest additions to the library collection, carefully selected for our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newBooks.map((book, index) => (
              <Card
                key={book.id}
                className="animate-fade-in hover-lift p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(Math.floor(book.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary-500 fill-current" />
                  ))}
                  {book.rating % 1 !== 0 && (
                    <Star className="h-4 w-4 text-secondary-500 fill-current opacity-50" />
                  )}
                </div>
                
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      New
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {book.format}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-elegant-heading">{book.title}</h3>
                  <p className="text-gray-600 font-elegant-body">by {book.author}</p>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Added {book.acquisitionDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{book.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm font-elegant-body line-clamp-3">
                    {book.description}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Reserve
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Browse by Category
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Find new books in your favorite categories and discover new interests.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm sm:text-base font-elegant-heading mb-2">{category.name}</h3>
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                  {category.count} books
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              New Books by the Numbers
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Stay informed about our collection growth and availability.
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
                  <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 text-accent-600" />
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

      {/* Coming Soon */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Coming Soon
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto font-elegant-body">
              Get a preview of books that will be added to our collection in the coming weeks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-elegant-heading mb-3">Pre-Orders</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Reserve upcoming releases before they hit the shelves.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-elegant-heading mb-3">Recommendations</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Get personalized book suggestions based on your reading history.
              </p>
            </Card>
            
            <Card className="text-center animate-fade-in p-6" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-elegant-heading mb-3">Email Alerts</h3>
              <p className="text-gray-600 font-elegant-body text-sm">
                Receive notifications when new books in your favorite genres arrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4">
              Stay Updated
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-elegant-body">
              Never miss a new book! Subscribe to our newsletter for the latest additions to our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link href="/catalogue">
                  Browse Catalogue
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-accent-600">
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