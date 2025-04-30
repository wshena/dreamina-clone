import OutputSection from '@/components/OutputSection'
import PromptSection from '@/components/PromptSection'
import { getCurrentUser } from '@/utils/actions/auth.action'
import React from 'react'

const page = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className='flex items-start gap-[10px] flex-col lg:flex-row'>
      {/* prompt section */}
      <section className='w-full lg:w-[30%]'>
        <PromptSection user={currentUser} />
      </section>

      {/* output section */}
      <section className='w-full lg:w-[70%]'>
        <OutputSection user={currentUser} />
      </section>
    </div>
  )
}

export default page