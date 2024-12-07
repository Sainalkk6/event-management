import React from 'react'
import Navbar from '../_components/Navbar'

import AdminSignupForm from '../_components/AdminSignupForm'

const page = () => {
  return (
    <div className='flex w-full py-5 min-h-screen flex-col font-poppins'>
      <Navbar label='Login' route='login'/>
      <div className='flex items-center justify-center pt-10'>
        <AdminSignupForm/>
      </div>
    </div>
  )
}

export default page
