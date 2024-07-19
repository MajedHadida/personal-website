import leaf from '../assets/leaf.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const footer = () =>{
    return(
        <footer className="footer bg-base-100 text-neutral-content p-10">
  <aside>
    <img src={leaf} alt='plant icon' className='h-[50px]'/>
    <p>
      Majed
      <br />
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='https://www.linkedin.com/in/majedhadida/' target='_blank'>
        <FaLinkedin size={25}/>
      </a>
      <a href='https://github.com/MajedHadida' target='_blank'>
        <FaGithub size={25}/>
      </a>
    </div>
  </nav>
</footer>
    );
}

export default footer;