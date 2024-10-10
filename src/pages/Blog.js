import React from 'react';
import Navigationbar from '../components/Navigationbar/Navigationbar';

const Blog  = () => {
    return(
        <div className='bg-primary'>
            <div className='flex flex-col min-h-screen justify-center' id='body'>
<div>
  <div class="ps-2 my-2 first:mt-0">
    <h3 class="text-xs font-medium uppercase text-gray-500">
      1 Aug, 2023
    </h3>
  </div>

  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="z-[1] absolute inset-0" href="#"></a>

    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>

    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        <svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" x2="8" y1="13" y2="13"></line>
          <line x1="16" x2="8" y1="17" y2="17"></line>
          <line x1="10" x2="8" y1="9" y2="9"></line>
        </svg>
        Created "Preline in React" task
      </h3>
      <p class="mt-1 text-sm text-gray-600">
        Find more detailed insctructions here.
      </p>
      <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none">
        <img class="shrink-0 size-4 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar"></img>
        James Collins
      </button>
    </div>

  </div>


  <div class="ps-2 my-2 first:mt-0">
    <h3 class="text-xs font-medium uppercase text-gray-500">
      03 Oct, 2024
    </h3>
  </div>

  <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100">
    <a class="z-[1] absolute inset-0" href="#"></a>


    <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div class="relative z-10 size-7 flex justify-center items-center">
        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
      </div>
    </div>

    <div class="grow p-2 pb-8">
      <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
        First manual blog
      </h3>
      <p class="mt-1 text-sm text-gray-600">
        Testing things out!
      </p>
    </div>
  </div>
</div>

            </div>

        </div>
    );
}
export default Blog;