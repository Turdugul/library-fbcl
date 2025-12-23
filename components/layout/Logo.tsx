'use client'

import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  showLink?: boolean
  className?: string
  priority?: boolean
  size?: 'small' | 'medium' | 'large'
}

export default function LogoComponent({ showLink = true, className = '', priority = false, size = 'large' }: LogoProps) {
  const sizeClasses = {
    small: 'h-12 w-12 sm:h-16 sm:w-16',
    medium: 'h-16 w-16 sm:h-20 sm:w-20',
    large: 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
  }

  const logoImage = (
    <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
      <Image
        src="/logo13.png"
        alt="FBCL Logo"
        width={96}
        height={96}
        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
        style={{
          imageRendering: 'crisp-edges'
        }}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF00]/20 to-accent-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 pointer-events-none"></div>
    </div>
  )

  if (showLink) {
    return (
      <Link 
        href="/" 
        className={`flex items-center space-x-2 sm:space-x-3 group ${className} focus:outline-none rounded-lg p-1 transition-all duration-200`}
        aria-label="Go to homepage"
      >
        {logoImage}
      </Link>
    )
  }

  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 group ${className}`}>
      {logoImage}
    </div>
  )
} 