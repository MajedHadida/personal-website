import React, { useState, useRef, useEffect } from "react";
import plant from '../assets/plant.png'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Footer from '../components/Footer'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import Tools from './Tools'
 
const Home = () =>{

//   const containerRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(element => {
//           if (element.isIntersecting){
//               element.target.classList.add('animate-fade-right-3s');
//           }
//       });
//     });
//     observer.observe(containerRef.current);
//     return () => {
//       observer.disconnect()
//     };
//   }, []);  


    React.useEffect(() => {
        return () => {
            let el = document.getElementById('cloud');
            if(el){
                el.style.setProperty('--rand', Math.random());
                const computedStyle = getComputedStyle(el);
                console.log('Value of --rand:', computedStyle.getPropertyValue('--rand'));
            }
        };
    }, []);

    function setCloud(){
        console.log("onanimationend")
        let el = document.getElementById('cloud');
        if(el){
            el.style.animation = "none";
            el.style.setProperty("--rand", Math.random());
            el.style.animation = "fade-right 2s ease-out, moveClouds 60s linear"
        }
    }

    return (
        <div className='bg-primary overflow-x-hidden relative'>
            <Navigationbar/>
            <div className="cloud absolute" id="cloud" onAnimationEnd={setCloud}></div>
            <div id="main" className='flex justify-center align-middle'>
                <div className='flex flex-col min-h-screen justify-center' id='body'>
                    <div className='text-3xl'>
                    <p className="animate-fade-right-3s animate-duration">Hello, I'm</p>
                    </div>
                    <div>
                    <h1 className='text-9xl font-bold animate-fade-right-1s'>Majed</h1>
                    </div>
                    <div className=''>
                    <p className='text-4xl animate-fade-right-3s'>I'm a front-end developer.</p>
                    </div>
                    <div className='animate-fade-right-3s'>
                    <span className='text-2xl italic'>Aspiring to be a full-stack developer </span><span>😁</span>
                    </div>
                </div>
                <img src={plant} alt='plant icon' className='h-48 self-center'/>
            </div>

            <div id="projects">
                <Projects/>
            </div>

            {/* <div id="blog">
                <Blog/>
            </div> */}

            <div id="contact" className="mt-16">
                <Tools/>
                <Contact/>
            </div>


            <Footer/>
        
      </div>
    );
}

export default Home;