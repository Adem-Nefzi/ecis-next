'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Belqaid',
    company: 'Industrial Safety Corp',
    text: 'ECIS-DZ provided the most thorough crane inspection we have ever had. Their team was professional and efficient.',
    rating: 5,
  },
  {
    name: 'Fatima Hassan',
    company: 'Building Management Services',
    text: 'Excellent elevator inspection services. The detailed reports helped us understand our maintenance needs better.',
    rating: 5,
  },
  {
    name: 'Karim Djamel',
    company: 'Manufacturing Solutions Ltd',
    text: 'Reliable partner for pressure vessel inspections. Fast turnaround and comprehensive documentation.',
    rating: 5,
  },
]

export function Social() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about our inspection services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-border bg-white">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8">
            Certified and Accredited By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-sm font-semibold text-foreground mb-1">ISO 9001</div>
              <p className="text-xs text-muted-foreground">Quality Certified</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-foreground mb-1">NDTR</div>
              <p className="text-xs text-muted-foreground">Non-Destructive Testing</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-foreground mb-1">IMARA</div>
              <p className="text-xs text-muted-foreground">Accredited Member</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-foreground mb-1">ALGERIAN</div>
              <p className="text-xs text-muted-foreground">Government Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
