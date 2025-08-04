'use client'

import { NavigationItem } from '@/types'
import NavLinks from './NavLinks'
import DropdownMenu from './DropdownMenu'

interface DesktopNavigationProps {
  items: NavigationItem[]
  className?: string
}

export default function DesktopNavigation({ items, className = '' }: DesktopNavigationProps) {
  return (
    <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 ${className}`}>
      {items.map((item) => (
        <div key={item.name}>
          {item.submenu ? (
            <DropdownMenu item={item} />
          ) : (
            <NavLinks items={[item]} />
          )}
        </div>
      ))}
    </div>
  )
} 