import React from "react";
import plant from '../assets/plant.png'
import Navigationbar from '../components/Navigationbar/Navigationbar'
 
export default function Home(){
    return (
        <div className='bg-primary'>
            <Navigationbar/>
            <div className='flex justify-center align-middle'>
                <div className='flex flex-col min-h-screen justify-center' id='body'>
                    <div className='text-3xl'>
                    <p>Hello, I'm</p>
                    </div>
                    <div className='font-bold font-serif'>
                    <p className='text-9xl'>Majed.</p>
                    </div>
                    <div className=''>
                    <p className='text-4xl'>I'm a front-end developer.</p>
                    </div>
                    <div className=''>
                    <span className='text-2xl italic'>I also minor in user experience </span><span>😁</span>
                    </div>
                </div>
                <img src={plant} alt='plant icon' className='h-48 self-center'/>
            </div>
        
        
      </div>
    );
}