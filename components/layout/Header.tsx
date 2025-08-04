'use client'

import { navigation } from '@/lib/navigation'
import { useHeader } from '@/lib/hooks/useHeader'
import LogoComponent from './Logo'
import DesktopNavigation from './DesktopNavigation'
import MobileMenu from './MobileMenu'
import HeaderActions from './HeaderActions'
import MobileActions from './MobileActions'
import SearchBar from './SearchBar'

export default function Header() {
  const {
    isScrolled,
    isMenuOpen,
    isSearchOpen,
    handleMenuToggle,
    handleMenuClose,
    handleSearchToggle,
    handleSearchClose,
  } = useHeader()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/95 shadow-secondary-400 backdrop-blur-2xl border-b-2 border-gray-600/50'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="banner"
      aria-label="Site header"
    >
      <nav 
        className="container-custom" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 min-w-0">
          {/* Logo - Enhanced responsive sizing */}
          <div className="flex-shrink-0 relative z-10">
            <LogoComponent />
          </div>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden xl:flex xl:flex-1 xl:justify-center">
            <DesktopNavigation items={navigation} />
          </div>

          {/* Desktop Actions - Hidden on mobile/tablet */}
          <div className="hidden xl:flex xl:flex-shrink-0 xl:items-center">
            <HeaderActions 
              onSearchToggle={handleSearchToggle}
              isSearchOpen={isSearchOpen}
            />
          </div>

          {/* Mobile/Tablet Actions - Visible on mobile and tablet */}
          <div className="flex xl:hidden flex-shrink-0 items-center relative z-10">
            <MobileActions
              isMenuOpen={isMenuOpen}
              onMenuToggle={handleMenuToggle}
              onSearchToggle={handleSearchToggle}
              isSearchOpen={isSearchOpen}
            />
          </div>
        </div>

        {/* Search Bar - Enhanced mobile experience */}
        <SearchBar 
          isOpen={isSearchOpen} 
          onClose={handleSearchClose}
        />

        {/* Mobile Navigation - Improved overlay */}
        <MobileMenu
          items={navigation}
          isOpen={isMenuOpen}
          onToggle={handleMenuToggle}
          onClose={handleMenuClose}
        />
      </nav>
    </header>
  )
}
