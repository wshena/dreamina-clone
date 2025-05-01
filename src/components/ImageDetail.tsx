import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';
import SmallImageDownloadButton from './button/SmallImageDownloadButton';
import SmallImageBookmarkButton from './button/SmallImageBookmarkButton';
import SmallImageOptionButton from './button/SmallImageOptionButton';
import { truncateString } from '@/utils/function.action';
import RegenerateButton from './button/RegenerateButton';
import RepromptButton from './button/RepromptButton';

const ImageDetail = ({children, data}:{children:React.ReactNode, data:ImageDetailProps}) => {
  const decodeImage = decodeURIComponent(data?.image);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='block'>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="p-4 w-full xl:w-[80vw] h-[93vh] md:h-[80vh] 2xl:h-[80vh] border-none bg-primary text-white">
        <DialogHeader className='hidden'>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="h-full flex flex-col md:flex-row items-start gap-[15px]">
          <div className="relative w-full h-[500px] md:w-[600px] 2xl:w-[1000px] md:h-full">
            <Image src={`data:image/webp;base64,${decodeImage}`} alt='image-result' fill unoptimized decoding="async" objectFit='cover' className='rounded-[15px]' />
          </div>

          <div className="w-full md:w-[50%] h-full space-y-6 flex items-start flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-[10px]">
                <SmallImageDownloadButton imageFile={data?.image} />
                <SmallImageOptionButton />
                <SmallImageBookmarkButton />
                <div className="flex md:hidden items-center gap-[10px]">
                  <RegenerateButton />
                  <RepromptButton />
                </div>
              </div>
              <div className="w-full md:w-[90%] lg:w-full space-y-3 md:bg-gray-800/40 rounded-[10px] md:p-[.6rem] lg:p-[1rem] text-[.8rem] md:text-[.7rem] lg:text-[1rem]">
                <div className="space-y-2">
                  <h3 className='hidden md:inline text-gray-500'>Image Prompt</h3>
                  <p className=''>{truncateString(data?.prompt, 250)}</p>
                </div>
                <span className='hidden md:inline'>Dimensions: {data?.ratio}</span>
              </div>
            </div>

            {/* reprompt and regenerate button */}
            <div className="w-full hidden md:flex flex-col lg:flex-row items-center gap-4">
              <DialogClose asChild>
                <button 
                  className='w-full px-[1rem] py-2 rounded-[10px] bg-gray-400/20 cursor-pointer text-white'
                  onClick={() => {}}
                >
                  <span>Regenerate</span>
                </button>
              </DialogClose>
              <button className='w-full px-[1rem] py-2 rounded-[10px] bg-gray-400/20 cursor-pointer text-white'>
                <span>Reprompt</span>
              </button>
            </div>
          </div>
        </div>
        <DialogFooter className='hidden'>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ImageDetail