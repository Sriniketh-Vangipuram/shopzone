import { Link } from "react-router-dom";

import {
  ShoppingCart,
  LogOut,
} from "lucide-react";

import { useCart } from "../hooks/useCart";

import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { cartCount } =
    useCart();

  const {
    isLoggedIn,
    logout,
  } = useAuth();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-black tracking-tight"
        >
          ShopZone
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-blue-400 transition-all"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-blue-400 transition-all"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-400 transition-all"
          >
            Contact
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative hover:scale-110 transition-all"
          >
            <ShoppingCart size={28} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs min-w-[22px] h-[22px] rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {isLoggedIn && (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 transition-all p-2 rounded-xl"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;