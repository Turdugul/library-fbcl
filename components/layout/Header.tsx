'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/components/ui/Logo'
import { NavigationItem } from '@/types'

const navigation: NavigationItem[] = [
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
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-gray-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container-custom" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
                    {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Logo size="large" priority showText={false} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-link  ${
                    isActive(item.href) 
                      ? 'font-elegant-heading text-secondary-500' 
                      : 'text-primary-light hover:text-accent'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`nav-underline ${
                      isActive(item.href) ? 'bg-secondary-500 nav-underline-active' : 'nav-underline-hover'
                    }`}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 rounded-none text-primary-light hover:text-accent hover:bg-gray-50 transition-all duration-200 focus-visible"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-gray-200 animate-slide-down"
            role="region"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuClose}
                  className={`block px-4 py-3 rounded-none font-elegant-body font-medium transition-colors text-sm focus-visible ${
                    isActive(item.href)
                      ? 'bg-primary-50 text-secondary-500 border-l-4 border-secondary-500' 
                      : 'text-primary-light hover:bg-gray-50 hover:text-accent'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
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
