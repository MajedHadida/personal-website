import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxAccessibility } from "react-icons/rx";
import { FaPython } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";



const Tools = () =>{
    return(
        <div className="container mx-28">
            <div>
                <h1 className="text-xl underline"><b>My Toolkit</b></h1>
            </div>
            <ul className="skills">
                <li>
                    <RxAccessibility size={75}/>
                    <p>Accessibility</p>
                </li>
                <li>
                    <FaAngular size={75}/>
                    <p>Angular</p>
                </li>
                <li>
                    <FaCss3Alt size={75}/>
                    <p>CSS3</p>
                </li>
                <li>
                    <FaFigma size={75}/>
                    <p>Figma</p>
                </li>
                <li>
                    <FaHtml5 size={75}/>
                    <p>HTML5</p>
                </li>
                <li>
                    <IoLogoJavascript size={75}/>
                    <p>Javascript</p>
                </li>
                <li>
                    <FaPython size={75}/>
                    <p>Python</p>
                </li>
                <li>
                    <FaReact size={75}/>
                    <p>React</p>
                </li>
                <li>
                    <RiTailwindCssFill size={75}/>
                    <p>Tailwind</p>
                </li>
                <li>
                    <TbBrandTypescript size={75}/>
                    <p>Typescript</p>
                </li>
            </ul>
        </div>
    );
}
export default Tools;