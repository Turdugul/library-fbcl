import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Linkedin, Globe, ArrowLeft } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { trustees } from '@/lib/data'
import { clearCache } from '../../../lib/api';

export const metadata: Metadata = {
  title: 'Trustees',
  description: 'Meet the dedicated trustees who guide the Friends of the Friern Barnet Community Library in our mission to support literacy and community engagement.',
}

export default function TrusteesPage() {
  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="container-custom py-6">
        <Link 
          href="/about" 
          className="inline-flex items-center text-secondary-500 hover:text-secondary-600 transition-colors font-medium group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to About
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl text-secondary-400 font-bold mb-6">
              Our Trustees
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Meet the dedicated individuals who guide the Friends of the Friern Barnet Community Library 
              in our mission to support literacy and community engagement.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-8">
              <h2 className="text-2xl  text-secondary-400 font-bold mb-4">Trustee Group</h2>
              <p className="text-gray-100 mb-4">
                Note: The trustee list below may not be fully up-to-date. For the most current list of Trustees, 
                please visit the Charity Commission website or contact us by email.
              </p>
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Chair: Joanna Fryer</p>
                <p className="text-sm text-gray-200">
                  For up-to-date trustee names, see the Charity Commission website or email us at{' '}
                  <a href="mailto:fbcllibrary15@gmail.com" className="text-secondary-300 hover:text-white underline">
                    fbcllibrary15@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Board of Trustees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our trustees bring diverse expertise and a shared commitment to serving our community.
            </p>
          </div>
          
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {trustees.map((trustee, index) => (
              <Card
                key={trustee.id}
                className=" p-4 text-center group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trustee.role}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{trustee.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {trustee.bio}
                </p>
                
                <div className="text-xs text-gray-500 mb-4">
                  Term: {trustee.term}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={`mailto:${trustee.email}`}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label={`Email ${trustee.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={trustee.linkedin}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label={`${trustee.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={trustee.website}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    aria-label={`${trustee.name}'s website`}
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Board Governance
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our board of trustees operates under a governance model that ensures transparency, 
                accountability, and effective leadership. Each trustee serves a four-year term and 
                brings unique expertise to our organization.
              </p>
              <p className="text-gray-600 mb-8">
                The board meets monthly to review programs, approve budgets, and set strategic 
                direction. We are committed to maintaining the highest standards of nonprofit 
                governance and community service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Monthly board meetings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Four-year trustee terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Transparent financial reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Community-focused decision making</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className='p-4'>
                <h3 className="text-2xl font-bold mb-4">Board Responsibilities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Strategic planning and vision setting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Financial oversight and budget approval</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Program evaluation and impact assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Community outreach and partnership development</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Volunteer recruitment and retention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <span>Fundraising and resource development</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Legal Information</h3>
              <div className="space-y-4 text-gray-600">
                <p>A Company Limited by Guarantee</p>
                <p><strong>Company Number:</strong> 8369031</p>
                <p><strong>Registered Charity Number:</strong> 1154956</p>
                <p className="text-sm text-gray-500 mt-6">
                  For the most up-to-date information, please visit the Charity Commission website.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl text-secondary-400  md:text-4xl font-bold mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Interested in joining our board or learning more about our governance? 
              We're always looking for passionate community members to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                Contact Board
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 