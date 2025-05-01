'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Card from './Card'
import ResultSkeleton from './skeleton/ResultSkeleton'
import { FolderIcon } from './icon/Icon'
import { getAllUserImageGenerate } from '@/utils/actions/db.action'
import ResultContainer from './ResultContainer'
import { supabase } from '@/utils/supabase/client'

const OutputSection = ({user}:{user:any}) => {
  const [allImage, setAllImage] = useState<any[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const loadImages = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getAllUserImageGenerate(user.id)
      if (res.success) {
        setAllImage(res.data);
      } else {
        setAllImage([]);
      }
    } catch (e) {
      console.error(e)
      setAllImage([])
    } finally {
      setLoading(false)
    }
  }, [user.id])

  // 1. initial load
  useEffect(() => {
    loadImages()
  }, [loadImages]);

  // realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel('room-image-result')
      .on(
        'postgres_changes',
        {
          event: '*',                         // '*' = INSERT / UPDATE / DELETE
          schema: 'public',
          table: 'image-result',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          console.log('Change received!', payload)
          loadImages()                         // refetch saat ada perubahan
        }
      )
      .subscribe()

    // cleanup: unsubscribe saat unmount
    return () => {
      supabase.removeChannel(channel)
    }
  }, [user.id, loadImages])

  return (
    <Card>
      <div className="flex flex-col items-start gap-[15px]">
        <div className="w-full flex items-center justify-end">
          <button aria-label='show-result-button' className='p-[.5rem] border border-gray-500 rounded-[10px] cursor-pointer'><FolderIcon size={15} color='white' /></button>
        </div>

        <div className="flex flex-col items-start gap-[15px] h-fit md:h-[80vh] md:overflow-y-auto" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4A5568 #F7FAFC',
        }}>
          {loading || !allImage ? (
            <ResultSkeleton />
          ) : (
            <>
              {allImage?.length <= 0 ? (
                <div className='flex items-center justify-center w-full h-[500px]'>
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
      </div>
    </Card>
  )
}

export default OutputSection