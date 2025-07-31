'use client'

import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  BookOpen 
} from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-10 w-10 text-warm" />
              <span className="text-2xl font-elegant-heading">FBCL</span>
            </Link>
            <p className="text-gray-300 mb-6 font-elegant-body leading-relaxed">
              Supporting literacy and community engagement through the Friern Barnet Community Library. 
              Join us in fostering a love for reading and learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-warm transition-colors hover-scale p-2"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm mt-0.5" />
                <span className="text-gray-300 font-elegant-body text-sm leading-relaxed">
                  Friern Barnet Rd<br />
                  London N11 3DS
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm" />
                <a 
                  href="tel:+44-20-8361-0174" 
                  className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm"
                >
                  020 8361 0174
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm" />
                <a 
                  href="mailto:fbcllibrary15@gmail.com" 
                  className="text-gray-300 hover:text-warm transition-colors font-elegant-body text-sm"
                >
                  fbcllibrary15@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-elegant-heading mb-6">Library Hours</h3>
            <div className="space-y-3 text-gray-300 font-elegant-body text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>12:00 PM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-elegant-body">
              © {new Date().getFullYear()} Friends of the Friern Barnet Community Library. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-warm text-sm transition-colors font-elegant-body">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-warm text-sm transition-colors font-elegant-body">
                Terms of Service
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
                className="text-warm hover:text-white transition-all duration-300 font-medium hover:scale-105 inline-block"
              >
                Turdugul
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 