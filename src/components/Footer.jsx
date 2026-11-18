
import { Link } from "react-router-dom";

import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

// Import product data from Products.jsx
import { products } from "./Products";

// QUICK LINKS
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Contact Us", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#062b68] text-white">

      {/* FOUR COLUMN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* COLUMN 1 - COMPANY INFORMATION */}
        <div>

          {/* SUPER MAX LOGO */}
          <Link
            to="/"
            className="inline-block text-3xl font-black italic tracking-tight"
          >
            <span className="text-white">Super</span>
            <span className="text-[#ff2634]">Max</span>
          </Link>

          <p className="mt-5 text-sm leading-8 text-blue-100">
            Super Max by Rathaaliya Industry offers a
            range of cleaning products for homes,
            offices, and workplaces.
            Explore our products for your everyday
            cleaning requirements.
          </p>

          <h4 className="mt-6 text-base font-bold text-white">
            Rathaaliya Industry
          </h4>

          <p className="mt-2 text-sm leading-7 text-blue-100">
            Cleaning Solutions for Everyday Life
          </p>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/918440840098"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1da851]"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>

        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        <div>

          <h3 className="text-xl font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-3 h-1 w-14 bg-[#e50914]" />

          <ul className="mt-6 space-y-4">

            {quickLinks.map((link) => (
              <li key={link.path}>

                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-blue-100 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#ff303d]"
                  />

                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* COLUMN 3 - OUR PRODUCTS */}
        <div>

          <h3 className="text-xl font-bold text-white">
            Our Products
          </h3>

          <div className="mt-3 h-1 w-14 bg-[#e50914]" />

          <ul className="mt-6 space-y-4">

            {products.map((product) => (
              <li key={product.id}>

                <Link
                  to="/contact"
                  state={{ productName: product.name }}
                  className="flex items-center gap-2 text-sm text-blue-100 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  <ArrowRight
                    size={16}
                    className="shrink-0 text-[#ff303d]"
                  />

                  {product.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* COLUMN 4 - CONTACT DETAILS */}
        <div>

          <h3 className="text-xl font-bold text-white">
            Contact Us
          </h3>

          <div className="mt-3 h-1 w-14 bg-[#e50914]" />

          <div className="mt-6 space-y-6">

            {/* ADDRESS */}
            <div className="flex items-start gap-3">

              <MapPin
                size={21}
                className="mt-1 shrink-0 text-[#ff303d]"
              />

              <div>
                <p className="mb-1 text-sm font-bold text-white">
                  Our Address
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No+15+Ram+Nagar+Scheme+Banyawala+Charanwala+Sanganer+Jaipur+Rajasthan+303904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-7 text-blue-100 transition hover:text-white"
                >
                  Rathaaliya Industry
                  <br />
                  Ram Nagar Scheme, Plot No. 15,
                  <br />
                  Banyawala, Charanwala,
                  <br />
                  Sanganer, Jaipur,
                  <br />
                  Rajasthan - 303904, India
                </a>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">

              <Phone
                size={21}
                className="shrink-0 text-[#ff303d]"
              />

              <div>
                <p className="mb-1 text-sm font-bold text-white">
                  Phone Number
                </p>

                <a
                  href="tel:+918440840098"
                  className="text-sm text-blue-100 transition hover:text-white"
                >
                  +91 8440840098
                </a>
              </div>

            </div>

            {/* EMAILS */}
            <div className="flex items-start gap-3">

              <Mail
                size={21}
                className="shrink-0 text-[#ff303d]"
              />

              <div className="min-w-0">

                <p className="mb-2 text-sm font-bold text-white">
                  Email Us
                </p>

                <a
                  href="mailto:kirti.sharma@supermax.co.in"
                  className="block break-all text-sm leading-7 text-blue-100 transition hover:text-white"
                >
                  kirti.sharma@supermax.co.in
                </a>

                <a
                  href="mailto:amit.rathaaliya@supermax.co.in"
                  className="mt-2 block break-all text-sm leading-7 text-blue-100 transition hover:text-white"
                >
                  amit.rathaaliya@supermax.co.in
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="border-t-4 border-[#e50914] bg-[#052456] px-5 py-6">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">

          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} Super Max.
            All Rights Reserved.
          </p>

          <p className="text-sm text-blue-100">
            A Brand by{" "}
            <span className="font-semibold text-white">
              Rathaaliya Industry
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
