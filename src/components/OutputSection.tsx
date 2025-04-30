'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import ResultSkeleton from './skeleton/ResultSkeleton'
import { FolderIcon } from './icon/Icon'
import { getAllUserImageGenerate } from '@/utils/actions/db.action'
import ResultContainer from './ResultContainer'

const OutputSection = ({user}:{user:any}) => {
  const [allImage, setAllImage] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  
  const loadImages = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getAllUserImageGenerate(user.id)
      if (res.success) {
        setAllImage(res.data)
      }
    } catch (e) {
      console.error(e)
      setAllImage([])
    } finally {
      setLoading(false)
    }
  }, [user.id])

  useEffect(() => {
    loadImages()
  }, [loadImages])

  console.log(allImage)

  return (
    <Card>
      <div className="flex flex-col items-start gap-[15px]">
        <div className="w-full flex items-center justify-end">
          <button aria-label='show-result-button' className='p-[.5rem] border border-gray-500 rounded-[10px] cursor-pointer'><FolderIcon size={15} color='white' /></button>
        </div>
        {loading ? (
          <ResultSkeleton />
        ) : (
          <>
            {allImage?.length <= 0 ? (
              <div className='flex items-center justify-center w-full h-[400px]'>
                <span>Generate result will appear here</span>
              </div>
            ) : (
              <div className="w-full flex flex-col items-start gap-[20px]">
                {allImage?.map((item:any) => (
                  <ResultContainer key={item?.id} id={item?.id} image={item?.result?.image} prompt={item?.result?.prompt} onDelete={loadImages} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Card>
  )
}

export default OutputSection