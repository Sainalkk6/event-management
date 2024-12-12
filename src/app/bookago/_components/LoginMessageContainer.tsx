import Link from 'next/link'
import React, { SetStateAction } from 'react'
import { MdOutlineClose } from 'react-icons/md'

interface LoginMessageContainerProp {
  ref:React.RefObject<HTMLDivElement>
  setShowModal:React.Dispatch<SetStateAction<boolean>>
}

const LoginMessageContainer = ({setShowModal,ref}:LoginMessageContainerProp) => {
  return (
    <div ref={ref} className='flex flex-col w-[560px] h-[426px] p-12 items-center justify-between gap-12 rounded-2xl border bg-white font-poppins text-center relative'>
      <button className='absolute right-5 top-5 hover:text-red-500' onClick={()=>setShowModal(false)}><MdOutlineClose size={25} /></button>
      <h1 className='text-3xl'>You arent logged in yet  &nbsp; &nbsp; &nbsp; Click the link below to Login</h1>
      <Link className='flex items-center justify-center bg-primaryText rounded-md py-2 px-16 text-white hover:scale-105 duration-200 transition-all ' href={"/bookago/login"}>Login</Link>
    </div>
  )
}

export default LoginMessageContainer
