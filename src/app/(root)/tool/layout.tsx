import { LeftArrowIcon } from '@/components/icon/Icon'
import MainContainer from '@/components/MainContainer'
import ProfilePopover from '@/components/ProfilePopover'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/utils/actions/auth.action'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata:Metadata = {
  title: 'Dreamina',
  description: 'Dreamina clone'
}

const layout = async ({children}:{children:React.ReactNode}) => {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-50 bg-[rgb(15, 17, 21)]' style={{
        backgroundColor: 'rgb(15, 17, 21)'
      }}>
        <MainContainer>
          <nav className='w-full py-[1rem] px-[1rem] 2xl:px-0 flex items-center justify-between'>
            <Link href={'/'}>
              <Button variant={'default'} className='cursor-pointer' aria-label='back-button'>
                <LeftArrowIcon size={18} color='white' />
                <span className='capitalize'>back</span>
              </Button>
            </Link>
            <ProfilePopover user={currentUser} />
          </nav>
        </MainContainer>
      </header>

      <div className='pt-[70px] px-[.5rem] md:px-[1rem] 2xl:px-0'>
        <MainContainer>
          {children}
        </MainContainer>
      </div>
    </>
  )
}

export default layout