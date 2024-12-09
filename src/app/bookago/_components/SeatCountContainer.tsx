"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdCloseFullscreen } from "react-icons/md";

interface SeatCountContainerProp {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  ref:React.RefObject<HTMLDivElement>
}

const SeatCountContainer = ({ count, setCount, id, setShowModal,ref }: SeatCountContainerProp) => {
  const images = ["/cycle.svg", "/scooter.svg", "/muscle.svg", "/car.svg", "/van.svg", "/bus.svg", "/tram.svg"];
  const [image, setImage] = useState(images[0]);
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [booked, setBooked] = useState(false);
  const router = useRouter();

  const { data } = useSession();

  const bookTickets = async () => {
    const response = await fetch("/api/booking/book-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId: id, userId: data?.user?.email,count }),
    });
    setBooked(true);
  };

  const handleSeatChange = (seat: number) => {
    setCount(seat);
    setImage(images[seat - 1]);
    if (seat >= 4 && seat < 6) {
      setImage(images[3]);
    } else if (seat >= 6 && seat <= 7) {
      setImage(images[4]);
    } else if (seat > 7 && seat <= 9) {
      setImage(images[5]);
    } else if (seat > 9) {
      setImage(images[6]);
    }
  };

  return (
    <div className="-mt-3 flex mx-10 sm:mx-0 w-full sm:w-[560px] text-black font-poppins py-8 px-10 flex-col items-center justify-center gap-6 rounded-2xl relative bg-white z-20 " ref={ref}>
      <button className="absolute hover:scale-75 transition-transform duration-200 right-5 top-5" onClick={() => setShowModal(false)}>
        <MdCloseFullscreen  size={30} />
      </button>
      <div className="flex justify-center items-center flex-col py-6 gap-16 border-b border-b-[#ffeaea] w-full ">
        {booked ? (
          (
            <div className="text-black font-poppins flex flex-col items-center gap-8">
              <div className="flex flex-col gap-5 items-center">
                <img src="/confirmation.svg" alt="" />
                <h1>Your booking has been placed!</h1>
              </div>
              <span>Thank you for Booking!</span>
            </div>
          )
        ) : (
          <>
            <h2 className="font-medium leading-loose text-xl">How Many Seats?</h2>
            <img src={image} className="h-[81px]" alt="vehicle" />
            <div className="flex sm:flex-row flex-col justify-center items-center gap-3">
              {seats.map((seat) => (
                <button onClick={() => handleSeatChange(seat)} className={`flex items-center justify-center h-[30px] w-[30px] p-1 rounded-full ${count === seat ? "bg-primaryText text-white" : "bg-white text-black"}`} key={seat}>
                  {seat}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <button
        onClick={() => {
          booked ? router.push("/bookago/my-bookings") : bookTickets();
        }}
        className="flex text-white items-center justify-center rounded-md bg-primaryText px-14 w-full py-2 hover:opacity-80 duration-200 transition-opacity"
      >
        {booked ? "View Events" : "Book Now"}
      </button>
    </div>
  );
};

export default SeatCountContainer;
