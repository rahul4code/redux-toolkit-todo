import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from './app/counterSlices'

function App() {

 const counter=useSelector(state=>state.counter.value)
 const dispatch=useDispatch();

//   const [counter,setCounter]=useState(0)
  
  const IncrementCount=()=>{
    // setCounter(counter+1)
    dispatch(increment())
  }

  const DecrementCount=()=>{
    // setCounter(counter-1)
    dispatch(decrement())
  }


  return (
    <>
    <div>Counter: {counter}</div>
    <button onClick={IncrementCount}>Increment</button>
    <button onClick={DecrementCount}>Decrement</button>
    </>
  )
}

export default App