import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { OptionsIcon } from '../icon/Icon'

const SmallImageOptionButton = () => {
  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <button 
                className='p-[.5rem] cursor-pointer hover:bg-gray-500/90 bg-[#171a21]'
                aria-label="More options"
              >
                <OptionsIcon size={15} color="white" />
              </button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <span>Show More</span>
          </TooltipContent>
        </Tooltip>

        <PopoverContent 
          className='p-2 bg-[#171a21] border-none shadow-lg w-fit'
          align="end"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2 text-[.8rem]">
            <button className="text-destructive hover:bg-accent p-1 text-left rounded-sm">
              Delete
            </button>
            <button className="text-white hover:bg-accent p-1 text-left rounded-sm">
              Report
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}

export default SmallImageOptionButton