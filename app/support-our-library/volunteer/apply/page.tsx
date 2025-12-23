'use client'

import LazyFormBuilder from '@/components/lazy/LazyFormBuilder'
import { volunteerFormConfig } from '@/formConfigs/volunteerFormConfig'

export default function VolunteerApplyPage() {
  const handleSubmit = async (formData: Record<string, any>) => {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend or form service
      // TODO: Implement actual form submission to backend
  }

  return (
    <section className="section-padding bg-cyan-100">
        <div className="container-custom mt-16">
        <div className='max-w-2xl m-auto'>
    <LazyFormBuilder
      config={volunteerFormConfig}
      onSubmit={handleSubmit}
    />
    </div>
        </div>
    </section>
  )
} 