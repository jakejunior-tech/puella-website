"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navigation, companyName, contactInfo } from "@/data/site-data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur">
      <div className="bg-secondary text-white text-xs py-2">
        <div className="container-page flex items-center justify-between">
          <p className="hidden sm:block">
            {contactInfo.address}
          </p>
          <div className="flex w-full sm:w-auto items-center gap-4 sm:gap-6 justify-end">
            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary flex items-center gap-1.5">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg tracking-tight">{companyName}</span>
            <span className="block text-[10px] uppercase tracking-widest text-gray-500">
              Equipment Services
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base py-2 text-gray-800 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}