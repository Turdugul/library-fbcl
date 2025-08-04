import { NavigationItem } from '@/types'

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    submenu: [
      { name: 'About Us', href: '/about', description: 'Learn about our library' },
      { name: 'Trustees', href: '/about/trustees', description: 'Meet our board members' },
      { name: 'Testimonials', href: '/about/testimonials', description: 'What our community says' },
      { name: 'Gallery', href: '/about/gallery', description: 'Photo gallery' },
    ]
  },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Events', href: '/events' },
  { 
    name: 'Support Our Library', 
    submenu: [
      { name: 'Volunteer', href: '/support our library/volunteer', description: 'Join our volunteer team' },
      { name: 'Donate', href: '/donate', description: 'Support our library financially' },
      { name: 'Hire Us', href: '/support our library/hire-us', description: 'Book our space for events' }
    ]
  },
  { name: 'Contact', href: '/contact' },
] 