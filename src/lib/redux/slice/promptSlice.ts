import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateProps {
  prompt: string,
  size: {
    width: number,
    height: number
  },
  aspectRatio: string,
  repromptCount: number
}

const initialState:initialStateProps = {
  prompt: '',
  size: {
    width: 0,
    height: 0
  },
  aspectRatio: '',
  repromptCount: 0
}

export const promptSlice = createSlice({
  name: 'prompt',
  initialState: initialState,
  reducers: {
    setPrompt: (state, action:PayloadAction<string>) => {
      state.prompt = action.payload;
      state.repromptCount += 1;
    },
    setAspectRatio: (state, action:PayloadAction<string>) => {
      state.aspectRatio = action.payload
    },
    setSize: (state, action:PayloadAction<{width:number, height:number}>) => {
      const { width, height } = action.payload
      state.size = {width, height}
    },
  }
})

export const { setPrompt, setAspectRatio, setSize } = promptSlice.actions

export default promptSlice.reducer