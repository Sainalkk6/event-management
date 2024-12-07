import React from "react";
import Navbar from "../_components/Navbar";
import SignUpContainer from "../_components/SignUpContainer";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-5 font-poppins">
      <Navbar />
      <div className="flex items-center justify-center">
        <SignUpContainer />
      </div>
    </div>
  );
};

export default page;
