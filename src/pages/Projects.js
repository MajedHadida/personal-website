import React, { useState } from "react";
import Navigationbar from "../components/Navigationbar/Navigationbar";


const Projects = () => {
  //Placeholder images for the projects
  const projects = [
    {
      url: "https://images.unsplash.com/photo-1721013370122-f22f07cf4c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Test Title 1",
      desc: "Test Description 1"
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1682469892508-9b051e15e68b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Test Title 2",
      desc: "Test Description 2"
    },
    {
      url: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Test Title 3",
      desc: "Test Description 3"
    },
  ];

  //HTML
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="relative wrap overflow-hidden">
      {/* Top leaf title */}
      <div className="relative">
      <div className="bg-base-100 w-1/2 leaf-left flex justify-center">
        <h1 className="text-3xl font-bold my-3">Projects</h1>
      </div>
      {/* left leaf stem */}
      <div className="border border-2-2 border-base-100 w-[4%] absolute right-1/2 bottom-1 rotate-[15deg]"></div>
      </div>
      
      <div class="absolute border-base-100 h-full border-2 left-1/2"></div>
      {projects.map((project, index) => (
      <div key={index} className="mb-8 flex justify-between items-center w-full right-timeline relative">
        {/* Right leaf condition */}
        {index % 2 === 0 && (
          <>
            {/* empty div to keep leaf on right side */}
            <div className="order-1 w-5/12"></div>
            {/* Right leaf stem */}
            <div className="border border-2-2 border-base-100 w-[4%] absolute left-1/2 bottom-0 rotate-[345deg]"></div>
            {/* Leaf div */}
            <div className="order-1 leaf-right shadow-xl w-[47%] px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">{project.title}</h3>
              <p className="text-gray-700 leading-tight">{project.desc}</p>
            </div>
          </>
        )}

        {/* Left leaf condition */}
        {index % 2 !== 0 && (
          <>
            {/* Leaf div */}
            <div className="order-1 leaf-left shadow-xl w-[47%] px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">{project.title}</h3>
              <p className="text-gray-700 leading-tight">{project.desc}</p>
            </div>
            {/* left leaf stem */}
            <div className="border border-2-2 border-base-100 w-[4%] absolute right-1/2 bottom-0 rotate-[15deg]"></div>
            {/* empty div to keep leaf on left side */}
            <div className="order-1 w-5/12"></div>
          </>
        )}
      </div>
      ))}
      </div>
      {/* pot section */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2 h-[5vw] bg-[#B99470] rounded-t-xl border-black"></div>
        <div className="w-[45%] h-[40vh] bg-[#B99470] border-t-[1px] border-black"></div>
      </div>
    </div>
  );
}

export default Projects;
