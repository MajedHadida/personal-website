import { Link } from 'react-router-dom';
import leaf from '../../assets/leaf.png';

//In first div, apply shadow-md only when user scrolls down far enough.

const Navigationbar = () => {
    return(
    <div className="navbar rounded-box bg-primary rounded-t-none fixed top-0 z-10">
      <div className="flex-1">
        <a href='#main' className="btn btn-ghost text-xl normal-case hover:bg-transparent"><img src={leaf} width={40}></img> Majed</a>
      </div>
      <div className='flex gap-5'>
        <a href='#main' className="btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl">Home</a>
        <a href='#projects' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Projects</a>
        {/* <a href='#blog' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Blog</a> */}
        <a href='#contact' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Contact</a>
      </div>

    </div>
    );
}

export default Navigationbar;