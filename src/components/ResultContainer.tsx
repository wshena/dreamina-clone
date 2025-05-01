import React from 'react'
import { DreaminaIcon } from './icon/Icon'
import SmallImage from './SmallImage'
import RepromptButton from './button/RepromptButton'
import RegenerateButton from './button/RegenerateButton'
import DeleteBatchButton from './button/DeleteBatchButton'
import ImageDetail from './ImageDetail'

const ResultContainer = ({image, prompt, id, onDelete, ratio}:{image:any, prompt:string, id:string, onDelete:any, ratio:string}) => {
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
          <p className='text-[.9rem]'>{prompt}</p>
        </div>
        <ImageDetail data={{
          prompt,
          image,
          ratio
        }}>
          <SmallImage data={image} />
        </ImageDetail>
        {/* <SmallImage data={image} /> */}
        <div className="flex items-center gap-[8px]">
          <RepromptButton />
          <RegenerateButton />
          <DeleteBatchButton batchId={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  )
}

export default ResultContainer