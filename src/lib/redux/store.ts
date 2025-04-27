import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slice
import utilityReducer from '@/lib/redux/slice/utilitySlice'

const rootReducer = combineReducers({
  utility: utilityReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']