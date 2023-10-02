import React from "react";
import conecta from "../assets/img/conecta-img.png";
import info from "../assets/img/info-img.png";
import consulta from "../assets/img/consulta-img.png";
import Title from "./Title";
import ButtonFill from "./ButtonFill";

const TeleHealth = () => {
  return (
    <section id="telemedicina" className="rounded-xl flex flex-col gap-10 items-center mb-20 lg:p-32">
      <Title title="¡Desde Tu Casa!" subtitle="Consulta" />
      
      <div className="flex lg:flex-row items-center flex-col text-center md:text-left">
        <img src={conecta} alt="Paciente con telefono" className="w-full lg:w-1/3" />
        <div className="flex flex-col gap-5 md:px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 1.</h3>
          <h2 className="text-2xl md:text-3xl text-darkblue font-poppins-800">Accede a la sala vitual</h2>
          <p>
          Accede a nuestra plataforma de telemedicina desde tu computadora, tablet o smartphone. Asegúrate de tener una conexión estable a internet y de permitir el acceso a tu cámara y micrófono para una comunicación fluida con nuestro equipo médico.
          </p>
        </div>
      </div>
     
      <div className="flex lg:flex-row items-center flex-col-reverse text-center md:text-left">
        <div className="flex flex-col gap-5 md:px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 2.</h3>
          <h2 className="text-2xl md:text-3xl text-darkblue font-poppins-800">Danos algunos datos</h2>
          <p>
          Una vez dentro, completa el formulario con tu información personal y médica. Esta información es esencial para que podamos ofrecerte una atención personalizada y adecuada a tus necesidades. Recuerda que todos tus datos están protegidos y se manejan con la máxima confidencialidad.
          </p>
        </div>
        <img src={info} alt="Imagen doctora toma notas" className="w-full lg:w-1/3" />
      </div>
    
      <div className="flex lg:flex-row items-center flex-col text-center md:text-left">
        <img src={consulta} alt="Consulta y tratamiento" className="w-full lg:w-1/3" />
        <div className="flex flex-col gap-5 md:px-10">
          <h3 className="text-lg font-normal text-lightblue">Paso 3.</h3>
          <h2 className="text-2xl md:text-3xl text-darkblue font-poppins-800">Recibe tu consulta</h2>
          <p>
          Una vez que hayas proporcionado tus datos, serás conectado con uno de nuestros profesionales de salud. Durante la consulta, podrás discutir tus síntomas, hacer preguntas y recibir recomendaciones. Al finalizar, si es necesario, recibirás una receta o indicaciones para un seguimiento.
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
