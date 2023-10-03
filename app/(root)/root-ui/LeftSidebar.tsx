import React from "react";

type LeftSidebarProps = {};

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  return (
    <nav className="hidden lg:block">
          <h2 className="font-semibold mb-2">Categories</h2>
          <p>All</p>
    </nav>
  );
};
export default LeftSidebar;
