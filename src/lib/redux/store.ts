import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import utilityReducer from '@/lib/redux/slice/utilitySlice'
import promptReducer from '@/lib/redux/slice/promptSlice'

const rootReducer = combineReducers({
  utility: utilityReducer,
  prompt: promptReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']