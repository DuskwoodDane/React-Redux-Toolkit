import React, { useEffect } from 'react'
import type { RootState } from '../../store'
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { decrement, increment, incrementByAmount } from '../../store/Reduces/globalSlice'
import { CRIncrement, CRDecrement, CRIncrementByAmount } from '../../store/Reduces/CReduces'

export default function Home(props:any) {
  const count = useAppSelector((state: RootState) => state.globalSlice.globalValue)

  const crCount = useAppSelector((state: RootState) => state.cReducesr.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    // console.log('state==', RootState)
  }, [])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          Merge
        </button>
        <hr />
        <button
          aria-label="Increment value"
          onClick={() => dispatch(CRIncrement())}
        >
          Increment2
        </button>
        <span>{crCount}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(CRDecrement())}
        >
          Decrement2
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(CRIncrementByAmount(40))}
        >
          Merge2
        </button>
      </div>
    </div>
  )
}