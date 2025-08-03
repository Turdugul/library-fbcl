import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
  className?: string
  priority?: boolean
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  className = '',
  priority = false 
}: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8 sm:h-10 sm:w-10',
    medium: 'h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20',
    large: 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
  }

  const imageSizes = {
    small: { width: 40, height: 40 },
    medium: { width: 80, height: 80 },
    large: { width: 96, height: 96 }
  }

  const logoElement = (
    <Image
      src="/logo1.png"
      alt="FBCL Logo"
      width={imageSizes[size].width}
      height={imageSizes[size].height}
      quality={100}
      priority={priority}
      className={`object-contain ${sizeClasses[size]} ${className}`}
      style={{
        maxWidth: 'none',
        imageRendering: 'crisp-edges',
        WebkitImageRendering: 'crisp-edges'
      }}
    />
  )

  if (!showText) {
    return logoElement
  }

  return (
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group focus-visible">
      {logoElement}
      <span className="text-xl sm:text-2xl font-elegant-heading text-primary-dark group-hover:text-accent transition-colors duration-300">
        FBCL
      </span>
    </Link>
  )
} 