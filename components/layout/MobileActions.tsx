'use client'

import { Menu, X, Search } from 'lucide-react'

interface MobileActionsProps {
  isMenuOpen: boolean
  onMenuToggle: () => void
  onSearchToggle: () => void
  isSearchOpen: boolean
  className?: string
}

export default function MobileActions({ 
  isMenuOpen, 
  onMenuToggle, 
  onSearchToggle, 
  isSearchOpen, 
  className = '' 
}: MobileActionsProps) {
  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
      {/* Search Button */}
      <button
        onClick={onSearchToggle}
        className="group relative p-3 sm:p-3.5 text-primary-light hover:text-secondary-400 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-200 focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target flex items-center justify-center no-select shadow-sm hover:shadow-md"
        aria-label="Search website"
        aria-expanded={isSearchOpen}
        aria-controls="search-bar"
      >
        <Search className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110" />
        <span className="sr-only">Search</span>
      </button>
      
      {/* Hamburger Menu Button */}
      <button
        onClick={onMenuToggle}
        className="group relative p-3 sm:p-3.5 text-primary-light hover:text-secondary-400 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-200 focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 touch-target flex items-center justify-center no-select shadow-sm hover:shadow-md"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110" />
        ) : (
          <Menu className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 group-hover:scale-110" />
        )}
        <span className="sr-only">
          {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        </span>
      </button>
    </div>
  )
} 