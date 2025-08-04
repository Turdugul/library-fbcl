# FormBuilder Component System

A reusable form building system that allows you to create complex forms using configuration objects.

## Components

### Core Components

- **FormBuilder**: Main component that renders forms based on configuration
- **TextInputField**: Single-line text input with validation
- **TextareaField**: Multi-line text input
- **CheckboxGroup**: Multi-select checkbox group
- **RadioGroup**: Single-select radio button group
- **FormSection**: Wrapper for form sections with icons
- **SuccessCard**: Success message display after form submission

## Usage

### Basic Example

```tsx
import { FormBuilder } from '@/components/form'
import { volunteerFormConfig } from '@/formConfigs/volunteerFormConfig'

export default function MyFormPage() {
  const handleSubmit = async (formData: Record<string, any>) => {
    // Handle form submission
    console.log('Form data:', formData)
  }

  return (
    <FormBuilder
      config={volunteerFormConfig}
      onSubmit={handleSubmit}
    />
  )
}
```

### Form Configuration

Form configurations define the structure and behavior of forms:

```tsx
import { FormConfig } from '@/components/form'
import { User, Mail } from 'lucide-react'

export const myFormConfig: FormConfig = {
  sections: [
    {
      id: 'personal-info',
      title: 'Personal Information',
      icon: User,
      fields: [
        {
          id: 'firstName',
          type: 'text',
          label: 'First Name',
          required: true
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          helpText: 'We\'ll use this to contact you.'
        }
      ]
    }
  ],
  successMessage: 'Thank you for your submission!',
  primaryAction: {
    label: 'Back to Home',
    href: '/'
  }
}
```

## Field Types

### Text Input
```tsx
{
  id: 'name',
  type: 'text' | 'email' | 'tel' | 'password' | 'date',
  label: 'Field Label',
  required: true,
  placeholder: 'Enter value...',
  helpText: 'Optional help text'
}
```

### Textarea
```tsx
{
  id: 'message',
  type: 'textarea',
  label: 'Message',
  required: true,
  rows: 4,
  placeholder: 'Enter your message...'
}
```

### Checkbox Group
```tsx
{
  id: 'interests',
  type: 'checkbox',
  label: 'Select your interests',
  required: true,
  options: [
    { value: 'reading', label: 'Reading' },
    { value: 'writing', label: 'Writing' }
  ],
  columns: 2 // Optional: 1 or 2 columns
}
```

### Radio Group
```tsx
{
  id: 'preference',
  type: 'radio',
  label: 'Select your preference',
  required: true,
  options: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ]
}
```

## Validation

The FormBuilder includes built-in validation:

- Required field validation
- Email format validation
- Custom pattern validation (via `validation.pattern`)

## Customization

### Styling
All components accept a `className` prop for custom styling.

### Custom Validation
Add custom validation patterns:

```tsx
{
  id: 'postcode',
  type: 'text',
  label: 'Postcode',
  validation: {
    pattern: /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i,
    message: 'Please enter a valid UK postcode'
  }
}
```

## Available Configurations

- `volunteerFormConfig`: Complete volunteer application form
- `contactFormConfig`: Contact form example

## Benefits

1. **Reusable**: Create multiple forms with the same components
2. **Configurable**: Define form structure through configuration objects
3. **Maintainable**: Centralized form logic and validation
4. **Accessible**: Built-in ARIA attributes and error handling
5. **Type-safe**: Full TypeScript support with proper interfaces 