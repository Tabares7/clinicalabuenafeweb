import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import TeleHealth from './components/TeleHealth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:px-40'>
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <TeleHealth/>
    </div>
  )
}

export default App
