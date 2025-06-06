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
                setShowCloud2(true);
            }, 5000);
            return () => clearTimeout(timer);
        };
    }, []);

    return (
        <div className='bg-primary overflow-x-hidden relative'>
            <Navigationbar/>
            <div className="cloud absolute z-0" id="cloud"></div>
            {showCloud2 && (
                <div className="cloud absolute z-0" id="cloud2"></div>
            )}
            <div id="main" className='flex justify-center align-middle lg:px-0 px-10'>
                <div className='flex flex-col min-h-screen justify-center' id='body'>
                    <div className='lg:text-3xl text-xl'>
                    <p className="animate-fade-right-3s animate-duration z-10">Hello, I'm</p>
                    </div>
                    <div>
                    <h1 className='lg:text-9xl text-4xl font-bold animate-fade-right-1s z-10'>Majed</h1>
                    </div>
                    <div className=''>
                    <p className='lg:text-4xl text-xl animate-fade-right-3s z-10'>I'm a front-end developer.</p>
                    </div>
                    <div className='animate-fade-right-3s z-10'>
                    <span className='lg:text-2xl text-lg italic'>Aspiring to be a full-stack developer </span><span>😁</span>
                    </div>
                </div>
                <img src={plant} alt='plant icon' className='lg:h-48 h-32 self-center'/>
            </div>

            <div id="projects">
                <Projects/>
            </div>

            {/* <div id="blog">
                <Blog/>
            </div> */}

            <div id="contact" className="mt-16 mb-5">
                <Tools/>
                <Contact/>
            </div>


            <Footer/>
        
      </div>
    );
}

export default Home;