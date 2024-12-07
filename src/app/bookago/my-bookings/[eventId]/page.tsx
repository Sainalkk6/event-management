"use client";
import { use } from "react";
import Navbar from "@/components/Navbar";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dataQueryKeys } from "@/utils/querykey";
import EventDetails from "../../_components/EventDetails";
import Loader from "@/components/Loader";

const EventPage = ({ params }: { params: Promise<{ eventId: string }> }) => {
  const { eventId } = use(params);
  const { data, isLoading } = useQuery({
    queryKey: [dataQueryKeys.events, eventId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/events/get-event/${eventId}`);
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
