import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    asChild = false, 
    children, 
    disabled = false,
    type = 'button',
    onClick,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-elegant-body relative overflow-hidden group focus-visible'
    
    const variants = {
      primary: 'bg-teal-800 hover:bg-teal-900 text-white focus:ring-teal-500 border border-teal-800 hover:border-teal-900 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md',
      secondary: 'bg-[#FFBF00] hover:bg-[#E6AC00] text-white focus:ring-[#FFBF00] border border-[#FFBF00] hover:border-[#E6AC00] transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md',
      outline: 'border-2 border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-500 transform hover:scale-105 active:scale-95',
      ghost: 'text-teal-light hover:bg-gray-50 hover:text-accent focus:ring-gray-500 transform hover:scale-105 active:scale-95'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    const buttonProps = {
      className: cn(
        baseClasses,
        !className?.includes('btn-') ? variants[variant] : '',
        sizes[size],
        className
      ),
      ref,
      disabled,
      type,
      onClick,
      'aria-disabled': disabled,
      ...props
    }
    
    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement
      return React.cloneElement(child, {
        ...buttonProps,
        className: cn(
          baseClasses,
          !className?.includes('btn-') ? variants[variant] : '',
          sizes[size],
          className,
          child.props.className
        ),
      })
    }
    
    return (
      <button {...buttonProps}>
        <span className="relative z-10">{children}</span>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
          aria-hidden="true"
        />
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button 