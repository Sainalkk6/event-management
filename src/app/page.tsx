"use client";
import EventContainer from "@/components/EventContainer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const page = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full">
      <Navbar>
        <div className="flex items-center bg-white justify-center h-11 px-3  gap-2 rounded-[500px] border border-[#eee] max-w-[523px] w-full">
          <GoSearch />
          <input className="w-full outline-none border-none text-lg h-full bg-white rounded-xl" type="text" placeholder="Search here..." onChange={handleChange} value={search} />
        </div>
      </Navbar>
      <EventContainer route="/bookago/event" searchTerm={search}/>
    </div>
  );
};

export default page;
