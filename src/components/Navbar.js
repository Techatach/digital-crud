import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <ul className="m-5 ml-10 space-x-5 font-bold flex justify-center shadow-lg p-3 mb-5 bg-body rounded">
        <Link href="/hero">
          <li className="hover:cursor-pointer hover:text-red-600">
            กรอกข้อมูล
          </li>
        </Link>
        <Link href="/show">
          <li className="hover:cursor-pointer hover:text-red-600">
            แสดงรายการข้อมูล
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
