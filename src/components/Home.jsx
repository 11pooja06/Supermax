
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Hero from "./Hero";
import ProductCard from "./ProductCard";
import { products } from "./Products";

function Home() {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Our Featured Products
            </h2>

            <div className="mx-auto mt-3 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Discover our cleaning products for
              your everyday household and workplace needs.
            </p>
          </div>

          {/* FOUR FEATURED PRODUCT CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                compact={true}
              />
            ))}
          </div>

          {/* VIEW ALL PRODUCTS BUTTON */}
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="super-btn inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SUPER MAX ================= */}
      <section className="bg-[#eaf5ff] px-5 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT SIDE - CLEANING PRODUCTS IMAGE */}
          <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg">

            <img
              src="/images/supermax-cleaning-products.png"
              alt="Super Max cleaning products and supplies"
              className="block h-auto w-full"
            />

          </div>

          {/* RIGHT SIDE - ABOUT TEXT */}
          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Welcome to Super Max
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              About Super Max
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#e50914]" />

            <p className="mt-6 text-base leading-8 text-gray-700">
              Super Max offers a wide range of cleaning
              products for homes, offices, and workplaces.
              Our products are designed for different
              everyday cleaning requirements.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700">
              Explore our collection of floor cleaners,
              dishwashing liquids, toilet cleaners,
              detergents, glass cleaners, and other
              cleaning solutions.
            </p>

            {/* KNOW MORE BUTTON */}
            <Link
              to="/about"
              className="super-btn mt-7 inline-flex items-center gap-2"
            >
              Know More
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;
