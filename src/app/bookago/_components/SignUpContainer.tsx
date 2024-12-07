import Link from "next/link";
import React from "react";
import SIgnUpForm from "./SIgnUpForm";

const SignUpContainer = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-6 max-w-[580px]">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-[#333] text-[32px] font-medium">Sign up</h1>
        <SIgnUpForm />
      </div>
      <div className="flex flex-end flex-col justify-end">
        <p className="text-[#666] text-base">
          Already have an Account?
          <Link href={"/bookago/login"} className="text-base font-medium underline ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpContainer;
