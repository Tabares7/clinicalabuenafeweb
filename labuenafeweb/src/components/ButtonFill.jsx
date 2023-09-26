import React from "react";

const ButtonFill = ({ text, url }) => {
  return (
    // Boton relleno generico
    <a
      href={url}
      className="rounded-full bg-yellow text-darkblue px-3.5 py-2.5 text-sm  font-poppins-600 shadow-sm hover:bg-yellow100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {text}
    </a>
  );
};

export default ButtonFill;
