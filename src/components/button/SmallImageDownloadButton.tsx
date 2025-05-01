import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DownloadIcon } from '../icon/Icon'
import { downloadDataURI } from '@/utils/function.action'

const SmallImageDownloadButton = ({imageFile}:{imageFile?:any}) => {
  const handleDownload = () => {
    // pastikan data sudah di‐decode URI 
    // dan tambahkan prefix MIME type
    const decoded = decodeURIComponent(imageFile)
    const dataURI = `data:image/webp;base64,${decoded}`
    downloadDataURI(dataURI, `dreamina-${Date.now()}.webp`)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={handleDownload}
            className='p-[.5rem] cursor-pointer hover:bg-gray-500/90 bg-[#171a21]'
          > <DownloadIcon size={15} color='white' /> </div>
        </TooltipTrigger>
        <TooltipContent>
          <span>Download</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SmallImageDownloadButton