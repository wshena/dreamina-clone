import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PencilIcon } from '../icon/Icon'

const RepromptButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className='p-[.5rem] cursor-pointer rounded-md hover:bg-gray-500/90 bg-gray-800'> <PencilIcon size={15} color='white' /> </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Reprompt</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default RepromptButton