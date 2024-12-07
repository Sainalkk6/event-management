import React from "react";
import Navbar from "../_components/Navbar";
import LoginFormContainer from "../_components/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar />
      <div className="flex items-center justify-center pt-[72px]">
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
