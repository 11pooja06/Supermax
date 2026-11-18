
import {
  Target,
  Eye,
  ShieldCheck,
  Headphones,
  Sparkles,
  UserRound,
  HeartHandshake,
  TrendingUp,
  MapPin,
} from "lucide-react";

import { useState } from "react";
import BubbleBackground from "./BubbleBackground";

// ==========================================
// OUR VALUES DATA
// ==========================================

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    description:
      "We aim to provide effective, affordable household-cleaning products that make better hygiene accessible to more families.",
  },
  {
    icon: Headphones,
    title: "Customer Satisfaction",
    description:
      "We focus on understanding customer needs and providing helpful cleaning solutions for homes and workplaces.",
  },
  {
    icon: Sparkles,
    title: "Community & Opportunity",
    description:
      "We believe in creating opportunities for women to earn, grow and become financially independent.",
  },
];

// ==========================================
// FOUNDER AND CO-FOUNDER DATA
// ==========================================

const leadership = [
  {
    name: "Kirti Sharma",
    role: "Co-Founder",
    position: "Strategy & Business Development",
    image: "images/images/founder.png",

    description: [
      "Kirti Sharma is a technology professional turned entrepreneur with a passion for building businesses that create meaningful impact. With seven years of experience in software development, she brings a strong foundation in problem-solving, strategic thinking and leading cross-functional teams.",

      "Throughout her professional journey, she has led and mentored teams, managed complex projects and collaborated with diverse stakeholders. Her leadership philosophy centres on empowering people, building collaborative teams and turning ideas into practical solutions.",

      "Driven by her connection to rural Rajasthan and her belief in women's economic independence, Kirti co-founded Rathaaliya Industry and built Supermax with a vision of making quality household essentials affordable while creating employment opportunities for rural women.",

      "At Supermax, she leads strategic planning, business development and growth initiatives, bringing together people, operations and business opportunities to build a purpose-driven organisation.",
    ],
  },

  {
    name: "Amit Sharma",
    role: "Co-Founder",
    position: "Operations & Manufacturing",
    image: "images/images/co-founder.png",

    description: [
      "Amit Sharma leads the operational backbone of Supermax, overseeing manufacturing, production planning, quality control and day-to-day business operations.",

      "With a hands-on approach to execution and process management, he focuses on ensuring production efficiency, maintaining product consistency, coordinating teams and strengthening the supply chain. His role is central to translating the company's vision into reliable products and smooth operations.",

      "Together, Kirti and Amit combine strategic leadership with operational execution to build a growing household-cleaning brand driven by affordability, quality and social impact.",
    ],
  },
];

// ==========================================
// LEADERSHIP PHOTO COMPONENT
// ==========================================

