import React, { useState } from "react";
import plant from '../assets/plant.png'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Footer from '../components/Footer'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
 
const Home = () =>{
    const [scrollYPosition, setScrollYPosition] = React.useState(0);

    const handleScroll = () => {
        const newScrollYPosition = window.pageYOffset;
        setScrollYPosition(newScrollYPosition);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-primary'>
            <Navigationbar/>
            <div className="cloud flex items-center"><p className="text-center">I'm a test cloud :)</p></div>
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
                    <span className='text-2xl italic'>I also minor in user experience </span><span>😁</span>
                    </div>
                </div>
                <img src={plant} alt='plant icon' className='h-48 self-center'/>
            </div>

            <div id="projects">
                <Projects/>
            </div>

            <div id="blog">
                <Blog/>
            </div>

            <div id="contact">
                <Contact/>
            </div>

            <Footer/>
        
      </div>
    );
}

export default Home;