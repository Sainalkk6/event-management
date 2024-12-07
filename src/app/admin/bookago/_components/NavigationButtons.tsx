"use client";
import { AdminDashboardNavigationButtonProp } from "@/types/types";
import Link from "next/link";
import { useState } from "react";



const NavigationButtons = ({ Icon, label, pointer,onClick }: AdminDashboardNavigationButtonProp) => {
  const [active, setActive] = useState("dashboard");

  return (
    <Link href={onClick ? "" : "/admin/bookago/dashboard" } onClick={(e) => {
      e.preventDefault()
      setActive(pointer)
      if(onClick){
        onClick()
      }
    }} className={`flex font-poppins items-center ${active === pointer ? "bg-primaryText text-white" : "bg-white hover:bg-primaryText hover:text-white"} items-center justify-center  transition-colors duration-200 w-[50px] h-[50px] gap-6 rounded-2xl  `}>
      <Icon size={20} />
      {/* <span className="text-lg">{label}</span> */}
    </Link>
  );
};

export default NavigationButtons;
