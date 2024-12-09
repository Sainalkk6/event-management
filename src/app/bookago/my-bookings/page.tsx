"use client";
import NoEvents from "@/app/admin/bookago/_components/NoEvents";
import EventCard from "@/components/EventCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { EventCardPropType } from "@/types/types";
import { dataQueryKeys } from "@/utils/querykey";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const page = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: [dataQueryKeys.bookings],
    queryFn: async () => {
      const response = await fetch("/api/booking/get-bookings");
      const data = await response.json();
      return data;
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  if (isLoading) return <Loader />;

  return (
    <div className="font-poppins flex flex-col min-h-screen ">
      <Navbar>
        <div className="flex items-center bg-white justify-center h-11 px-3  gap-2 rounded-[500px] border border-[#eee] max-w-[523px] w-full">
          <GoSearch />
          <input className="w-full outline-none border-none text-lg h-full bg-white rounded-xl" type="text" placeholder="Search here..." onChange={handleChange} value={search} />
        </div>
      </Navbar>
      {data && data.length === 0 ? (
        <NoEvents link={false} label="Nothing to see here..." />
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-6 px-5 py-5 grid-cols-1 lg:grid-cols-2">
          {data &&
            data.length > 0 &&
            data.map((event: EventCardPropType[], index: number) => <EventCard key={index} date={event[0].date} description={event[0].description} id={event[0].id} imageUrl={event[0].imageUrl} location={event[0].location} price={event[0].price} route={`/bookago/my-bookings/${event[0].id}`} time={event[0].time} title={event[0].title} />)}
        </div>
      )}
    </div>
  );
};

export default page;
