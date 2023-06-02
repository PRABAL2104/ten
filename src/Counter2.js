import React, { useState } from 'react'
import useCounter from './useCounter'

function Counter1() {
    const[count, Increment, Decrement] = useCounter(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <   >   </>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter1