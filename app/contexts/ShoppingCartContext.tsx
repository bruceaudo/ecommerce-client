"use client";
import { SetStateAction, createContext, useEffect, useState } from "react";

export type ShoppingCartProps = {
  products: Array<{}>;
  setProducts: React.Dispatch<SetStateAction<Array<{}>>>;
};

export const InitialShoppingCartState: ShoppingCartProps = {
  products: [],
  setProducts: () => {}
};

export const ShoppingCartContext = createContext<ShoppingCartProps>(
  InitialShoppingCartState
);

export type Props = {
  children: React.ReactNode;
};

export const ShoppingCartContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState(InitialShoppingCartState.products);

  const shoppingCartValues = {
    products,
    setProducts
  };

  useEffect(() => {
    const cartItem = localStorage.getItem("cart")
    if (cartItem !== null) {
      const data = JSON.parse(cartItem)
      setProducts(data)
    } 
  }, [])

  console.log(products)

  return (
    <ShoppingCartContext.Provider value={shoppingCartValues}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
