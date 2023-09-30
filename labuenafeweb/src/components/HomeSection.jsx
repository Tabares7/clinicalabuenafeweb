import React from "react";
import home from "../assets/img/home-img.png";

import ButtonFill from "./ButtonFill";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const HomeSection = () => {
  return (
    <section id="home" className="relative flex lg:flex-row lg:pt-10">
      {/* Seccion de texto */}
      <div className="mt-16 flex flex-col gap-10">
        {/* //? TITULO  */}
        <h1 className="text-darkblue text-7xl font-poppins-800">
          Tu Clínica Familiar de Confianza, La Buena Fe
        </h1>
        {/* //? SUBTITULO  */}
        <div className="flex py-10 pr-32 gap-5  items-center">
          <span className="h-5 w-10 bg-yellow rounded-full"></span>
          <p className="">
            En Irving, Texas, es el centro de salud preferido de la comunidad
            latina. Brindamos atención médica de calidad. Tu bienestar es
            nuestra misión.
          </p>
        </div>
        {/* //? CTA */}
        <div className="flex gap-5 items-center">
          <ButtonFill text="Haz una Cita" url="#" />
          <ButtonFill text="Llamanos" url="tel:+14695864574" />
          <span className="font-poppins-400 italic text-yellow text-xs">
            Ponte en contacto con nosotros
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 right-1/2 animate-moveUpDown duration-500 ease-in-out">
        <ChevronUpDownIcon className="h-10 w-10 text-lightblue" />
      </div>

      <div className="w-full">
        <img src={home} alt="Imagen doctores" className="w-full" />
      </div>
    </section>
  );
};

export default HomeSection;
