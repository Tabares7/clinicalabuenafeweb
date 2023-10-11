import React from "react";
import about from "../assets/img/about-img.png";
import Title from "./Title";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:pt-20 items-center gap-16 text-center md:text-left"
    >
      {/* //? IMG  */}
      <div className="w-full md:w-1/2">
        <img src={about} alt="Imagen doctores" className="" />
      </div>
      {/* //? TEXTO  */}
      <div className="flex flex-col gap-10 w-3/4 items-center md:items-start">
        <Title title="Sobre Nosotros" />
        <p className="font-poppins-400">
          {" "}
          En la Clínica Familiar La Buena Fe, nuestra misión es brindar atención
          médica de calidad en un ambiente cálido y acogedor. Con años de
          experiencia en el campo de la salud, nuesctro equipo de profesionales
          está dedicado a servir a la comunidad, ofreciendo tratamientos y
          servicios que promueven el bienestar integral de cada paciente.{" "}
        </p>
        <p>
          {" "}
          Nos enorgullece ser un referente en atención médica en la región, y
          nos esforzamos día a día para garantizar que cada visita a nuestra
          clínica sea una experiencia positiva y enriquecedora. Tu salud y
          bienestar son nuestra prioridad.
        </p>

        <div className="flex gap-5">
          <a href="https://www.facebook.com/cflabuenafe">
            <SiFacebook className="h-8 w-8 text-lightblue hover:text-darkblue" />
          </a>
          <a href="https://www.instagram.com/clinicalabuenafe/">
            <SiInstagram className="h-8 w-8 text-lightblue hover:text-darkblue" />
          </a>
          <a href="https://www.tiktok.com/@clinicafamiliarlabuenafe">
            <SiTiktok className="h-8 w-8 text-lightblue hover:text-darkblue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
