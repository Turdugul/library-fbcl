'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, BookOpen } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Catalogue', href: '/catalogue' },
  { name: 'Events', href: '/events' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Hire Us', href: '/hire-us' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-gray-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <BookOpen className="h-10 w-10 text-accent group-hover:text-accent-hover transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full animate-bounce-subtle" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl text-warm font-elegant-heading md:text-3xl font-elegant-heading text-primary-dark group-hover:text-primary transition-colors duration-300">
                FBCL
              </h1>
              <p className="text-xs font-elegant-body text-secondary-dark -mt-1 tracking-wide">
                Friern Barnet Community Library
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-link focus:outline-none ${
                    isActive(item.href) 
                      ? 'font-elegant-heading text-secondary-500' 
                      : 'text-primary-light hover:text-accent'
                  }`}
                >
                  {item.name}
                  <span
                    className={`nav-underline ${
                      isActive(item.href) ? 'bg-secondary-500 nav-underline-active' : 'nav-underline-hover'
                    }`}
                  ></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-none text-primary-light hover:text-accent hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-down">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-none font-elegant-body font-medium transition-colors text-sm focus:outline-none ${
                    isActive(item.href)
                      ? 'bg-primary-50 text-secondary-500 border-l-4 border-secondary-500' 
                      : 'text-primary-light hover:bg-gray-50 hover:text-accent'
                  }`}
                >
                  <span className={isActive(item.href) ? 'font-elegant-heading text-secondary-500' : ''}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
