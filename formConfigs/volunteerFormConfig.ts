import { 
  User, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  MessageSquare 
} from 'lucide-react'
import { FormConfig } from '@/components/form/FormBuilder'

export const volunteerFormConfig: FormConfig = {
  sections: [
    {
      id: 'basic-info',
      title: 'Basic Information',
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
          helpText: "We won't pass your email address to a third party."
        },
        {
          id: 'dateOfBirth',
          type: 'text',
          label: 'Date of Birth',
          required: true,
          placeholder: 'e.g., January/2001'
        },
        {
          id: 'address',
          type: 'textarea',
          label: 'Address',
          required: true,
          rows: 3
        },
        {
          id: 'postcode',
          type: 'text',
          label: 'Postcode',
          required: true
        },
        {
          id: 'mobileNumber',
          type: 'tel',
          label: 'Mobile Number',
          required: true,
          helpText: 'To call you.'
        },
        {
          id: 'homePhone',
          type: 'tel',
          label: 'Home Phone (optional)'
        }
      ]
    },
    {
      id: 'availability',
      title: 'Availability',
      icon: Clock,
      fields: [
        {
          id: 'availability',
          type: 'checkbox',
          label: 'Days Available to Volunteer',
          required: true,
          options: [
            { value: 'Mondays', label: 'Mondays' },
            { value: 'Tuesdays', label: 'Tuesdays' },
            { value: 'Wednesdays', label: 'Wednesdays' },
            { value: 'Thursdays', label: 'Thursdays' },
            { value: 'Fridays', label: 'Fridays' },
            { value: 'Flexible! (To be discussed. We\'ll match your best time with the library\'s needs.)', label: 'Flexible! (To be discussed. We\'ll match your best time with the library\'s needs.)' }
          ]
        },
        {
          id: 'hoursPreference',
          type: 'text',
          label: 'Hours Preference (optional)',
          placeholder: 'e.g., Only available 2–4 PM on Thursdays',
          helpText: 'We\'ll discuss shift hours in person. Typical shifts: 12–2, 2–4, 4–6 PM.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education/Work Context',
      icon: GraduationCap,
      fields: [
        {
          id: 'isDukeOfEdinburgh',
          type: 'radio',
          label: 'Are you applying as a student doing the Duke of Edinburgh\'s Award?',
          required: true,
          options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]
        }
      ]
    },
    {
      id: 'experience',
      title: 'Relevant Experience (Not Required)',
      icon: Briefcase,
      fields: [
        {
          id: 'workExperience',
          type: 'checkbox',
          label: 'Work Experience Areas',
          options: [
            { value: 'Volunteering', label: 'Volunteering' },
            { value: 'Advertising/Marketing', label: 'Advertising/Marketing' },
            { value: 'Admin', label: 'Admin' },
            { value: 'ICT / IT', label: 'ICT / IT' },
            { value: 'Design & Content (online or offline)', label: 'Design & Content (online or offline)' },
            { value: 'Legal/Law', label: 'Legal/Law' },
            { value: 'Fundraising', label: 'Fundraising' },
            { value: 'Other', label: 'Other' }
          ],
          columns: 2
        },
        {
          id: 'description',
          type: 'textarea',
          label: 'Please tell us if you have specific experience, abilities, or knowledge in any of the areas above that could benefit FBCL.',
          rows: 4,
          placeholder: 'Describe your relevant experience...',
          helpText: 'Volunteers need to commit to at least one two-hour shift per week.'
        }
      ]
    },
    {
      id: 'additional',
      title: 'Additional Information',
      icon: MessageSquare,
      fields: [
        {
          id: 'additionalInfo',
          type: 'textarea',
          label: 'Anything else you\'d like to share?',
          rows: 4,
          placeholder: 'Tell us about previous experience, remote contributions (e.g., website help, online posters), or why you want to volunteer.'
        }
      ]
    }
  ],
  successMessage: "We've received your volunteer application and will be in touch shortly to discuss next steps.",
  successAdditionalInfo: "In the meantime, feel free to explore our website to learn more about the Friern Barnet Community Library.",
  primaryAction: {
    label: 'Back to Volunteer Page',
    href: '/support-our-library/volunteer'
  },
  secondaryAction: {
    label: 'Visit Homepage',
    href: '/'
  }
} 