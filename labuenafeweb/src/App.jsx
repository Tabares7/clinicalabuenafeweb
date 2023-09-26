import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import ButtonOut from './components/ButtonOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex p-10 '>
      <ButtonOut text='Saber Mas'  url='tel:+1234567890'/>
    </div>
  )
}

export default App
