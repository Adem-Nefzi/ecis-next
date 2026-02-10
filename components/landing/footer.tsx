'use client'

import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold">ECIS-DZ</span>
              <span className="text-xs opacity-90">Inspections</span>
            </div>
            <p className="text-sm opacity-90">
              Professional equipment inspection services in Algeria
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Crane Inspection</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Elevator Inspection</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Pressure Vessel</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Forklift Inspection</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#why-us" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#process" className="hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Certifications</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>+213 (0) 21 123 4567</li>
              <li>info@ecis-dz.com</li>
              <li>Algiers, Algeria</li>
              <li>Available Mon-Fri 8am-5pm</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>
              &copy; {new Date().getFullYear()} ECIS-DZ. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
            <div className="flex items-center gap-1">
              <span>Built with</span>
              <Heart size={14} className="fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
