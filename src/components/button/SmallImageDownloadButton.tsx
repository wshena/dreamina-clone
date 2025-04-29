import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DownloadIcon } from '../icon/Icon'

const SmallImageDownloadButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className='p-[.5rem] cursor-pointer hover:bg-gray-500/90 bg-[#171a21]'> <DownloadIcon size={15} color='white' /> </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Download</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SmallImageDownloadButton