import React, { useState, useRef, useEffect } from "react";
import pfp from '../assets/pfp.png'
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
    const [showCloud2, setShowCloud2] = useState(false);


    React.useEffect(() => {
        return () => {
            let el = document.getElementById('cloud');
            if(el){
                el.style.setProperty('--rand', Math.random());
                const computedStyle = getComputedStyle(el);
                // console.log('Value of --rand:', computedStyle.getPropertyValue('--rand'));
            }
            const timer = setTimeout(() => {
                console.log("Show cloud 2");
                setShowCloud2(true);
            }, 5000);
            return () => clearTimeout(timer);
        };
    }, []);

    return (
        <div className='bg-primary overflow-x-hidden relative'>
            <Navigationbar/>
            <div className="cloud absolute z-[-1]" id="cloud"></div>
            {showCloud2 && (
                <div className="cloud absolute z-[-1]" id="cloud2"></div>
            )}
            <div id="main" className='flex justify-evenly align-middle mx-10'>
                <div className='flex flex-col min-h-screen justify-center' id='body'>
                    <div className='lg:text-4xl text-xl'>
                    <p className="animate-fade-right-3s animate-duration z-10">Hi, I'm <b>Majed</b>!</p>
                    </div>
                    <div className=''>
                    <p className='lg:text-4xl text-xl animate-fade-right-3s z-10'>I'm a front-end developer.</p>
                    </div>
                    <div className='animate-fade-right-3s z-10'>
                    <span className='lg:text-2xl text-lg italic'>Aspiring to be a full-stack developer </span><span>😁</span>
                    </div>
                </div>
                <div className="flex flex-col min-h-screen justify-center">
                    <img src={pfp} width={300} alt='plant icon' className='self-center animate-fade-left-2s'/>
                    <p className="lg:text-xl italic text-center pt-1 animate-fade-left-2s">Nice to meet you!</p>
                </div>
            </div>

            <div className="mt-16 mx-auto container">
                <Tools/>
            </div>
            

            <div className="mt-5 mx-auto container" id="projects">
                <Projects/>
            </div>

            {/* <div id="blog">
                <Blog/>
            </div> */}

            <div id="contact" className="mt-16 mb-5 mx-auto container">
                <Contact/>
            </div>


            <Footer/>
        
      </div>
    );
}

export default Home;