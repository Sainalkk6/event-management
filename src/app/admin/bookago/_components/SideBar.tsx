"use client";

import { PiChartBarHorizontalFill, PiSignOutBold } from "react-icons/pi";
import NavigationButtons from "./NavigationButtons";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";

const SideBar = () => {
  const { data } = useSession();
  const isSuperAdmin = data?.user?.email === process.env.NEXT_PUBLIC_SUPER_ADMIN;

  return (
    <div className="sm:flex flex-col p-6 gap-[21px] pt-10 hidden">
      <NavigationButtons Icon={PiChartBarHorizontalFill} label="Dashboard" pointer="dashboard" />
      {isSuperAdmin && <NavigationButtons Icon={IoSettingsOutline} label="Settings" pointer="settings" />}
      <NavigationButtons
        onClick={() => {
          Cookies.remove("adminCode", { path: "/admin" });
          Cookies.remove("superAdmin", { path: "/admin" });
          signOut({ callbackUrl: "/admin/auth/login" });
        }}
        Icon={PiSignOutBold}
        label="Signout"
        pointer="auth"
      />
    </div>
  );
};

export default SideBar;
