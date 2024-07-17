import { Link } from 'react-router-dom';

//In first div, apply shadow-md only when user scrolls down far enough.

export default function Navigationbar(){
    return(
      <div className="navbar rounded-box bg-primary rounded-t-none fixed top-0">
      <div className="flex-1">
        <Link to='/personal-website/home' className="btn btn-ghost text-xl normal-case hover:bg-transparent">🟢 Majed</Link>
      </div>
      <div className='flex gap-5'>
        <Link to='/personal-website/home' className="btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl">Home</Link>
        <Link to='/personal-website/projects' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Projects</Link>
        <Link to='/personal-website/blog' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Blog</Link>
        <Link to='/personal-website/contact' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Contact</Link>
      </div>

    </div>
    );
}