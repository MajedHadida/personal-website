import { Link } from 'react-router-dom';
import leaf from '../../assets/leaf.png';
import { useState } from 'react';



const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    return(
    <nav className="fixed bg-primary w-full z-[100]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[bg-base-200] hover:bg-secondary hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <a href='#' className="btn btn-ghost text-xl normal-case hover:bg-transparent"><img src={leaf} width={40}></img> Majed</a>
              
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href='#main' className="btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl">Home</a>
                <a href='#projects' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Projects</a>
                <a href='#contact' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>About Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#main" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-secondary hover:text-white" aria-current="page">Home</a>
            <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-secondary hover:text-white">Projects</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-secondary hover:text-white">About Me</a>
          </div>
        </div>
      )}
    </nav>
    );
}

export default Navigationbar;