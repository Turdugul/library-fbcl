import { 
  User, 
  Mail, 
  MessageSquare, 
  Phone 
} from 'lucide-react'
import { FormConfig } from '@/components/form/FormBuilder'

export const contactFormConfig: FormConfig = {
  sections: [
    {
      id: 'contact-info',
      title: 'Contact Information',
      icon: User,
      fields: [
        {
          id: 'firstName',
          type: 'text',
          label: 'First Name',
          required: true
        },
        {
          id: 'lastName',
          type: 'text',
          label: 'Last Name',
          required: true
        },
        {
          id: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
          helpText: 'We\'ll use this to respond to your inquiry.'
        },
        {
          id: 'phone',
          type: 'tel',
          label: 'Phone Number (optional)',
          helpText: 'For urgent matters only.'
        }
      ]
    },
    {
      id: 'inquiry',
      title: 'Your Inquiry',
      icon: MessageSquare,
      fields: [
        {
          id: 'subject',
          type: 'text',
          label: 'Subject',
          required: true,
          placeholder: 'What is this about?'
        },
        {
          id: 'message',
          type: 'textarea',
          label: 'Message',
          required: true,
          rows: 6,
          placeholder: 'Please provide details about your inquiry...'
        },
        {
          id: 'inquiryType',
          type: 'radio',
          label: 'Type of Inquiry',
          required: true,
          options: [
            { value: 'general', label: 'General Question' },
            { value: 'volunteer', label: 'Volunteer Information' },
            { value: 'donation', label: 'Donation' },
            { value: 'event', label: 'Event Information' },
            { value: 'other', label: 'Other' }
          ]
        }
      ]
    }
  ],
  successMessage: "Thank you for your message! We'll get back to you within 2-3 business days.",
  successAdditionalInfo: "If your inquiry is urgent, please call us directly.",
  primaryAction: {
    label: 'Back to Homepage',
    href: '/'
  },
  secondaryAction: {
    label: 'Visit Library',
    href: '/visit'
  }
} 