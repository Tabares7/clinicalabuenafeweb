import React from "react";
import Title from "./Title";
import ButtonFill from "./ButtonFill";

const BlogSection = ({ posts }) => {
  return (
    <section className="flex flex-col gap-5  px-40">
        <Title title="¡Nuestro Blog!" subtitle="Entradas de"/>
      {posts.map((post, index) => (
        <div className="flex gap-5 rounded-xl bg-cyan-50 p-10 mt-5 items-center hover:bg-cyan-100 hover:cursor-pointer" key={index}>
          <img
            src={post.img}
            alt="Imagen referente al post"
            className="rounded-lg h-52"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-normal text-lightblue">{post.date}</h3>
            <h1 className="text-4xl font-bold text-darkblue">{post.title}</h1>
            <p>{post.text}</p>
            <div className="py-2">
            <ButtonFill text="Leer Más" url="kdkdk" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
