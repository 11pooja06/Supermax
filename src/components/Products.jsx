
import ProductCard from "./ProductCard";
import BubbleBackground from "./BubbleBackground";

// ALL SEVEN SUPERMAX PRODUCTS
export const products = [
  {
    id: 1,
    name: "Floor Cleaner",
    category: "Floor Cleaner",
    image: "/images/floor-cleaner.png",
    description:
      "Supermax Floor Cleaner helps remove dirt and stains while leaving floors clean and fresh.",
    quantity: "1 Ltr.",
    price: 99,
  },
  {
    id: 2,
    name: "Dish Wash Liquid",
    category: "Dish Wash Liquid",
    image: "/images/dish-wash.png",
    description:
      "Supermax Dish Wash Liquid helps remove grease and food residue for sparkling clean dishes.",
    quantity: "1 Ltr.",
    price: 109,
  },
  {
    id: 3,
    name: "Toilet Cleaner",
    category: "Toilet Cleaner",
    image: "/images/toilet-cleaner.png",
    description:
      "Supermax Toilet Cleaner is designed to remove stubborn stains and keep toilets clean.",
    quantity: "1 Ltr.",
    price: 129,
  },
  {
    id: 4,
    name: "Detergent Liquid",
    category: "Detergent Liquid",
    image: "/images/detergent.png",
    description:
      "Supermax Detergent Liquid helps remove everyday stains and keep clothes fresh.",
    quantity: "1 Ltr.",
    price: 149,
  },
  {
    id: 5,
    name: "Glass Cleaner",
    category: "Glass Cleaner",
    image: "/images/glass-cleaner.png",
    description:
      "Supermax Glass Cleaner helps clean windows, mirrors, and other glass surfaces.",
    quantity: "500 ml",
    price: 89,
  },
  {
    id: 6,
    name: "Combo Pack - 1 Ltr.",
    category: "Combo Pack",
    image: "/images/combo-pack.png",
    description:
      "Supermax 3-in-1 Combo Pack containing 1 Ltr. Floor Cleaner, Dish Wash Liquid, and Toilet Cleaner.",
    quantity: "3 × 1 Ltr.",
    price: null,
  },
  {
    id: 7,
    name: "Combo Pack - 500 ml",
    category: "Combo Pack",
    image: "/images/combo-pack-500ml.png",
    description:
      "Supermax 3-in-1 Combo Pack containing 500 ml Floor Cleaner, Dish Wash Liquid, and Toilet Cleaner.",
    quantity: "3 × 500 ml",
    price: null,
  },
];

function Products() {
  return (
    <main className="min-h-screen bg-white">

      {/* BLUE PRODUCTS BANNER */}
      <section className="bubble-section relative overflow-hidden px-5 py-16 text-center text-white">
        <BubbleBackground />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="text-4xl font-black md:text-5xl">
            Our{" "}
            <span className="text-[#ff303d]">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Explore our complete range of Supermax cleaning
            products for your everyday needs.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">

          {/* HEADING */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Explore Our Cleaning Range
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-5 max-w-xl text-gray-600">
              Discover our cleaning essentials and
              convenient value combo packs.
            </p>
          </div>

          {/* VISIBLE PRODUCT COUNT */}
          <div className="mb-8 text-center">
            <p className="inline-block rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-[#071b43]">
              Showing {products.length} Products
            </p>
          </div>

          {/* ALL 7 PRODUCT CARDS */}
          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                compact={false}
              />
            ))}
          </div>

          {/* BOTTOM VERIFICATION */}
          <p className="mt-10 text-center text-sm font-medium text-gray-500">
            End of product collection — {products.length} products
          </p>

        </div>
      </section>

    </main>
  );
}

export default Products;