function LeadershipPhoto({ person }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative h-[360px] w-full overflow-hidden bg-[#eaf5ff] sm:h-[420px] lg:h-auto lg:min-h-full">
      {!imageError ? (
        <img
          src={person.image}
          alt={`${person.name} - ${person.position}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#062b68]">
          <UserRound size={90} strokeWidth={1.2} />
          <p className="font-semibold">{person.name}</p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// ABOUT PAGE
// ==========================================

function About() {
  return (
    <main className="overflow-x-hidden">

      {/* ======================================
          ABOUT BANNER
      ====================================== */}

      <section className="bubble-section relative overflow-hidden px-5 py-16 text-center text-white">
        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-4xl font-black md:text-5xl">
            About{" "}
            <span className="text-[#ff303d]">
              Super Max
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            More Than Products. Creating Opportunities.
          </p>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-blue-100">
            Building a household-cleaning brand driven
            by affordability, quality and social impact.
          </p>
        </div>
      </section>

      {/* ======================================
          OUR STORY
      ====================================== */}

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT SIDE IMAGE */}
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              src="/images/about-supermax.png"
              alt="Super Max cleaning products and company"
              className="h-80 w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Welcome to Super Max
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Our Story
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#e50914]" />

            <p className="mt-6 text-base leading-8 text-gray-700">
              Our vision was straightforward: create effective,
              affordable household-cleaning products that make
              better hygiene accessible to more families, while
              building opportunities for women to earn and grow.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700">
              What started as a small initiative serving local
              communities has gradually grown into a business
              reaching households across India.
            </p>

            {/* OUR MISSION */}
            <div className="mt-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf5ff]">
                <Target
                  size={28}
                  className="text-[#e50914]"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071b43]">
                  Our Mission
                </h3>

                <p className="mt-2 leading-7 text-gray-700">
                  To create effective, affordable household-cleaning
                  products while building opportunities for women
                  to earn and grow.
                </p>
              </div>
            </div>

            {/* OUR VISION */}
            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eaf5ff]">
                <Eye
                  size={28}
                  className="text-[#e50914]"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#071b43]">
                  Our Vision
                </h3>

                <p className="mt-2 leading-7 text-gray-700">
                  To make quality household essentials affordable
                  while creating employment opportunities for
                  rural women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          WOMEN'S EMPOWERMENT
          ONLY NEARLY 100 WOMEN CARD
      ====================================== */}

      <section className="bg-[#eaf5ff] px-5 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Our Social Impact
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              More Than Products.
              <span className="block text-[#e50914]">
                Creating Opportunities.
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-700">
              For us, building Supermax was never just about
              selling cleaning products. We wanted to create
              an environment where women could become
              financially independent without having to
              compromise on their family responsibilities.
            </p>
          </div>

          {/* SINGLE CENTERED IMPACT CARD */}
          <div className="mx-auto max-w-xl">
            <div className="rounded-xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <HeartHandshake
                size={40}
                className="mx-auto text-[#e50914]"
              />

              <h3 className="mt-4 text-4xl font-black text-[#071b43]">
                Nearly 100
              </h3>

              <p className="mt-3 font-semibold leading-7 text-gray-600">
                Women Connected to Our Wider Employment Ecosystem
              </p>

            </div>
          </div>

          {/* WOMEN EMPOWERMENT DETAILS */}
          <div className="mt-10 rounded-xl bg-white p-7 shadow-md md:p-10">

            <h3 className="text-2xl font-black text-[#071b43]">
              Supporting Women and Families
            </h3>

            <p className="mt-5 leading-8 text-gray-700">
              Understanding the practical challenges faced by
              working mothers, we designed our factory with fans
              and a dedicated space where employees could keep
              their young children while working.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              As our business expanded, so did our impact.
              Through our own operations and associated partner
              factories, nearly 100 women have become part of
              the wider employment ecosystem connected to our work.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              We have also established an internal support fund
              to assist women associated with us during emergencies
              and with important life needs, including education
              and marriage.
            </p>

            <p className="mt-6 border-l-4 border-[#e50914] pl-5 font-semibold leading-8 text-[#071b43]">
              Every woman who earns through this ecosystem
              represents a step towards greater financial
              independence, confidence and choice.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================
          OUR BUSINESS JOURNEY
      ====================================== */}

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Our Journey
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Growing Together, Reaching Further
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />
          </div>

          <p className="mx-auto max-w-4xl text-center leading-8 text-gray-700">
            From supplying local village shops, colleges and
            hospitals to expanding across Rajasthan and entering
            the quick-commerce market through Blinkit, our journey
            has been one of continuous growth.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-3">

            <div className="rounded-xl border border-blue-100 p-8 text-center shadow-md">
              <MapPin
                size={34}
                className="mx-auto text-[#e50914]"
              />

              <h3 className="mt-5 text-xl font-bold text-[#071b43]">
                Local Communities
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Starting with local village shops,
                colleges and hospitals.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 p-8 text-center shadow-md">
              <TrendingUp
                size={34}
                className="mx-auto text-[#e50914]"
              />

              <h3 className="mt-5 text-xl font-bold text-[#071b43]">
                Rajasthan Expansion
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Growing our distribution network
                across Rajasthan.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 p-8 text-center shadow-md">
              <Sparkles
                size={34}
                className="mx-auto text-[#e50914]"
              />

              <h3 className="mt-5 text-xl font-bold text-[#071b43]">
                Quick Commerce
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Entering the quick-commerce market
                through Blinkit.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center leading-8 text-gray-700">
            Today, Supermax is building a wider distribution
            network while staying connected to the communities
            and people that inspired its beginning.
          </p>
        </div>
      </section>

      {/* ======================================
          MEET OUR LEADERSHIP
      ====================================== */}

      <section className="bg-[#f5f9ff] px-5 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              The People Behind Super Max
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Meet Our Leadership
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              Meet the people behind Supermax
              and their vision for the company.
            </p>
          </div>

          {/* FULL LEADERSHIP PROFILES */}
          <div className="space-y-10">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
              >

                <div className="grid lg:grid-cols-[340px_minmax(0,1fr)]">

                  {/* FULL HEIGHT LEADERSHIP PHOTO */}
                  <LeadershipPhoto person={person} />

                  {/* RIGHT SIDE INTRODUCTION */}
                  <div className="min-w-0 p-7 md:p-10">

                    <span className="inline-block rounded-full bg-[#eaf5ff] px-5 py-2 text-sm font-bold text-[#e50914]">
                      {person.role}
                    </span>

                    <h3 className="mt-4 text-3xl font-black text-[#071b43]">
                      {person.name}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-[#e50914]">
                      {person.position}
                    </p>

                    <div className="mt-5 h-1 w-16 bg-[#e50914]" />

                    {/* COMPLETE INTRODUCTION */}
                    <div className="mt-7 space-y-5 text-left">
                      {person.description.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-base leading-8 text-gray-700"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================
          OUR VALUES
      ====================================== */}

      <section className="bg-[#eaf5ff] px-5 py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Our Values
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              The principles that guide our approach
              to cleaning products and community progress.
            </p>
          </div>

          {/* VALUES CARDS */}
          <div className="grid gap-7 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-xl border border-blue-100 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5ff]">
                    <Icon
                      size={34}
                      className="text-[#e50914]"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#071b43]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          OUR BELIEF
      ====================================== */}

      <section className="bg-[#071b43] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-black md:text-4xl">
            Our Belief
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

          <p className="mt-7 text-lg leading-9 text-blue-100">
            We believe cleanliness should not depend on income,
            and economic opportunity should not depend on geography.
          </p>

          <p className="mt-5 leading-8 text-blue-100">
            At Supermax, we are building more than a
            household-cleaning brand. We are building a business
            rooted in accessibility, opportunity and community progress.
          </p>

          <p className="mt-7 text-xl font-bold leading-9">
            Because when households thrive, communities grow.
            And when women grow, generations move forward.
          </p>

        </div>
      </section>

    </main>
  );
}

export default About;
