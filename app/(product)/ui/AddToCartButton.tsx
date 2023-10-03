"use client";
import { useShoppingCartContext } from "@/app/hooks/ShoppingCartContextHook";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type AddToCartButtonProps = {
  title: string;
  price: string;
  imageURL: string;
  id: string;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  title,
  price,
  imageURL,
  id
}) => {
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useShoppingCartContext();

  const addToCart = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/v1/cart?cart=${id}`,
        {
          method: "POST"
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }
      const data = await response.json();
      setProducts([...products, data.body]);
      localStorage.setItem("cart", JSON.stringify([...products, data.body]))
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error: ", error);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={addToCart}
      className="w-full bg-green-500 font-semibold text-white rounded-full flex items-center justify-center h-12"
    >
      <PlusIcon className="w-8 h-8" /> {loading ? "Adding..." : "Add To Cart"}
    </button>
  );
};
export default AddToCartButton;
