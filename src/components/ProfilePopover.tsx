import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

const ProfilePopover = () => {
  return (
    <Popover>
      <PopoverTrigger className='cursor-pointer'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className='mr-[30px] p-[1rem] border-none bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ' style={{
        backgroundColor: 'rgba(214, 241, 255, 0.08)',
        color: 'rgb(235, 248, 255)',
        outlineColor: 'rgba(224, 245, 255, 0.6)'
      }}>
        <div className="flex items-start flex-col gap-[15px]">
          <h1>Arthur Morgan</h1>
          <Button variant={'ghost'} className='w-full p-[.7rem] cursor-pointer'>Sign out</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ProfilePopover