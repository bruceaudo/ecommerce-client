"use client"
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import React from "react";

type MenuBarProps = {};

const MenuBar: React.FC<MenuBarProps> = () => {
  return (
    <div className="lg:hidden cursor-pointer">
      <Bars3BottomRightIcon className="w-6 h-6" />
    </div>
  );
};
export default MenuBar;
