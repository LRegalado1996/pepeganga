import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartProduct, ProductInterface } from "@/interfaces";

interface State {
  cart: CartProduct[];

  getTotalNumber: () => number;
  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };

  addProductTocart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: ProductInterface) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      //methods
      getTotalNumber: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();
        const total = cart.reduce((subTotal, item) => subTotal + item.price * item.quantity, 0);
        const tax = total * 0.1803;
        const subTotal = total - tax;
        const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

        return { subTotal, tax, total, itemsInCart };
      },

      addProductTocart: (product: CartProduct) => {
        const { cart } = get();
        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();
        const updatedCartProducts = cart
          .map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);

        set({ cart: updatedCartProducts });
      },

      removeProduct: (product: ProductInterface) => {
        const { cart } = get();
        const updatedCartProducts = cart.filter((item) => !(item.id === product.id));

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
