import React, {useState} from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Projects(){
    const slides = [
        {url:'https://images.unsplash.com/photo-1721013370122-f22f07cf4c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {url:'https://plus.unsplash.com/premium_photo-1682469892508-9b051e15e68b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {url:'https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToIndex = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }

    return(
        
        <div className='bg-primary min-h-screen'>
            <Navigationbar/>
            <div className='flex flex-col min-h-screen justify-center align-middle' id='body'>
                <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
                    {/* left arrow and right arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                       <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                    </div>
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                       <BsChevronCompactRight onClick={nextSlide} size={30}/>
                    </div>
                    {/* "paginator kinda" */}
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} onClick={() => goToIndex(slideIndex)} className='text-2xl cursor-pointer'>
                                <RxDotFilled/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}