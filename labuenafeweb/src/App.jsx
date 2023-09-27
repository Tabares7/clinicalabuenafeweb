import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import TeleHealth from './components/TeleHealth'
import InsuranceSection from './components/InsuranceSection'

function App() {
  const [count, setCount] = useState(0)

  const posts = [
    {
      img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/380152222_289380967172902_6912544992425113360_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=vcMkVXQWS4AAX8sjrJL&_nc_ht=scontent-hou1-1.xx&oh=00_AfDcEDGGESUinARzNDctad55y0RyCICTd1px7L9Z38UcVA&oe=65196629",
      date: "09/02/2023",
      title: "Clamidia y Gonorrea",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem."
    },
    {
      img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/380152222_289380967172902_6912544992425113360_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=vcMkVXQWS4AAX8sjrJL&_nc_ht=scontent-hou1-1.xx&oh=00_AfDcEDGGESUinARzNDctad55y0RyCICTd1px7L9Z38UcVA&oe=65196629",
      date: "09/02/2023",
      title: "Clamidia y Gonorrea",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem."
    },
    {
      img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/380152222_289380967172902_6912544992425113360_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=vcMkVXQWS4AAX8sjrJL&_nc_ht=scontent-hou1-1.xx&oh=00_AfDcEDGGESUinARzNDctad55y0RyCICTd1px7L9Z38UcVA&oe=65196629",
      date: "09/02/2023",
      title: "Clamidia y Gonorrea",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem."
    },

  ]

  return (
    <div className='lg:px-40'>
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <TeleHealth/>
      <InsuranceSection/>
    </div>
  )
}

export default App
