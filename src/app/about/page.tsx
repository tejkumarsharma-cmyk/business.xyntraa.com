import Link from "next/link";
import { ArrowRight, Globe2, Users, FileText, TrendingUp, Award, Target, Zap, Shield } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";

const stats = [
  { label: "Press Releases Distributed", value: "50,000+", icon: FileText },
  { label: "Media Outlets Reached", value: "15,000+", icon: Globe2 },
  { label: "Companies Served", value: "12,000+", icon: Users },
  { label: "Global Reach", value: "150+ Countries", icon: Target },
];

const values = [
  { 
    title: "Speed & Accuracy", 
    description: "Rapid distribution with precision targeting ensures your news reaches the right audience at the right time.",
    icon: Zap
  },
  { 
    title: "Global Network", 
    description: "Our extensive media network spans continents, connecting your stories with audiences worldwide.",
    icon: Globe2
  },
  { 
    title: "Measurable Results", 
    description: "Advanced analytics provide clear insights into your press release performance and media impact.",
    icon: TrendingUp
  },
  { 
    title: "Trusted Platform", 
    description: "Built on reliability and security, we ensure your news is distributed professionally and safely.",
    icon: Shield
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former journalist and PR executive with 15+ years in media distribution.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "Head of Partnerships",
    bio: "Expert in building global media relationships and strategic alliances.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    bio: "Tech innovator specializing in AI-powered media targeting and analytics.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "David Kim",
    role: "Head of Sales",
    bio: "Helping companies of all sizes maximize their media reach and impact.",
    image: "/placeholder.svg?height=100&width=100"
  }
];

export default function AboutPage() {
  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              About Zorvixy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-white/90">
              Empowering businesses to share their stories with the world through innovative media distribution
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="zorvixy-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Revolutionizing Media Distribution
            </h2>
            <p className="mt-4 text-lg text-muted">
              Founded in 2020, Zorvixy emerged from a simple observation: press release distribution was broken.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg leading-relaxed text-muted">
              Traditional media distribution was slow, inefficient, and lacked measurable results. 
              Our founders, a team of journalists, PR professionals, and technologists, came together 
              to build a solution that would transform how companies share their news with the world.
            </p>
            <p className="text-lg leading-relaxed text-muted mt-4">
              Today, Zorvixy stands as the leading platform for intelligent press release distribution, 
              serving thousands of companies from startups to Fortune 500 corporations across 150+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="press-card text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="press-card p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-muted leading-relaxed">
            To democratize media distribution by providing every organization, regardless of size, 
            with the tools and reach to share their stories with the world.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted">
              The experts behind Zorvixy's success
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="press-card p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Share Your Story?</h2>
          <p className="mt-4 text-lg text-muted">
            Join thousands of companies using Zorvixy for professional media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/create/media-distribution"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
