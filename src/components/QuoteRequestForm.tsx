"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { projectTypes } from "@/data/site-data";

const inputClass =
  "flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50";

export default function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("equipment") || "";
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold mb-2">Request Received</h3>
        <p className="text-gray-600">
          Thank you. Your request has been received. A PUELLA representative
          will contact you to discuss availability and pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Company name (optional)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="equipment">Equipment or Service Required</Label>
          <Input
            id="equipment"
            name="equipment"
            placeholder="e.g. Excavator, crane, haulage"
            value={selectedEquipment}
            onChange={(e) => setSelectedEquipment(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <select id="projectType" name="projectType" className={inputClass}>
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="location">Project Location</Label>
          <Input
            id="location"
            name="location"
            placeholder="City / State"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Rental Duration</Label>
          <select id="duration" name="duration" className={inputClass}>
            <option value="">Select duration</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">3+ months</option>
            <option value="annual">Long-term / Annual</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Expected Start Date</Label>
        <Input id="startDate" name="startDate" type="date" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Requirements</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your project needs (optional)"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Request
      </Button>
    </form>
  );
}