import dynamic from 'next/dynamic'
import { LoadingSpinner } from '@/components/ui'

// Dynamically import Carousel with loading fallback
const Carousel = dynamic(() => import('@/components/ui/Carousel').then(mod => ({ default: mod.Carousel })), {
  loading: () => (
    <div className="flex items-center justify-center py-8">
      <LoadingSpinner />
    </div>
  ),
  ssr: false, // Disable SSR for this component since it's interactive
})

export default Carousel
