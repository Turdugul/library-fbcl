import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'rounded-none transition-all duration-300 relative overflow-hidden group'
    
    const variants = {
      default: 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md hover:transform hover:scale-105',
      elevated: 'bg-white border border-gray-200 shadow-md hover:shadow-lg hover:transform hover:scale-105',
      outlined: 'bg-white border border-gray-200 hover:border-gray-300 hover:transform hover:scale-105'
    }
    
    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card 