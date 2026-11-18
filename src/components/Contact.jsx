
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

import BubbleBackground from "./BubbleBackground";

// Replace this with your Web3Forms access key
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

// ==========================================
// CONTACT DETAILS
// ==========================================

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    value:
      "Rathaaliya Industry, Ram Nagar Scheme, Plot No. 15, Banyawala, Charanwala, Sanganer, Jaipur, Rajasthan - 303904",
  },
  {
    icon: Phone,
    title: "Call / WhatsApp Us",
    value: "+91 8440840098",
    link: "https://wa.me/918440840098",
  },
  {
    icon: Mail,
    title: "Email - Kirti Sharma",
    value: "kirti.sharma@supermax.co.in",
    link: "mailto:kirti.sharma@supermax.co.in",
  },
  {
    icon: Mail,
    title: "Email - Amit Rathaaliya",
    value: "amit.rathaaliya@supermax.co.in",
    link: "mailto:amit.rathaaliya@supermax.co.in",
  },
];

// ==========================================
// INITIAL FORM DATA
// ==========================================

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// ==========================================
// CONTACT PAGE
// ==========================================

function Contact() {
  const location = useLocation();

  // Get selected product name from ProductCard
  const productName = location.state?.productName || "";

  const [form, setForm] = useState({
    ...initialForm,
    subject: productName
      ? `Product Enquiry: ${productName}`
      : "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  // Update subject when a product is selected
  useEffect(() => {
    if (productName) {
      setForm((previous) => ({
        ...previous,
        subject: `Product Enquiry: ${productName}`,
      }));
    }
  }, [productName]);

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // ==========================================
  // SUBMIT FORM TO WEB3FORMS
  // ==========================================

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("");
    setSuccess(false);

    if (WEB3FORMS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus(
        "Please configure your Web3Forms access key."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            from_name: "Super Max Website",
            ...form,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send message."
        );
      }

      setSuccess(true);
      setStatus("Your message has been sent successfully!");
      setForm({ ...initialForm });
    } catch (error) {
      setStatus(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>

      {/* ======================================
          BLUE BUBBLE BANNER
      ====================================== */}

      <section className="bubble-section px-5 py-16 text-center text-white">

        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">

          <h1 className="text-4xl font-black md:text-5xl">
            Contact{" "}
            <span className="text-[#ff303d]">
              Us
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Have a question about our cleaning products?
            Get in touch with Super Max for product
            information and enquiries.
          </p>

        </div>
      </section>

      {/* ======================================
          CONTACT SECTION
      ====================================== */}

      <section className="bg-white px-5 py-16">

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* ======================================
              LEFT SIDE - CONTACT INFORMATION
          ====================================== */}

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#e50914]">
              Contact Information
            </p>

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Get in Touch
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#e50914]" />

            <p className="mt-6 leading-8 text-gray-700">
              Contact our team for product details,
              availability, or general enquiries.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-9 space-y-8">

              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.title}
                    className="flex items-start gap-5"
                  >

                    {/* RED ICON BOX */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e50914] text-white">
                      <Icon size={23} />
                    </div>

                    {/* CONTACT TEXT */}

                    <div className="min-w-0">

                      <h3 className="text-lg font-bold text-[#071b43]">
                        {detail.title}
                      </h3>

                      {detail.link ? (
                        <a
                          href={detail.link}
                          target={
                            detail.link.startsWith("https")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            detail.link.startsWith("https")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-2 block break-words text-sm leading-7 text-[#062b68] transition-colors hover:text-[#e50914] hover:underline"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {detail.value}
                        </p>
                      )}

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* ======================================
              RIGHT SIDE - CONTACT FORM
          ====================================== */}

          <div className="rounded-xl bg-[#eaf5ff] p-6 shadow-lg sm:p-8">

            <h2 className="text-2xl font-black text-[#071b43]">
              Send Us a Message
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Fill out the form below to send your enquiry.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#071b43]"
                >
                  Your Name *
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  className="super-input"
                  required
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#071b43]"
                >
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="super-input"
                  required
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-[#071b43]"
                >
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="super-input"
                />
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#071b43]"
                >
                  Subject *
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="super-input"
                  required
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#071b43]"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className="super-input resize-y"
                  required
                />
              </div>

              {/* FORM STATUS */}

              {status && (
                <p
                  role="status"
                  className={`rounded-md p-3 text-sm ${
                    success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* SEND BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="super-btn inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={18} />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
