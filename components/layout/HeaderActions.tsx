'use client'

import Link from 'next/link'
import { Search, Heart } from 'lucide-react'

interface HeaderActionsProps {
  onSearchToggle: () => void
  isSearchOpen: boolean
  className?: string
}

export default function HeaderActions({ onSearchToggle, isSearchOpen, className = '' }: HeaderActionsProps) {
  return (
    <div className={`hidden lg:flex items-center space-x-4 ${className}`}>
      {/* Search */}
      <button
        onClick={onSearchToggle}
        className="p-2 text-primary-light hover:text-accent hover:bg-gray-50 rounded-lg transition-all duration-200 focus-visible"
        aria-label="Search"
        aria-expanded={isSearchOpen}
      >
        <Search className="h-5 w-5" />
      </button>

      {/* CTA Button */}
      <Link
        href="/donate"
        className="btn-secondary flex items-center space-x-2 px-4 py-2 text-base md:text-lg font-semibold"
      >
        <Heart className="h-4 w-4" />
        <span>Donate</span>
      </Link>
    </div>
  )
} 