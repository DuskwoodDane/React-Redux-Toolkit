import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  globalValue: number
}

const initialState: GlobalState = {
  globalValue: 1
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment: (state) => {
      state.globalValue += 1
    },
    decrement: (state) => {
      state.globalValue -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.globalValue += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = globalSlice.actions

export default globalSlice.reducer