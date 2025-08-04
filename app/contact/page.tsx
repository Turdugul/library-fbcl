'use client'

import { FormBuilder } from '@/components/form'
import { contactFormConfig } from '@/formConfigs/contactFormConfig'

export default function ContactPage() {
  const handleSubmit = async (formData: Record<string, any>) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would typically send the data to your backend or form service
    console.log('Contact form data:', formData)
  }

  return (
    <FormBuilder
      config={contactFormConfig}
      onSubmit={handleSubmit}
    />
  )
} 