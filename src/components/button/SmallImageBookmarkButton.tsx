import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BookmarkIcon } from '../icon/Icon'

const SmallImageBookmarkButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className='p-[.5rem] cursor-pointer hover:bg-gray-500/90 bg-[#171a21]'> <BookmarkIcon size={15} color='white' /> </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Bookmark</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SmallImageBookmarkButton