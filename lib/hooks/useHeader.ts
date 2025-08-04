'use client'

import { useState, useEffect, useCallback } from 'react'

export function useHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    const handleResize = () => {
      // Close mobile menu when switching to desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
        setIsSearchOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setIsSearchOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      const target = event.target as Element
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('[data-mobile-toggle]')) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
    setIsSearchOpen(false)
  }, [])

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleSearchToggle = useCallback(() => {
    setIsSearchOpen(prev => !prev)
    setIsMenuOpen(false)
  }, [])

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false)
  }, [])

  return {
    isScrolled,
    isMenuOpen,
    isSearchOpen,
    isMobile,
    handleMenuToggle,
    handleMenuClose,
    handleSearchToggle,
    handleSearchClose,
  }
} 