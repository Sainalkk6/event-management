"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dataQueryKeys } from "@/utils/querykey";
import EventDetails from "../../_components/EventDetails";
import Loader from "@/components/Loader";

const EventPage = ({ params }: any) => {
  const { eventId } = params;
  const { data, isLoading } = useQuery({
    queryKey: [dataQueryKeys.events, eventId],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/events/get-event/${eventId}`);
      const data = response.json();
      return data;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="flex min-h-screen w-full flex-col font-poppins">
      <Navbar />
      {data && <EventDetails {...data} />}
    </div>
  );
};

export default EventPage;
