import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoContainer from './Components/TodoContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TodoContainer/>
    </>
  )
}

export default App
