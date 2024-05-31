import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter]=useState(15)
  
  const addValue=()=>{
    if(counter<20)
    setCounter(counter+1)
  else
  setCounter(20)
  }
  const removeValue=()=>{
        if(counter>0)
    setCounter(counter-1)
  else
  setCounter(0)
  }
  return (
    <>
     <h1>Dash</h1>
     <h2>Counter Value: {counter}</h2>

     <button 
     onClick={addValue}>Add {counter}</button>
     <br/>
     <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App
