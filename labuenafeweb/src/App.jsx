import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import TeleHealth from './components/TeleHealth'
import InsuranceSection from './components/InsuranceSection'
import BlogSection from './components/BlogSection'
import Services from './components/Services'
import Contact from './components/Contact'
import ImgSpacer from './components/ImgSpacer'
import bgspacer from "./assets/img/bg-spacer-1.png"
import {BiSolidChevronsUp} from "react-icons/bi"
import Footer from './components/Footer'

const posts = [
  {
    img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/380152222_289380967172902_6912544992425113360_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=vcMkVXQWS4AAX8sjrJL&_nc_ht=scontent-hou1-1.xx&oh=00_AfDcEDGGESUinARzNDctad55y0RyCICTd1px7L9Z38UcVA&oe=65196629",
    date: "09/14/2023",
    title: "Clamidia y Gonorrea",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem."
  },
  {
    img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/380152222_289380967172902_6912544992425113360_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=vcMkVXQWS4AAX8sjrJL&_nc_ht=scontent-hou1-1.xx&oh=00_AfDcEDGGESUinARzNDctad55y0RyCICTd1px7L9Z38UcVA&oe=65196629",
    date: "09/27/2023",
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

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica la posición de scroll en el eje X
      if (window.scrollY > 1000) {  // Ajusta el valor "100" según tus necesidades
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Agrega el event listener cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div className='relative'>
        {isVisible && <a href='#' className="flex items-center fixed bottom-8 z-10 right-8 w-auto px-3 h-10 bg-darkblue text-white rounded-full font-poppins-600">Volver arriba <BiSolidChevronsUp/></a>}
      <Navbar/>
      <div className="px-8 lg:px-40">
      <HomeSection/>
      </div>
      <div className="my-20">
   <ImgSpacer imageUrl={bgspacer} text="La Salud, Nuestro Deber" />
      </div>
      <div className="px-5 lg:px-40 my-20">
      <TeleHealth/>
      <Services/>
      <InsuranceSection/>
      {/* <BlogSection posts={posts}/> */}
      <AboutSection/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
