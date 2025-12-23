import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui'

interface LazyPageProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LazyPage({ 
  children, 
  fallback = (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner size="lg" />
    </div>
  ) 
}: LazyPageProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages
export function withLazyLoading<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function LazyLoadedComponent(props: T) {
    return (
      <LazyPage fallback={fallback}>
        <Component {...props} />
      </LazyPage>
    )
  }
}
