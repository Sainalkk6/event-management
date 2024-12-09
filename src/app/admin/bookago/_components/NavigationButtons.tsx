"use client";
import { AdminDashboardNavigationButtonProp } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



const NavigationButtons = ({ Icon, label, pointer,onClick }: AdminDashboardNavigationButtonProp) => {
  const path = usePathname()
  const isActive = path.includes(pointer)

  return (
    <Link href={onClick ? "" : `/admin/bookago/${pointer}` } onClick={(e) => {
      if(onClick){
        onClick()
      }
    }} className={`flex font-poppins items-center ${isActive ? "bg-primaryText text-white" : "bg-white hover:bg-primaryText hover:text-white"} items-center justify-center  transition-colors duration-200 w-[50px] h-[50px] gap-6 rounded-2xl  `}>
      <Icon size={20} />
      {/* <span className="text-lg">{label}</span> */}
    </Link>
  );
};

export default NavigationButtons;
