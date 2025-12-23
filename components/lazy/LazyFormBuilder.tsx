import dynamic from 'next/dynamic'
import { LoadingSpinner } from '@/components/ui'

// Dynamically import FormBuilder with loading fallback
const FormBuilder = dynamic(() => import('@/components/form/FormBuilder').then(mod => ({ default: mod.FormBuilder })), {
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <LoadingSpinner size="lg" />
      <span className="ml-3 text-gray-600">Loading form...</span>
    </div>
  ),
  ssr: false, // Disable SSR for this component since it's interactive
})

// Re-export the FormBuilder component with proper typing
export default FormBuilder
