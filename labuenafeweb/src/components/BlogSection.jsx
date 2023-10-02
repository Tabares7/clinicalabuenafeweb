import React from "react";
import Title from "./Title";
import ButtonFill from "./ButtonFill";

const BlogSection = ({ posts }) => {
  return (
    <section id="blog" className="flex flex-col gap-5 md:20  lg:px-40">
        <Title title="¡Nuestro Blog!" subtitle="Entradas de"/>
      {posts.map((post, index) => (
        <div className="flex flex-col md:flex-row gap-5 rounded-xl text-center md:text-left bg-cyan-50 p-5 md:p-10 mt-5 items-center hover:bg-cyan-100 hover:cursor-pointer" key={index}>
          <img
            src={post.img}
            alt="Imagen referente al post"
            className="rounded-lg lg:w-auto lg:h-52 w-full h-auto "
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-normal text-lightblue">{post.date}</h3>
            <h1 className="text-2xl lg:text-3xl font-bold text-darkblue">{post.title}</h1>
            <p className="text-justify">{post.text}</p>
            <div className="py-5 md:py-2 ">
            <ButtonFill text="Leer Más" url="kdkdk" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
