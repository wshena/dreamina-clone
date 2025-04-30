import AuthForm from '@/components/AuthForm'
import React from 'react'

const page = () => {
  return (
    <div className='w-[80%] md:w-[50%] lg:w-[30%] 2xl:w-[20%] p-[1rem] rounded-[10px] flex flex-col items-center gap-[20px] bg-[#171a21]'>
      {/* <Logo /> */}
      <h1>Dreamina</h1>
      <AuthForm type='sign-up' />
    </div>
  )
}

export default page