import React from 'react'

interface CustomButtonProps{
    label:string;
    onClick:()=>void
}

const CustomButton = ({label,onClick}:CustomButtonProps) => <button className="bg-primaryText flex items-center justify-center rounded px-6 py-2 text-white" onClick={onClick}>{label}</button>
export default CustomButton
