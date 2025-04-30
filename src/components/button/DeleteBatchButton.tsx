import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TrashIcon } from '../icon/Icon'
import { deleteImageBatch } from '@/utils/actions/db.action'

const DeleteBatchButton = ({batchId, onDelete}:{batchId:string, onDelete:any}) => {
  const handleClick = async () => {
    try {
      const res = await deleteImageBatch(batchId)
      onDelete();
    } catch (error) {
      console.log(error);
      return
    }
  }

  return (
    <AlertDialog>
      <TooltipProvider>
        <Tooltip>
          {/* Tooltip hanya membungkus tombolnya */}
          <TooltipTrigger asChild>
            <AlertDialogTrigger asChild>
              <button className='cursor-pointer p-2 rounded-md hover:bg-gray-500/90 bg-gray-800'>
                <TrashIcon size={15} color='white' />
              </button>
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <span>Delete batch</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Dialog content dipisah di luar Tooltip */}
      <AlertDialogContent className='bg-primary text-white border-none'>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this batch?</AlertDialogTitle>
          <AlertDialogDescription>
            You won't be able to recover your image.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='cursor-pointer hover:bg-gray-500/90 hover:text-white border-none bg-gray-700'>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick} className='cursor-pointer text-black' style={{
            backgroundColor: 'rgb(0, 202, 224)'
          }}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteBatchButton
