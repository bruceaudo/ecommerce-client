"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSearchModalContext } from "../hooks/SearchModalContextHook";
import SearchModal from "./SearchModal";

type SearchFormProps = {};

const SearchForm: React.FC<SearchFormProps> = () => {
  const { open, setOpen } = useSearchModalContext();

  return (
    <>
       {open && <SearchModal />}
      <div onClick={() => {
        setOpen(prev => !prev)
      }} className="relative h-12 w-72 rounded-lg bg-gray-100 cursor-pointer flex items-center px-3 text-gray-400">
      <div>
        <p>Search for products</p>
        <MagnifyingGlassIcon className="w-5 h-5 absolute right-0 top-4 mr-3 text-gray-400" />
      </div>
      </div>
      </>
  );
};
export default SearchForm;
