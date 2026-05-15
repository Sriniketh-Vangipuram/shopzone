import {
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import type { Product } from "../types/product";

import type { CartItem } from "../types/cart";

import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export const CartProvider = ({
  children,
}: Props) => {
  const [cartItems, setCartItems] =
    useState<CartItem[]>(() => {
      const stored =
        localStorage.getItem("cart");

      return stored
        ? JSON.parse(stored)
        : [];
    });

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (
    product: Product
  ) => {
    setCartItems((prev) => {
      const existing =
        prev.find(
          (item) =>
            item.id === product.id
        );

      // already exists
      if (existing) {
        toast.success(
          "Quantity updated"
        );
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      // new item
      toast.success(
  "Added to cart"
);
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE
  const removeFromCart = (
    id: number
  ) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE
  const increaseQty = (
    id: number
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (
    id: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  // TOTAL PRICE
  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  // TOTAL COUNT
  const cartCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};