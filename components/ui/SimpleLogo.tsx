import Link from 'next/link'
import { BookOpen } from 'lucide-react'

interface SimpleLogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
  className?: string
}

export default function SimpleLogo({ 
  size = 'medium', 
  showText = true, 
  className = ''
}: SimpleLogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8 sm:h-10 sm:w-10',
    medium: 'h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20',
    large: 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
  }

  const logoElement = (
    <div className="relative group">
      <img
        src="/logo1.png"
        alt="FBCL Logo"
        className={`object-contain ${sizeClasses[size]} ${className} transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110`}
        style={{
          maxWidth: 'none',
          imageRendering: 'crisp-edges'
        }}
      />
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 pointer-events-none"></div>
      
      {/* Micro-interaction: subtle pulse animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 pointer-events-none"></div>
    </div>
  )

  if (!showText) {
    return logoElement
  }

  return (
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group focus-visible">
      {logoElement}
    </Link>
  )
} 