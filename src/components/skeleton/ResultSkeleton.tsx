import React from 'react'
import SmallImageSkeleton from './SmallImageSkeleton'
import { DreaminaIcon } from '../icon/Icon'
import { Skeleton } from '../ui/skeleton'

const ResultSkeleton = () => {
  return (
    <div className="w-full flex items-start gap-[10px]">
      <div className="">
        <DreaminaIcon />
      </div>
      <div className='w-full flex flex-col gap-[15px]'>
        <Skeleton className='w-[30%] md:w-[20%] h-3' />
        <Skeleton className='w-full h-3' />
        <Skeleton className='w-[50%] h-3' />
        {/* mobile */}
        <div className="w-full flex md:hidden flex-col gap-[15px] items-start">
          <SmallImageSkeleton />
          <SmallImageSkeleton />
        </div>
        {/* desktop */}
        <div className="w-full hidden md:flex flex-wrap gap-[15px] items-center">
          <SmallImageSkeleton />
          <SmallImageSkeleton />
          <SmallImageSkeleton />
          <SmallImageSkeleton />
        </div>
      </div>
    </div>
  )
}

export default ResultSkeleton