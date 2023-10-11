import React from "react";
import home from "../assets/img/home-img.png";

import ButtonFill from "./ButtonFill";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col  md:flex-row-reverse  lg:pt-10"
    >
      <div className="w-auto md:w-full">
        <img src={home} alt="Imagen doctores" className="" />
      </div>
      {/* Texto */}
      <div className="mt-16 flex flex-col gap-10">
        {/* //? TITULO  */}
        <h1 className="text-darkblue text-3xl md:text-5xl lg:text-7xl font-poppins-800 text-center md:text-left">
          Tu Clínica Familiar de Confianza, <span className="">La Buena Fe</span>

        </h1>
        {/* //? SUBTITULO  */}
        <div className="flex md:py-10 md:pr-32 gap-5  items-center">
          <span className="h-5 w-10 bg-yellow rounded-full hidden md:block "></span>
          <p className="text-center md:text-left">
            En Irving, Texas, es el centro de salud preferido de la comunidad
            latina. Brindamos atención médica de calidad. Tu bienestar es
            nuestra misión.
          </p>
        </div>
        {/* //? CTA */}
        <div className="flex  gap-5">
          <ButtonFill text="Haz una Cita" url="https://provider.kareo.com/madelin-perez-antela" />
          <ButtonFill text="Llámanos" url="tel:+14695864574" />
          
        </div>
      </div>
      <div className="absolute -bottom-16 md:bottom-10 right-1/2 animate-moveUpDown duration-500 ease-in-out">
        <ChevronUpDownIcon className="h-10 w-10 text-lightblue" />
      </div>
    </section>
  );
};

export default HomeSection;
