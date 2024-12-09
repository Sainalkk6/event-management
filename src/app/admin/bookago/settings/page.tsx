"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Container from '../_components/Table'

const SettingsPage = () => {
    const router = useRouter()
  return (
    <div className='flex pt-24 px-14 bg-[#f5f5f5] min-h-[93vh] font-sans w-full'>
        <Container/>
    </div>
  )
}

export default SettingsPage
