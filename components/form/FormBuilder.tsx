import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { TextInputField } from './TextInputField'
import { TextareaField } from './TextareaField'
import { CheckboxGroup } from './CheckboxGroup'
import { RadioGroup } from './RadioGroup'
import { FormSection } from './FormSection'
import { SuccessCard } from './SuccessCard'

export interface FormField {
  id: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox' | 'radio'
  label: string
  required?: boolean
  placeholder?: string
  helpText?: string
  options?: Array<{ value: string; label: string }>
  columns?: 1 | 2
  rows?: number
  validation?: {
    pattern?: RegExp
    message?: string
  }
}

export interface FormSection {
  id: string
  title: string
  icon: any // LucideIcon
  fields: FormField[]
}

export interface FormConfig {
  sections: FormSection[]
  successMessage: string
  successAdditionalInfo?: string
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

interface FormBuilderProps {
  config: FormConfig
  onSubmit: (formData: Record<string, any>) => Promise<void>
  className?: string
}

export function FormBuilder({ config, onSubmit, className = '' }: FormBuilderProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (field: FormField, value: any): string | null => {
    if (field.required) {
      if (field.type === 'checkbox' || field.type === 'radio') {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return `${field.label} is required`
        }
      } else {
        if (!value || value.trim() === '') {
          return `${field.label} is required`
        }
      }
    }

    if (field.type === 'email' && value && !validateEmail(value)) {
      return 'Please enter a valid email address'
    }

    if (field.validation?.pattern && value && !field.validation.pattern.test(value)) {
      return field.validation.message || 'Invalid format'
    }

    return null
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    config.sections.forEach(section => {
      section.fields.forEach(field => {
        const error = validateField(field, formData[field.id])
        if (error) {
          newErrors[field.id] = error
        }
      })
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await onSubmit(formData)
      setSubmitSuccess(true)
      setFormData({})
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      label: field.label,
      required: field.required,
      error: errors[field.id],
      className: 'mb-6'
    }

    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <TextInputField
            {...commonProps}
            type={field.type}
            value={formData[field.id] || ''}
            onChange={(value) => handleInputChange(field.id, value)}
            placeholder={field.placeholder}
            helpText={field.helpText}
          />
        )

      case 'textarea':
        return (
          <TextareaField
            {...commonProps}
            value={formData[field.id] || ''}
            onChange={(value) => handleInputChange(field.id, value)}
            placeholder={field.placeholder}
            helpText={field.helpText}
            rows={field.rows}
          />
        )

      case 'checkbox':
        return (
          <CheckboxGroup
            {...commonProps}
            options={field.options || []}
            selectedValues={formData[field.id] || []}
            onChange={(values) => handleInputChange(field.id, values)}
            columns={field.columns}
          />
        )

      case 'radio':
        return (
          <RadioGroup
            {...commonProps}
            options={field.options || []}
            selectedValue={formData[field.id] || ''}
            onChange={(value) => handleInputChange(field.id, value)}
          />
        )

      default:
        return null
    }
  }

  if (submitSuccess) {
    return (
      <SuccessCard
        title="Thank You!"
        message={config.successMessage}
        additionalInfo={config.successAdditionalInfo}
        primaryAction={config.primaryAction}
        secondaryAction={config.secondaryAction}
      />
    )
  }

  return (
    <div className={`pt-16 ${className}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl text-secondary-400 font-bold mb-6">
              Join Our Volunteer Team
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Help us support literacy and community engagement at the Friern Barnet Community Library
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {config.sections.map((section) => (
                  <FormSection
                    key={section.id}
                    title={section.title}
                    icon={section.icon}
                  >
                    <div className="space-y-6">
                      {section.fields.map((field) => (
                        <div key={field.id}>
                          {renderField(field)}
                        </div>
                      ))}
                    </div>
                  </FormSection>
                ))}

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Join FBCL Team!
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 