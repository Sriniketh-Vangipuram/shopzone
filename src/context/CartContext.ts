import { createContext } from "react";

import type { Product } from "../types/product";

import type { CartItem } from "../types/cart";

export interface CartContextType {
  cartItems: CartItem[];

  addToCart: (
    product: Product
  ) => void;

  removeFromCart: (
    id: number
  ) => void;

  increaseQty: (
    id: number
  ) => void;

  decreaseQty: (
    id: number
  ) => void;

  totalPrice: number;

  cartCount: number;
}

export const CartContext =
  createContext<
    CartContextType | undefined
  >(undefined);