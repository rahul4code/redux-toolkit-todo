import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from './app/slices/counterSlices'
import {getUserInfo} from './app/slices/userInfoSlices'

function App() {

 const counter=useSelector(state=>state.counter.value)
 const info=useSelector(state=>state.userInfo)
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
    <h4>
    <div>First Name:  {info.firstName}</div>
    <div>Last Name:  {info.lastName}</div>
    <div>Rank: {counter}</div>
    <br></br>
    <button onClick={IncrementCount}>Increment</button>
    <button onClick={DecrementCount}>Decrement</button>
    <button onClick={()=>dispatch(getUserInfo())}>Get User Info</button>
    </h4>
  )
}

export default App