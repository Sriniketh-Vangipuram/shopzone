import {
  useEffect,
  useState,
} from "react";

import ProductCard from "../components/ProductCard";

import { fetchProducts } from "../services/api";

import type { Product } from "../types/product";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  useEffect(() => {
    const loadProducts =
      async () => {
        try {
          const data = await fetchProducts();

          setProducts(data);
        } catch {
          setError(
            "Failed to load products"
          );
        } finally {
          setLoading(false);
        }
      };

    loadProducts();
  }, []);


  const filteredProducts =
  products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

  if (loading) {
  return (
    <div className="min-h-screen px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-3xl h-[400px] animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

  // ERROR
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-black">
          Shop Collection
        </h1>

        <p className="text-slate-400 mt-3">
          Explore premium products
          with modern shopping
          experience.
        </p>
      </div>

      <div className="mb-10">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="w-full md:w-[400px] bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
  />
</div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
  <div className="text-center py-20 text-slate-400 text-2xl">
    No products found.
  </div>
)}
    </div>
  );
};

export default Shop;