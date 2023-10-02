import React from "react";
import StarredServices from "./StarredServices";

const ImgSpacer = () => {
  return (
    // <section
    //   className=" hidden md:block relative h-[500px] w-full bg-cover bg-center "
    //   style={{ backgroundImage: `url(${imageUrl})` }}
    // >
    //   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
       
    //   </div>
    // </section>
    <div className=" w-screen mb-10 ">
        <svg className="w-screen h-auto object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0062FF" fillOpacity="1" d="M0,32L60,48C120,64,240,96,360,122.7C480,149,600,171,720,176C840,181,960,171,1080,144C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
       <StarredServices/>
    </div>
  );
};

export default ImgSpacer;
