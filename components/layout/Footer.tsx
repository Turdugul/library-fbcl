'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/ui/SimpleLogo'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  BookOpen,
  Users,
  Calendar,
  Heart,
  FileText,
  ExternalLink
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

const servicesLinks = [
  { name: 'Volunteer', href: '/support-our-library/volunteer', description: 'Join our team' },
  { name: 'Donate', href: '/donate', description: 'Support our library' },
  { name: 'Hire Us', href: '/support-our-library/hire-us', description: 'Book our space' },
  { name: 'New Books', href: '/catalogue/new-books', description: 'Latest arrivals' },
  { name: 'Reading Guides', href: '/catalogue/guides', description: 'Reading recommendations' },
]

const resourcesLinks = [
  { name: 'About Gallery', href: '/about/gallery', description: 'Photo gallery' },
  { name: 'Trustees', href: '/about/trustees', description: 'Meet our board' },
  { name: 'Events Gallery', href: '/events/gallery', description: 'Event photos' },
  { name: 'Volunteer Apply', href: '/support-our-library/volunteer/apply', description: 'Application form' },
  { name: 'Support Donate', href: '/support-our-library/donate', description: 'Donation page' },
]

const socialLinks = [
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/friernbarnetcommunitylibrary', 
    icon: Facebook,
    external: true
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/FBCLLibrary', 
    icon: Twitter,
    external: true
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/friern_barnet_community_lib/', 
    icon: Instagram,
    external: true
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Logo size="medium" showText={false} />
            </Link>
            <p className="text-gray-300 mb-6 font-elegant-body leading-relaxed">
              FBCL — A welcoming space for all, where stories are shared, learning is celebrated, and community feels like home.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : "_self"}
                  rel={social.external ? "noopener noreferrer" : ""}
                  className="text-gray-400 hover:text-warm transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-800"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-warm" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-warm" />
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm group"
                  >
                    <div className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {link.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-warm" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm group"
                  >
                    <div className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {link.description}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and Hours Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-gray-800">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-warm" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 font-elegant-body text-sm leading-relaxed">
                  <div>Friern Barnet Rd</div>
                  <div>London N11 3DS</div>
                  <div className="text-xs text-gray-500 mt-1">United Kingdom</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm flex-shrink-0" />
                <a 
                  href="tel:+44-20-8361-0174" 
                  className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm group"
                >
                  <span className="group-hover:underline">020 8361 0174</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm flex-shrink-0" />
                <a 
                  href="mailto:fbcllibrary15@gmail.com" 
                  className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm group"
                >
                  <span className="group-hover:underline">fbcllibrary15@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-warm" />
              Library Hours
            </h3>
            <div className="space-y-3 text-gray-300 font-elegant-body text-sm">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="text-warm font-medium">12:00 PM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="text-gray-500">Closed</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
              <div className="pt-2 text-xs text-gray-500">
                <div>Bank Holidays: Closed</div>
                <div>Special events may affect hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-elegant-body">
              © {new Date().getFullYear()} Friern Barnet Community Library. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-warm text-sm transition-colors font-elegant-body group">
                <span className="group-hover:underline">Privacy Policy</span>
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-warm text-sm transition-colors font-elegant-body group">
                <span className="group-hover:underline">Terms of Service</span>
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-warm text-sm transition-colors font-elegant-body group">
                <span className="group-hover:underline">Accessibility</span>
              </Link>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-6 pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm font-elegant-body">
              Made with{' '}
              <span className="text-red-400 animate-pulse">❤️</span>
              {' '}by{' '}
              <a
                href="https://www.linkedin.com/in/turdugul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm hover:text-white transition-all duration-300 font-medium hover:scale-105 inline-block group"
              >
                <span className="group-hover:underline">Turdugul</span>
                <ExternalLink className="h-3 w-3 inline ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 