import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import EquipmentFinder from "@/components/EquipmentFinder";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/site-data";

export const metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a quote for equipment leasing, marine services, haulage and industrial solutions. Our team will get back to you.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary text-white py-20">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Request a Quote
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tell us what you need and our team will get back to you to
                discuss availability and pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium group-hover:text-primary">
                          {contactInfo.phone}
                        </p>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div className="h-10 w-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">WhatsApp</p>
                        <p className="font-medium group-hover:text-primary">
                          Chat on WhatsApp
                        </p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium group-hover:text-primary break-all">
                          {contactInfo.email}
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-xl border border-gray-100 p-6 md:p-8">
                  <h3 className="font-bold text-xl mb-1">
                    Request a Quote
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill in the form and we&apos;ll be in touch shortly.
                  </p>
                  <QuoteRequestForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50 pt-0">
          <div className="container-page">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
              <SectionHeading
                eyebrow="Need help choosing?"
                title="Find the Right Equipment"
                description="Not sure which equipment you need? Use our guided tool to get recommendations."
              />
              <EquipmentFinder />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}