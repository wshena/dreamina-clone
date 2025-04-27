import React from 'react'
import { Skeleton } from '../ui/skeleton'

const SmallImageSkeleton = () => {
  return (
    <Skeleton className='w-full h-[170px] md:w-[150px] md:h-[150px] lg:w-[140px] xl:w-[210px] lg:h-[140px] xl:h-[210px] rounded-[10px]' />
  )
}

export default SmallImageSkeleton