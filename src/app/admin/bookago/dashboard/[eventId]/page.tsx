import EventForm from "../create-event/_components/EventForm";

type tParams = Promise<{ eventId: string }>;

const page = async ({ params }: { params: tParams }) => {
  const { eventId } = await params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/events/get-event/${eventId}`);
  const res = await data.json();

  return (
    <div className="flex pt-5 pl-14 w-full bg-[#f5f5f5] mr-5 sm:mr-0">
      <div className="flex gap-6 max-w-[580px] flex-col w-full">
        <h1 className="text-2xl font-medium">Edit Event</h1>
        <div className="flex flex-col gap-4">
          <EventForm {...res} />
        </div>
      </div>
    </div>
  );
};

export default page;