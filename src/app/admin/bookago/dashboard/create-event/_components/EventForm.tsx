"use client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import InputContainer from "./InputContainer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { EventFormPropType } from "@/types/types";

const EventForm = ({ ...props }: EventFormPropType) => {
  const session = useSession();
  const router = useRouter();

  const { values, handleBlur, isSubmitting, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: { title: props.title || "", price: props.price || "", description: props.description || "", date: props.date || "", time: props.time || "", location: props.location || "", imageUrl: props.imageUrl || "" },
    onSubmit: async (values) => {
      const method = props.id ? "PUT" : "POST";
      const url = props.id ? `/api/events/update-event/${props.id}` : "/api/events/add-event";
      const body = props.id ? values : { ...values, user: session.data?.user?.email ?? "" };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      router.push("/admin/bookago/dashboard");
    },
  });
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("imageUrl", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (id?: number) => {
    await fetch(`/api/events/delete-event/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    router.push("/admin/bookago/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-5 font-poppins">
      <div className="flex flex-col gap-4">
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="title" label="Event Name" name="title" type="text" value={values.title} />
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="description" label="Description" name="description" type="text" value={values.description} />
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="date" label="Date" name="date" type="date" value={values.date} />
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="time" label="Time" name="time" type="time" value={values.time} />
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="location" label="Venue" name="location" type="text" value={values.location} />
        <InputContainer handleBlur={handleBlur} handleChange={handleChange} id="price" label="Price" name="price" type="text" value={values.price} />
        <input type="file" className="h-14 p-4 rounded-xl border border-[#66666659] outline-none" onChange={handleFileChange} id="imageUrl" name="imageUrl" onBlur={handleBlur} />
      </div>
      <div className={`flex w-full items-center  ${props.id ? "justify-between" : "justify-end"}`}>
        {props.id && (
          <button type="button" className="flex text-base items-center justify-center py-2 px-6 text-white rounded-[4px] bg-primaryText hover:bg-[#ee2c4f]" onClick={() => handleDelete(props.id)}>
            Delete
          </button>
        )}
        <button type="submit" disabled={!values.imageUrl || isSubmitting} className={`flex text-base items-center justify-center py-2 px-6 text-white rounded-[4px] bg-primaryText hover:bg-[#ee2c4f] ${(!values.imageUrl || isSubmitting) && "opacity-50 pointer-events-none"}`}>
          {isSubmitting ? "Publishing..." : "Publish Event"}
        </button>
      </div>
    </form>
  );
};

export default EventForm;
