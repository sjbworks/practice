import React, { useState } from 'react'

interface CounterProps {
  start: number
}

export const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.start)
  // const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`
  return (
    <div className="full">
      <p className="big">文字</p>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
