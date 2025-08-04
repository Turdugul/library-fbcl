'use client'

import Link from 'next/link'
import Logo from '@/components/ui/SimpleLogo'

interface LogoProps {
  showLink?: boolean
  className?: string
}

export default function LogoComponent({ showLink = true, className = '' }: LogoProps) {
  const logoContent = (
    <div className={`flex items-center space-x-2 sm:space-x-3 group ${className}`}>
      <div className="relative flex-shrink-0">
        <Logo size="large" showText={false} />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></div>
      </div>
    </div>
  )

  if (showLink) {
    return (
      <Link 
        href="/" 
        className="flex items-center space-x-2 sm:space-x-3 focus-visible focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 rounded-lg p-1 transition-all duration-200 "
        aria-label="Go to homepage"
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
} 