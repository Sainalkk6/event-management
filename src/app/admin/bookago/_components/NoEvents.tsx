import Link from 'next/link'

const NoEvents = ({label,link}:{label:string,link:boolean}) => {
  return (
    <div className='flex w-full items-center justify-center pt-32'>
        <div className='flex flex-col w-[347px] items-center gap-9'>
            <img src="/file.svg" alt="" />
            <div className="flex flex-col items-center gap-3">
                <p className='text-black text-lg text-nowrap'>{label}</p>
               {link &&  <Link href={"/admin/bookago/dashboard/create-event"} className='flex items-center justify-center transition-opacity duration-200 hover:bg-[#e8506c] rounded-[4px] text-white bg-primaryText py-2 px-6'>Create Event</Link>}
            </div>
        </div>
      
    </div>
  )
}

export default NoEvents
