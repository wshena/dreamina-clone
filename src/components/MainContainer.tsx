'use client'
import { useAppDispatch } from '@/lib/redux/hooks'
import { setUserId } from '@/lib/redux/slice/utilitySlice';
import React, { useEffect } from 'react'

const MainContainer = ({children, userId}:{children:React.ReactNode, userId:string}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserId(userId))
  }, [userId]);

  return (
    <div className='max-w-[1400px] mx-auto'>{children}</div>
  )
}

export default MainContainer