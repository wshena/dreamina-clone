'use server'
import { createClient } from "../supabase/server"

const supabase = await createClient();

export async function addImageResult({data, userId}:
  {
    data:{
      data:{
        prompt: string,
        aspectRatio: string,
        size: {
          width: string,
          height: string
        }
      }}
    , userId:string
  }) {
  const { data: generateResult, error } = await supabase
    .from('image-result')
    .insert({
      user_id: userId,
      result: data
    })
    .select('id, result')
    .single()
  
  if (error) return { success: false, error: error.message, id: null }
  console.log(generateResult?.id)
  
  return { success: true, id: generateResult?.id, data: generateResult?.result }
}