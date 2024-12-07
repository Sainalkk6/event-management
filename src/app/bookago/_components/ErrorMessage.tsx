import React from 'react'

const ErrorMessage = ({label}:{label:string | undefined}) => <span className='text-red-500 text-sm absolute text-end -bottom-7 right-2'>{label}</span>

export default ErrorMessage
