import Link from "next/link";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex w-full h-[72px] justify-between items-center px-10 ">
      <Link href={"/"}>
        <IoMdArrowBack size={25} />
      </Link>
      <h1 className="text-[#a00040] text-[20px] font-light ">
        Booka<span className=" font-semibold">Go</span>
      </h1>
    </div>
  );
};

export default Navbar;
