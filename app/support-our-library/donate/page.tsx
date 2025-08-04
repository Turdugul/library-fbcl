'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, BookOpen, Users, Award, ArrowRight, CheckCircle, CreditCard, Banknote, Gift } from 'lucide-react'
import { Button, Card } from '@/components/ui'

const donationTiers = [
  {
    name: 'Friend',
    amount: 25,
    description: 'Support our basic operations',
    benefits: [
      'Thank you card',
      'Library newsletter',
      'Name on supporter wall'
    ],
    popular: false
  },
  {
    name: 'Supporter',
    amount: 50,
    description: 'Help us expand our collection',
    benefits: [
      'All Friend benefits',
      'Book dedication plaque',
      'Invitation to special events',
      'Quarterly impact report'
    ],
    popular: true
  },
  {
    name: 'Patron',
    amount: 100,
    description: 'Make a significant impact',
    benefits: [
      'All Supporter benefits',
      'VIP event invitations',
      'Personal library tour',
      'Named book collection',
      'Annual donor recognition'
    ],
    popular: false
  }
]

const impactStats = [
  { number: '500+', label: 'Books Added', icon: BookOpen },
  { number: '200+', label: 'Children Served', icon: Users },
  { number: '50+', label: 'Events Hosted', icon: Award },
  { number: '1000+', label: 'Hours Volunteered', icon: Heart }
]

const donationMethods = [
  {
    name: 'Credit Card',
    icon: CreditCard,
    description: 'Secure online payment',
    popular: true
  },
  {
    name: 'Bank Transfer',
    icon: Banknote,
    description: 'Direct bank transfer'
  },
  {
    name: 'Check',
    icon: Gift,
    description: 'Mail a check to our address'
  }
]

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('Credit Card')

  const handleDonation = (amount: number) => {
    // In a real implementation, this would integrate with a payment processor
    console.log(`Processing donation of £${amount}`)
    alert(`Thank you for your donation of £${amount}! This would redirect to a payment processor in production.`)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center py-16 sm:py-20 lg:py-24">
            <div className="animate-fade-in">
              <div className="mb-4">
                <Heart className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-warm mb-4" />
              </div>
              <h1 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-6 sm:mb-8">
                Support Our Library
              </h1>
              <p className="text-responsive-lg mb-8 sm:mb-10 text-gray-100 font-elegant-body leading-relaxed max-w-3xl mx-auto">
                Your donation helps us maintain and expand our community library, 
                providing access to knowledge, fostering literacy, and creating a 
                welcoming space for everyone in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" asChild className="px-8 py-4 text-lg">
                  <Link href="#donate-now">
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 text-lg">
                  <Link href="#impact">
                    See Our Impact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Your Impact
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              See how your donations make a real difference in our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in hover-lift p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <stat.icon className="h-8 w-8 sm:h-12 sm:w-12 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-elegant-heading text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-dark font-elegant-body text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              How Your Donation Helps
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Every pound you donate goes directly to supporting our community library and its programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.1s' }}>
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">New Books & Resources</h3>
              <p className="text-secondary-dark font-elegant-body leading-relaxed">
                Your donations help us purchase new books, digital resources, and educational materials 
                for all age groups in our community.
              </p>
            </Card>
            
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.2s' }}>
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">Community Programs</h3>
              <p className="text-secondary-dark font-elegant-body leading-relaxed">
                Support our reading programs, workshops, and events that bring our community together 
                and promote lifelong learning.
              </p>
            </Card>
            
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.3s' }}>
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">Library Maintenance</h3>
              <p className="text-secondary-dark font-elegant-body leading-relaxed">
                Help us maintain our beautiful library space, upgrade facilities, and ensure 
                a welcoming environment for all visitors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Choose Your Impact
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              Select a donation tier that fits your budget and see the benefits you'll receive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {donationTiers.map((tier, index) => (
              <Card 
                key={tier.name}
                className={`animate-fade-in hover-lift p-6 sm:p-8 text-center relative ${
                  tier.popular ? 'ring-2 ring-accent' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl sm:text-3xl font-elegant-heading mb-2">{tier.name}</h3>
                <div className="text-3xl sm:text-4xl font-elegant-heading text-accent mb-2">
                  £{tier.amount}
                </div>
                <p className="text-secondary-dark font-elegant-body mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-dark font-elegant-body text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => handleDonation(tier.amount)}
                >
                  Donate £{tier.amount}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation */}
      <section id="donate-now" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
                Custom Donation
              </h2>
              <p className="text-responsive-lg text-secondary-dark font-elegant-body">
                Prefer to give a different amount? Enter your custom donation below.
              </p>
            </div>
            
            <Card className="animate-fade-in p-6 sm:p-8">
              <div className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[25, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setCustomAmount(amount.toString())}
                        className={`p-3 border rounded-lg font-medium transition-colors ${
                          customAmount === amount.toString()
                            ? 'border-accent bg-accent text-white'
                            : 'border-gray-300 hover:border-accent'
                        }`}
                      >
                        £{amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    min="1"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    {donationMethods.map((method) => (
                      <label key={method.name} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.name}
                          checked={selectedMethod === method.name}
                          onChange={(e) => setSelectedMethod(e.target.value)}
                          className="text-accent focus:ring-accent"
                        />
                        <div className="flex items-center space-x-3">
                          <method.icon className="h-5 w-5 text-accent" />
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-sm text-secondary-dark">{method.description}</div>
                          </div>
                          {method.popular && (
                            <span className="bg-accent text-white px-2 py-1 rounded text-xs">
                              Popular
                            </span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <Button 
                  variant="secondary" 
                  className="w-full py-4 text-lg"
                  onClick={() => {
                    const amount = parseInt(customAmount)
                    if (amount > 0) {
                      handleDonation(amount)
                    } else {
                      alert('Please enter a valid donation amount')
                    }
                  }}
                >
                  Donate £{customAmount || '0'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-responsive-3xl md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Other Ways to Support
            </h2>
            <p className="text-responsive-lg text-secondary-dark max-w-3xl mx-auto font-elegant-body">
              There are many ways you can help our library thrive beyond financial donations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.1s' }}>
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">Volunteer</h3>
              <p className="text-secondary-dark font-elegant-body mb-6">
                Give your time and skills to help us maintain and improve our library services.
              </p>
              <Button variant="outline" asChild>
                <Link href="/volunteer">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
            
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.2s' }}>
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">Book Donations</h3>
              <p className="text-secondary-dark font-elegant-body mb-6">
                Donate gently used books to help us expand our collection and reach more readers.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
            
            <Card className="animate-fade-in hover-lift p-6 sm:p-8 text-center" style={{ animationDelay: '0.3s' }}>
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-elegant-heading mb-3">Spread the Word</h3>
              <p className="text-secondary-dark font-elegant-body mb-6">
                Tell your friends and family about our library and encourage them to visit and support us.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding-sm bg-primary-800 text-white">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h2 className="text-responsive-3xl !text-warm md:text-responsive-4xl font-elegant-heading mb-4 sm:mb-6">
              Questions About Donating?
            </h2>
            <p className="text-responsive-lg text-gray-100 mb-8 sm:mb-10 max-w-4xl mx-auto font-elegant-body leading-relaxed">
              We'd love to hear from you! Contact us if you have any questions about donating 
              or would like to discuss other ways to support our library.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="secondary" asChild className="text-base px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/contact" className="font-elegant-body">
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary-800 font-elegant-body text-base px-6 sm:px-8 py-3 sm:py-4">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 