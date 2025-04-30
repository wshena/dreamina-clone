'use server'

import { supabase } from "../supabase/client"

export async function addImageResult(prompt:string, ratio:{width:string, height:string}, data: any, userId:string) {
  const { data: generateResult, error } = await supabase
    .from('image-result')
    .insert({
      user_id: userId,
      result: {
        prompt: prompt,
        ratio: ratio,
        image: data
      }
    })
    .select('id, result')
    .single()
  
  if (error) return { success: false, error: error.message, id: null }
  console.log(generateResult?.id)
  
  return { success: true, id: generateResult?.id, data: generateResult?.result }
}

export async function getAllUserImageGenerate(userId:string) {
  const { data, error } = await supabase
    .from('image-result')
    .select('*')
    .eq('user_id', userId)
  
  if (error) return { success: false, error: error.message, id: null }
  
  return {
    success: true,
    data: data
  }
}