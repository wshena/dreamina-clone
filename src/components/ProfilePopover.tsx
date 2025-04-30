'use client'
import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { supabase } from '@/utils/supabase/client'

const ProfilePopover = ({user}:{user:any}) => {
  const [loading, setLoading] = useState<boolean>(false);

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
          <h1>{user?.email}</h1>
          <Button variant={'ghost'} onClick={async () => {
            setLoading(true);
            try {
              const { error } = await supabase.auth.signOut();
              
              if (error) {
                console.log(error);
                return
              }

              window.location.href = '/sign-in';
            } catch (error) {
              console.log(error)
            } finally {
              setLoading(false)
            }
          }} className='w-full p-[.7rem] cursor-pointer'>
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : ('Sign out')}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ProfilePopover