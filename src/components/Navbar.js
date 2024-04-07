import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul className="m-5 ml-10 space-x-4 font-bold flex justify-start shadow-lg p-3 mb-5 bg-body rounded">
        <Link href="/">
          <li className="hover:cursor-pointer hover:text-red-600">Add</li>
        </Link>
        <Link href="/show">
          <li className="hover:cursor-pointer hover:text-red-600">Show</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
