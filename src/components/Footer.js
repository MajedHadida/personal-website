import leaf from '../assets/leaf.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const footer = () =>{
    return(
        <footer className="footer bg-base-200 text-neutral-content p-5">
  <aside>
    <img src={leaf} alt='plant icon' className='h-[35px]'/>
    <p>
      Made by Majed
    </p>
  </aside>
</footer>
    );
}

export default footer;