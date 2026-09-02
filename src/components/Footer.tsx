import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { companyName, contactInfo } from "@/data/site-data";

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
            © {new Date().getFullYear()} {companyName} Equipment Services. All rights reserved.
          </p>
          <p>Demo website — details subject to confirmation.</p>
        </div>
      </div>
    </footer>
  );
}