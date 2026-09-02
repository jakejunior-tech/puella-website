"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EquipmentCard from "@/components/EquipmentCard";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/icons";
import {
  equipmentCategories,
  getAllEquipment,
} from "@/data/site-data";

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const equipment = getAllEquipment();

  const filtered =
    activeCategory === "all"
      ? equipment
      : equipment.filter((eq) => eq.category === activeCategory);

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary text-white py-20">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                Equipment Catalogue
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Equipment
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Browse our range of heavy-duty equipment available for leasing.
                Contact us for availability, specifications and pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-page">
            <SectionHeading
              align="center"
              eyebrow="Browse by Category"
              title="Find The Right Machine"
              description="Select a category to filter the equipment catalogue."
            />

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Equipment
              </button>
              {equipmentCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon name={cat.icon as never} className="h-4 w-4" />
                  {cat.name}
                </button>
              ))}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((eq) => (
                  <EquipmentCard key={eq.id} equipment={eq} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">
                  No equipment listed in this category yet.
                </p>
                <p className="text-sm text-gray-400">
                  Contact us for equipment availability.
                </p>
              </div>
            )}

            <div className="mt-12 rounded-2xl bg-secondary text-white p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Can&apos;t Find What You&apos;re Looking For?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                We have a wide range of equipment available. Tell us what you
                need and we&apos;ll check availability for you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}