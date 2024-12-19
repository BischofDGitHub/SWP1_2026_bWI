import { useState } from 'react'
import './App.css'
import Teamlist from './components/teamlist'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <iframe src="https://2anime.xyz/embed/blue-lock-episode-1" width="1680px" height="1050px" border="none" frameborder="0" scrolling="no" allowfullscreen></iframe>

      <Teamlist />
    </>
  )
}

export default App
