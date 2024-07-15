import './styles/Navigationbar.css'; // Import the custom CSS file

//In first div, apply shadow-md only when user scrolls down far enough.

export default function Navigationbar(){
    return(
      <div className="navbar rounded-box bg-primary rounded-t-none fixed top-0">
      <div className="flex-1">
        <a href='/personal-website' className="btn btn-ghost text-xl normal-case hover:bg-transparent">🟢 Majed</a>
      </div>
      <div className='flex gap-5'>
        <a href='/personal-website' className="btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl">Home</a>
        <a href='/personal-website/projects' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Projects</a>
        <a href='/personal-website/blog' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Blog</a>
        <a href='/personal-website/contact' className='btn btn-ghost hover:bg-secondary hover:text-white font-bold rounded-3xl'>Contact</a>
      </div>

    </div>
    );
}