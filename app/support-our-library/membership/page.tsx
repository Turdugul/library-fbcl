import { Metadata } from 'next'
import { MembershipForms } from './MembershipForms'

export const metadata: Metadata = {
  title: 'Membership Application - FBCL',
  description: 'Apply for FBCL library membership. Adult membership costs £2, youth membership (16 and under) costs £1.',
}

export default function MembershipPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl md:text-responsive-6xl text-secondary-400 font-bold mb-4 sm:mb-6">
              Library Membership
            </h1>
            <p className="text-responsive-lg text-gray-100 mb-6 sm:mb-8">
              Join the Friern Barnet Community Library and become part of our vibrant reading community.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6">
                Adult Membership
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span><strong>Cost:</strong> £2 (please bring correct change)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span><strong>ID Required:</strong> Utility bill, Council Tax bill, or driving licence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span><strong>Benefits:</strong> Full library access, computer use, events participation</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in stagger-1">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-bold mb-6">
                Youth Membership
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span><strong>Cost:</strong> £1 (please bring correct change)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span><strong>Age:</strong> 16 years and under</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span><strong>Parent/Guardian:</strong> Must accompany youth to collect ticket</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span><strong>Benefits:</strong> Age-appropriate programs, reading resources, events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <MembershipForms />

      {/* Additional Information */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-responsive-2xl md:text-responsive-3xl font-bold mb-6 text-primary-800">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm">Complete and submit your membership form online</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">We'll Contact You</h3>
                <p className="text-sm">We'll reach out to arrange collection of your membership card</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Visit the Library</h3>
                <p className="text-sm">Bring your ID and payment to collect your membership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
