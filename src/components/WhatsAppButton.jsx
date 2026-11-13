
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  // Replace with your actual WhatsApp business number
  // Include country code without +, spaces or dashes
  const phoneNumber = "91XXXXXXXXXX";

  // Prefilled message
  const message =
    "Hello Super Max! I would like to know more about your cleaning products.";

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Super Max on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-lg transition-all duration-300
        hover:scale-110 hover:bg-[#1ebe5d]
        hover:shadow-xl
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#25D366]
        sm:bottom-7 sm:right-7
        sm:h-16 sm:w-16
      "
    >
      <FaWhatsapp className="text-3xl sm:text-4xl" />
    </a>
  );
}

export default WhatsAppButton;
