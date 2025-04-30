import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RedoIcon } from '../icon/Icon'

const RegenerateButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className='p-[.5rem] cursor-pointer rounded-md hover:bg-gray-500/90 bg-gray-800'> <RedoIcon size={15} color='white' /> </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Regenerate Image</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default RegenerateButton