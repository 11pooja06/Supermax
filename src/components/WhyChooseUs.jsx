
import { Link } from "react-router-dom";

import {
  Sparkles,
  House,
  Package,
  Headphones,
  CircleCheck,
  ArrowRight,
} from "lucide-react";

import BubbleBackground from "./BubbleBackground";

// FOUR FEATURE CARDS
const features = [
  {
    icon: Sparkles,
    title: "Everyday Cleaning",
    description:
      "Explore cleaning products for daily household and workplace cleaning tasks.",
  },
  {
    icon: House,
    title: "Home & Workplace",
    description:
      "Cleaning solutions for homes, offices, and different working environments.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description:
      "Discover a variety of products for floors, kitchens, bathrooms, and laundry.",
  },
  {
    icon: Headphones,
    title: "Customer Assistance",
    description:
      "Contact our team for product details, availability, and general enquiries.",
  },
];

// CHECKLIST ITEMS
const benefits = [
  "Floor and surface cleaning products",
  "Kitchen and dishwashing essentials",
  "Bathroom and toilet cleaning products",
  "Laundry and detergent solutions",
  "Easy product enquiries through our website",
];

function WhyChooseUs() {
  return (
    <main>

      {/* ============ BLUE BUBBLE BANNER ============ */}
      <section className="bubble-section px-5 py-16 text-center text-white">

        {/* FLOATING BUBBLES */}
        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">

          <h1 className="text-4xl font-black md:text-5xl">
            Why Choose{" "}
            <span className="text-[#ff303d]">
              Super Max?
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Discover our cleaning product range and
            explore solutions for your everyday
            cleaning requirements.
          </p>

        </div>
      </section>

      {/* ============ FOUR FEATURE CARDS ============ */}
      <section className="bg-white px-5 py-16">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-10 text-center">

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Why Choose Super Max?
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              Explore the features of our cleaning
              product collection.
            </p>

          </div>

          {/* FEATURE CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-blue-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* RED ICON */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5ff]">
                    <Icon
                      size={34}
                      className="text-[#e50914]"
                    />
                  </div>

                  {/* FEATURE TITLE */}
                  <h3 className="mt-6 text-lg font-bold text-[#071b43]">
                    {feature.title}
                  </h3>

                  {/* FEATURE DESCRIPTION */}
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ============ CLEANING IMAGE AND CHECKLIST ============ */}
      <section className="bg-[#eaf5ff] px-5 py-16">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT SIDE - SUPER MAX PRODUCTS IMAGE */}
          <div className="w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg md:p-4">

            <div className="flex min-h-[280px] w-full items-center justify-center sm:min-h-[320px]">

              <img
                src="/images/supermax-cleaning-products.png"
                alt="Super Max cleaning products and supplies"
                className="block h-auto max-h-[420px] w-full object-contain"
              />

            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Our Cleaning Range
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Explore Our Cleaning Solutions
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#e50914]" />

            <p className="mt-6 leading-8 text-gray-700">
              Super Max offers different cleaning
              products for everyday needs. Explore
              our collection to find products for
              different cleaning tasks.
            </p>

            {/* RED CHECKLIST */}
            <div className="mt-7 space-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >

                  <CircleCheck
                    size={23}
                    className="mt-1 shrink-0 text-[#e50914]"
                  />

                  <span className="leading-7 text-gray-700">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

            {/* EXPLORE PRODUCTS BUTTON */}
            <Link
              to="/products"
              className="super-btn mt-8 inline-flex items-center gap-2"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default WhyChooseUs;
