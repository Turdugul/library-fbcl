import { Users, BookOpen, Heart, Calendar, MapPin, Clock, Phone, Award, Target, Mail, Linkedin, Globe } from 'lucide-react'

// Stats data
export const stats = [
  { number: '500+', label: 'Books Donated', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
]

// Featured events data
export const featuredEvents = [
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

// Testimonials data
export const testimonials = [
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

// Quick links data
export const quickLinks = [
  { title: 'Join Us', description: 'Become a member and support our community library', href: '/support-our-library/volunteer', icon: Users },
  { title: 'Catalogue', description: 'Explore our diverse collection of books and resources', href: '/catalogue', icon: BookOpen },
  { title: 'Events', description: 'Discover upcoming events and activities', href: '/events', icon: Calendar },
  { title: 'Contact', description: 'Get in touch with our team', href: '/contact', icon: Phone },
]

// Activities data
export const activities = [
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

// Gallery images data
export const galleryImages = [
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

// Awards data
export const awards = [
  {
    id: 1,
    title: 'Community Library of the Year',
    date: '2023',
    description: 'Recognized for outstanding community engagement and literacy programs.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    certificate: true
  },
  {
    id: 2,
    title: 'Volunteer Excellence Award',
    date: '2022',
    description: 'Honored for exceptional volunteer contributions and community service.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    certificate: true
  },
  {
    id: 3,
    title: 'Literacy Innovation Prize',
    date: '2021',
    description: 'Awarded for innovative approaches to promoting literacy in the community.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    certificate: false
  }
]

// Timeline data
export const timeline = [
  {
    year: '2013',
    title: 'Foundation',
    description: 'FBCL was founded by a group of passionate community members who recognized the need for library support.',
  },
  {
    year: '2023',
    title: '10th Anniversary',
    description: 'Celebrated 10 years of service with a community-wide celebration and new programs.',
  },
  {
    year: '2025',
    title: 'Future Forward',
    description: 'Expanding programs to meet the evolving needs of our diverse community.',
  },
]

// Values data
export const values = [
  {
    icon: BookOpen,
    title: 'Literacy First',
    description: 'We believe everyone deserves access to knowledge and the joy of reading.',
  },
  {
    icon: Users,
    title: 'Community Centered',
    description: 'Our programs and services are designed with our community\'s needs in mind.',
  },
  {
    icon: Heart,
    title: 'Inclusive Access',
    description: 'We work to ensure our library serves people of all ages, backgrounds, and abilities.',
  },
  {
    icon: Target,
    title: 'Sustainable Impact',
    description: 'We focus on long-term solutions that create lasting positive change.',
  },
]

// Impact stats data
export const impactStats = [
  { number: '500+', label: 'Books Donated Annually', icon: BookOpen },
  { number: '50+', label: 'Active Volunteers', icon: Users },
  { number: '1000+', label: 'Community Members Served', icon: Heart },
  { number: '25+', label: 'Events Per Year', icon: Calendar },
  { number: '15+', label: 'Years of Service', icon: Award },
  { number: '95%', label: 'Community Satisfaction', icon: Target },
]

// Trustees data
export const trustees = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Board President",
    bio: "Dr. Johnson has been a passionate advocate for literacy and education for over 20 years. She holds a PhD in Education and has dedicated her career to improving access to learning resources in underserved communities.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    email: "sarah.johnson@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2020-2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    bio: "Michael brings 15 years of experience in nonprofit management and community development. He has successfully led numerous fundraising campaigns and volunteer recruitment initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    email: "michael.chen@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2021-2025"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Secretary",
    bio: "Emily is a former librarian with a deep understanding of community needs. She has been instrumental in developing our children's programs and digital literacy initiatives.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    email: "emily.rodriguez@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2022-2026"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Treasurer",
    bio: "David is a certified public accountant with extensive experience in nonprofit financial management. He ensures our organization maintains the highest standards of fiscal responsibility.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    email: "david.thompson@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2020-2024"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Trustee",
    bio: "Lisa is a community organizer and former teacher who has been involved with FBCL for over a decade. She specializes in outreach programs and community partnerships.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    email: "lisa.park@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2021-2025"
  },
  {
    id: 6,
    name: "Robert Martinez",
    role: "Trustee",
    bio: "Robert is a retired business executive who brings strategic planning expertise to our board. He has been instrumental in developing our long-term vision and growth strategies.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
    email: "robert.martinez@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2022-2026"
  },
  {
    id: 7,
    name: "Jennifer Adams",
    role: "Trustee",
    bio: "Jennifer is a local author and literacy advocate who has published several children's books. She leads our author outreach and writing workshop programs.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    email: "jennifer.adams@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2023-2027"
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Trustee",
    bio: "James is a technology consultant who has helped modernize our library's digital infrastructure. He oversees our technology initiatives and digital literacy programs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    email: "james.wilson@fbcl.org",
    linkedin: "#",
    website: "#",
    term: "2023-2027"
  }
]

// Upcoming events data
export const upcomingEvents = [
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

// Past events data
export const pastEvents = [
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
    attendees: 40,
    rating: 5,
  },
  {
    id: 9,
    title: 'Winter Reading Challenge',
    date: 'February 2024',
    description: 'Over 100 participants completed our winter reading challenge, with prizes for all age groups.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    attendees: 100,
    rating: 5,
  },
]

// Event gallery images data
export const eventImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Summer reading program event',
    title: 'Summer Reading Program',
    description: 'Children participating in our annual summer reading challenge.',
    date: 'June 2024'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Author meet and greet event',
    title: 'Author Meet & Greet',
    description: 'Local author Sarah Johnson discussing her latest novel with community members.',
    date: 'July 2024'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Children story time session',
    title: 'Children\'s Story Time',
    description: 'Interactive story time for children ages 3-8 every Saturday.',
    date: 'Weekly Event'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Book club meeting',
    title: 'Adult Book Club',
    description: 'Monthly book club discussions for adult readers.',
    date: 'Monthly Event'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Computer literacy workshop',
    title: 'Computer Literacy Workshop',
    description: 'Teaching essential computer skills to community members.',
    date: 'Ongoing'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Community volunteer day',
    title: 'Volunteer Appreciation Day',
    description: 'Celebrating our dedicated volunteers who make everything possible.',
    date: 'Annual Event'
  },
  {
    id: 7,
    src: '/libr1.jpg',
    alt: 'Yoga class in library space',
    title: 'Community Yoga',
    description: 'Weekly yoga sessions promoting health and wellness.',
    date: 'Weekly Event'
  },
  {
    id: 8,
    src: '/libr2.jpg',
    alt: 'English language learning group',
    title: 'English Conversation Group',
    description: 'Supporting language learning and cultural exchange.',
    date: 'Weekly Event'
  },
  {
    id: 9,
    src: '/libr3.jpg',
    alt: 'Creative writing workshop',
    title: 'Creative Writing Workshop',
    description: 'Unleashing creativity through writing and storytelling.',
    date: 'Monthly Event'
  },
  {
    id: 10,
    src: '/libr4.jpg',
    alt: 'Toddler group activities',
    title: 'Toddler Group',
    description: 'Early development activities for young children and parents.',
    date: 'Weekly Event'
  },
  {
    id: 11,
    src: '/libr5.jpg',
    alt: 'Drama and acting workshop',
    title: 'Drama Acting Group',
    description: 'Expressing creativity through theater and performance.',
    date: 'Monthly Event'
  },
  {
    id: 12,
    src: '/library.jpg',
    alt: 'Community police surgery',
    title: 'Local Police Surgery',
    description: 'Community safety discussions and local policing updates.',
    date: 'Monthly Event'
  },
]

// Contact information
export const contactInfo = {
  address: 'Friern Barnet Community Library, Friern Barnet, London',
  phone: '(555) 123-4567',
  email: 'info@fbcl.org',
  hours: 'Monday - Friday: 9:00 AM - 8:00 PM\nSaturday: 10:00 AM - 6:00 PM\nSunday: 12:00 PM - 5:00 PM'
}

// Social media links
export const socialLinks = [
  { name: 'Email', href: 'mailto:info@fbcl.org', icon: Mail },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/fbcl', icon: Linkedin },
  { name: 'Website', href: 'https://fbcl.org', icon: Globe },
]

// Gallery data for different pages
export const homeGalleryImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Library interior with bookshelves',
    title: 'Our Main Reading Area',
    description: 'A welcoming space for readers of all ages'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Children reading corner',
    title: 'Children\'s Corner',
    description: 'Dedicated space for young readers'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Volunteers organizing books',
    title: 'Volunteer Book Sorting',
    description: 'Our dedicated volunteers at work'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Community event space',
    title: 'Community Events Space',
    description: 'Where community gatherings happen'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Library entrance and reception',
    title: 'Library Reception',
    description: 'The heart of our library'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Exterior view of the library',
    title: 'Library Exterior',
    description: 'Our beautiful community library'
  }
]

