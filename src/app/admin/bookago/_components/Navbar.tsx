import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full pt-4 pb-2.5 border-b-[#e3e3e3] border-b items-center justify-between font-poppins px-5">
      <h1 className="text-[#a00040] text-[24px] font-light ">
        Booka<span className=" font-semibold">Go</span>
      </h1>
      <Link className="flex items-center justify-center py-2 px-6 rounded bg-primaryText text-white hover:bg-[#a81f38] transition-colors duration-200" href={`/admin/bookago/dashboard/create-event`}>
        Add Event
      </Link>
    </div>
  );
};

export default Navbar;
