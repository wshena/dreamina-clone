import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateProps {
  aspectRatio: string
}

const initialState:initialStateProps = {
  aspectRatio: ''
}

export const utilitySlice = createSlice({
  name: 'utility',
  initialState: initialState,
  reducers: {
    setAspectRatio: (state, action:PayloadAction<string>) => {
      state.aspectRatio = action.payload
    }
  }
})

export const { setAspectRatio } = utilitySlice.actions

export default utilitySlice.reducer