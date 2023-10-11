import React from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

import MyBusinessLocationMap from "./MyBusinessLocationMap";
const products = [
  {
    name: "Otorrinolaringologia",
    description: "Conecta con nosotros ya mismo",
    href: "#services",
  },
  {
    name: "Sueros Vitaminados",
    description: "Échale un vistazo a como podemos ayudarte",
    href: "#services",
  },
  {
    name: "Programa de Perdida de Peso",
    description: "Mantente informado con nosotros",
    href: "#services",
  },
  {
    name: "Laboratorios",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Telemedicina",
    description: "Ten tu consulta desde casa",
    href: "#services",
  },
  {
    name: "DOT",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Medicina General",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Vacunación",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Cirugía Menor",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Pediatría",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
  {
    name: "Muchos más ",
    description: "Conece un poco más sobre nosotros",
    href: "#services",
  },
];
const callsToAction = [
  {
    name: "Haz una cita",
    href: "https://provider.kareo.com/madelin-perez-antela",
    icon: PlayCircleIcon,
  },
];

const closeMobileMenu = () => {
  setMobileMenuOpen(false);
};

const Footer = () => {
  return (
    <footer className="bg-darkblue flex md:flex-row flex-col p-10 lg:p-20 gap-10 text-white">
      <div className="space-y-2 min-w-3/2 flex flex-col ">
        <div className="">
          <a
            href="#services"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow"
          >
            Servicios
          </a>
          <a
            href="#insurances"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow"
          >
            Seguros
          </a>
          <a
            href="#telemedicina"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow"
          >
            Telemedicina
          </a>
          <a
            href="#about"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow"
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow"
          >
            Contáctanos
          </a>
        </div>
        <a
          href="https://provider.kareo.com/madelin-perez-antela"
          className="rounded-full  bg-yellow text-darkblue px-2 py-2.5 text-sm  font-poppins-600  hover:bg-darkblue hover:border-2 hover:border-yellow hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Haz una cita
        </a>
      </div>
      <div className="px-0 lg:px-32">
        <h2 className=" font-poppins-800 text-3xl mb-5 ">About Us</h2>
        <p>
          {" "}
          Nos enorgullece ser un referente en atención médica en la región, y
          nos esforzamos día a día para garantizar que cada visita a nuestra
          clínica sea una experiencia positiva y enriquecedora. Tu salud y
          bienestar son nuestra prioridad.
        </p>

        <div className="flex gap-5 mt-5">
          <a href="https://www.facebook.com/cflabuenafe">
            <SiFacebook className="h-8 w-8 text-yellow hover:h-10 hover:w-10" />
          </a>
          <a href="https://www.instagram.com/clinicalabuenafe/">
            <SiInstagram className="h-8 w-8 text-yellow hover:h-10 hover:w-10" />
          </a>
          <a href="https://www.tiktok.com/@clinicafamiliarlabuenafe">
            <SiTiktok className="h-8 w-8 text-yellow hover:h-10 hover:w-10" />
          </a>
        </div>
        <h2 className="mt-10 font-poppins-800 text-2xl mb-5 ">
          <FaLocationDot className="text-yellow h-8 w-8 inline-block mr-3 " />
          
          2000 Esters Rd, Ste #120, Irving TX, 75061.
        </h2>
      </div>
      <div>
        <MyBusinessLocationMap
          latitud={32.83512415357092}
          longitud={-97.00876835601383}
        />
      </div>
    </footer>
  );
};

export default Footer;
