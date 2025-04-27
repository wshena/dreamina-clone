import MainContainer from '@/components/MainContainer'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title: 'Dreamina',
  description: 'Dreamina clone'
}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <header className='bg-red-500'>
        <MainContainer>
          <nav className='w-full py-[1rem] px-[1rem] xl:px-0 flex items-center justify-between'>
            <Button variant={'default'} className='cursor-pointer' aria-label='back-button'>back</Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </nav>
        </MainContainer>
      </header>
      <main>
        <MainContainer>
          {children}
        </MainContainer>
      </main>
    </>
  )
}

export default layout