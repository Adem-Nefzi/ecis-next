'use client'

import { Card } from '@/components/ui/card'
import { Award, FileText, CheckCircle, Shield, Zap, Users } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'ISO 9001 certified for quality management and customer satisfaction',
  },
  {
    icon: Users,
    title: '15+ Years Experience',
    description: 'Proven track record of reliable and thorough inspections',
  },
  {
    icon: FileText,
    title: 'Electronic Reports',
    description: 'Instant digital reports with detailed findings and recommendations',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Full compliance with local and international safety standards',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast scheduling and same-day report delivery available',
  },
  {
    icon: CheckCircle,
    title: 'Expert Team',
    description: 'Highly trained engineers with extensive equipment expertise',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose ECIS-DZ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The trusted choice for equipment inspections across Algeria
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-6 border border-border bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4 p-2 bg-primary/10 rounded-lg w-fit">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
