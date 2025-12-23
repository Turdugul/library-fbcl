// CDN Configuration for static assets
export const CDN_CONFIG = {
  // Base URL for CDN (replace with your actual CDN URL)
  baseUrl: process.env.NEXT_PUBLIC_CDN_URL || '',
  
  // Asset paths
  assets: {
    images: '/images',
    fonts: '/fonts',
    css: '/css',
    js: '/js',
  },
  
  // CDN domains for different asset types
  domains: {
    images: [
      'images.unsplash.com',
      'via.placeholder.com',
      // Add your CDN domain here
      process.env.NEXT_PUBLIC_CDN_DOMAIN || '',
    ].filter(Boolean),
    fonts: [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      // Add your font CDN domain here
    ],
  },
  
  // Cache settings
  cache: {
    images: 'public, max-age=31536000, immutable',
    fonts: 'public, max-age=31536000, immutable',
    css: 'public, max-age=31536000, immutable',
    js: 'public, max-age=31536000, immutable',
  },
}

// Helper function to get CDN URL for assets
export function getCdnUrl(path: string, type: keyof typeof CDN_CONFIG.assets = 'images'): string {
  if (!CDN_CONFIG.baseUrl) return path
  
  const assetPath = CDN_CONFIG.assets[type]
  return `${CDN_CONFIG.baseUrl}${assetPath}${path.startsWith('/') ? path : `/${path}`}`
}

// Helper function to check if URL should use CDN
export function shouldUseCdn(url: string): boolean {
  if (!url) return false
  
  // Check if it's already a full URL
  if (url.startsWith('http')) return false
  
  // Check if it's a Next.js internal path
  if (url.startsWith('/_next/')) return false
  
  // Check if it's an API route
  if (url.startsWith('/api/')) return false
  
  return true
}
