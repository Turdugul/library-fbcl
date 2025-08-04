import React from 'react'
import { Input } from '@/components/ui'
import { AlertCircle } from 'lucide-react'

interface TextInputFieldProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email' | 'tel' | 'password' | 'date'
  placeholder?: string
  required?: boolean
  helpText?: string
  error?: string
  className?: string
}

export function TextInputField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required = false,
  helpText,
  error,
  className = ''
}: TextInputFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && '*'}
      </label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        className={error ? 'border-red-500' : ''}
      />
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 mt-1">
          {helpText}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm mt-1 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  )
} 