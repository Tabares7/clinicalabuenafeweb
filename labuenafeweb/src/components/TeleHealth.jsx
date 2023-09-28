import React from "react";
import conecta from "../assets/img/conecta-img.png";
import info from "../assets/img/info-img.png";
import consulta from "../assets/img/consulta-img.png";
import Title from "./Title";
import ButtonFill from "./ButtonFill";

const TeleHealth = () => {
  return (
    <section className=" bg-gradient-to-b from-white to-cyan-300 rounded-xl shadow-xl shadow-cyan-100 mt-16 flex flex-col gap-10 p-16 items-center">
      <Title title="¡Desde Tu Casa!" subtitle="Consulta" />
      <div className="flex lg:flex-row items-center">
        <img src={conecta} alt="Paciente con telefono" className="w-1/2" />
        <div className="flex flex-col gap-5 px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 1.</h3>
          <Title title="Accede a la sala vitual" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur porro accusantium corrupti quas voluptatem soluta quam
            vitae eaque ipsum omnis?
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row items-center">
        <div className="flex flex-col gap-5 px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 2.</h3>
          <Title title="Danos algunos datos" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur porro accusantium corrupti quas voluptatem soluta quam
            vitae eaque ipsum omnis?
          </p>
        </div>
        <img src={info} alt="Imagen doctora toma notas" className="w-1/2" />
      </div>
      <div className="flex lg:flex-row items-center">
        <img src={consulta} alt="Consulta y tratamiento" className="w-1/2" />
        <div className="flex flex-col gap-5 px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 3.</h3>
          <Title title="Accede a la sala vitual" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur porro accusantium corrupti quas voluptatem soluta quam
            vitae eaque ipsum omnis?
          </p>
        </div>
      </div>
      <div className="animate-moveUpDown duration-500 ease-in-out">
      <ButtonFill text="Consulta Ahora" url="https://www.youtube.com"/>
      </div>
    </section>
  );
};

export default TeleHealth;
