"use client";
import { ChangeEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import EventContainer from "../../../../components/EventContainer";

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
  return (
    <div className="flex w-full bg-[#f5f5f5]  pb-5 flex-col">
      <div className="flex items-center justify-center w-full py-3">
        <div className="flex h-12 px-3 items-center w-full gap-2 rounded-[500px] border-[#eee] border  bg-white max-w-[547px]">
          <IoSearchSharp size={18} />
          <input className="w-full outline-none border-none text-lg h-full bg-white rounded-xl" type="text" placeholder="Search here..." onChange={handleChange} value={searchTerm} />
        </div>
      </div>
      <EventContainer route="/admin/bookago/dashboard" searchTerm={searchTerm} />
    </div>
  );
};

export default page;
