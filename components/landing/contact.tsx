"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const API_URL = ""; // Change this to your actual API URL in production

interface FormData {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  equipment_type: string;
  serial_number: string;
  equipment_count: number;
  message: string;
  location: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    equipment_type: "",
    serial_number: "",
    equipment_count: 1,
    message: "",
    location: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setReferenceNumber("");

    try {
      console.log("Submitting to:", `${API_URL}/api/quote-request`);
      console.log("Form data:", formData);

      const response = await fetch(`${API_URL}/api/quote-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      // Get response text first
      const responseText = await response.text();
      console.log("Response text:", responseText);

      // Try to parse JSON
      let result;
      try {
        const json = JSON.parse(responseText);
        // Handle Odoo's wrapped response
        result = json.result || json;
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        throw new Error("Invalid response from server");
      }

      console.log("Parsed result:", result);

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
            serial_number: "",
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
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again.",
      );
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
              {/* Success Message */}
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle
                    className="text-green-600 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="text-green-800 font-medium">
                      Request submitted successfully!
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Reference: <strong>{referenceNumber}</strong>
                    </p>
                    <p className="text-green-600 text-sm">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle
                    className="text-red-600 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="ABC Industrial (optional)"
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+213 555 123 456"
                  required
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Equipment Type */}
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

              {/* Serial Number - NEW FIELD */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Serial Number
                </label>
                <Input
                  type="text"
                  name="serial_number"
                  value={formData.serial_number}
                  onChange={handleChange}
                  placeholder="Equipment serial number (if known)"
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Number of Equipment */}
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

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Algiers, Constantine, Oran, etc."
                  disabled={status === "loading"}
                  className="w-full"
                />
              </div>

              {/* Message */}
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

              {/* Submit Button */}
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
