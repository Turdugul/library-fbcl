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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#008080] text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl text-amber-400 sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
              Have a question or need assistance? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-cyan-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 2-3 business days.
              </p>
            </div>
            
            <FormBuilder
              config={contactFormConfig}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 