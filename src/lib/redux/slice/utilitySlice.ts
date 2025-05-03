import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateProps {
  aspectRatio: string,
  userId: string
}

const initialState:initialStateProps = {
  aspectRatio: '',
  userId: ''
}

export const utilitySlice = createSlice({
  name: 'utility',
  initialState: initialState,
  reducers: {
    setAspectRatio: (state, action:PayloadAction<string>) => {
      state.aspectRatio = action.payload
    },
    setUserId: (state, action:PayloadAction<string>) => {
      state.userId = action.payload
    }
  }
})

export const { setAspectRatio, setUserId } = utilitySlice.actions

export default utilitySlice.reducer