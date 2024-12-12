"use client";
import ErrorMessage from "@/app/bookago/_components/ErrorMessage";
import FormInputContainer from "@/app/bookago/_components/FormInputContainer";
import { signupSchema } from "@/schema/admin-signup-schema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminSignupForm = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: { email: "", password: "", confirmPass: "" },
    onSubmit: async (values) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/users/admin/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      const response = await res.json();

      if (response.status === 409) {
        setError(response.message);
      } else {
        router.push("/admin/bookago/dashboard");
      }
    },
    validationSchema: signupSchema,
  });

  useEffect(() => {
    setError("");
  }, [values.email]);

  useEffect(() => {
    if (errors.email || errors.confirmPass || errors.password || values.email.length === 0 || values.password.length === 0 || values.confirmPass.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setError("");
  }, [errors, touched]);

  return (
    <div className="flex flex-col gap-12 max-w-[580px] w-full">
      <div className="flex flex-col gap-8 max-w-[580px] w-full">
        <h1 className="text-black text-[32px] font-medium">Create Admin ID</h1>
        <form className="gap-8 flex flex-col relative" onSubmit={handleSubmit}>
          <div className="relative">
            <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="email" label="Email Address" name="email" needHide={false} type="text" value={values.email} />
            {touched.email && <ErrorMessage label={errors.email} />}
          </div>
          <div className="relative">
            <FormInputContainer handleBlur={handleBlur} handleChange={handleChange} id="password" label="Set Password" name="password" needHide type={!hide ? "text" : "password"} value={values.password} hide={hide} setHide={setHide} />
            {touched.password && <ErrorMessage label={errors.password} />}
          </div>
          <div className="relative">
            <FormInputContainer needHide={false} handleBlur={handleBlur} handleChange={handleChange} id="confirmPass" label="Re-enter your password" name="confirmPass" type={!hide ? "text" : "password"} value={values.confirmPass} />
            {touched.confirmPass && <ErrorMessage label={errors.confirmPass} />}
          </div>
          {/* <span className="text-red-600 text-lg">{error}</span> */}
          {error && touched.email && <span className="text-red-600 text-lg">{error}</span>}
          <button type="submit" disabled={disabled} className={`bg-[#1C325B] hover:bg-[#122547] text-[22px] font-medium flex items-center justify-center rounded-[32px] pt-[15px] pb-[16px]  text-white transition-all hover:scale-105 duration-200 disabled:hover:scale-100 disabled:opacity-50`}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupForm;
