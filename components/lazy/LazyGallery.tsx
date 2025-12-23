import dynamic from 'next/dynamic'
import { LoadingSpinner } from '@/components/ui'

// Dynamically import Gallery with loading fallback
const Gallery = dynamic(() => import('@/components/ui/Gallery').then(mod => ({ default: mod.Gallery })), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <LoadingSpinner size="lg" />
    </div>
  ),
  ssr: false, // Disable SSR for this component since it's heavy
})

export default Gallery
