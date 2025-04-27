import React from 'react'

const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='p-[1rem] rounded-[15px] bg-[#171a21] text-white w-full'>{children}</div>
  )
}

export default Card