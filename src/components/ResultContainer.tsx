import React from 'react'
import { DreaminaIcon } from './icon/Icon'
import SmallImage from './SmallImage'

const ResultContainer = ({image, prompt}:{image:any, prompt:string}) => {
  return (
    <div className="w-full flex items-start gap-[10px]">
      <div className="">
        <DreaminaIcon />
      </div>
      <div className='w-full flex flex-col gap-[15px]'>
        <div className="flex flex-col items-start gap-[3px]">
          <div className="flex items-center gap-[8px]">
            <span className='font-bold'>Dreamina | AI Images</span>
            <span className='text-gray-600 text-[1rem]'>29 April 2025, 12:39</span>
          </div>
          <p>{prompt}</p>
        </div>
        <SmallImage data={image?.data?.base64} />
      </div>
    </div>
  )
}

export default ResultContainer