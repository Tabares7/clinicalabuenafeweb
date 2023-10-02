import React from 'react'
import Title from './Title'

import medicare from "../assets/img/medicare-img.png";
import bcbs from "../assets/img/bcbs-img.png";

const InsuranceSection = () => {
  return (
    <section id='insurances' className='my-16 py-10'>
        <Title title="¡Seguros Medicos!" subtitle="Aceptamos"/>
        <div className="flex md:flex-row gap-10 md:gap-5 text-center my-10 py-10 flex-col">
            <div className="flex flex-col items-center gap-8">
                <img src={bcbs} alt="Logo Blue Cross Blue Shield" className='w-full md:w-1/2'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem.</p>
            </div>
            <div className="flex flex-col items-center gap-8">
                <img src={medicare} alt="Logo Blue Cross Blue Shield" className='w-full md:w-1/2'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nisi ex amet eaque corrupti asperiores architecto impedit? Blanditiis, voluptas fuga ratione amet magni aperiam esse repudiandae adipisci expedita ab voluptatem.</p>
            </div>
        </div>
    </section>
  )
}

export default InsuranceSection