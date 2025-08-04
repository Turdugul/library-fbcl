import React from 'react'
import { LucideIcon } from 'lucide-react'

interface FormSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
  className?: string
}

export function FormSection({ title, icon: Icon, children, className = '' }: FormSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Icon className="h-6 w-6 mr-2 text-primary-600" />
        {title}
      </h2>
      {children}
    </div>
  )
} 