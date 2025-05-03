'use client'
import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RedoIcon } from '../icon/Icon'
import axios from 'axios'
import { toast } from 'sonner'
import { useAppSelector } from '@/lib/redux/hooks'
import { RootState } from '@/lib/redux/store'
import { Loader2 } from 'lucide-react'

const RegenerateButton = ({data}:{data:{
  prompt:string,
  ratio:string,
  size: {
    width: number,
    height:number
  }
}}) => {
  const userId = useAppSelector((state:RootState) => state.utility.userId);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data:RegenerateProps) {    
    console.log("Submitted values:", data);
    setIsLoading(true);

    try {
      const res = await axios.post('/api/image/generate', {
        prompt: data.prompt,
        aspectRatio: data.ratio,
        size: data.size,
        userId: userId
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log("Response data:", res.data);
      
      if (!res.data.success) {
        throw new Error(res.data.error || 'Failed to generate image');
      }

    } catch (error:any) {
      console.error("Error submitting form:", error);
      // Tambahkan error handling ke UI
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={() => onSubmit(data)} className='p-[.5rem] cursor-pointer rounded-md hover:bg-gray-500/90 bg-gray-800'>
            {isLoading ? <Loader2 size={15} className="animate-spin" /> : <RedoIcon size={15} color='white' />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Regenerate Image</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default RegenerateButton