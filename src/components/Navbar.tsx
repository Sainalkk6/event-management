"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import ModalButton from "./ModalButton";
import { useRouter } from "next/navigation";

const Navbar = ({ children }: { children?: ReactNode }) => {
  const session = useSession();
  const userName = session.data?.user?.name?.slice(0, 1).toUpperCase();
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeMenu = (e: any) => {
    if (showModal && !ref.current?.contains(e.target) && !divRef.current?.contains(e.target)) {
      setShowModal(false);
    }
  };

  if (typeof window !== undefined || typeof document !== undefined) {
    document.addEventListener("mousedown", closeMenu);
  }

  return (
    <div className="flex w-full justify-between font-poppins items-center px-5 py-5 ">
      <Link href={"/"} className="text-[#a00040] text-2xl font-light ">
        Booka<span className=" font-semibold">Go</span>
      </Link>
      {children}
      {userName && userName !== undefined ? (
        <div onClick={() => setShowModal(true)} className="h-10 flex items-center justify-center text-white font-bold text-lg w-10 rounded-[58px] bg-[#ff2b52] cursor-pointer">
          <span>{userName}</span>
        </div>
      ) : (
        <Link href={"/bookago/login"} className="flex transition-colors duration-300 items-center justify-center py-2 px-6 rounded-[4px] bg-primaryText  hover:bg-[#ff2b52] text-white text-sm ">
          Login
        </Link>
      )}

      {showModal && (
        <div ref={divRef} className="flex  items-center justify-center  absolute right-5 rounded-lg top-16 flex-col bg-white">
          <ModalButton label="My Bookings" onClick={() => router.push("/bookago/my-bookings")} />
          <ModalButton label="Sign Out" onClick={() => signOut({ callbackUrl: "/" })} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
