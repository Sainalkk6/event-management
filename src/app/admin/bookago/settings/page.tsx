"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Container from '../_components/Table'

const SettingsPage = () => {
    const {data} = useSession()
    const router = useRouter()

    const handleClick = ()=>router.push("/admin/auth/signup")

  return (
    <div className='flex pt-24 px-14 bg-[#f5f5f5] min-h-[93vh] font-sans w-full'>
        <Container/>
    </div>
  )
}

export default SettingsPage
