import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import projects from "./projects.json"




const Projects = () => {

  const [openProjectIndex, setOpenProjectIndex] = useState(null)

  function toggle(index){
    setOpenProjectIndex(openProjectIndex === index ? null : index)
  }

  //HTML
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="relative wrap overflow-hidden">
      {/* Top leaf title */}
      <div className="relative pt-5">
      <div className="bg-base-100 w-1/2 leaf-left flex justify-center">
        <h1 className="text-3xl font-bold my-3">Projects</h1>
      </div>
      {/* left leaf stem */}
      <div className="stem-left"></div>
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
            <div className="stem-right"></div>
            {/* Leaf div */}
            <div className="order-1 leaf-right shadow-xl w-[47%] px-6 py-4">
              <div onClick={() => toggle(index)} style={{cursor:'pointer'}} className="flex justify-between">
              <h3 className="mb-3 font-bold text-gray-800 text-xl flex flex-col">
                <div>{project.title}</div>
                <div className="text-base text-slate-500">{project.date}</div>
              </h3>
                {openProjectIndex === index && (
                  <FaChevronUp/>
                )}
                {openProjectIndex !== index && (
                  <FaChevronDown/>
                )}
              </div>
              {openProjectIndex === index && (
                <>
                  <hr className="mb-2 h-px bg-black border-0"></hr>
                  {/* Iterate through "languages" array in each project to separate them to each "button" */}
                  {project.languages.map((language, index) =>(
                    <div className="btn btn-accent mr-1" style={{cursor:'default'}}>{language}</div>
                  ))
                  }
                  <hr className="my-2 h-px bg-black border-0"></hr>
                  <p className="text-gray-700 leading-tight">{project.desc}</p>
                  <div className="flex justify-center"><a className="btn btn-secondary mt-2" href={project.view_link} target="_blank">{project.view_msg}</a></div>
                </>
              )}
              
            </div>
          </>
        )}

        {/* Left leaf condition */}
        {index % 2 !== 0 && (
          <>
            {/* Leaf div */}
            <div className="order-1 leaf-left shadow-xl w-[47%] px-6 py-4">
              <div onClick={() => toggle(index)} style={{cursor:'pointer'}} className="flex justify-between">
                <h3 className="mb-3 font-bold text-gray-800 text-xl flex flex-col">
                  <div>{project.title}</div>
                  <div className="text-base text-slate-500">{project.date}</div>
                </h3>
                {openProjectIndex === index && (
                  <FaChevronUp/>
                )}
                {openProjectIndex !== index && (
                  <FaChevronDown/>
                )}
              </div>
              {openProjectIndex === index && (
                <>
                  <hr className="mb-2 h-px bg-black border-0"></hr>
                  {/* Iterate through "languages" array in each project to separate them to each "button" */}
                  {project.languages.map((language, index) =>(
                    <div className="btn btn-accent mr-1" style={{cursor:'default'}}>{language}</div>
                  ))
                  }
                  <hr className="my-2 h-px bg-black border-0"></hr>
                  <p className="text-gray-700 leading-tight">{project.desc}</p>
                  <div className="flex justify-center"><a className="btn btn-secondary mt-2" href={project.view_link} target="_blank">{project.view_msg}</a></div>
                </>
              )}
            </div>
            {/* left leaf stem */}
            <div className="stem-left"></div>
            {/* empty div to keep leaf on left side */}
            <div className="order-1 w-5/12"></div>
          </>
        )}
      </div>
      ))}
      </div>
      {/* pot section */}
      <div className="flex flex-col justify-center items-center relative">
        {/* <div className="absolute top-0 branch-stem"></div> */}
        <div className="w-screen h-[5vw] bg-[#B99470] border-black rotate-[355deg]"></div>
      </div>
    </div>
  );
}

export default Projects;