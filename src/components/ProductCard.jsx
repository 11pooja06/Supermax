
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProductCard({ product, compact = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* PRODUCT IMAGE */}
      <div className="relative h-64 w-full overflow-hidden bg-[#eaf5ff]">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="text-xl font-black text-[#071b43]">
          {product.name}
        </h3>

        {!compact && (
          <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
            {product.description}
          </p>
        )}

        {/* QUANTITY AND PRICE */}
        <div className="mt-4 flex items-center justify-between gap-3">

          <span className="text-sm font-semibold text-gray-500">
            {product.quantity || "Size not specified"}
          </span>

          {product.price != null && (
            <span className="text-2xl font-black text-[#e50914]">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>
          )}

        </div>

        {/* ENQUIRE BUTTON */}
        <Link
          to="/contact"
          state={{ productName: product.name }}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#e50914] px-5 py-3 font-bold text-white transition hover:bg-[#bd0710]"
        >
          Enquire Now
          <ArrowUpRight size={18} />
        </Link>

      </div>

    </article>
  );
}

export default ProductCard;
