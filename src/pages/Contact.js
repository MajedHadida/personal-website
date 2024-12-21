import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import studying from '../assets/studying.png';
import Tools from './Tools'


const Contact = () => {
    return(
        <div className='bg-primary h-full flex flex-col justify-center align-middle'>
            <div className='grid grid-cols-3 grid-rows-3 mx-28 gap-10 my-3' id='body'>
                <div className='flex items-center container bg-base-100 col-span-2 row-span-3 rounded-lg p-5'>
                    
                </div>
                <div className='flex flex-col container bg-base-100 col-span-1 row-span-1 rounded-lg p-5'>
                    <h1 className='text-3xl text-left'>A little about me</h1>
                    <p>Nature lover and a pixel art enthusiast. If I'm not coding, you'll find me playing video games (usually cozy games or MMORPGs... <i>add me on Steam!</i>), doing pixel art, or out on a hike!</p>
                </div>
                <div className='flex flex-col container bg-base-100 col-span-1 row-span-2 rounded-lg p-5'>
                    <div className='flex flex-row'>
                        <h1 className='text-3xl text-left'><b>Status:</b></h1>
                        <div className='flex items-center justify-center bg-secondary w-full mx-5 rounded-3xl'>
                            <h1 className='text-primary animate-pulse animate-infinite tracking-widest text-2xl'>Studying</h1>
                        </div>
                    </div>
                    <div className='flex justify-center pt-5'>
                        <img src={studying} width={300}></img>
                    </div>

                </div>
            </div>

        </div>
    );
}
export default Contact;