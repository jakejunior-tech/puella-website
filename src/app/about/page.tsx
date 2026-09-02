import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { whyChooseItems } from "@/data/site-data";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary text-white py-20">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                About PUELLA
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Partner in Project Success
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Reliable equipment and industrial support for demanding projects
                across Nigeria.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Who We Are"
                title="More Than An Equipment Provider"
                description="We support construction, marine, energy and industrial projects with the equipment, logistics and expertise they need to succeed."
              />
              <div className="space-y-5 -mt-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Equipment Availability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We maintain a wide range of heavy-duty equipment covering
                    construction, earthmoving, lifting, marine and industrial
                    applications. Availability to be confirmed directly with the
                    company for current site requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Maintenance Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our approach emphasizes proper maintenance and servicing of
                    equipment to ensure reliable operation on demanding project
                    sites.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Trained Operators
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experienced operators are available to run equipment safely
                    and efficiently, reducing risk on your project site.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Flexible Rental Arrangements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Short- and long-term leasing options designed around your
                    project timeline and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 lg:sticky lg:top-24">
              <h3 className="font-bold text-xl mb-6">
                Our Mission &amp; Approach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our goal is simple: to provide dependable, cost-effective
                equipment and industrial solutions that help your project stay
                on schedule and within budget. We understand that every project
                is different, so we tailor our solutions around your specific
                requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">
                    Project-focused, not just equipment-focused
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">
                    Cost-effective solutions tailored to your needs
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700">
                    Supported by maintenance and trained operators
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-400">
                Company registration and certification details to be confirmed
                directly with PUELLA Equipment Services.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="Why Choose PUELLA"
              title="What Sets Us Apart"
              description="The combination of reliability, expertise and flexibility."
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
              Let&apos;s Work Together
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Ready to discuss your project requirements?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact Us <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}