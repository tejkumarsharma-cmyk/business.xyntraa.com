'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Building2, Send, HelpCircle, FileText, Users, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telephone Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM EST', 'Saturday: 10:00 AM - 4:00 PM EST', 'Sunday: Closed']
    },
    {
      icon: Phone,
      title: 'Toll-Free Number',
      details: ['1-800-ZORVIXY', '1-800-967-8499']
    },
    {
      icon: MapPin,
      title: 'US Address',
      details: ['Zorvixy Media Distribution', '1234 Press Release Avenue', 'New York, NY 10001', 'United States']
    },
    {
      icon: MapPin,
      title: 'Canada Address',
      details: ['Zorvixy Canada', '567 Media Way', 'Toronto, ON M5V 2T6', 'Canada']
    }
  ]

  const faqItems = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond to all inquiries within 24 business hours.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes, phone support is available during business hours Monday through Saturday.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! Use the contact form to request a personalized demo of our platform.'
    }
  ]

  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-white/90">
              Get in touch with our team for press release distribution and media services
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Contact Form */}
          <div className="press-card p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2">
                    Organization Type
                  </label>
                  <select
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select organization type</option>
                    <option value="startup">Startup</option>
                    <option value="small-business">Small Business</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="pr-agency">PR Agency</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <div className="press-card p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted">{detail}</p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Services */}
            <div className="press-card p-8">
              <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Press Release Distribution</h3>
                    <p className="text-sm text-muted mt-1">Get your news distributed to thousands of media outlets worldwide</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Account Support</h3>
                    <p className="text-sm text-muted mt-1">Help with account setup, billing, and platform features</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Partnership Opportunities</h3>
                    <p className="text-sm text-muted mt-1">Explore partnership and integration possibilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="press-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="h-6 w-6" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-primary/10 pb-4 last:border-0">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                >
                  View all FAQs
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
