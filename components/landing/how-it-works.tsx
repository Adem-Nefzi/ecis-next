'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, Phone, CheckCircle2, FileCheck } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: 1,
    title: 'Request Inspection',
    description: 'Contact us with equipment details and preferred inspection date. Our team will confirm availability and provide a quote.',
  },
  {
    icon: CheckCircle2,
    number: 2,
    title: 'On-Site Inspection',
    description: 'Our certified engineers perform comprehensive inspections using latest equipment and testing methodologies.',
  },
  {
    icon: FileCheck,
    number: 3,
    title: 'Receive Report',
    description: 'Detailed electronic report delivered with findings, recommendations, and certification within 24 hours.',
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process for professional equipment inspections
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Arrow connector - hidden on mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/4 -right-4 transform translate-x-1/2">
                      <ArrowRight size={32} className="text-primary/30" />
                    </div>
                  )}

                  <Card className="p-8 border-2 border-border hover:border-primary transition-colors h-full">
                    {/* Step number */}
                    <div className="mb-6 inline-block">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 p-3 bg-secondary rounded-lg w-fit">
                      <Icon size={24} className="text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
