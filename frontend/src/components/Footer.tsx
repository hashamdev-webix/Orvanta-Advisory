import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-10 lg:py-12 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src="/logo.png"
                alt="Orvanta Advisory Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 text-[15px] leading-relaxed mb-4">
              Your trusted partner for study, work, and tourist visa
              applications worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[15px] text-primary-foreground/80">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Countries", to: "/countries" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Services
            </h4>
            <ul className="space-y-2 text-[15px] text-primary-foreground/80">
              <li>
                <Link
                  to="/services#study-visa"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Study Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/services#work-visa"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Work Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/services#immigrant-visa"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Immigrant Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/services#additional-services"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Business Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/services#additional-services"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Financial Advisors
                </Link>
              </li>
              <li>
                <Link
                  to="/services#additional-services"
                  className="hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Document Translation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-lg">
              Contact Us
            </h4>
            <ul className="space-y-3 text-[15px] text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200"
                />
                <span className="leading-relaxed hover:text-accent transition-colors cursor-pointer">
                  Registered Address: Unit 1603, 16/F The L. Plaza, 367-375
                  Queen's Road Central, Sheung Wan, Hong Kong
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-white hover:text-accent hover:translate-x-1 transition-all duration-200"
                />
                <div className="space-y-1">
                  <a
                    href="mailto:info@orvantaadvisory.com"
                    className="block hover:text-accent transition-colors cursor-pointer"
                  >
                    info@orvantaadvisory.com
                  </a>
                  <a
                    href="mailto:manage.orvanta@gmail.com"
                    className="block hover:text-accent transition-colors cursor-pointer"
                  >
                    manage.orvanta@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 lg:mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[15px] text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Orvanta Advisory. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
