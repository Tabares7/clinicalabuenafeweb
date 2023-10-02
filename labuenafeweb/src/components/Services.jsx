import React from "react";

import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import Title from "./Title";

import {BsEar, BsTruck, BsPhone} from 'react-icons/bs'

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section id="services" className="my-32">
    <Title title="¡Servicios!" subtitle="Nuestros"/>
    <div className="pt-16">
    <Accordion selectionMode="multiple">
      <AccordionItem
      className="  text-darkblue"
        key="1"
        aria-label="Otorrinolaringología"
        startContent={
         <BsEar className="h-8 w-8"/>
        }
        title={
            <h2 className="font-poppins-600 `text-darkblue">Otorrinolaringología</h2>
        }
        
      >
        <ol className="pl-10 mb-5">
            <li>- Consulta de otorrinolaringologia</li>
            <li>- Endoscopias de otorrinolaringologia</li>
        </ol>
      </AccordionItem>
      <AccordionItem
      className="  text-darkblue"
        key="2"
        aria-label="Otorrinolaringología"
        startContent={
         <BsTruck className="h-8 w-8"/>
        }
        title={
            <h2 className="font-poppins-600 `text-darkblue">DOT</h2>
        }
        
      >
        <ol className="pl-10 mb-5">
            <li>- Chequeo CDL</li>
            <li>- Certificado DOT</li>
        </ol>
      </AccordionItem>
      <AccordionItem
      className="  text-darkblue"
        key="3"
        aria-label="Otorrinolaringología"
        startContent={
         <BsPhone className="h-8 w-8"/>
        }
        title={
            <h2 className="font-poppins-600 `text-darkblue">Telemedicina</h2>
        }
        
      >
        <ol className="pl-10 mb-5">
            <li>- Consulta desde tu casa</li>
            <li>- Prescripciones</li>
        </ol>
      </AccordionItem>
    </Accordion>
    </div>
    </section>
  );
}

