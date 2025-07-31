import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react'
import { Button, Card, Input, Textarea, Select } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Friends of the Friern Barnet Community Library. We\'re here to help with questions, volunteer opportunities, and more.',
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Friern Barnet Rd\nLondon N11 3DS",
    link: "https://maps.google.com"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "020 8361 0174",
    link: "tel:+44-20-8361-0174"
  },
  {
    icon: Mail,
    title: "Email",
    content: "fbcllibrary15@gmail.com",
    link: "mailto:fbcllibrary15@gmail.com"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 12:00 PM - 6:00 PM\nSat-Sun: Closed"
  }
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl text-secondary-400 md:text-responsive-6xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Have questions? Want to volunteer? Need to book a space? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Library Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Library Details
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at the Friern Barnet Community Library
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-fade-in">
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">General Info</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Friern Barnet Community Library<br />
                      Friern Barnet Rd, London N11 3DS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:02083610174" className="text-primary-600 hover:text-primary-700 underline text-sm sm:text-base">
                        020 8361 0174
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:fbcllibrary15@gmail.com" className="text-primary-600 hover:text-primary-700 underline text-sm sm:text-base">
                        fbcllibrary15@gmail.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Opening Hours</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Monday to Friday: 12:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-800 font-medium text-sm sm:text-base">
                    We welcome your feedback and suggestions. Please contact us!
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.1234567890123!2d-0.12345678901234567!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEsMCwxMjMsNDU2Ljc4!5e0!3m2!1sen!2suk!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Friern Barnet Community Library Location"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-responsive-lg text-gray-600 mb-6 sm:mb-8">
                We're here to help with any questions about our programs, 
                volunteer opportunities, or library services.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start space-x-3 sm:space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line text-sm sm:text-base"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line text-sm sm:text-base">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-primary-600 transition-colors hover-scale"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <Input
                      label="First Name *"
                      id="firstName"
                      type="text"
                      required
                    />
                    <Input
                      label="Last Name *"
                      id="lastName"
                      type="text"
                      required
                    />
                  </div>
                  
                  <Input
                    label="Email *"
                    id="email"
                    type="email"
                    required
                  />
                  
                  <Input
                    label="Phone"
                    id="phone"
                    type="tel"
                  />
                  
                  <Select
                    label="Subject *"
                    id="subject"
                    required
                    options={[
                      { value: "", label: "Select a subject" },
                      { value: "general", label: "General Inquiry" },
                      { value: "volunteer", label: "Volunteer Opportunity" },
                      { value: "donation", label: "Donation" },
                      { value: "event", label: "Event Information" },
                      { value: "booking", label: "Space Booking" },
                      { value: "other", label: "Other" }
                    ]}
                  />
                  
                  <Textarea
                    label="Message *"
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Find Us
            </h2>
            <p className="text-responsive-lg text-gray-600">
              Visit us at the Friern Barnet Community Library
            </p>
          </div>
          
          <div className="card p-0 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.1234567890123!2d-0.1234567890123456!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876112345678901%3A0x1234567890123456!2sFriern%20Barnet%20Rd%2C%20London%20N11%203DS!5e0!3m2!1sen!2suk!4v1640991234567!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Friern Barnet Community Library Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our library and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="animate-fade-in p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">How can I volunteer?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Visit our volunteer page to see available opportunities and submit an application. 
                We'll contact you to discuss your interests and schedule.
              </p>
            </Card>
            
            <Card className="animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Can I book a space for an event?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Yes! We offer several spaces for rent. Check our "Hire Us" page for details 
                on available spaces, rates, and booking process.
              </p>
            </Card>
            
            <Card className="animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">How can I donate?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We accept monetary donations and book donations. Contact us for more information 
                about our donation programs and tax benefits.
              </p>
            </Card>
            
            <Card className="animate-fade-in p-4 sm:p-6" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">What events do you host?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We host various events including story times, book clubs, author readings, 
                workshops, and community celebrations. Check our events page for current listings.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl text-secondary-400 md:text-responsive-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We're here to help with any questions 
              about our library, programs, or services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary">
                Call Us
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 