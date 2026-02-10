'use client'

import { Card } from '@/components/ui/card'
import { Wind, Zap, Gauge, Boxes } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'Crane Inspection',
    description: 'Comprehensive safety inspections for all crane types including overhead, gantry, and mobile cranes with load testing.',
  },
  {
    icon: Zap,
    title: 'Elevator Inspection',
    description: 'Regular maintenance and safety inspections for passenger and freight elevators ensuring compliance with local standards.',
  },
  {
    icon: Gauge,
    title: 'Pressure Vessel Inspection',
    description: 'Non-destructive testing and inspection of pressure vessels, boilers, and tanks to ensure safe operation.',
  },
  {
    icon: Boxes,
    title: 'Forklift Inspection',
    description: 'Safety and maintenance checks for industrial forklifts and material handling equipment.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Inspection Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive equipment inspection solutions tailored to your industrial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-secondary rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
