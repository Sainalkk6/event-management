import { ModalButtonPropType } from '@/types/types'
import React from 'react'

const ModalButton = ({onClick,label}:ModalButtonPropType) => {
  return (
    <button onClick={onClick} className='bg-white hover:bg-primaryText flex items-center text-black hover:text-white justify-center border-b border-b-slate-300 text-lg h-16 w-48 hover:rounded-md transition-all duration-200'>
      {label}
    </button>
  )
}

export default ModalButton
