import MainContainer from '@/components/MainContainer'
import ProfilePopover from '@/components/ProfilePopover'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata:Metadata = {
  title: 'Dreamina',
  description: 'Dreamina clone'
}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50'>
        <MainContainer>
          <nav className='w-full py-[1rem] px-[1rem] 2xl:px-0 flex items-center justify-between'>
            <Link href={'/'}>
              <Button variant={'default'} className='cursor-pointer' aria-label='back-button'>back</Button>
            </Link>
            <ProfilePopover />
          </nav>
        </MainContainer>
      </header>

      <main className='pt-[70px] px-[.5rem] md:px-[1rem] 2xl:px-0'>
        <MainContainer>
          {children}
        </MainContainer>
      </main>
    </>
  )
}

export default layout