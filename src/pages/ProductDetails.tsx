import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import type { Product } from "../types/product";

import { fetchSingleProduct } from "../services/api";

import { useCart } from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct =
      async () => {
        try {
          if (!id) return;

          const data = await fetchSingleProduct(id);

          setProduct(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }
return (
  <div className="min-h-screen max-w-7xl mx-auto px-6 py-16">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* IMAGE */}
      <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-10">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div>
        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          {product.category}
        </p>

        <h1 className="text-6xl font-black mt-4 leading-tight">
          {product.title}
        </h1>

        <p className="text-slate-400 text-lg mt-8 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-10 flex items-center gap-6">
          <span className="text-5xl font-black text-green-400">
            ${product.price}
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-xl text-yellow-400 font-bold">
            ⭐ {product.rating}
          </span>
        </div>

        <button
          onClick={() =>
            addToCart(product)
          }
          className="mt-12 bg-blue-600 hover:bg-blue-700 transition-all px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
);
}
export default ProductDetails;