import React, { useState } from 'react'
import { produce } from 'immer'
const baseState = [
  {
    title: "Learn TypeScript",
    done: true
},
{
    title: "Try Immer",
    done: false
}
]
export default function App() {
  const [arr1, setArr1] = useState([1, 2, 3])
  const [arr2, setArr2] = useState(produce(baseState, (draftState) => {
    draftState[1].done = true
    draftState[1].title = 'Why？'
  }))
  function updateArr1() {
    // setArr1([4, 5, 6])
    setArr2(produce(arr2, (draftState) => {
      console.log('dfaftState', draftState)
      draftState = [...draftState, { title: 'Tom', done: true }]
      return draftState
    }))
    console.log(arr2, baseState)
  }
  return (
    <div>
      {arr1.join(',')}
      <div onClick={() => updateArr1() }>Update Arr1</div>
      <div onClick={() => console.log(arr2) }>show Arr2</div>
    </div>
  )
}