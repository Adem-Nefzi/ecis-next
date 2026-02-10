'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

interface HeroProps {
  onBookClick: () => void
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-background py-16 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full -ml-36 -mb-36" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border">
            <CheckCircle size={16} className="text-primary" />
            <span className="text-sm font-medium text-foreground">ISO 9001 Certified</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Professional Equipment Inspections You Can Trust
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Expert inspections for cranes, elevators, pressure vessels, and forklifts. 15+ years of industry experience with electronic reports and full regulatory compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={onBookClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
            >
              Book Inspection Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-2 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 grid grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Equipment Inspected</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
              <p className="text-sm text-muted-foreground">Compliance Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
