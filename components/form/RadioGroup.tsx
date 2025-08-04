import React from 'react'
import { AlertCircle } from 'lucide-react'

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  id: string
  label: string
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
  required?: boolean
  error?: string
  className?: string
}

export function RadioGroup({
  id,
  label,
  options,
  selectedValue,
  onChange,
  required = false,
  error,
  className = ''
}: RadioGroupProps) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        {label} {required && '*'}
      </label>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name={id}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-2 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  )
} 