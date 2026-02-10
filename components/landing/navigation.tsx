'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  onContactClick: () => void
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-border' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">ECIS-DZ</span>
              <span className="text-xs text-muted-foreground">Inspections</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <Button
              onClick={onContactClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <a href="#services" className="block text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="block text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#process" className="block text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <Button
              onClick={() => {
                onContactClick()
                setIsOpen(false)
              }}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Inspection
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
