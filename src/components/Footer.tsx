import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Headset, Wrench } from "lucide-react";
import { companyName, contactInfo } from "@/data/site-data";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Equipment Maintenance",
    description: "Maintenance standards and certifications to be confirmed.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Responsive support throughout your project.",
  },
  {
    icon: Wrench,
    title: "Expert Maintenance",
    description: "Serviced machinery ready for demanding work.",
  },
];

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Equipment", href: "/equipment" },
    { name: "Contact", href: "/contact" },
  ],
  equipment: [
    { name: "Excavators", href: "/equipment" },
    { name: "Cranes", href: "/equipment" },
    { name: "Bulldozers", href: "/equipment" },
    { name: "Forklifts", href: "/equipment" },
  ],
  services: [
    { name: "Equipment Leasing", href: "/services" },
    { name: "Marine Services", href: "/services" },
    { name: "Haulage & Logistics", href: "/services" },
    { name: "Operator Training", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container-page section-padding pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <cap.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">{cap.title}</h4>
                <p className="text-sm text-gray-400">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="font-bold text-lg text-white">{companyName}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Reliable equipment and industrial solutions for construction,
              energy and infrastructure projects across Nigeria.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Equipment</h3>
            <ul className="space-y-2.5">
              {footerLinks.equipment.map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-primary break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                  className="text-gray-400 hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {companyName} Equipment Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/equipment" className="hover:text-primary transition-colors">Equipment</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}