import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CSRState {
  value: number | undefined
}

const initialState: CSRState = {
  value: 20
}

const CSReducesr =  createSlice({
  name: 'CSR',
  initialState,
  reducers: {} // reducers用法可参考globalSlice
})