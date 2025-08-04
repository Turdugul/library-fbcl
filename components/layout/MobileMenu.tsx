'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Heart, X, Home, BookOpen, Users, Calendar, Phone, Gift } from 'lucide-react'
import { NavigationItem } from '@/types'

interface MobileMenuProps {
  items: NavigationItem[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  className?: string
}

// Icon mapping for navigation items
const getIcon = (itemName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'About': Users,
    'Catalogue': BookOpen,
    'Events': Calendar,
    'Contact': Phone,
    'Donate': Gift,
  }
  return iconMap[itemName] || Home
}

export default function MobileMenu({ items, isOpen, onToggle, onClose, className = '' }: MobileMenuProps) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const firstMenuItemRef = useRef<HTMLButtonElement>(null)

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName)
  }

  // Enhanced keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, itemName: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        handleSubmenuToggle(itemName)
        break
      case 'Escape':
        event.preventDefault()
        onClose()
        break
    }
  }

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose()
      setOpenSubmenu(null)
    }
  }, [pathname, isOpen, onClose])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus first menu item for accessibility
      setTimeout(() => {
        firstMenuItemRef.current?.focus()
      }, 100)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Enhanced Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden animate-backdrop-in"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Enhanced Menu Container */}
      <div 
        ref={menuRef}
        id="mobile-menu"
        className={`fixed inset-0 z-50 xl:hidden animate-mobile-menu-in ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Enhanced Menu Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 mobile-safe-area shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-secondary-400 rounded-lg flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-elegant-heading text-primary-800">
              Navigation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="group p-3 sm:p-3.5 text-primary-light hover:text-secondary-400 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-200 focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target flex items-center justify-center no-select shadow-sm hover:shadow-md"
            aria-label="Close navigation menu"
            data-mobile-toggle
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110" />
          </button>
        </div>

        {/* Enhanced Menu Content */}
        <div className="flex-1 bg-white overflow-y-auto mobile-safe-area">
          <nav className="px-4 sm:px-6 py-6 space-y-2" role="navigation" aria-label="Main navigation">
            {items.map((item, index) => {
              const Icon = getIcon(item.name)
              const isItemActive = item.href ? isActive(item.href) : false
              const isSubmenuOpen = openSubmenu === item.name
              
              return (
                <div key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {item.submenu ? (
                    <div>
                      <button
                        ref={index === 0 ? firstMenuItemRef : undefined}
                        onClick={() => handleSubmenuToggle(item.name)}
                        onKeyDown={(e) => handleKeyDown(e, item.name)}
                        className={`group w-full text-left px-4 py-4 sm:py-5 rounded-xl font-elegant-body font-semibold transition-all duration-300 text-base sm:text-lg focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target-large flex items-center justify-between no-select shadow-sm hover:shadow-md ${
                          isSubmenuOpen
                            ? 'bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-600 border-l-4 border-secondary-500 shadow-md' 
                            : 'text-primary-light hover:bg-gray-50 hover:text-secondary-400 active:bg-gray-100'
                        }`}
                        aria-haspopup="true"
                        aria-expanded={isSubmenuOpen}
                        aria-controls={`mobile-submenu-${item.name}`}
                        data-mobile-toggle
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-200 ${
                            isSubmenuOpen ? 'text-secondary-500' : 'text-gray-400 group-hover:text-secondary-400'
                          }`} />
                          <span className={isSubmenuOpen ? 'font-elegant-heading text-secondary-600' : ''}>
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown className={`h-5 w-5 transition-all duration-300 ${
                          isSubmenuOpen ? 'rotate-180 text-secondary-500' : 'text-gray-400 group-hover:text-secondary-400'
                        }`} />
                      </button>
                      {isSubmenuOpen && (
                        <div 
                          id={`mobile-submenu-${item.name}`}
                          className="ml-4 mt-2 space-y-1 animate-fade-in"
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={onClose}
                              className={`group block px-4 py-3 sm:py-4 rounded-lg font-elegant-body font-semibold transition-all duration-300 text-base sm:text-lg focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target flex items-center space-x-3 no-select shadow-sm hover:shadow-md ${
                                isActive(subItem.href)
                                  ? 'bg-gradient-to-r from-secondary-50 to-accent-50 text-secondary-600 border-l-4 border-secondary-500 shadow-md' 
                                  : 'text-primary-light hover:bg-gray-50 hover:text-secondary-400 active:bg-gray-100'
                              }`}
                              aria-current={isActive(subItem.href) ? 'page' : undefined}
                              role="menuitem"
                              style={{ animationDelay: `${(subIndex + 1) * 0.05}s` }}
                            >
                              <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-secondary-400 transition-colors duration-200" />
                              <span className={isActive(subItem.href) ? 'font-elegant-heading text-secondary-600' : ''}>
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={onClose}
                      className={`group block px-4 py-4 sm:py-5 rounded-xl font-elegant-body font-semibold transition-all duration-300 text-base sm:text-lg focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target-large flex items-center space-x-3 no-select shadow-sm hover:shadow-md ${
                        isItemActive
                          ? 'bg-gradient-to-r from-secondary-50 to-accent-50 text-secondary-600 border-l-4 border-secondary-500 shadow-md' 
                          : 'text-primary-light hover:bg-gray-50 hover:text-secondary-400 active:bg-gray-100'
                      }`}
                      aria-current={isItemActive ? 'page' : undefined}
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-200 ${
                        isItemActive ? 'text-secondary-500' : 'text-gray-400 group-hover:text-secondary-400'
                      }`} />
                      <span className={isItemActive ? 'font-elegant-heading text-secondary-600' : ''}>
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              )
            })}
          </nav>
          
          {/* Enhanced Mobile CTA */}
          <div className="px-4 sm:px-6 py-6 border-t border-gray-200/50 bg-gradient-to-r from-secondary-50/50 to-accent-50/50">
            <Link
              href="/donate"
              onClick={onClose}
              className="group btn-secondary w-full flex items-center justify-center space-x-3 text-base sm:text-lg font-semibold py-4 sm:py-5 touch-target-large no-select shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="h-5 w-5 group-hover:animate-pulse" />
              <span>Support Our Library</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
} 