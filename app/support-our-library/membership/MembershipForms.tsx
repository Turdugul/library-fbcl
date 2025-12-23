'use client'

import { FormBuilder } from '@/components/form'
import { Button } from '@/components/ui'
import { User, Home, Phone, Key, CheckCircle, Baby, Users, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const adultFormConfig = {
  sections: [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: User,
      fields: [
        {
          id: 'firstName',
          type: 'text' as const,
          label: 'Your first & last name: *',
          placeholder: 'First',
          required: true,
          columns: 1 as const
        },
        {
          id: 'lastName',
          type: 'text' as const,
          label: '',
          placeholder: 'Last',
          required: true,
          columns: 1 as const
        },
        {
          id: 'title',
          type: 'radio' as const,
          label: 'Please choose: *',
          options: [
            { value: 'Miss', label: 'Miss' },
            { value: 'Mr', label: 'Mr' },
            { value: 'Mrs', label: 'Mrs' },
            { value: 'Ms', label: 'Ms' },
            { value: 'Dr', label: 'Dr' },
            { value: 'Other', label: 'Other' }
          ],
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'address',
      title: 'Address Information',
      icon: Home,
      fields: [
        {
          id: 'addressLine1',
          type: 'text' as const,
          label: 'Your address *',
          placeholder: 'Address line 1',
          required: true,
          columns: 2 as const
        },
        {
          id: 'addressLine2',
          type: 'text' as const,
          label: '',
          placeholder: 'Address line 2',
          required: false,
          columns: 2 as const
        },
        {
          id: 'postcode',
          type: 'text' as const,
          label: 'Your postcode: *',
          placeholder: 'Postcode',
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Phone,
      fields: [
        {
          id: 'email',
          type: 'email' as const,
          label: 'Your email:',
          placeholder: 'email address. (If you do not have an email address please state \'none\')',
          required: false,
          columns: 2 as const
        },
        {
          id: 'mobile',
          type: 'tel' as const,
          label: 'Your mobile number',
          placeholder: 'Mobile Number',
          required: false,
          columns: 1 as const
        },
        {
          id: 'homePhone',
          type: 'tel' as const,
          label: 'Your home phone number',
          placeholder: 'Home number (Landline)',
          required: false,
          columns: 1 as const
        }
      ]
    },
    {
      id: 'access',
      title: 'Library Access',
      icon: Key,
      fields: [
        {
          id: 'cataloguePassword',
          type: 'radio' as const,
          label: 'Please choose one of your phone numbers above as your password for library catalogue: *',
          options: [
            { value: 'mobile', label: 'My Mobile Number.' },
            { value: 'homePhone', label: 'My Home Phone Number.' }
          ],
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: CheckCircle,
      fields: [
        {
          id: 'agreeTerms',
          type: 'checkbox' as const,
          label: 'I have read & agree to FBCL membership terms & conditions.',
          required: true,
          columns: 2 as const
        }
      ]
    }
  ],
  successMessage: 'Thank you for your membership application! We will contact you soon to arrange collection of your membership card.'
}

const youthFormConfig = {
  sections: [
    {
      id: 'youth',
      title: 'Youth Information',
      icon: Baby,
      fields: [
        {
          id: 'youthFirstName',
          type: 'text' as const,
          label: 'First & last name of the youth *',
          placeholder: 'First',
          required: true,
          columns: 1 as const
        },
        {
          id: 'youthLastName',
          type: 'text' as const,
          label: '',
          placeholder: 'Last',
          required: true,
          columns: 1 as const
        },
        {
          id: 'dateOfBirth',
          type: 'text' as const,
          label: 'Youth\'s date of birth *',
          placeholder: 'dd/mm/yyyy',
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'guardian',
      title: 'Parent/Guardian Information',
      icon: Users,
      fields: [
        {
          id: 'guardianTitle',
          type: 'radio' as const,
          label: 'Parent or guardian\'s title, please choose from dropdown menu: *',
          options: [
            { value: 'Mr', label: 'Mr' },
            { value: 'Miss', label: 'Miss' },
            { value: 'Mrs', label: 'Mrs' },
            { value: 'Ms', label: 'Ms' },
            { value: 'Dr', label: 'Dr' },
            { value: 'Other', label: 'Other' }
          ],
          required: true,
          columns: 2 as const
        },
        {
          id: 'guardianFirstName',
          type: 'text' as const,
          label: 'Parent or guardian\'s First & Last Name: *',
          placeholder: 'First',
          required: true,
          columns: 1 as const
        },
        {
          id: 'guardianLastName',
          type: 'text' as const,
          label: '',
          placeholder: 'Last',
          required: true,
          columns: 1 as const
        }
      ]
    },
    {
      id: 'guardianAddress',
      title: 'Guardian Address',
      icon: Home,
      fields: [
        {
          id: 'guardianAddressLine1',
          type: 'text' as const,
          label: 'Parent or guardian\'s address *',
          placeholder: 'parent or guardian\'s Address - line 1',
          required: true,
          columns: 2 as const
        },
        {
          id: 'guardianAddressLine2',
          type: 'text' as const,
          label: 'Parent or guardian\'s address',
          placeholder: 'parent or guardian\'s Address - line 2',
          required: false,
          columns: 2 as const
        },
        {
          id: 'guardianPostcode',
          type: 'text' as const,
          label: 'Parent or guardian\'s postcode: *',
          placeholder: 'Postcode',
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'guardianContact',
      title: 'Guardian Contact Information',
      icon: Phone,
      fields: [
        {
          id: 'guardianEmail',
          type: 'email' as const,
          label: 'Parent or guardian\'s email *',
          placeholder: 'Email address',
          required: true,
          columns: 2 as const
        },
        {
          id: 'guardianMobile',
          type: 'tel' as const,
          label: 'Parent or guardian\'s mobile number',
          placeholder: 'Mobile Number',
          required: false,
          columns: 1 as const
        },
        {
          id: 'guardianHomePhone',
          type: 'tel' as const,
          label: 'Home Phone Number (landline)',
          placeholder: 'Home number',
          required: false,
          columns: 1 as const
        }
      ]
    },
    {
      id: 'access',
      title: 'Library Access',
      icon: Key,
      fields: [
        {
          id: 'guardianCataloguePassword',
          type: 'radio' as const,
          label: 'Please choose one of the phone numbers above as the password for the library catalogue: *',
          options: [
            { value: 'mobile', label: 'My Mobile Number.' },
            { value: 'homePhone', label: 'My Home Phone Number.' }
          ],
          required: true,
          columns: 2 as const
        }
      ]
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: CheckCircle,
      fields: [
        {
          id: 'guardianAgreeTerms',
          type: 'checkbox' as const,
          label: 'Parent or guardian has read and agrees to FBCL membership terms & conditions.',
          required: true,
          columns: 2 as const
        }
      ]
    }
  ],
  successMessage: 'Thank you for your membership application! We will contact you soon to arrange collection of your membership card.'
}



export function MembershipForms() {
  return (
    <>
      {/* Adult Application Form */}
      <section className="section-padding bg-cyan-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-4">
              APPLICATION FORM (ADULT)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Thank you for joining FBCL Library. Library membership costs £2 (please bring the correct change). When collecting your membership card, you will need to bring a form of ID showing your name and address (e.g. a utility bill dated in last three months, your latest Council Tax bill or your driving licence).
            </p>
            
            {/* Terms & Conditions Section */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-sky-50 to-cyan-100 border border-cyan-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-center justify-center w-16 h-16 bg-[#FFBF00]/20 rounded-full mb-2">
                    <svg 
                      className="w-8 h-8 text-[#FFBF00]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 font-elegant-heading">
                    Important: Read Before Submitting
                  </h3>
                  
                  <p className="text-sm text-gray-700 max-w-md leading-relaxed">
                    Please review our Library membership Terms & Conditions before submitting your application form
                  </p>
                  
                  {/* Button */}
                  <Link href="/support-our-library/membership/terms">
                    <Button 
                      variant="outline" 
                      className="group hover:scale-105 transition-transform duration-200"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        <span className="font-medium">View Terms & Conditions</span>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl m-auto">
          <FormBuilder 
            config={adultFormConfig} 
            onSubmit={async (formData) => {
              // Here you would typically send the data to your backend
              // TODO: Implement actual form submission to backend
            }}
          />
          </div>
        </div>
      </section>

      {/* Youth Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-4">
              APPLICATION FORM (YOUTH) 16 and under
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              You must have the permission of your parent or guardian to apply for a ticket which costs £1 (please bring the correct change). Your parent or guardian should give their details on this form and they will need to come into the library with ID showing their name and address (e.g. a utility bill dated in last three months, your latest Council Tax bill or your driving licence) to collect your ticket.
            </p>
          </div>
          <div className="max-w-2xl m-auto">
          <FormBuilder 
            config={youthFormConfig} 
            onSubmit={async (formData) => {
              // Here you would typically send the data to your backend
              // TODO: Implement actual form submission to backend
            }}
          />
          </div>
        </div>
      </section>
    </>
  )
}
