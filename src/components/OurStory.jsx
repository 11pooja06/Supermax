
import { Link } from "react-router-dom";

import {
  HeartHandshake,
  Users,
  BadgeIndianRupee,
  Sprout,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import BubbleBackground from "./BubbleBackground";

// OUR IMPACT CARDS
const impact = [
  {
    icon: Users,
    title: "Employment Opportunities",
    description:
      "At Supermax, we provide employment opportunities to women from villages, helping them develop skills and earn an income.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Financial Independence",
    description:
      "We believe every woman deserves the opportunity to earn, support her family, and become financially independent.",
  },
  {
    icon: Sprout,
    title: "Growing Together",
    description:
      "When women gain confidence and opportunities, they can create a positive impact on their families and communities.",
  },
];

function OurStory() {
  return (
    <main>
      {/* ============ OUR STORY BANNER ============ */}
      <section className="bubble-section relative overflow-hidden px-5 py-20 text-center text-white">
        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-100">
            More Than Just Cleaning Products
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Our{" "}
            <span className="text-[#ff303d]">
              Story
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-50 md:text-lg">
            At Supermax, we believe that a business
            can do more than create products. It can
            create opportunities, support families,
            and help women build independent futures.
          </p>
        </div>
      </section>

      {/* ============ OUR PURPOSE ============ */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE CONTENT */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              The Heart Behind Supermax
            </p>

            <h2 className="text-3xl font-black leading-tight text-[#071b43] md:text-4xl">
              Creating Products.
              <br />
              <span className="text-[#e50914]">
                Creating Opportunities.
              </span>
            </h2>

            <div className="mt-5 h-1 w-20 bg-[#e50914]" />

            <p className="mt-7 leading-8 text-gray-700">
              Supermax is more than a cleaning
              products brand. We believe in creating
              opportunities that can make a meaningful
              difference in people's lives.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              We provide employment opportunities to
              women from villages, helping them earn
              an income, support their families, and
              take steps towards financial independence.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Our purpose is to encourage women to
              recognise their abilities, build
              confidence, and work towards a brighter
              future through their own dedication.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-[#eaf5ff] p-3 shadow-lg">
            <img
              src="/images/village-women.png"
              alt="Women working together at Supermax"
              className="h-auto max-h-[440px] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ============ WOMEN EMPOWERMENT ============ */}
      <section className="bg-[#eaf5ff] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#071b43] md:text-4xl">
              Empowering Women,
              <span className="text-[#e50914]">
                {" "}Strengthening Communities
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              At Supermax, we believe that giving
              women opportunities to work and earn
              can help create stronger families
              and communities.
            </p>
          </div>

          {/* THREE IMPACT CARDS */}
          <div className="grid gap-7 md:grid-cols-3">
            {impact.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5ff]">
                    <Icon
                      size={34}
                      className="text-[#e50914]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071b43]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ OUR BELIEF ============ */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-[#eaf5ff] p-3 shadow-lg">
            <img
              src="/images/women-empowerment.png"
              alt="Women supporting each other and building independent futures"
              className="h-auto max-h-[420px] w-full rounded-xl object-contain"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Our Belief
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Every Woman Deserves
              <span className="text-[#e50914]">
                {" "}An Opportunity
              </span>
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#e50914]" />

            <p className="mt-6 leading-8 text-gray-700">
              We believe talent and determination
              exist in every village. With the
              right opportunities, women can develop
              their abilities, build confidence,
              and create better futures.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Opportunities to earn with dignity",
                "Confidence through meaningful work",
                "Support for families and communities",
                "A step towards financial independence",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={23}
                    className="mt-1 shrink-0 text-[#e50914]"
                  />

                  <span className="leading-7 text-gray-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLOSING MESSAGE ============ */}
      <section className="bg-[#062b68] px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <HeartHandshake
            size={52}
            className="mx-auto text-[#ff303d]"
          />

          <h2 className="mt-6 text-3xl font-black md:text-4xl">
            Clean Homes.
            <span className="text-[#ff303d]">
              {" "}Brighter Futures.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
            At Supermax, our journey is about more
            than cleaning products. We are committed
            to creating opportunities for village
            women to earn, grow, and move towards
            financial independence.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#e50914] px-8 py-4 font-bold text-white transition hover:bg-[#bd0710]"
          >
            Explore Our Products
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default OurStory;
