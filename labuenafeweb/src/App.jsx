import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:px-40'>
      <Navbar/>
      <HomeSection/>
      <div className='h-10 bg-red-400'></div>
    </div>
  )
}

export default App
