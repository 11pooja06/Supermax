
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ProductCard({ product, compact = false }) {
  if (!product) return null;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* PRODUCT IMAGE */}
      <div className="flex h-64 w-full items-center justify-center overflow-hidden bg-[#eaf5ff] p-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(event) => {
            console.error(
              "Product image not found:",
              product.image
            );
          }}
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-1 flex-col p-5 md:p-6">

        {/* PRODUCT NAME */}
        <h3 className="text-xl font-black text-[#071b43]">
          {product.name}
        </h3>

        {/* PRODUCT DESCRIPTION */}
        {!compact && (
          <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
            {product.description}
          </p>
        )}

        {/* QUANTITY AND PRICE */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">

          <span className="text-sm font-semibold text-gray-500">
            {product.quantity}
          </span>

          {product.price != null ? (
            <span className="text-2xl font-black text-[#e50914]">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </span>
          ) : (
            <span className="text-sm font-semibold text-gray-500">
              Price on Enquiry
            </span>
          )}

        </div>

        {/* ENQUIRE NOW BUTTON */}
        <Link
          to="/contact"
          state={{ productName: product.name }}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#e50914] px-5 py-3 font-bold text-white transition-colors duration-300 hover:bg-[#bd0710]"
        >
          Enquire Now
          <ArrowUpRight size={18} />
        </Link>

      </div>
    </article>
  );
}

export default ProductCard;
