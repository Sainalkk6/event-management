import React from 'react'
import Navbar from '../_components/Navbar'
import LoginFormContainer from '@/app/bookago/_components/LoginFormContainer'
import AdminLoginForm from '../_components/AdminLoginForm'

const page = () => {
  return (
    <div className='flex w-full py-5 min-h-screen flex-col font-poppins'>
      <Navbar label='Signup' route='signup'/>
      <div className='flex items-center justify-center pt-10'>
        <AdminLoginForm/>
      </div>
    </div>
  )
}

export default page
