import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import EquipmentFinder from "@/components/EquipmentFinder";
import EquipmentCard from "@/components/EquipmentCard";
import { Badge } from "@/components/ui/badge";
import {
  equipmentCategories,
  featuredEquipment,
  services,
  whyChooseItems,
} from "@/data/site-data";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-secondary text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-secondary/80 to-secondary" />
          <div className="absolute inset-0 hero-pattern opacity-50" />
          <div className="relative container-page py-24 md:py-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                Equipment Leasing & Industrial Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Powering Projects With Reliable{" "}
                <span className="gradient-text">Equipment</span> &amp;
                Industrial Solutions
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Equipment leasing, heavy-duty machinery, haulage, marine
                services and project support across Nigeria.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/equipment"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Explore Equipment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/30 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg inline-flex items-center justify-center transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
                <div>
                  <p className="text-2xl font-bold">8+</p>
                  <p className="text-sm text-gray-400">Service Categories</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-sm text-gray-400">Equipment Types</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">Nationwide</p>
                  <p className="text-sm text-gray-400">Coverage</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                * Figures to be confirmed by PUELLA
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding -mt-0 bg-gray-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="What We Offer"
              title="8+ Service Categories"
              description="From equipment leasing to marine services and haulage, we support projects across multiple sectors."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {equipmentCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href="/equipment"
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={cat.icon as never} className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-500">{cat.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Featured Equipment"
              title="Equipment Ready For Your Next Project"
              description="Browse a selection of our available equipment. Details to be confirmed directly with PUELLA."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEquipment.slice(0, 3).map((eq) => (
                <EquipmentCard key={eq.id} equipment={eq} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/equipment"
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors"
              >
                View Full Equipment Catalogue <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Projects"
              title="Our Work"
              description="A selection of projects supported with equipment and industrial services. Project details to be supplied by PUELLA."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="rounded-xl border border-gray-100 overflow-hidden bg-gray-50"
                >
                  <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Project photo to be supplied
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      Project 0{n}
                    </span>
                    <h3 className="font-bold mt-1">
                      Project Name To Be Confirmed
                    </h3>
                    <dl className="mt-3 space-y-1.5 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Location</dt>
                        <dd>Port Harcourt</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Service</dt>
                        <dd>Equipment Leasing</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Equipment</dt>
                        <dd>Excavator / Bulldozer</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Status</dt>
                        <dd className="text-green-600 font-medium">
                          Details to be supplied
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              Project gallery coming soon — details to be confirmed with PUELLA.
            </p>
          </div>
        </section>

        <section className="section-padding bg-secondary text-white">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                  Find the Right Equipment
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Not Sure What You Need? We&apos;ll Help.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Tell us what you&apos;re working on and we&apos;ll recommend
                  the right equipment and services for your project.
                </p>
                <div className="space-y-4 max-w-md">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Simple 3-step process</h4>
                      <p className="text-sm text-gray-400">
                        Select your project type, tell us the task, and get
                        recommendations instantly.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">No technical knowledge needed</h4>
                      <p className="text-sm text-gray-400">
                        We translate your project needs into the right equipment
                        recommendations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <EquipmentFinder />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="Services Overview"
              title="Comprehensive Industrial Support"
              description="Our services cover the full spectrum of equipment and industrial needs."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href="/services"
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-primary group-hover:text-white/40 font-mono">
                      {service.number}
                    </span>
                    <div className="group-hover:text-white">
                      <h4 className="font-semibold mb-2">{service.title}</h4>
                      <p className="text-sm text-gray-500 group-hover:text-white/80">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
              >
                View All Services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="Why Choose PUELLA"
              title="Your Partner in Project Success"
              description="We combine reliable equipment, trained personnel and flexible terms to support demanding projects."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-100 p-6"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon name={item.icon as never} className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-white">
          <div className="container-page text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Equipment For Your Next Project?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Tell us what you need and our team will get back to you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}