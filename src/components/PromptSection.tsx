'use client'
import React, { useState } from 'react'
import Card from './Card'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { aspectRatio } from '@/consts'
import { cn } from '@/lib/utils'

// Perbaiki schema validasi:
const formSchema = z.object({
  prompt: z.string().min(1, "Prompt harus diisi").max(800),
  aspectRatio: z.string().min(1, "Pilih aspect ratio terlebih dahulu"),
  size: z.object({
    width: z.coerce.number().min(864).max(2016),
    height: z.coerce.number().min(864).max(2016)
  })
});

const SizeInput = ({
  value,
  onChange
}: {
  value: { width: number, height: number };
  onChange: (value: { width: number, height: number }) => void; // Perbaiki type
}) => {
  const handleChange = (type: 'width' | 'height', val: string) => {
    onChange({
      ...value,
      [type]: val
    });
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 border py-2 px-4 rounded-md">
        <span className="text-sm">W</span>
        <Input 
          placeholder='864'
          value={value?.width}
          onChange={(e) => handleChange('width', e.target.value)}
          className="w-full md:w-24 lg:w-16 xl:w-20 border-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
          type="text"
        />
      </div>
      <div className="flex items-center gap-2 border py-2 px-4 rounded-md">
        <span className="text-sm">H</span>
        <Input 
          placeholder='864'
          value={value.height}
          onChange={(e) => handleChange('height', e.target.value)}
          className="w-full md:w-24 lg:w-16 xl:w-20 border-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
          type="text"
        />
      </div>
    </div>
  )
}

const AspectRatioInput = ({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full flex items-center flex-wrap gap-2">
      {aspectRatio?.map((item: string) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={cn(
            'p-2 px-3 rounded-md text-sm transition-colors bg-gray-500/90 text-white cursor-pointer',
            'hover:bg-primary',
            value === item && 'bg-primary'
          )}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

const PromptSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      aspectRatio: "",
      size: {
        width: 1024,
        height: 1024
      }
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {    
    console.log("Submitted values:", values)
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Field untuk Prompt */}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="Describe the image you want to generate..." 
                    {...field} 
                    className="min-h-[120px] border focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field baru untuk Aspect Ratio */}
          <FormField
            control={form.control}
            name="aspectRatio"
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Aspect Ratio</FormLabel>
                <FormControl>
                  <AspectRatioInput 
                    value={field.value} 
                    onChange={field.onChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field baru untuk Size */}
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <SizeInput 
                    value={field.value} 
                    onChange={field.onChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full py-6 cursor-pointer">
            Generate Image
          </Button>
        </form>
      </Form>
    </Card>
  )
}

export default PromptSection