
import React from "react";
import { Metadata } from "next";
import "../globals.css";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import LeftSidebar from "./root-ui/LeftSidebar";
import RightSidebar from "./root-ui/RightSidebar";
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
              <main className="min-h-screen px-8 py-5 grid lg:grid-cols-[_1fr_6fr_1fr] grid-cols-1 gap-8 pb-16">
                <LeftSidebar />
                <section className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3">
                  {children}
                </section>
                <RightSidebar />
              </main>
              <Footer />
            </body>
          </html>
        </ProductContextProvider>
      </SearchModalContextProvider>
    </ShoppingCartContextProvider>;
};
export default layout;
