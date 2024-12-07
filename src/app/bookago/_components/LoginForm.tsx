"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import FormInputContainer from "./FormInputContainer";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { cookies } from "next/headers";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (!res?.ok) {
          setError("Invalid Credentials");
        } else{
          document.cookie = `authenticatedUser=${process.env.NEXT_PUBLIC_USER_SESSION_CODE}; path=/`;

          router.push("/");
        }
      } catch (err) {
        return err;
      }
      
    },
  });

  useEffect(() => {
    if (values.email.length > 0 && values.password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setError("");
  }, [values]);

  return (
    <form onSubmit={handleSubmit} className="w-full gap-5 flex flex-col">
      <FormInputContainer needHide={false} handleBlur={handleBlur} handleChange={handleChange} id="email" label="Email address" name="email" type="text" value={values.email} />
      <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="password" label="Password" name="password" needHide type={hide ? "password" : "text"} value={values.password} hide={hide} setHide={setHide} />
      <span className="text-red-500 text-lg">{error}</span>
      <p className="text-[#333] text-base">
        By continuing , you agree to the <span className="text-[#111] underline">Terms of use</span> and <span className="text-[#111] underline">Privacy policy</span>
      </p>
      <button type="submit" disabled={disabled} className={`bg-[#1C325B] hover:bg-[#122547] text-[22px] font-medium flex items-center justify-center rounded-[32px] pt-[15px] pb-[16px]  text-white transition-all hover:scale-105 duration-200 disabled:hover:scale-100 disabled:opacity-50`}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
