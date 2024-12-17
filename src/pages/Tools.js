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
        <div className="mx-24">
            <div>
                <h1 className="text-xl underline"><b>My Toolkit</b></h1>
            </div>
            <div className="flex justify-around flex-wrap py-5 space-y-5">
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <RxAccessibility size={75}/>
                    <p className="text-center">Accessibility</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5 mt-5">
                    <FaAngular size={75}/>
                    <p className="">Angular</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <FaCss3Alt size={75}/>
                    <p className="text-center">CSS3</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <FaFigma size={75}/>
                    <p className="text-center">Figma</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <FaHtml5 size={75}/>
                    <p className="text-center">HTML5</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <IoLogoJavascript size={75}/>
                    <p className="text-center">Javascript</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <FaPython size={75}/>
                    <p className="text-center">Python</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <FaReact size={75}/>
                    <p className="text-center">React</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <RiTailwindCssFill size={75}/>
                    <p className="text-center">Tailwind</p>
                </div>
                <div className="flex flex-col items-center justify-center basis-1/5">
                    <TbBrandTypescript size={75}/>
                    <p className="text-center">Typescript</p>
                </div>
            </div>
        </div>
    );
}
export default Tools;