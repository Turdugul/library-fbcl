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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-4">
              APPLICATION FORM (ADULT)
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Thank you for joining FBCL Library. Library membership costs £2 (please bring the correct change). When collecting your membership card, you will need to bring a form of ID showing your name and address (e.g. a utility bill dated in last three months, your latest Council Tax bill or your driving licence).
            </p>
            
            {/* Terms & Conditions Button */}
            <div className="flex flex-col items-center gap-4 m-4 p-5 width-60 bg-violet-500">
            <p className="text-sm text-gray-800 max-w-md">
                Please click to read Library membership T & Cs before you submit your form
              </p>
                             
               <Link href="/support-our-library/membership/terms" >
                 <Button variant="outline" >
                 <div className="flex items-center justify-center">
                   <ExternalLink className="h-5 w-5 mr-2" />
                  <span>Terms & Conditions</span>
                  </div>
                 </Button>
               </Link>
             
            </div>
          </div>
          <FormBuilder 
            config={adultFormConfig} 
            onSubmit={async (formData) => {
              console.log('Adult form submitted:', formData)
              // Here you would typically send the data to your backend
              // For now, we'll just log it
            }}
          />
        </div>
      </section>

      {/* Youth Application Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-4">
              APPLICATION FORM (YOUTH) 16 and under
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              You must have the permission of your parent or guardian to apply for a ticket which costs £1 (please bring the correct change). Your parent or guardian should give their details on this form and they will need to come into the library with ID showing their name and address (e.g. a utility bill dated in last three months, your latest Council Tax bill or your driving licence) to collect your ticket.
            </p>
            
            {/* Terms & Conditions Button */}
            <div className="flex flex-col items-center gap-4 m-4 p-5 width-60 bg-violet-500">
            <p className="text-sm text-gray-800 max-w-md">
                Please click to read Library membership T & Cs before you submit your form
              </p>
                             
               <Link href="/support-our-library/membership/terms" >
                 <Button variant="outline" >
                 <div className="flex items-center justify-center">
                   <ExternalLink className="h-5 w-5 mr-2" />
                  <span>Terms & Conditions</span>
                  </div>
                 </Button>
               </Link>
             
            </div>
          </div>
          <FormBuilder 
            config={youthFormConfig} 
            onSubmit={async (formData) => {
              console.log('Youth form submitted:', formData)
              // Here you would typically send the data to your backend
              // For now, we'll just log it
            }}
          />
        </div>
      </section>
    </>
  )
}
