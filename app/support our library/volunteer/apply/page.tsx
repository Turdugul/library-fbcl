'use client'

import { useState } from 'react'
import { 
  User, 
  Mail, 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Button, Card, Input, Textarea, Select } from '@/components/ui'

interface FormData {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: string
  address: string
  postcode: string
  mobileNumber: string
  homePhone: string
  availability: string[]
  hoursPreference: string
  isDukeOfEdinburgh: string
  workExperience: string[]
  otherExperience: string
  description: string
  additionalInfo: string
}

interface FormErrors {
  [key: string]: string
}

const workExperienceOptions = [
  'Volunteering',
  'Advertising/Marketing',
  'Admin',
  'ICT / IT',
  'Design & Content (online or offline)',
  'Legal/Law',
  'Fundraising',
  'Other'
]

const availabilityOptions = [
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Flexible! (To be discussed. We\'ll match your best time with the library\'s needs.)'
]

export default function VolunteerApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    address: '',
    postcode: '',
    mobileNumber: '',
    homePhone: '',
    availability: [],
    hoursPreference: '',
    isDukeOfEdinburgh: '',
    workExperience: [],
    otherExperience: '',
    description: '',
    additionalInfo: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required'
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required'
    if (formData.availability.length === 0) newErrors.availability = 'Please select at least one day'
    if (formData.isDukeOfEdinburgh === '') newErrors.isDukeOfEdinburgh = 'Please select an option'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCheckboxChange = (field: keyof FormData, value: string, checked: boolean) => {
    const currentValues = formData[field] as string[]
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value)
    
    handleInputChange(field, newValues)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend or form service
      console.log('Form data:', formData)
      
      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        address: '',
        postcode: '',
        mobileNumber: '',
        homePhone: '',
        availability: [],
        hoursPreference: '',
        isDukeOfEdinburgh: '',
        workExperience: [],
        otherExperience: '',
        description: '',
        additionalInfo: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="pt-16">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-900">
                  Thank You for Applying!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  We've received your volunteer application and will be in touch shortly to discuss next steps.
                </p>
                <p className="text-gray-600 mb-8">
                  In the meantime, feel free to explore our website to learn more about the Friern Barnet Community Library.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="/volunteer">Back to Volunteer Page</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/">Visit Homepage</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
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
                {/* Basic Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <User className="h-6 w-6 mr-2 text-primary-600" />
                    Basic Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      aria-describedby={errors.email ? 'email-error' : 'email-help'}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    <p id="email-help" className="text-sm text-gray-500 mt-1">
                      We won't pass your email address to a third party.
                    </p>
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <Input
                      id="dateOfBirth"
                      type="text"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      placeholder="e.g., January/2001"
                      required
                      aria-describedby={errors.dateOfBirth ? 'dateOfBirth-error' : undefined}
                      className={errors.dateOfBirth ? 'border-red-500' : ''}
                    />
                    {errors.dateOfBirth && (
                      <p id="dateOfBirth-error" className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      required
                      aria-describedby={errors.address ? 'address-error' : undefined}
                      className={errors.address ? 'border-red-500' : ''}
                    />
                    {errors.address && (
                      <p id="address-error" className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                        Postcode *
                      </label>
                      <Input
                        id="postcode"
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => handleInputChange('postcode', e.target.value)}
                        required
                        aria-describedby={errors.postcode ? 'postcode-error' : undefined}
                        className={errors.postcode ? 'border-red-500' : ''}
                      />
                      {errors.postcode && (
                        <p id="postcode-error" className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.postcode}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <Input
                        id="mobileNumber"
                        type="tel"
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        required
                        aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : 'mobileNumber-help'}
                        className={errors.mobileNumber ? 'border-red-500' : ''}
                      />
                      <p id="mobileNumber-help" className="text-sm text-gray-500 mt-1">
                        To call you.
                      </p>
                      {errors.mobileNumber && (
                        <p id="mobileNumber-error" className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="homePhone" className="block text-sm font-medium text-gray-700 mb-2">
                      Home Phone (optional)
                    </label>
                    <Input
                      id="homePhone"
                      type="tel"
                      value={formData.homePhone}
                      onChange={(e) => handleInputChange('homePhone', e.target.value)}
                    />
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-primary-600" />
                    Availability
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Days Available to Volunteer *
                    </label>
                    <div className="space-y-3">
                      {availabilityOptions.map((day) => (
                        <label key={day} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.availability.includes(day)}
                            onChange={(e) => handleCheckboxChange('availability', day, e.target.checked)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">{day}</span>
                        </label>
                      ))}
                    </div>
                    {errors.availability && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.availability}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label htmlFor="hoursPreference" className="block text-sm font-medium text-gray-700 mb-2">
                      Hours Preference (optional)
                    </label>
                    <Input
                      id="hoursPreference"
                      type="text"
                      value={formData.hoursPreference}
                      onChange={(e) => handleInputChange('hoursPreference', e.target.value)}
                      placeholder="e.g., Only available 2–4 PM on Thursdays"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      We'll discuss shift hours in person. Typical shifts: 12–2, 2–4, 4–6 PM.
                    </p>
                  </div>
                </div>

                {/* Education/Work Context */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <GraduationCap className="h-6 w-6 mr-2 text-primary-600" />
                    Education/Work Context
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Are you applying as a student doing the Duke of Edinburgh's Award? *
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="isDukeOfEdinburgh"
                          value="yes"
                          checked={formData.isDukeOfEdinburgh === 'yes'}
                          onChange={(e) => handleInputChange('isDukeOfEdinburgh', e.target.value)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="isDukeOfEdinburgh"
                          value="no"
                          checked={formData.isDukeOfEdinburgh === 'no'}
                          onChange={(e) => handleInputChange('isDukeOfEdinburgh', e.target.value)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                    {errors.isDukeOfEdinburgh && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.isDukeOfEdinburgh}
                      </p>
                    )}
                  </div>
                </div>

                {/* Relevant Experience */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Briefcase className="h-6 w-6 mr-2 text-primary-600" />
                    Relevant Experience (Not Required)
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Work Experience Areas
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {workExperienceOptions.map((experience) => (
                        <label key={experience} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.workExperience.includes(experience)}
                            onChange={(e) => handleCheckboxChange('workExperience', experience, e.target.checked)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <span className="text-gray-700">{experience}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Please tell us if you have specific experience, abilities, or knowledge in any of the areas above that could benefit FBCL.
                    </label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      placeholder="Describe your relevant experience..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Volunteers need to commit to at least one two-hour shift per week.
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-2 text-primary-600" />
                    Additional Information
                  </h2>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Anything else you'd like to share?
                    </label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={4}
                      placeholder="Tell us about previous experience, remote contributions (e.g., website help, online posters), or why you want to volunteer."
                    />
                  </div>
                </div>

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