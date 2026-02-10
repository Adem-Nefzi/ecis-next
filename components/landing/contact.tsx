"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";

const API_URL = "http://localhost:8069";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    equipment_type: "",
    equipment_count: 1,
    message: "",
    location: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/api/quote-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setReferenceNumber(result.data.reference);

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company_name: "",
            equipment_type: "",
            equipment_count: 1,
            message: "",
            location: "",
          });
          setStatus("idle");
          setReferenceNumber("");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit request");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to schedule an inspection? Contact us today and our team
                will be in touch within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+213 (0) 21 123 4567</p>
                  <p className="text-muted-foreground">Mon - Fri: 8am - 5pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@ecis-dz.com</p>
                  <p className="text-muted-foreground">support@ecis-dz.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Algiers, Algeria</p>
                  <p className="text-muted-foreground">
                    Serving all regions across Algeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-800 font-medium">
                      Request submitted successfully!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Reference: {referenceNumber}
                    </p>
                    <p className="text-green-600 text-sm">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+213 ..."
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Equipment Type *
                </label>
                <select
                  name="equipment_type"
                  value={formData.equipment_type}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  <option value="">Select equipment type</option>
                  <option value="crane">Crane</option>
                  <option value="elevator">Elevator</option>
                  <option value="pressure_vessel">Pressure Vessel</option>
                  <option value="forklift">Forklift</option>
                  <option value="overhead_crane">Overhead Crane</option>
                  <option value="lifting_platform">Lifting Platform</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Equipment
                </label>
                <Input
                  type="number"
                  name="equipment_count"
                  value={formData.equipment_count}
                  onChange={handleChange}
                  min="1"
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Where is the equipment located?"
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inspection needs..."
                  rows={4}
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-6"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Inspection"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll respond within 24 hours
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
