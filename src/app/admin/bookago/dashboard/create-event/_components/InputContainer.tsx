import { EventInputContainerPropType } from '@/types/types'
import React from 'react'

const InputContainer = ({label,type,handleBlur,handleChange,id,name,value}:EventInputContainerPropType) => {
  return (
    <div className='flex flex-col w-full gap-1'>
      <h4 className='text-base text-[#666]'>{label}</h4>
      <input className='h-14 p-4 rounded-xl border border-[#66666659] outline-none' value={value} type={type} onChange={handleChange} onBlur={handleBlur} id={id} name={name}  />
    </div>
  )
}

export default InputContainer
