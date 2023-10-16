import React from 'react'
import Title from './Title'

import medicare from "../assets/img/medicare-img.png";
import bcbs from "../assets/img/bcbs-img.png";
import cigna from "../assets/img/cigna-img.png";


const InsuranceSection = () => {
  return (
    <section id='insurances' className='my-16 p-5'>
        <Title title="¡Seguros Medicos!" subtitle="Aceptamos"/>
        <div className="flex md:flex-row gap-10 md:gap-20 text-center my-10 py-10 flex-col">
            <div className="flex flex-col items-center gap-8">
                <img src={bcbs} alt="Logo Blue Cross Blue Shield" className='w-full md:w-1/2'/>
                <p>BlueCross BlueShield es una de las compañías de seguros de salud más reconocidas y confiables en Estados Unidos. Ofrece una amplia gama de planes de salud que se adaptan a las necesidades individuales y familiares, garantizando acceso a una extensa red de profesionales y centros médicos. Si eres titular de un seguro de BlueCross BlueShield, puedes estar seguro de recibir atención médica de calidad con coberturas que se ajustan a tus necesidades.</p>
            </div>
            <div className="flex flex-col items-center gap-8">
                <img src={medicare} alt="Logo Blue Cross Blue Shield" className='w-full md:w-1/2'/>
                <p>Medicare es un programa de seguro de salud federal destinado principalmente a personas de 65 años o más, aunque también cubre a algunas personas más jóvenes con discapacidades específicas. Ofrece diferentes tipos de coberturas, desde atención hospitalaria hasta servicios médicos y medicamentos con receta. Si cuentas con Medicare, te beneficias de una amplia cobertura que te protege contra altos costos médicos y te brinda acceso a servicios de salud esenciales.</p>
            </div>
            <div className="flex flex-col items-center gap-8">
                <img src={cigna} alt="Logo Blue Cross Blue Shield" className='w-2/3 md:w-2/5 '/>
                <p>Cigna es una compañía de seguros de salud que ofrece una amplia gama de opciones de cobertura médica. Sus planes están diseñados para personas de todas las edades y necesidades de atención médica. Ofrecen diversos tipos de cobertura, que van desde servicios hospitalarios hasta atención médica preventiva y medicamentos con receta. Si eliges Cigna como tu proveedor de seguros de salud, puedes disfrutar de una cobertura integral que te protege de los gastos médicos elevados y te proporciona acceso a servicios de atención médica esenciales.</p>
            </div>
        </div>
    </section>
  )
}

export default InsuranceSection