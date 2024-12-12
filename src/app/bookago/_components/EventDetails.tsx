"use client";
import { EventCardPropType } from "@/types/types";
import React, { useRef, useState } from "react";
import { RiMapPinLine } from "react-icons/ri";
import dayjs from "dayjs";
import SeatCountContainer from "./SeatCountContainer";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginMessageContainer from "./LoginMessageContainer";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { dataQueryKeys } from "@/utils/querykey";

const EventDetails = ({ ...props }: EventCardPropType) => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const formattedDate = dayjs(props.date).format("dddd, MMMM D, YYYY h:mm A");
  const { data } = useSession();
  const price = props.price === 0 ? "Free" : `$${props.price}`;
  const ref = useRef<HTMLDivElement>(null)

  const unbookEvent = async () => {
    await fetch(`/api/booking/unbook-event?email=${data?.user?.email}&id=${props.id}`, {
      method: "DELETE",
    });
    router.push("/");
  };

  const {data:isExisting} = useQuery({
    queryKey:[dataQueryKeys.bookings],
    queryFn:async()=>{
      const response = await fetch(`/api/booking/booked?email=${data?.user?.email}&id=${props.id}`)
      const existing= await response.json()
      return existing
    }
  })
  
  const closeMenu = (e: any) => {
    if (showModal && !ref.current?.contains(e.target)) {
      setShowModal(false);
    }
  };


  if (typeof document !== "undefined") {
    document.addEventListener("mousedown", closeMenu);
  }
  return (
    <div className="flex w-full bg-[#fff] font-poppins flex-col items-center justify-center overflow-hidden">
      {showModal && <div className="flex min-h-[100vh]  top-0 w-full items-center justify-center overflow-hidden bg-black bg-opacity-80 absolute">{data?.user?.name === "" || data?.user === undefined ? <LoginMessageContainer ref={ref} setShowModal={setShowModal} /> : <SeatCountContainer ref={ref} setShowModal={setShowModal} id={props.id} count={count} setCount={setCount} />}</div>}
      <div className="flex max-w-[1140px] flex-col">
        <div className="sm:h-[588px] overflow-hidden">
          <img alt="Event Image" src={props.imageUrl} className="w-full max-w-[1030px] object-cover object-center" />
        </div>
        <div className="flex py-5 px-4 gap-[10px] flex-col">
          <div className="flex flex-col sm:flex-row items-center py-4 justify-center gap-[10px] border-b border-[#dbdbdb]">
            <div className="flex flex-col gap-[10px] flex-1">
              <h1 className="text-black text-2xl font-medium uppercase">{props.title}</h1>
              <p className="text-[#6c6c6c] text-base">{props.description}</p>
            </div>
            <button
              onClick={() => {
               isExisting && isExisting.existing ? unbookEvent() : setShowModal(true);
              }}
              className="flex max-h-[42px] items-center justify-center py-2 px-[60px] rounded bg-primaryText text-white hover:scale-105 hover:bg-pink-700 transition-all duration-200"
            >
              {isExisting && isExisting.existing ? "Cancel" : "Book"}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
            <div className="flex items-center opacity-80 text-[#3f7933] gap-[10px]">
              <RiMapPinLine />
              <span>{props.location}</span>
            </div>
            <div className="flex uppercase py-1 px-3 flex-1">{formattedDate}</div>
            <div className="inline-flex uppercase py-1 px-3 flex-1 text-green-600 text-lg">{price}</div>
            <Link className="flex max-h-[42px] items-center justify-center py-2 px-[60px] rounded bg-sky-400  text-white hover:scale-105 hover:bg-sky-600 transition-all duration-200" href={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
