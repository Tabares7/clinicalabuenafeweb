import React from 'react'
import about from "../assets/img/about-img.png";
import Title from './Title';
import {SiFacebook, SiInstagram, SiTiktok} from 'react-icons/si'

const AboutSection = () => {
  return (
    <section id='about' className='flex flex-col lg:flex-row lg:pt-10 items-center gap-16 text-center md:text-left'>
        {/* //? IMG  */}
        <div className="w-full md:w-1/2">
        <img src={about} alt="Imagen doctores" className="" />
        </div>
        {/* //? TEXTO  */}
        <div className="flex flex-col gap-10 w-3/4 ">
            <Title title="Sobre Nosotros"/>
            <p className='font-poppins-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum inventore fugiat ipsum et, perspiciatis ex dicta soluta. Natus maiores nobis odio tenetur atque maxime rem ducimus.  Placeat earum ipsum voluptatibus nostrum odit, qui officiis! Reiciendis perspiciatis porro mollitia beatae iure error voluptates!</p> 
            <p> Libero, vel blanditiis quis illum ducimus aliquam, dicta ipsa cupiditate, magni iste eveniet officiis fugit eos! Iste deleniti corrupti enim explicabo. Error quos eum quaerat ex suscipit, cum nulla tempora voluptates architecto animi iure facilis voluptate nihio repellat iure consequatur aut minima ipsum aliquam!</p>
            
            <div className="flex gap-5">
            <SiFacebook className='h-8 w-8 text-lightblue hover:text-darkblue'/>
            <SiInstagram className='h-8 w-8 text-lightblue hover:text-darkblue'/>
            <SiTiktok className='h-8 w-8 text-lightblue hover:text-darkblue'/>
            </div>
        </div>
        </section>
  )
}

export default AboutSection