'use client'

import { FormBuilder } from '@/components/form'
import { volunteerFormConfig } from '@/formConfigs/volunteerFormConfig'

export default function VolunteerApplyPage() {
  const handleSubmit = async (formData: Record<string, any>) => {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend or form service
      console.log('Form data:', formData)
  }

  return (
    <FormBuilder
      config={volunteerFormConfig}
      onSubmit={handleSubmit}
    />
  )
} 