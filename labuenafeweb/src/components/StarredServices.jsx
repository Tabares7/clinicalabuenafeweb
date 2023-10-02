import React from "react";

import { GiMedicalDrip } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";



const StarredServices = () => {
  return (
    <section id="starred" className="bg-darkblue text-white flex flex-col md:flex-row gap-5 md:gap-10 p-14 md:p-20 lg:px-32  items-center justify-center ">
      <div className="border-2 border-white rounded-lg p-5 flex flex-col gap-5">
        <GiMedicalDrip className="text-5xl"/>
        <h2 className="text-2xl font-poppins-600">Sueros Vitaminados</h2>
        <p>Energia asegurada con altas dosis de vitaminas.</p>
      </div>
      <div className="border-2 border-white rounded-lg p-5 flex flex-col gap-5">
        <BsTruck className="text-5xl"/>
        <h2 className="text-2xl font-poppins-600">Examen DOT</h2>
        <p>Energia asegurada con altas dosis de vitaminas.</p>
      </div>
      <div className="border-2 border-white rounded-lg p-5 flex flex-col gap-5">
        <LuMonitorSmartphone className="text-5xl"/>
        <h2 className="text-2xl font-poppins-600">Telemedicina</h2>
        <p>Energia asegurada con altas dosis de vitaminas.</p>
      </div>
    </section>
  );
};

export default StarredServices;
