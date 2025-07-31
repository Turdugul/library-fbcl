// API utility functions for data fetching
import { ApiResponse } from '@/types'

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.fbcl.org'
const API_TIMEOUT = 10000 // 10 seconds

// Custom fetch wrapper with timeout and error handling
async function fetchWithTimeout(
  url: string, 
  options: RequestInit = {}, 
  timeout: number = API_TIMEOUT
): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

// Generic API request function
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const response = await fetchWithTimeout(url, options)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API request failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Cached API request function
export async function cachedApiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
  cacheKey?: string
): Promise<ApiResponse<T>> {
  const key = cacheKey || endpoint
  const now = Date.now()
  
  // Check cache
  const cached = cache.get(key)
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return { success: true, data: cached.data }
  }
  
  // Fetch fresh data
  const result = await apiRequest<T>(endpoint, options)
  
  // Cache successful responses
  if (result.success && result.data) {
    cache.set(key, { data: result.data, timestamp: now })
  }
  
  return result
}

// Specific API functions
export async function getEvents() {
  return cachedApiRequest('/events', {}, 'events')
}

export async function getTestimonials() {
  return cachedApiRequest('/testimonials', {}, 'testimonials')
}

export async function getTrustees() {
  return cachedApiRequest('/trustees', {}, 'trustees')
}

export async function getGallery() {
  return cachedApiRequest('/gallery', {}, 'gallery')
}

// Contact form submission
export async function submitContactForm(formData: any): Promise<ApiResponse<any>> {
  return apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}

// Volunteer application submission
export async function submitVolunteerApplication(formData: any): Promise<ApiResponse<any>> {
  return apiRequest('/volunteer/apply', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}

// Clear cache function
export function clearCache(key?: string) {
  if (key) {
    cache.delete(key)
  } else {
    cache.clear()
  }
}

// Cache management utilities
export function getCacheInfo() {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  }
}

// Environment configuration
export const config = {
  apiUrl: API_BASE_URL,
  timeout: API_TIMEOUT,
  cacheDuration: CACHE_DURATION,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} 