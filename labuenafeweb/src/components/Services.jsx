import React from "react";

import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import Title from "./Title";

import { BsEar, BsTruck, BsPhone } from "react-icons/bs";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiGenderFemaleBold, PiSyringe } from "react-icons/pi";
import { MdOutlineChildCare } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";
import {
  GiBlood,
  GiCorkedTube,
  GiMedicalDrip,
  GiScalpel,
} from "react-icons/gi";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section id="services" className="my-32">
      <Title title="¡Servicios!" subtitle="Nuestros" />
      <div className="pt-16">
        <Accordion selectionMode="multiple">
          <AccordionItem
            className="  text-darkblue"
            key="1"
            aria-label="Otorrinolaringología"
            startContent={<BsEar className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">
                Nariz, Garganta y Oído
              </h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Consulta de otorrinolaringología</li>
              <li>- Endoscopías de otorrinolaringología</li>
              <li>- Lavados de oídos</li>
              <li>- Sinusitis</li>
              <li>- Cauterización de epistaxis (sangramiento nasal)</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="2"
            aria-label="dot"
            startContent={<BsTruck className="h-8 w-8" />}
            title={<h2 className="font-poppins-600 `text-darkblue">DOT</h2>}
          >
            <ol className="pl-10 mb-5">
              <li>- Chequeo CDL</li>
              <li>- Certificado DOT</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="3"
            aria-label="telehealth"
            startContent={<BsPhone className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">Telemedicina</h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Consulta desde tu casa</li>
              <li>- Prescripciones</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="4"
            aria-label="medicinageneral"
            startContent={<FaHandHoldingMedical className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">
                Medicina General
              </h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Diagnóstico y tratamiento de todo tipo de infecciones.</li>

              <li>- Hipertensión Arterial.</li>

              <li>- Diabetes.</li>

              <li>- Alergias.</li>

              <li>- Asma Bronquial.</li>

              <li>- Enfermedades del corazón, riñones e hígado.</li>

              <li>- Enfermedades de la piel.</li>

              <li>- Trastornos sexuales.</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="5"
            aria-label="ginecologia"
            startContent={<PiGenderFemaleBold className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">Ginecología</h2>
            }
          >
            <ol  className="pl-10 mb-5">
              <li>- Diagnóstico y tratamiento de afecciones ginecológicas.</li>
              
              <li>- 
                Diagnóstico y tratamiento de infecciones vaginales (incluidas
                las de transmisión sexual).
              </li>
              
              <li>- 
                Diagnóstico temprano del cáncer de mama (examen físico anual y
                sonograma si se requiere)
              </li>
              
              <li>- 
                Prevención del cáncer de útero (exámenes de Papanicolau, Virus
                del Papiloma Humano).
              </li>
              
              <li>- Diagnóstico de embarazo.</li>
              
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="6"
            aria-label="Otorrinolaringología"
            startContent={<MdOutlineChildCare className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">Pediatría</h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li> -Niños mayores de 3 años.</li>
              <li> -Examen físico escolar.</li>
              <li> -Diagnóstico y tratamiento de todo tipo de infecciones.</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="7"
            aria-label="Otorrinolaringología"
            startContent={<LiaWeightSolid className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">
                Pérdida de Peso
              </h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Medicamento Semaglutide</li>
              <li>- Aprobado por la FDA</li>
              <li>- 20 semanas de duración</li>
              <li>- Exámenes de sangre necesarios</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="8"
            aria-label="Otorrinolaringología"
            startContent={<GiMedicalDrip className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">
                Sueros Vitaminados
              </h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Myers' Cocktail</li>
              <li>- Glutatión</li>
              <li>- Altas dosis de vitamina C</li>
              <li>- Todas las vitaminas del complejo B</li>
              <li>- Tasas de minerales</li>
              <li>- Magnesio</li>
              <li>- Calcio</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="9"
            aria-label="Otorrinolaringología"
            startContent={<GiCorkedTube className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">
                Exámens de Laboratorio
              </h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- General de sangre.</li>

              <li>- Colesterol y Triglicéridos.</li>

              <li>- HbA1C para diabetes.</li>

              <li>- Panel de Anemia.</li>

              <li>- COVID test.</li>

              <li>- Influenza test.</li>

              <li>- Strep test.</li>

              <li>- Prueba de embarazo (en orina y en sangre).</li>

              <li>- Test de Helicobacter Pylori (Gastritis).</li>

              <li>- Examen de Artritis.</li>

              <li>- Examen de Próstata.</li>

              <li>- Papanicolau (PAP).</li>

              <li>- Virus del Papiloma Humano (HPV).</li>

              <li>- Infecciones de transmisión sexual (STD).</li>

              <li>- Chequeo de hormonas.</li>

              <li>- Examen de la tiroides.</li>

              <li>- Chequeo de orina.</li>

              <li>- Exámenes de heces fecales.</li>

              <li>
                - Cultivos de ojos, oídos, garganta, piel, orina, genital y
                heces fecales.
              </li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="10"
            aria-label="Otorrinolaringología"
            startContent={<PiSyringe className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">Vacunación</h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Vacuna contra el FLU</li>
              <li>- Vacuna contra el Tétano</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            className="  text-darkblue"
            key="11"
            aria-label="Otorrinolaringología"
            startContent={<GiScalpel className="h-8 w-8" />}
            title={
              <h2 className="font-poppins-600 `text-darkblue">Cirugía Menor</h2>
            }
          >
            <ol className="pl-10 mb-5">
              <li>- Cauterización de berrugas</li>
              <li>- Suturas de heridas</li>
              <li>- Retirar suturas</li>
              <li>- Remover DIU</li>
              <li>- Remover implantes</li>
              <li>- Drenaje de abscesos</li>
            </ol>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
