// Base component props interface
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// Navigation types
export interface NavigationItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

// Event types
export interface Event {
  id: number
  title: string
  date: string
  time: string
  location?: string
  description: string
  image: string
  category?: string
  attendees?: number
  rating?: number
}

// Gallery types
export interface GalleryImage {
  id: number
  src: string
  alt: string
  title?: string
  description?: string
  date?: string
}

// Testimonial types
export interface Testimonial {
  quote: string
  author: string
  role: string
  rating?: number
  image?: string
}

// Trustee types
export interface Trustee {
  id: number
  name: string
  role: string
  image: string
  bio: string
  email: string
  linkedin?: string
  website?: string
  term: string
}

// Award types
export interface Award {
  id: number
  title: string
  date: string
  description: string
  image: string
  certificate?: boolean
}

// Stats types
export interface Stat {
  number: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

// Contact form types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

// Input component props
export interface InputProps extends BaseComponentProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  value?: string
  onChange?: (value: string) => void
}

// Textarea component props
export interface TextareaProps extends BaseComponentProps {
  label: string
  id: string
  rows?: number
  placeholder?: string
  required?: boolean
  error?: string
  value?: string
  onChange?: (value: string) => void
}

// Select component props
export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends BaseComponentProps {
  label: string
  id: string
  options: SelectOption[]
  required?: boolean
  error?: string
  value?: string
  onChange?: (value: string) => void
}

// Card component props
export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
}

// Gallery component props
export interface GalleryProps extends BaseComponentProps {
  images: GalleryImage[]
  title?: string
  description?: string
  columns?: number
  showLightbox?: boolean
  showTitles?: boolean
  showDescriptions?: boolean
  height?: string
}

// Carousel component props
export interface CarouselProps extends BaseComponentProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  noIndex?: boolean
}

// Page metadata types
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

// Social media types
export interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

// Contact info types
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  content: string
  link?: string
}

// Timeline item types
export interface TimelineItem {
  year: string
  title: string
  description: string
}

// Value types
export interface Value {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

// Activity types
export interface Activity {
  name: string
  icon: string
  description: string
}

// Quick link types
export interface QuickLink {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

// Form validation types
export interface FormErrors {
  [key: string]: string
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Loading state types
export interface LoadingState {
  isLoading: boolean
  error?: string
}

// Pagination types
export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

// Filter types
export interface FilterOption {
  value: string
  label: string
  count?: number
}

export interface FilterProps {
  options: FilterOption[]
  selectedValue: string
  onValueChange: (value: string) => void
  label: string
} 