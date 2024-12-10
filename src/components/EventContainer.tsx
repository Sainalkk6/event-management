"use client";
import { EventCardPropType } from "@/types/types";
import { dataQueryKeys } from "@/utils/querykey";
import { useQuery } from "@tanstack/react-query";
import NoEvents from "../app/admin/bookago/_components/NoEvents";
import EventCard from "./EventCard";
import Loader from "./Loader";

const EventContainer = ({ searchTerm, route }: { searchTerm: string; route: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: [dataQueryKeys.events],
    queryFn: async () => {
      const httpResponse = await fetch("/api/events/get-events");
      const data = await httpResponse.json();
      return data;
    },
  });

  if (isLoading) return <Loader />;

  const filteredData = Array.isArray(data) && data.filter((event: EventCardPropType) => event.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) || event.location.toLowerCase().includes(searchTerm.toLowerCase().trim()) || event.date.includes(searchTerm.toLowerCase().trim()) || event.time.includes(searchTerm.toLowerCase().trim()));

  const events = searchTerm !== "" ? filteredData : data;

  if (events.length < 1) return <NoEvents link={false} label="Couldnt find what you are looking for" />;

  return (
    <div className="min-h-[90vh] w-full ">
      {!data || data.length === 0 ? (
        <NoEvents link label="There are no events scheduled at the moment." />
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 gap-6 px-5 py-5 grid-cols-1 lg:grid-cols-2">
          {Array.isArray(events) && events.map((event: EventCardPropType, index: number) => (
            <EventCard price={event.price} id={event.id} route={`${route}/${event.id}`} date={event.date} description={event.description} imageUrl={event.imageUrl} location={event.location} time={event.time} title={event.title} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventContainer;
