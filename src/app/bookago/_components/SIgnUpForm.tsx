"use client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import FormInputContainer from "./FormInputContainer";
import { useRouter } from "next/navigation";
import { signupSchema } from "@/schema/signup-schema";
import ErrorMessage from "./ErrorMessage";

const SIgnUpForm = () => {
  const router = useRouter();
  const [hide, setHide] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  const { handleBlur, handleSubmit, errors, values, handleChange, touched } = useFormik({
    initialValues: { email: "", password: "", name: "" },
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:3000/api/users/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, password: values.password, name: values.name }),
      });
      const response = await res.json();

      if (response.status === 409) {
        setError(response.message);
      } else {
        router.push("/bookago/login");
      }
    },
    validationSchema: signupSchema,
  });


  useEffect(() => {
    if (errors.email || errors.name || errors.password || values.email.length === 0 || values.name.length === 0 || values.password.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setError("");
  }, [errors.email, errors.name, errors.password]);

  return (
    <form onSubmit={handleSubmit} className="w-full gap-5 flex flex-col">
      <div className="relative">
        <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} value={values.name} id="name" label="Username" name="name" needHide={false} type="text" />
        {touched.name && <ErrorMessage label={errors.name} />}
      </div>
      <div className="relative mb-4">
        <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="email" label="Email Address" name="email" needHide={false} type="text" value={values.email} />
        {touched.email && <ErrorMessage label={errors.email} />}
      </div>
      <div className="relative mb-3">
        <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="password" label="Password" name="password" needHide type={hide ? "text" : "password"} value={values.password} hide={hide} setHide={setHide} />
        {touched.password && <ErrorMessage label={errors.password} />}
      </div>
      <span className="text-red-500 text-base">{error}</span>
      <p className="text-[#333] text-base">
        By continuing , you agree to the <span className="text-[#111] underline">Terms of use</span> and <span className="text-[#111] underline">Privacy policy</span>
      </p>
      <button type="submit" disabled={disabled} className={`bg-[#1C325B] hover:bg-[#122547] text-[22px] font-medium flex items-center justify-center rounded-[32px] pt-[15px] pb-[16px]  text-white transition-all hover:scale-105 duration-200 disabled:hover:scale-100 disabled:opacity-50`}>
        Signup
      </button>
    </form>
  );
};

export default SIgnUpForm;
