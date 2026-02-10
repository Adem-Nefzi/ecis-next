'use client'

import { useState, useRef } from 'react'
import { Navigation } from '@/components/landing/navigation'
import { Hero } from '@/components/landing/hero'
import { Services } from '@/components/landing/services'
import { WhyChooseUs } from '@/components/landing/why-choose-us'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Social } from '@/components/landing/social'
import { Contact } from '@/components/landing/contact'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={scrollToContact} />
      <Hero onBookClick={scrollToContact} />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Social />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
