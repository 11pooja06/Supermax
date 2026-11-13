
import ProductCard from "./ProductCard";

// ALL SUPER MAX PRODUCTS
const products = [
  {
    id: 1,
    name: "Floor Cleaner",
    category: "Floor Cleaner",
    image: "/images/floor-cleaner.png",
    description:
      "Powerful floor cleaner for everyday cleaning, helping remove dirt and stains while leaving a fresh lemon fragrance.",
    quantity: "1 Ltr.",
    price: 99,
  },

  {
    id: 2,
    name: "Dish Wash Liquid",
    category: "Dish Wash Liquid",
    image: "/images/dish-wash.png",
    description:
      "Effective grease-cutting dishwashing liquid for sparkling clean and fresh-smelling dishes.",
    quantity: "1 Ltr.",
    price: 109,
  },

  {
    id: 3,
    name: "Toilet Cleaner",
    category: "Toilet Cleaner",
    image: "/images/toilet-cleaner.png",
    description:
      "Thick cleaning formula designed to remove tough toilet stains and help maintain a hygienically clean toilet.",
    quantity: "1 Ltr.",
    price: 129,
  },

  {
    id: 4,
    name: "Detergent Liquid",
    category: "Detergent Liquid",
    image: "/images/detergent.png",
    description:
      "Liquid detergent designed to clean clothes, remove everyday stains, and keep fabrics fresh.",
    quantity: "1 Ltr.",
    price: 149,
  },

  {
    id: 5,
    name: "Glass Cleaner",
    category: "Glass Cleaner",
    image: "/images/glass-cleaner.png",
    description:
      "Cleaning solution for glass surfaces, mirrors, and windows, helping leave a clear and streak-free finish.",
    quantity: "500 ml",
    price: 89,
  },

  {
    id: 6,
    name: "Combo Pack",
    category: "Combo Pack",
    image: "/images/combo-pack.png",
    description:
      "Super Max 3-in-1 cleaning combo featuring Dish Wash Liquid, Toilet Cleaner, and Floor Cleaner for everyday cleaning needs.",
    quantity: "3 × 1 Ltr.",
    price: null,
  },
];

function Products() {
  return (
    <main className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-[#062b68] to-[#0753a3] px-5 py-16 text-center text-white">

        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-100">
            Super Max Cleaning Solutions
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Our Products
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#e50914]" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50">
            Explore our range of Super Max cleaning products
            for homes, offices, and everyday cleaning needs.
          </p>

        </div>

      </section>

      {/* PRODUCT CARDS */}
      <section className="bg-white px-5 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <h2 className="text-3xl font-black text-[#071b43] md:text-4xl">
              Explore Our Collection
            </h2>

            <div className="mx-auto mt-3 h-1 w-20 bg-[#e50914]" />

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Find the right cleaning solutions for your
              everyday household and workplace needs.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

export { products };

export default Products;
