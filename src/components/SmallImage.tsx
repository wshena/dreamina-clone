'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'
import SmallImageDownloadButton from './button/SmallImageDownloadButton';
import SmallImageOptionButton from './button/SmallImageOptionButton';
import SmallImageBookmarkButton from './button/SmallImageBookmarkButton';

const ImageOptions = () => {
  return (
    <div className="flex items-center">
      <SmallImageDownloadButton />
      <SmallImageOptionButton />
      <SmallImageBookmarkButton />
    </div>
  )
}

const SmallImage = ({ data }: { data: any | undefined }) => {
  const [hover, setHover] = useState<boolean>(false);
  const mouseEnter = () => setHover(true);
  const mouseLeave = () => setHover(false);

  if (!data) return null
  const decodedData = decodeURIComponent(data)
  const isValidBase64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(decodedData)
  
  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="relative w-full md:w-[35%] h-[240px] rounded-[10px] cursor-pointer">
      {isValidBase64 ? (
        <Image
          src={`data:image/webp;base64,${decodedData}`}
          alt='image-result'
          fill
          className="rounded-[10px]"
          decoding="async"
          style={{
            objectFit: 'cover'
          }}
        />
      ) : (
        <div className="bg-gray-200 w-full h-full rounded-[10px] animate-pulse" />
      )}

      {hover && (
        <div 
        className={cn(
          "z-30 absolute top-0 left-0 w-full h-full p-[1rem] rounded-[10px]",
          'transition-all duration-300 ease-in-out'
        )} style={{
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur( 0.5px )',
          WebkitBackdropFilter: 'blur( 0.5px )',
        }}>
          <div className="flex items-center justify-end">
            <ImageOptions />
          </div>
        </div>
      )}
    </div>
  )
}

export default SmallImage