
import {
  Target,
  Eye,
  ShieldCheck,
  Headphones,
  Sparkles,
  UserRound,
} from "lucide-react";

import BubbleBackground from "./BubbleBackground";

// OUR VALUES DATA
const values = [
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    description:
      "We aim to provide cleaning products that meet everyday cleaning requirements.",
  },
  {
    icon: Headphones,
    title: "Customer Satisfaction",
    description:
      "We focus on understanding customer needs and providing helpful product information.",
  },
  {
    icon: Sparkles,
    title: "Cleaning Solutions",
    description:
      "We offer a variety of products for different household and workplace cleaning needs.",
  },
];

// FOUNDER AND CO-FOUNDER DATA
// Replace the names, descriptions, and photos with actual details.
const leadership = [
  {
    name: "Kirti Sharma",
    role: "Co-Founder",
    image: "/images/founder.png",
    description:
      "Meet the founder of Super Max. Add a brief introduction about their background, vision, and role in building the company.",
  },
  {
    name: "Amit Rathaaliya",
    role: "Co-Founder",
    image: "/images/co-founder.png",
    description:
      "Meet the co-founder of Super Max. Add a brief introduction about their experience, responsibilities, and contribution to the company.",
  },
];

function About() {
  return (
    <main>

      {/* ============ ABOUT BANNER ============ */}
      <section className="bubble-section px-5 py-16 text-center text-white">

        {/* FLOATING BUBBLES */}
        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">

          <h1 className="text-4xl font-black md:text-5xl">
            About{" "}
            <span className="text-[#ff303d]">
              Super Max
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Discover Super Max and our range of cleaning
            products for homes, offices, and workplaces.
          </p>

        </div>
      </section>

      {/* ============ OUR STORY ============ */}
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
              Super Max offers a range of cleaning products
              for everyday use. Our collection includes
              products for floors, kitchens, bathrooms,
              laundry, and other cleaning requirements.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-700">
              We aim to make it easier for customers
              to explore cleaning solutions for their
              homes and workplaces.
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
                  To offer a variety of cleaning products
                  that support everyday cleaning needs.
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
                  To become a trusted name in cleaning
                  products for homes and workplaces.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============ MEET OUR LEADERSHIP ============ */}
      <section className="bg-white px-5 py-16">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              The People Behind Super Max
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Meet Our Leadership
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              Get to know the people behind Super Max
              and their vision for the company.
            </p>

          </div>

          {/* FOUNDER AND CO-FOUNDER CARDS */}
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

            {leadership.map((person) => (
              <article
                key={person.role}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* PHOTO CONTAINER */}
                <div className="flex h-80 items-center justify-center overflow-hidden bg-[#eaf5ff]">

                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />

                  {/* FALLBACK IF PHOTO IS NOT ADDED */}
                  <div className="hidden h-full w-full items-center justify-center text-[#062b68]">
                    <UserRound size={100} strokeWidth={1.2} />
                  </div>

                </div>

                {/* PERSON DETAILS */}
                <div className="p-7 text-center">

                  <span className="inline-block rounded-full bg-[#eaf5ff] px-5 py-2 text-sm font-bold text-[#e50914]">
                    {person.role}
                  </span>

                  <h3 className="mt-4 text-2xl font-black text-[#071b43]">
                    {person.name}
                  </h3>

                  <div className="mx-auto mt-4 h-1 w-14 bg-[#e50914]" />

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    {person.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ============ OUR VALUES ============ */}
      <section className="bg-[#eaf5ff] px-5 py-16">

        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}
          <div className="mb-10 text-center">

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Our Values
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              The principles that guide our approach
              to cleaning products and customer service.
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

                  {/* ICON */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf5ff]">
                    <Icon
                      size={34}
                      className="text-[#e50914]"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-xl font-bold text-[#071b43]">
                    {value.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

    </main>
  );
}

export default About;
