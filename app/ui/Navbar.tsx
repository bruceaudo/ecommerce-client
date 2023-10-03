
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";
import SearchForm from "./SearchForm";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import Link from "next/link";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  
  return <nav className="h-16 flex justify-between items-center px-8">
      <div>
        <Link href={"/"} className="text-2xl font-semibold">
          SHOPBAY
        </Link>
      </div>
      <div className="lg:flex hidden gap-x-5">
        <SearchForm />
        <button className="h-12 w-fit px-5 border rounded-lg items-center justify-center hover:bg-gray-200">
          Sign up
        </button>
        <button>Log in</button>
      </div>
      <div className="flex items-center gap-5">
        <SearchBar />
        <Link href={"/cart"}>
          <button className="h-12 w-12 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <ShoppingBagIcon className="w-4 h-4" />
          </button>
        </Link>
        <MenuBar />
      </div>
    </nav>;
};
export default Navbar;
