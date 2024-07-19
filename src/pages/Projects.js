import React, { useState } from "react";
import Navigationbar from "../components/Navigationbar/Navigationbar";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { RxDot } from "react-icons/rx";
import { Link } from "react-router-dom";


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

  //Usestate, still learning these.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  //Function to go back one slide when arrow clicked
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  //Function to go forward one slide when arrow clicked
  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //Function to skip to any slide when interacting with dots below image
  const goToIndex = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  //HTML
  return (
    <div className="bg-primary min-h-screen">
      <Navigationbar />
      <div
        className="flex flex-col min-h-screen justify-center align-middle"
        id="body"
      >
        
        <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div className="w-full h-full rounded-2xl flex justify-start">
          <div
            style={{ backgroundImage: `url(${projects[currentIndex].url})` }}
            className="bg-center bg-cover duration-500 w-[60%] h-full rounded-tl-lg rounded-bl-lg"
          >
          </div>
          
          <div className="w-[40%] h-full flex flex-col items-center justify-center bg-base-100 rounded-tr-lg rounded-br-lg shadow md:max-w-xl">
              <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projects[currentIndex].title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{projects[currentIndex].desc}</p>
                  <Link to='./project-details' className="btn btn-secondary" state={{ title: projects[currentIndex].title }}>Learn More</Link>
              </div>
          </div>
        </div>
          


          {/* left arrow and right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* "paginator kinda" */}
          <div className="flex top-4 justify-center py-2">
            {projects.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToIndex(slideIndex)}
                onMouseEnter={() => {
                  setHoveredIndex(slideIndex);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
                className="text-2xl cursor-pointer"
              >
                {currentIndex === slideIndex ? (
                    <RxDotFilled style={{color: '#570df8'}}/>
                ) : (
                    <RxDot
                    className={(hoveredIndex === slideIndex) || (currentIndex === slideIndex) ? "transition duration-300 ease-in-out delay-150 -translate-y-1" : ""}
                    style={{ color: (hoveredIndex === slideIndex) || (currentIndex === slideIndex) ? '#570df8' : 'black' }}/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
