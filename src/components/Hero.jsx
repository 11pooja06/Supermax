
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart } from "lucide-react";
import BubbleBackground from "./BubbleBackground";

function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#062b68] text-white">

      {/* FULL WIDTH KITCHEN BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/kitchen-bg.png')",
        }}
      />

      {/* DARK BLUE GRADIENT ON LEFT SIDE */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#062b68] via-[#0753a3]/65 to-transparent" />

      {/* MOVING BUBBLES */}
      <BubbleBackground />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1600px] grid-cols-1 items-center gap-0 px-5 pb-28 pt-14 md:grid-cols-2 md:px-10 md:pb-32 lg:min-h-[780px] lg:px-16">

        {/* LEFT SIDE - TEXT */}
        <div className="relative z-20 text-center md:text-left">

          {/* SMALL HEADING */}
          <p className="text-sm font-extrabold uppercase tracking-widest text-white md:text-lg">
            Super Max Cleaning Solutions
          </p>

          {/* RED UNDERLINE */}
          <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-gradient-to-r from-[#ff1733] to-transparent md:mx-0" />

          {/* MAIN HEADING */}
          <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Powerful Cleaning
            <br />
            for{" "}
            <span className="text-[#ff1733]">
              Everyday Life
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-blue-50 md:mx-0 lg:text-lg">
            Discover Super Max cleaning products for your
            home, office, and everyday cleaning needs.
            Explore our range of cleaning solutions designed
            for different surfaces and spaces.
          </p>

          {/* EXPLORE PRODUCTS BUTTON */}
          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ff1733] px-8 py-4 text-base font-extrabold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#d90920] hover:shadow-2xl"
          >
            Explore Products
            <ArrowRight size={22} />
          </Link>

          {/* AVAILABLE ON BLINKIT & INSTAMART */}
          <div className="mt-7">

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <ShoppingCart size={24} />

              <p className="text-lg font-bold text-white">
                Also Available on
              </p>
            </div>

            {/* PLATFORM BADGES */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:justify-start">

              <span className="rounded-full bg-white px-6 py-3 text-base font-extrabold text-[#d71920] shadow-lg">
                Blinkit
              </span>

              <span className="rounded-full bg-white px-6 py-3 text-base font-extrabold text-[#f97316] shadow-lg">
                Swiggy Instamart
              </span>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE - LARGE PRODUCT PHOTO */}
        <div className="relative z-10 mt-10 flex h-[430px] items-end justify-center md:mt-0 md:h-full">

          <img
            src="/images/hero.png"
            alt="SuperMax Dish Wash Liquid, Toilet Cleaner and Floor Cleaner"
            className="relative z-10 h-full w-full scale-110 object-contain object-bottom drop-shadow-2xl md:scale-125 lg:scale-[1.35]"
          />

        </div>

      </div>

      {/* RED, WHITE AND BLUE CURVED HERO WAVE */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full leading-none">

        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-[70px] w-full md:h-[120px]"
          aria-hidden="true"
        >

          {/* RED CURVE */}
          <path
            d="M0 30 C260 45 480 120 760 115 C1060 110 1230 65 1440 25 L1440 140 L0 140 Z"
            fill="#e50914"
          />

          {/* WHITE CURVE */}
          <path
            d="M0 60 C260 55 500 140 780 128 C1080 120 1260 85 1440 55 L1440 140 L0 140 Z"
            fill="#ffffff"
          />

          {/* BLUE ACCENT CURVE */}
          <path
            d="M0 85 C280 80 520 145 790 135 C1070 125 1280 100 1440 80"
            fill="none"
            stroke="#063bb5"
            strokeWidth="6"
          />

        </svg>
      </div>

    </section>
  );
}

export default Hero;
