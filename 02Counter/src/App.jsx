import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCouter] = useState(0)
  let[message,setMessage]= useState()
  const addValue = () =>{
    if(counter < 20){
      counter = counter + 1
      setCouter(counter)
      setMessage('')
    }
    else{
        setMessage('reached maximum value to add')
    }
  }
  const removeValue = () =>{
    if(counter > 0){
      counter = counter - 1
    setCouter(counter)
      setMessage('')
    }
    else{
        setMessage('reached minimum value to Reduce')
    }
  }

  return (
    <>
      <h1>React Chaiwala</h1>
      <h2>Total Quantity : {counter}</h2>
      <button onClick={addValue}>Add a Quantity</button>
      <br />
      <button onClick={removeValue}>Reduce a Quantity</button>
      {message && <p>{message}</p>}
    </>
  )
}

export default App
