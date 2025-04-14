import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import studying from '../assets/studying.png';
import materialsBanner from '../assets/pixelArt/MaterialsBanner.png'
import checkGif from '../assets/pixelArt/Check.gif'
import crossGif from '../assets/pixelArt/x.gif'
import desert from '../assets/pixelArt/Desert.png'
import sunset from '../assets/pixelArt/Sunset.png'
import pikachu from '../assets/pixelArt/Pikachu.gif'
import tymalf from '../assets/pixelArt/TyrandeNew.gif'
import amethyst from '../assets/pixelArt/AmethystSpike.png'
import donkey from '../assets/pixelArt/Donkey.gif'
import Tools from './Tools'


const Contact = () => {
    return(
        <div className='bg-primary h-full flex flex-col justify-center align-middle'>
            <div className='grid grid-cols-3 grid-rows-3 mx-28 gap-10 my-3' id='body'>
                <div className='flex flex-col items-center container bg-base-100 col-span-2 row-span-3 rounded-lg p-5'>
                <h1 className='text-5xl font-bold'>My Pixel Art!</h1>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src={materialsBanner}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src={checkGif}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src= {crossGif}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src={desert}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src={sunset}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
                    src={pikachu}
                    alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
                    src={tymalf} alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
                    src={amethyst} alt="gallery-photo" />
                </div>
                <div>
                    <img class="object-contain object-center w-full h-40 max-w-full rounded-lg"
                    src={donkey}
                    alt="gallery-photo" />
                </div>
                </div>
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