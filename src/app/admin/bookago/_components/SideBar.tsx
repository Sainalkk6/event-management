"use client";

import { PiChartBarHorizontalFill, PiSignOutBold } from "react-icons/pi";
import NavigationButtons from "./NavigationButtons";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";
import Cookies from "js-cookie"

const SideBar = () => {
  return (
    <div className="flex flex-col p-6 gap-[21px] pt-10 ">
      <NavigationButtons Icon={PiChartBarHorizontalFill} label="Dashboard" pointer="dashboard" />
      <NavigationButtons Icon={IoSettingsOutline} label="Settings" pointer="settings" />
      <NavigationButtons onClick={()=>{
      Cookies.remove("adminCode", { path: "/admin" });
      signOut(({ callbackUrl: "/admin/auth/login" }))
      }}  Icon={PiSignOutBold} label="Signout" pointer="auth" />
    </div>
  );
};

export default SideBar;
