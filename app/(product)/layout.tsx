import { Metadata } from "next";
import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import "../globals.css";
import { ProductContextProvider } from "../contexts/ProductContext";
import { SearchModalContextProvider } from "../contexts/SearchModalContext";
import { ShoppingCartContextProvider } from "../contexts/ShoppingCartContext";

export const metadata: Metadata = {
  title: "ShopBay",
  description: "The largest online bookshop in Kenya"
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <ShoppingCartContextProvider>
      <SearchModalContextProvider>
        <ProductContextProvider>
          <html lang="en">
            <body className="relative h-screen w-full">
              <Navbar />
              <main className="min-h-screen px-8 py-5">
                {children}
              </main>
              <Footer />
            </body>
          </html>
        </ProductContextProvider>
      </SearchModalContextProvider>
    </ShoppingCartContextProvider>;
};
export default layout;
