import Card from '@/components/Card'
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
          <h1>hello</h1>
        </Card>
      </section>
    </div>
  )
}

export default page