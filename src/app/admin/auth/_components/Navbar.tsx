import Link from 'next/link'

const Navbar = ({route,label}:{route:string,label:string}) => {
  return (
    <div className='flex w-full items-center justify-between px-5'>
       <h1 className="text-[#a00040] text-[20px] font-light ">
        Booka<span className=" font-semibold">Go</span>
      </h1>
    </div>
  )
}

export default Navbar
