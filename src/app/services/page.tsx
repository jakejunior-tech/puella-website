import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/site-data";

const additionalServices = [
  "Equipment maintenance and servicing",
  "Trained equipment operators",
  "Flexible short- and long-term leasing",
  "Project-specific loading and delivery",
  "On-site equipment support",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary text-white py-20">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Comprehensive Industrial Support
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                From equipment leasing to marine services, haulage and
                industrial support, we cover the full spectrum of requirements
                for project operations.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-page">
            <SectionHeading
              align="left"
              eyebrow="Service Categories"
              title="What We Do"
              description="Seven core service categories supporting construction, energy, marine and industrial operations across Nigeria."
            />

            <div className="space-y-5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group border border-gray-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex md:flex-col gap-4 md:gap-0 md:justify-between md:items-start">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as never} className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-bold text-gray-200 font-mono hidden md:block">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl">
                      {service.description}
                    </p>
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title
                      )}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark"
                    >
                      Request This Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="Beyond Leasing"
              title="Additional Support Services"
              description="We provide more than just equipment — we support your project end to end."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {additionalServices.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-white">
          <div className="container-page text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need A Custom Solution?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Describe your project requirements and our team will recommend the
              right equipment and services for you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}