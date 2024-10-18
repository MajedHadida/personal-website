import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';

const Blog  = () => {
    return(
        <div className='bg-primary'>
          <div className='flex flex-col min-h-screen justify-center items-center' id='body'>
            <div className='flex justify-center bg-base-100 rounded-xl w-1/2'>
              <h1 className='text-3xl my-3 font-bold'>Blog</h1>
            </div>
            <p className='my-3 italic'>Coming soon...</p>

          </div>
        </div>
    );
}
export default Blog;