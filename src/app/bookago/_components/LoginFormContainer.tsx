import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-6 max-w-[580px]">
      <div className="flex flex-col gap-8 w-full">
        <h1 className="text-[#333] text-[32px] font-medium">Log in</h1>
        <LoginForm />
      </div>
      <div className="flex flex-end flex-col justify-end">
        <p className="text-[#666] text-base">
          Dont have an account?
          <Link href={"/bookago/signup"} className="text-base font-medium underline ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginFormContainer;