export const aboutGalleryImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Library interior with bookshelves',
    title: 'Our Main Reading Area',
    description: 'A welcoming space for readers of all ages',
    date: '2023'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Children reading corner',
    title: 'Children\'s Corner',
    description: 'Dedicated space for young readers',
    date: '2023'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Volunteers organizing books',
    title: 'Volunteer Book Sorting',
    description: 'Our dedicated volunteers at work',
    date: '2023'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Community event space',
    title: 'Community Events Space',
    description: 'Where community gatherings happen',
    date: '2023'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Library entrance and reception',
    title: 'Library Reception',
    description: 'The heart of our library',
    date: '2023'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Exterior view of the library',
    title: 'Library Exterior',
    description: 'Our beautiful community library',
    date: '2023'
  }
]

export const eventsGalleryImages = [
  {
    id: 1,
    src: '/libr1.jpg',
    alt: 'Summer reading program event',
    title: 'Summer Reading Program',
    description: 'Children participating in our annual summer reading challenge.',
    date: 'June 2024'
  },
  {
    id: 2,
    src: '/libr2.jpg',
    alt: 'Author meet and greet event',
    title: 'Author Meet & Greet',
    description: 'Local author Sarah Johnson discussing her latest novel with community members.',
    date: 'July 2024'
  },
  {
    id: 3,
    src: '/libr3.jpg',
    alt: 'Children story time session',
    title: 'Children\'s Story Time',
    description: 'Interactive story time for children ages 3-8 every Saturday.',
    date: 'Weekly Event'
  },
  {
    id: 4,
    src: '/libr4.jpg',
    alt: 'Book club meeting',
    title: 'Adult Book Club',
    description: 'Monthly book club discussions for adult readers.',
    date: 'Monthly Event'
  },
  {
    id: 5,
    src: '/libr5.jpg',
    alt: 'Computer literacy workshop',
    title: 'Computer Literacy Workshop',
    description: 'Teaching essential computer skills to community members.',
    date: 'Ongoing'
  },
  {
    id: 6,
    src: '/library.jpg',
    alt: 'Community volunteer day',
    title: 'Volunteer Appreciation Day',
    description: 'Celebrating our dedicated volunteers who make everything possible.',
    date: 'Annual Event'
  }
] 