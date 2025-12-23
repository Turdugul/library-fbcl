// Data fetching utilities for different rendering strategies

// Simulate API calls for demonstration
// In a real app, these would be actual API calls

export interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: string
  attendees: number
  rating: number
}

export interface Book {
  id: number
  title: string
  author: string
  isbn: string
  category: string
  available: boolean
  coverImage: string
  description: string
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Events data fetching (for ISR - revalidate every hour)
export async function getEvents(): Promise<Event[]> {
  // Simulate API call
  await delay(100)
  
  return [
    {
      id: 1,
      title: 'Summer Reading Program Kickoff',
      date: 'June 15, 2024',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Library Hall',
      description: 'Join us for the start of our annual summer reading challenge! Activities for all ages, including crafts, games, and book giveaways.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format',
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
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
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      category: 'Children',
      attendees: 20,
      rating: 5,
    },
  ]
}

// Books data fetching (for ISR - revalidate every 30 minutes)
export async function getBooks(category?: string): Promise<Book[]> {
  // Simulate API call
  await delay(150)
  
  const books: Book[] = [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      isbn: '978-0525559474',
      category: 'Fiction',
      available: true,
      coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&auto=format',
      description: 'A novel about a library between life and death where you can try out different versions of your life.',
    },
    {
      id: 2,
      title: 'Educated',
      author: 'Tara Westover',
      isbn: '978-0399590504',
      category: 'Biography',
      available: true,
      coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&auto=format',
      description: 'A memoir about a woman who grows up in a survivalist family and eventually earns a PhD from Cambridge University.',
    },
    {
      id: 3,
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      isbn: '978-1501139239',
      category: 'Fiction',
      available: false,
      coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format',
      description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story.',
    },
  ]
  
  return category ? books.filter(book => book.category === category) : books
}

// Featured content (for SSG - static data)
export async function getFeaturedContent() {
  return {
    events: [
      {
        title: 'Summer Reading Program',
        date: 'June 15, 2024',
        time: '10:00 AM',
        description: 'Join us for our annual summer reading challenge for all ages.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&auto=format',
      },
      {
        title: 'Author Meet & Greet',
        date: 'July 8, 2024',
        time: '2:00 PM',
        description: 'Meet local author Sarah Johnson and discuss her latest novel.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
      },
      {
        title: 'Children\'s Story Time',
        date: 'Every Saturday',
        time: '11:00 AM',
        description: 'Interactive story time for children ages 3-8.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
      },
    ],
    testimonials: [
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
  }
}

// User-specific data (for SSR - server-side rendering)
export async function getUserProfile(userId: string) {
  // Simulate API call
  await delay(200)
  
  return {
    id: userId,
    name: 'John Doe',
    email: 'john@example.com',
    membershipType: 'Premium',
    borrowedBooks: 3,
    readingHistory: [
      { title: 'The Midnight Library', author: 'Matt Haig', returnedDate: '2024-01-15' },
      { title: 'Educated', author: 'Tara Westover', returnedDate: '2024-01-10' },
    ]
  }
}
