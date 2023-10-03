"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useSearchModalContext } from "../hooks/SearchModalContextHook";
import SearchModal from "./SearchModal";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  const { open, setOpen } = useSearchModalContext();

  return (
    <>
      {open && <SearchModal />}
      <div onClick={() => {
        setOpen(prev => !prev)
      }} className="lg:hidden cursor-pointer">
      <MagnifyingGlassIcon className="w-5 h-5 font-semibold" />
      </div>
      </>
  );
};
export default SearchBar;
