"use client";
import { EventCardPropType } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const EventCard = ({ date, description, route, imageUrl, id, price, location, time, title }: EventCardPropType) => {
  const router = useRouter();
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const newTime = time.slice(0, 2);
  const minutes = time.slice(3, 5);
  let formattedTime = Number(newTime) % 12;
  const meridian = formattedTime >= 12 ? "am" : "pm";
  formattedTime = Number(newTime) % 12 === 0 ? 12 : formattedTime;
  const dater = date.slice(5, 7);
  const month = months[Number(dater) - 1];
  const day = date.slice(8, 10);
  const year = date.slice(0, 4);
  const rate = price === 0 ? "Free" : `$${price}`;

  return (
    <div className="flex group flex-col w-full font-poppins rounded-3xl cursor-pointer min-w-[355px] bg-white border hover:shadow-sm transition-all duration-200 " onClick={() => router.push(route)}>
      <div className="overflow-clip h-[475px] flex items-center justify-center rounded-3xl">
        <img src={imageUrl} alt="Event Image" className="rounded-3xl h-[475px] group-hover:h-[500px]   object-cover w-full transition-all duration-500 " />
      </div>
      <div className="flex flex-col min-h-[306px] py-7 px-4">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-0.5">
            <span className="text-[#4f4f4f] text-sm font-medium uppercase leading-[120%]">
              {month} {day} {year} , {formattedTime}:{minutes} {meridian}
            </span>
            <span className="text-[#692f2f] text-3xl font-medium leading-[120%]">{title}</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f5800]">
            <CiLocationOn size={20} />
            <span className="text-base">{location}</span>
          </div>
          <span className="text-[#0f5800]">{rate}</span>
        </div>
        <p className="text-[#5f5f5f] text-base">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
