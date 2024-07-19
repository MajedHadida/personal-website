import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';

const Blog  = () => {
    return(
        <div className='bg-primary'>
            <Navigationbar/>
            <div className='flex flex-col min-h-screen justify-center' id='body'>
            </div>

        </div>
    );
}
export default Blog;