import { useState } from 'react'
import './App.css'
import Chessboard from './components/chessboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Chessboard />
      </div>
    </>
  )
}

export default App
