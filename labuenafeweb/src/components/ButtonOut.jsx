import React from "react";


const ButtonOut = ({ text, url }) => {
  return (
    // Boton relleno generico
    <a
      href={url}
      className="rounded-full shadow-xl shadow-blue-200 text-darkblue px-3.5 py-2.5 text-sm  font-poppins-600  border-darkblue border-2 hover:font-poppins-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      
      {text}
    </a>
  );
};

export default ButtonOut;
