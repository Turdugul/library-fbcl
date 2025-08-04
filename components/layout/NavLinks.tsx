'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationItem } from '@/types'

interface NavLinksProps {
  items: NavigationItem[]
  className?: string
  onLinkClick?: () => void
}

export default function NavLinks({ items, className = '', onLinkClick }: NavLinksProps) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.name}>
          {item.submenu ? (
            <span className="text-primary-light font-semibold">
              {item.name}
            </span>
          ) : (
            <Link
              href={item.href!}
              onClick={onLinkClick}
              className={`nav-link group relative ${
                isActive(item.href!) 
                  ? 'font-elegant-heading text-secondary-500' 
                  : 'text-primary-light hover:text-accent'
              }`}
              aria-current={isActive(item.href!) ? 'page' : undefined}
              tabIndex={0}
            >
              {item.name}
              <span
                className={`nav-underline ${
                  isActive(item.href!) ? 'bg-secondary-500 nav-underline-active' : 'nav-underline-hover '
                }`}
              />
            </Link>
          )}
        </div>
      ))}
    </div>
  )
} 