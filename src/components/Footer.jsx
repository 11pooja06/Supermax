
import { Link } from "react-router-dom";

import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// Import product data from existing Products.jsx
import { products } from "./Products";

// QUICK LINKS
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "WhyChooseUs", path: "/why-choose-us" },
  { name: "Contact Us", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#062b68] text-white">

      {/* ============ FOUR COLUMN FOOTER ============ */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* COLUMN 1 - COMPANY INFORMATION */}
        <div>

          {/* SUPER MAX LOGO */}
          <Link
            to="/"
            className="text-3xl font-black italic tracking-tight"
          >
            <span className="text-white">Super</span>
            <span className="text-[#ff2634]">Max</span>
          </Link>

          <p className="mt-5 text-sm leading-8 text-blue-100">
            Super Max offers a range of cleaning products
            for homes, offices, and workplaces.
            Explore our products for your everyday
            cleaning requirements.
          </p>

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
                  className="flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
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
                  className="flex items-center gap-2 text-sm text-blue-100 transition hover:text-white"
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

              <p className="text-sm leading-7 text-blue-100">
                Your Business Address,
                City, State, PIN Code
              </p>

            </div>

            {/* PHONE */}
            <div className="flex items-start gap-3">

              <Phone
                size={21}
                className="shrink-0 text-[#ff303d]"
              />

              <p className="text-sm text-blue-100">
                +91 XXXXXXXXXX
              </p>

            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3">

              <Mail
                size={21}
                className="shrink-0 text-[#ff303d]"
              />

              <p className="break-all text-sm text-blue-100">
                yourbusiness@gmail.com
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ============ COPYRIGHT SECTION ============ */}
      <div className="border-t-4 border-[#e50914] bg-[#052456] px-5 py-6">

        <p className="text-center text-sm text-blue-100">
          © {new Date().getFullYear()} Super Max.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
