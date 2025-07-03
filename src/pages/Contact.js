import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import materialsBanner from '../assets/pixelArt/MaterialsBanner.png'
import banditDefeat from '../assets/pixelArt/Bandit_Die.gif'
import merchantSilk from '../assets/pixelArt/MerchantSilk_Idle.gif'
import desert from '../assets/pixelArt/Desert.png'
import sunset from '../assets/pixelArt/Sunset.png'
import pikachu from '../assets/pixelArt/Pikachu.gif'
import tymalf from '../assets/pixelArt/TyrandeNew.gif'
import amethyst from '../assets/pixelArt/AmethystSpike.png'
import donkey from '../assets/pixelArt/Donkey.gif'
import Tools from './Tools'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Contact = () => {
    return(
        <div className='bg-primary h-full flex flex-col justify-center align-middle'>
            <div className='flex flex-col bg-base-100 col-span-1 row-span-1 rounded-lg p-5 z-10 container mx-auto mb-10'>
                <h1 className='text-3xl text-left font-bold mb-3'>A Little About Me</h1>
                <p className='text-xl mb-3'>Thanks for taking the time to check out my page! As you can tell, I love pixel art. When I'm not coding, I'm either drawing pixel art, out in nature, or gaming (especially MMORPGs or cozy games)</p>
                <p className='text-xl mb-3'>I'm currently working on "Elder Elves", a Minecraft mod where I get the opportunity to explore the world of Minecraft modding (and of course, improve my pixel art).</p>
                <p className='text-xl mb-5'>Don't hesitate to reach out to me if you want to have a quick chat. You can find me on LinkedIn!</p>
                <div className='flex justify-center'>
                    <div className='flex justify-evenly w-1/2'>
                        <a href='https://www.linkedin.com/in/majedhadida/' target='_blank' rel="noreferrer">
                            <FaLinkedin size={50} className='text-secondary hover:text-[#56347d]'/>
                        </a>
                        <a href='https://github.com/MajedHadida' target='_blank' rel="noreferrer">
                            <FaGithub size={50} className='text-secondary hover:text-[#56347d]'/>
                        </a>
                    </div>
                </div>
            </div>

                <div className='flex flex-col container bg-base-100 col-span-2 row-span-3 rounded-lg p-5 z-10'>
                    <h1 className='text-3xl text-left font-bold mb-3'>My Pixel Art!</h1>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className='flex justify-center'>
                            <img class="object-center rounded-lg"
                            src={donkey}
                            width={250}
                            height={250}
                            alt="gallery-photo" />
                        </div>
                        <div className='flex justify-center'>
                            <img class="object-center rounded-lg"
                            src={banditDefeat}
                            width={250}
                            height={250}
                            alt="gallery-photo" />
                        </div>
                        <div className='flex justify-center'>
                            <img class="object-center rounded-lg"
                            src= {merchantSilk}
                            width={250}
                            height={250}
                            alt="gallery-photo" />
                        </div>
                        <div>
                            <img class="object-cover object-center w-full h-40 max-w-full rounded-lg"
                            src={desert}
                            alt="gallery-photo" />
                        </div>
                        <div>
                            <img class="object-cover object-center w-full h-40 max-w-full rounded-lg pixelArt"
                            src={sunset}
                            alt="gallery-photo" />
                        </div>
                        <div>
                            <img class="object-cover object-center w-full h-40 max-w-full rounded-lg pixelArt"
                            src={tymalf} alt="gallery-photo" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex items-center justify-center bg-secondary w-1/2 rounded-3xl mt-5'>
                            <a href='https://elfapixels.itch.io/the-wonders-of-caravan' target='_blank' rel="noreferrer"><button className='btn btn-ghost text-white hover:bg-secondary hover:text-black font-bold rounded-3xl'>See more pixel art</button></a>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Contact;