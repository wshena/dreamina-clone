'use client'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PencilIcon } from '../icon/Icon'
import { useAppDispatch } from '@/lib/redux/hooks'
import { setPrompt } from '@/lib/redux/slice/promptSlice'

const RepromptButton = ({prompt}:{prompt:string}) => {
  const dispatch = useAppDispatch();
  const handleReprompt = () => dispatch(setPrompt(prompt));
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleReprompt} className='p-[.5rem] cursor-pointer rounded-md hover:bg-gray-500/90 bg-gray-800'> <PencilIcon size={15} color='white' /> </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Reprompt</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default RepromptButton