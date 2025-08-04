import React from 'react'
import { AlertCircle } from 'lucide-react'

interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxGroupProps {
  id: string
  label: string
  options: CheckboxOption[]
  selectedValues: string[]
  onChange: (values: string[]) => void
  required?: boolean
  error?: string
  columns?: 1 | 2
  className?: string
}

export function CheckboxGroup({
  id,
  label,
  options,
  selectedValues,
  onChange,
  required = false,
  error,
  columns = 1,
  className = ''
}: CheckboxGroupProps) {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newValues = checked 
      ? [...selectedValues, value]
      : selectedValues.filter(v => v !== value)
    onChange(newValues)
  }

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        {label} {required && '*'}
      </label>
      <div className={`grid ${columns === 2 ? 'md:grid-cols-2' : ''} gap-3`}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
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