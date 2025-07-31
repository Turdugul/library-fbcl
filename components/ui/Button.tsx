import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-elegant-body relative overflow-hidden group'
    
    const variants = {
      primary: 'bg-primary-800 hover:bg-primary-900 text-white focus:ring-primary-500 border border-primary-800 hover:border-primary-900 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md',
      secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 border border-secondary-500 hover:border-secondary-600 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md',
      outline: 'border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-500 transform hover:scale-105 active:scale-95',
      ghost: 'text-primary-light hover:bg-gray-50 hover:text-accent focus:ring-gray-500 transform hover:scale-105 active:scale-95'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement
      return React.cloneElement(child, {
        className: cn(
          baseClasses,
          // Only apply variant styles if no custom className is provided
          !className?.includes('btn-') ? variants[variant] : '',
          sizes[size],
          className, // Custom className takes priority
          child.props.className
        ),
        ...props
      })
    }
    
    return (
      <button
        className={cn(
          baseClasses,
          // Only apply variant styles if no custom className is provided
          !className?.includes('btn-') ? variants[variant] : '',
          sizes[size],
          className // Custom className takes priority
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button 