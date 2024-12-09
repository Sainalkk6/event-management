"use client";
import FormInputContainer from "@/app/bookago/_components/FormInputContainer";
import { ErrorMessage, useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminLoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const { handleBlur, handleChange, values, handleSubmit } = useFormik({
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
        } else {
          if(values.email === process.env.NEXT_PUBLIC_SUPER_ADMIN){
            document.cookie = `superAdmin=${process.env.NEXT_PUBLIC_SUPER_ADMIN_SESSION_CODE}; max-age=3600;`
          }
          document.cookie = `adminCode=${process.env.NEXT_PUBLIC_ADMIN_SESSION_CODE}; path=/admin`
          router.push("/admin/bookago/dashboard");
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
    <div className="flex flex-col gap-12 max-w-[580px] w-full">
      <div className="flex flex-col gap-8 max-w-[580px] w-full">
        <h1 className="text-black text-[32px] font-medium">Admin Login</h1>
        <form className="gap-8 flex flex-col relative" onSubmit={handleSubmit}>
          <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="email" label="Email Address" name="email" needHide={false} type="text" value={values.email} />
          <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="password" label="Set Password" name="password" needHide type={!hide ? "text" : "password"} value={values.password} hide={hide} setHide={setHide} />
          <span className="text-red-600 text-lg">{error}</span>

          <button type="submit" disabled={disabled} className={`bg-[#1C325B] hover:bg-[#122547] text-[22px] font-medium flex items-center justify-center rounded-[32px] pt-[15px] pb-[16px]  text-white transition-all hover:scale-105 duration-200 disabled:hover:scale-100 disabled:opacity-50`}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
