'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { NavigationItem } from '@/types'

interface DropdownMenuProps {
  item: NavigationItem
  className?: string
  onLinkClick?: () => void
}

export default function DropdownMenu({ item, className = '', onLinkClick }: DropdownMenuProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const submenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleContainerMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const handleContainerMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = item.submenu!.findIndex((_, index) => 
      itemRefs.current[`${item.name}-${index}`] === document.activeElement
    )

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        const nextIndex = (currentIndex + 1) % item.submenu!.length
        itemRefs.current[`${item.name}-${nextIndex}`]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        const prevIndex = currentIndex <= 0 ? item.submenu!.length - 1 : currentIndex - 1
        itemRefs.current[`${item.name}-${prevIndex}`]?.focus()
        break
      case 'Escape':
        event.preventDefault()
        setIsOpen(false)
        buttonRef.current?.focus()
        break
      case 'Tab':
        if (!event.shiftKey) {
          setIsOpen(false)
        }
        break
    }
  }

  const handleFocus = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleBlur = (event: React.FocusEvent) => {
    if (!submenuRef.current?.contains(event.relatedTarget as Node)) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, 150)
    }
  }

  return (
    <div className={`relative group ${className}`} ref={submenuRef}>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`nav-link flex items-center space-x-1 ${
          isOpen 
            ? 'font-elegant-heading text-secondary-500' 
            : 'text-primary-light hover:text-accent'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`submenu-${item.name}`}
        tabIndex={0}
      >
        <span>{item.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
        <span
          className={`nav-underline ${
            isOpen ? 'bg-secondary-500 nav-underline-active' : 'nav-underline-hover'
          }`}
        />
      </button>
      
      {isOpen && (
        <div
          id={`submenu-${item.name}`}
          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-xl py-2 z-50 animate-fade-in"
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          onKeyDown={handleKeyDown}
          role="menu"
          aria-label={`${item.name} submenu`}
          tabIndex={-1}
        >
          {item.submenu!.map((subItem, index) => (
            <Link
              key={subItem.name}
              ref={(el) => {
                itemRefs.current[`${item.name}-${index}`] = el
              }}
              href={subItem.href}
              onClick={() => {
                setIsOpen(false)
                onLinkClick?.()
              }}
              className={`submenu-item group relative block px-4 py-3 text-sm md:text-base hover:bg-gradient-to-r hover:from-secondary-50 hover:to-accent-50 transition-all duration-200 focus:bg-gradient-to-r focus:from-secondary-50 focus:to-accent-50 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-inset ${
                isActive(subItem.href)
                  ? 'text-secondary-500 bg-secondary-50/50' 
                  : 'text-primary-light hover:text-accent'
              }`}
              role="menuitem"
              tabIndex={0}
            >
              <div className="font-semibold">{subItem.name}</div>
              {subItem.description && (
                <div className="text-xs md:text-sm text-gray-500 mt-1">{subItem.description}</div>
              )}
              <span
                className={`sub-nav-underline ${
                  isActive(subItem.href) ? 'bg-secondary-500 w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 