import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';

const Contact = () => {
    return(
        <div className='bg-primary h-svh flex flex-col justify-center align-middle'>
            <Navigationbar/>
            <div className='grid grid-cols-3 grid-rows-3 px-28 gap-10' id='body'>
                <div className='flex justify-center items-center container bg-base-100 col-span-2 row-span-3 rounded-lg'>
                    Majed Hadida
                </div>
                <div className='flex justify-center items-center container bg-base-100 col-span-1 row-span-2 rounded-lg'>
                    A little about me
                </div>
                <div className='flex justify-center items-center container bg-base-100 col-span-1 row-span-1 rounded-lg'>
                    Currently...
                </div>
                {/* <div>Nature lover and a pixel art enthusiast. If I'm not coding, you'll find me playing video games, doing pixel art, or out on a hike!</div> */}
            </div>

        </div>
    );
}
export default Contact;