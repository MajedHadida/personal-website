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
        <div className="container mx-auto">
            <div>
                <h1 className="text-xl underline"><b>My Toolkit</b></h1>
            </div>
            <ul className="flex justify-center flex-wrap py-5 space-y-5">
                <li className="flex flex-col items-center justify-center pt-5">
                    <RxAccessibility size={75}/>
                    <p className="text-center">Accessibility</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaAngular size={75}/>
                    <p className="">Angular</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaCss3Alt size={75}/>
                    <p className="text-center">CSS3</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaFigma size={75}/>
                    <p className="text-center">Figma</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaHtml5 size={75}/>
                    <p className="text-center">HTML5</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <IoLogoJavascript size={75}/>
                    <p className="text-center">Javascript</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaPython size={75}/>
                    <p className="text-center">Python</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <FaReact size={75}/>
                    <p className="text-center">React</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <RiTailwindCssFill size={75}/>
                    <p className="text-center">Tailwind</p>
                </li>
                <li className="flex flex-col items-center justify-center">
                    <TbBrandTypescript size={75}/>
                    <p className="text-center">Typescript</p>
                </li>
            </ul>
        </div>
    );
}
export default Tools;