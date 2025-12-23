'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Send to analytics service (replace with your preferred service)
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Import and initialize web-vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals)
      onINP(reportWebVitals) // INP replaced FID in newer versions
      onFCP(reportWebVitals)
      onLCP(reportWebVitals)
      onTTFB(reportWebVitals)
    })

    // Performance observer for custom metrics
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log long tasks
          if (entry.entryType === 'longtask') {
            console.warn('Long task detected:', entry.duration)
          }
          
          // Log layout shifts
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as any
            if (!layoutShift.hadRecentInput) {
              console.warn('Layout shift detected:', layoutShift.value)
            }
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['longtask', 'layout-shift'] })
      } catch (e) {
        // Some browsers don't support all entry types
        // Silently fail - browser doesn't support all entry types
      }
    }
  }, [])

  return null
}
