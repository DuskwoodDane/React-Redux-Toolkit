// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'

interface CRState {
  value: number | any
}

// returns { type: 'counter/increment', payload: 3 }
const CRIncrement = createAction('CR/increment')
const CRDecrement = createAction('CR/decrement')
// 标准传参写法
// const CRIncrementByAmount = createAction<number | undefined>('CR/merge')
// 函数写法
const CRIncrementByAmount = createAction('CR/merge', (value: number | undefined) => {
  // 可以配置其他参数
  // return {
  //   payload: {
  //     value,
  //     id: nanoid(),
  //     createdAt: new Date().toISOString()
  //   }
  // }
  return {
    payload: value
  }
})
const initialState: CRState = {
  value: 10
}

/**
 * createReducer(initialState, builderCallback)
 */
const CReducesr = createReducer(initialState, (builder) => {
  builder.addCase(CRIncrement, (state, action) => {
    state.value += 1
  })
  .addCase(CRDecrement, (state, action) => {
    state.value -= 1
  })
  .addCase(CRIncrementByAmount, (state, action) => {
    state.value += action.payload
  })
})

export { CRIncrement, CRDecrement, CRIncrementByAmount }

export default CReducesr