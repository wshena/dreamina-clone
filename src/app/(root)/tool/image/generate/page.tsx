import Card from '@/components/Card'
import { FolderIcon } from '@/components/icon/Icon'
import ResultSkeleton from '@/components/skeleton/ResultSkeleton'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-start gap-[10px] flex-col lg:flex-row'>
      {/* prompt section */}
      <section className='w-full lg:w-[30%]'>
        <Card>
          <h1>hello</h1>
        </Card>
      </section>

      {/* output section */}
      <section className='w-full lg:w-[70%]'>
        <Card>
          <div className="flex flex-col items-start gap-[15px]">
            <div className="w-full flex items-center justify-end">
              <button aria-label='show-result-button' className='p-[.5rem] border border-gray-500 rounded-[10px] cursor-pointer'><FolderIcon size={15} color='white' /></button>
            </div>
            <div className="w-full flex flex-col items-start gap-[20px]">
              <ResultSkeleton />
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default page