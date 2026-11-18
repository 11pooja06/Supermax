
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import BubbleBackground from "./BubbleBackground";

const INTRO_DURATION = 3600;
const INTRO_KEY = "supermax-intro-played";

const foamBubbles = Array.from({ length: 115 }, (_, i) => ({
  left: `${(i * 47.31) % 100}%`,
  top: `${(i * 29.73) % 100}%`,
  size: 5 + ((i * 13) % 29),
  delay: `${(i % 12) * -0.16}s`,
}));

function Hero() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let alreadyPlayed = false;

    try {
      alreadyPlayed =
        sessionStorage.getItem(INTRO_KEY) === "true";
    } catch {
      // Storage may be unavailable in private browsing.
    }

    if (reducedMotion || alreadyPlayed) return;

    setShowIntro(true);

    try {
      sessionStorage.setItem(INTRO_KEY, "true");
    } catch {
      // The animation still works without storage.
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, INTRO_DURATION);

    return () => window.clearTimeout(timer);
  }, [showIntro]);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#062b68] text-white">

      {/* KITCHEN BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/kitchen-bg.png')",
        }}
      />

      {/* BLUE GRADIENT */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#062b68] via-[#0753a3]/65 to-transparent" />

      <BubbleBackground />

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1600px] grid-cols-1 items-center gap-0 px-5 pb-28 pt-14 md:grid-cols-2 md:px-10 md:pb-32 lg:min-h-[780px] lg:px-16">

        {/* LEFT */}
        <div className="relative z-20 text-center md:text-left">

          <p className="text-sm font-extrabold uppercase tracking-widest text-white md:text-lg">
            Super Max Cleaning Solutions
          </p>

          <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-gradient-to-r from-[#ff1733] to-transparent md:mx-0" />

          <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Powerful Cleaning
            <br />
            for{" "}
            <span className="text-[#ff1733]">
              Everyday Life
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-blue-50 md:mx-0 lg:text-lg">
            Discover Super Max cleaning products for your
            home, office, and everyday cleaning needs.
            Explore our range of cleaning solutions designed
            for different surfaces and spaces.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#ff1733] px-8 py-4 text-base font-extrabold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#d90920] hover:shadow-2xl"
          >
            Explore Products
            <ArrowRight size={22} />
          </Link>

          {/* AVAILABLE ON */}
          <div className="mt-7">

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <ShoppingCart size={24} />

              <p className="text-lg font-bold text-white">
                Also Available on
              </p>
            </div>

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

        {/* PRODUCT IMAGE */}
        <div className="relative z-10 mt-10 flex h-[430px] items-end justify-center md:mt-0 md:h-full">

          <img
            src="/images/hero.png"
            alt="SuperMax cleaning products"
            className="relative z-10 h-full w-full scale-110 object-contain object-bottom drop-shadow-2xl md:scale-125 lg:scale-[1.35]"
          />

        </div>
      </div>

      {/* HERO WAVE */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full leading-none">

        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-[70px] w-full md:h-[120px]"
          aria-hidden="true"
        >
          <path
            d="M0 30 C260 45 480 120 760 115 C1060 110 1230 65 1440 25 L1440 140 L0 140 Z"
            fill="#e50914"
          />

          <path
            d="M0 60 C260 55 500 140 780 128 C1080 120 1260 85 1440 55 L1440 140 L0 140 Z"
            fill="#ffffff"
          />

          <path
            d="M0 85 C280 80 520 145 790 135 C1070 125 1280 100 1440 80"
            fill="none"
            stroke="#063bb5"
            strokeWidth="6"
          />
        </svg>
      </div>

      {/* PREMIUM CLEANING INTRO */}
      {showIntro && (
        <div
          className="sm-intro"
          role="presentation"
        >

          {/* FOAM MASK */}
          <div className="sm-foam">
            <div className="sm-foam-texture" />

            {foamBubbles.map((bubble, i) => (
              <span
                key={i}
                className="sm-foam-bubble"
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  width: bubble.size,
                  height: bubble.size,
                  animationDelay: bubble.delay,
                }}
              />
            ))}
          </div>

          {/* CIRCULAR CLEANING SPONGE */}
          <div className="sm-sponge-orbit">
            <div className="sm-sponge">
              <div className="sm-sponge-surface">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="sm-sponge-pad" />
            </div>
          </div>

          {/* KITCHEN UTENSILS */}
          <div className="sm-utensil-scene">

            <svg
              viewBox="0 0 280 180"
              className="sm-utensil-svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="smSteel"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="25%" stopColor="#ffffff" />
                  <stop offset="55%" stopColor="#cbd5e1" />
                  <stop offset="80%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>

              {/* PLATE */}
              <circle
                cx="90"
                cy="90"
                r="66"
                fill="url(#smSteel)"
                stroke="#94a3b8"
                strokeWidth="4"
              />

              <circle
                cx="90"
                cy="90"
                r="48"
                fill="none"
                stroke="#ffffff"
                strokeWidth="5"
                opacity="0.85"
              />

              <circle
                cx="90"
                cy="90"
                r="39"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                opacity="0.65"
              />

              {/* SPOON */}
              <g transform="rotate(15 185 90)">
                <ellipse
                  cx="185"
                  cy="48"
                  rx="13"
                  ry="23"
                  fill="url(#smSteel)"
                  stroke="#94a3b8"
                  strokeWidth="2"
                />

                <rect
                  x="181"
                  y="68"
                  width="8"
                  height="94"
                  rx="4"
                  fill="url(#smSteel)"
                />
              </g>

              {/* FORK */}
              <g transform="rotate(-12 236 90)">
                {[226, 233, 240, 247].map((x) => (
                  <rect
                    key={x}
                    x={x}
                    y="27"
                    width="5"
                    height="36"
                    rx="2"
                    fill="url(#smSteel)"
                  />
                ))}

                <path
                  d="M226 58 Q238 85 250 58 L243 91 L233 91 Z"
                  fill="url(#smSteel)"
                />

                <rect
                  x="234"
                  y="84"
                  width="9"
                  height="78"
                  rx="4"
                  fill="url(#smSteel)"
                />
              </g>
            </svg>

            {/* METALLIC SHINE */}
            <div className="sm-utensil-glint" />

            <Sparkles className="sm-shine sm-shine-one" size={28} />
            <Sparkles className="sm-shine sm-shine-two" size={20} />
            <Sparkles className="sm-shine sm-shine-three" size={16} />

          </div>

          {/* FINAL WIPER */}
          <div className="sm-wiper">
            <div className="sm-wiper-handle" />
            <div className="sm-wiper-head">
              <div className="sm-wiper-rubber" />
            </div>
            <Sparkles className="sm-wiper-shine" size={22} />
          </div>

          {/* BRAND CAPTION */}
          <div className="sm-intro-caption">
            <Sparkles size={17} />
            <span>Clean. Shine. Super Max.</span>
          </div>

          {/* SKIP */}
          <button
            type="button"
            className="sm-skip"
            onClick={() => setShowIntro(false)}
          >
            Skip Intro
          </button>

        </div>
      )}
    </section>
  );
}

export default Hero;
