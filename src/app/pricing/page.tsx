import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Globe2, LayoutGrid, FileText, BarChart3, Users, Zap, Shield, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/pricing',
    title: 'Pricing Plans - Zorvixy Media Distribution',
    description: 'Choose the perfect pricing plan for your press release distribution needs. From basic coverage to enterprise solutions.',
    openGraphTitle: 'Pricing Plans - Zorvixy',
    openGraphDescription: 'Professional media distribution plans for every budget',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['pricing', 'press release distribution', 'media plans', 'cost'],
  })
}

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses and startups',
    price: '$299',
    period: 'per release',
    featured: false,
    features: [
      'Distribution to 5,000+ media outlets',
      'Basic analytics and reporting',
      '24-hour editorial review',
      'Standard press release format',
      'Email support',
      '7-day archive access',
    ],
    limitations: [
      'No multimedia attachments',
      'Limited geographic targeting',
      'Standard placement only',
    ],
  },
  {
    name: 'Pro',
    description: 'Ideal for growing companies and PR agencies',
    price: '$599',
    period: 'per release',
    featured: true,
    features: [
      'Distribution to 15,000+ media outlets',
      'Advanced analytics and insights',
      'Priority editorial review (2 hours)',
      'Enhanced press release format',
      'Multimedia attachments (images/videos)',
      'Geographic targeting by region',
      'Phone and email support',
      '30-day archive access',
      'Social media promotion',
    ],
    limitations: [
      'No guaranteed placement',
      'Limited industry targeting',
    ],
  },
  {
    name: 'Premium',
    description: 'Comprehensive solution for enterprises',
    price: '$1,299',
    period: 'per release',
    featured: false,
    features: [
      'Distribution to 50,000+ media outlets',
      'Real-time analytics dashboard',
      'Instant editorial review',
      'Custom press release design',
      'Unlimited multimedia attachments',
      'Advanced geographic and demographic targeting',
      'Industry-specific targeting',
      'Dedicated account manager',
      'Guaranteed premium placement',
      'Social media promotion package',
      '90-day archive access',
      'API access for integrations',
    ],
    limitations: [],
  },
]

const addOns = [
  {
    name: 'Translation Services',
    description: 'Professional translation of your press release into multiple languages',
    price: '$150',
    unit: 'per language',
    icon: Globe2,
  },
  {
    name: 'SEO Optimization',
    description: 'Enhanced SEO optimization and keyword targeting for better search visibility',
    price: '$200',
    unit: 'one-time',
    icon: LayoutGrid,
  },
  {
    name: 'Extended Distribution',
    description: 'Additional distribution to specialized industry publications',
    price: '$250',
    unit: 'per industry',
    icon: FileText,
  },
  {
    name: 'Analytics Pro',
    description: 'Advanced analytics with sentiment analysis and competitor insights',
    price: '$100',
    unit: 'per month',
    icon: BarChart3,
  },
]

const faqs = [
  {
    question: 'What is included in the distribution network?',
    answer: 'Our distribution network includes major news outlets, industry publications, journalists, bloggers, and influencers across various platforms and regions.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply to future press releases.',
  },
  {
    question: 'Do you offer discounts for multiple releases?',
    answer: 'Yes, we offer volume discounts for 5+ releases per month. Contact our sales team for custom pricing.',
  },
  {
    question: 'What is the editorial review process?',
    answer: 'Our editorial team reviews your press release for quality, formatting, and compliance. Basic plans get 24-hour review, while premium plans offer instant approval.',
  },
  {
    question: 'Can I track the performance of my press release?',
    answer: 'All plans include basic analytics. Pro and Premium plans offer advanced tracking with detailed insights on reach, engagement, and media pickups.',
  },
  {
    question: 'Do you provide refunds?',
    answer: 'We offer a 14-day money-back guarantee if you\'re not satisfied with our service, subject to our terms and conditions.',
  },
]

export default function PricingPage() {
  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Pricing Plans
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-white/90">
              Choose the perfect plan for your press release distribution needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-primary">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-muted">Limitations:</h4>
                      <ul className="mt-3 space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="text-sm text-muted flex items-start gap-2">
                            <span className="text-accent">×</span>
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="mt-8">
                  <Link
                    href="/create/media-distribution"
                    className={`w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all ${
                      plan.featured
                        ? 'btn-primary'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Add-ons & Extras</h2>
            <p className="mt-4 text-lg text-muted">Enhance your press release distribution with these additional services</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addOns.map((addOn, index) => {
              const Icon = addOn.icon
              return (
                <div key={index} className="press-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{addOn.name}</h3>
                  <p className="text-sm text-muted mb-4">{addOn.description}</p>
                  <div className="text-lg font-bold text-primary">{addOn.price}</div>
                  <div className="text-sm text-muted">{addOn.unit}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Feature Comparison</h2>
            <p className="mt-4 text-lg text-muted">Compare all plans side by side</p>
          </div>
          
          <div className="press-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Basic</th>
                    <th className="text-center p-4 font-semibold">Pro</th>
                    <th className="text-center p-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Media Outlets</td>
                    <td className="text-center p-4">5,000+</td>
                    <td className="text-center p-4">15,000+</td>
                    <td className="text-center p-4">50,000+</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Analytics</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4">Advanced</td>
                    <td className="text-center p-4">Real-time</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Editorial Review</td>
                    <td className="text-center p-4">24 hours</td>
                    <td className="text-center p-4">2 hours</td>
                    <td className="text-center p-4">Instant</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Multimedia</td>
                    <td className="text-center p-4">-</td>
                    <td className="text-center p-4">✓</td>
                    <td className="text-center p-4">✓ Unlimited</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Targeting</td>
                    <td className="text-center p-4">Basic</td>
                    <td className="text-center p-4">Geographic</td>
                    <td className="text-center p-4">Advanced</td>
                  </tr>
                  <tr className="border-b border-primary/10">
                    <td className="p-4">Support</td>
                    <td className="text-center p-4">Email</td>
                    <td className="text-center p-4">Phone + Email</td>
                    <td className="text-center p-4">Dedicated Manager</td>
                  </tr>
                  <tr>
                    <td className="p-4">Archive Access</td>
                    <td className="text-center p-4">7 days</td>
                    <td className="text-center p-4">30 days</td>
                    <td className="text-center p-4">90 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted">Common questions about our pricing and services</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="press-card">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-muted">
            Join thousands of companies using Zorvixy for professional media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/create/media-distribution"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base font-semibold"
            >
              Submit Your First Release
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
