import { Link } from "react-router-dom";

import type { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard = ({
  product,
}: Props) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:border-blue-500 shadow-lg"
    >
      {/* IMAGE */}
      <div className="h-60 bg-slate-950 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-sm text-slate-400 capitalize mb-2">
          {product.category}
        </p>

        <h2 className="text-lg font-bold line-clamp-1">
          {product.title}
        </h2>

        <p className="text-slate-400 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-black text-blue-400">
            ${product.price}
          </span>

          <span className="text-yellow-400">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;