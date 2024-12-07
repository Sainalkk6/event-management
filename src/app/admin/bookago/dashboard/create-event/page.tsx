import React from 'react'
import EventForm from './_components/EventForm'

const page = () => {
  return (
    <div className='flex pt-5 pl-14 w-full bg-[#f5f5f5]'>
        <div className="flex gap-6 max-w-[580px] flex-col w-full">
            <h1 className='text-2xl font-medium'>Create an Event</h1>
            <div className="flex flex-col gap-4">
                <EventForm/>
            </div>
        </div>
      
    </div>
  )
}

export default page
