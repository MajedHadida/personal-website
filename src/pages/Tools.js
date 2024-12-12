import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { RxAccessibility } from "react-icons/rx";



const Tools = () =>{
    return(
        <div className="flex justify-around py-5 mx-10">
            <div className="flex-col">
                <FaAngular size={75}/>
                <p className="text-center">Angular</p>
            </div>
            <div className="flex-col">
                <FaReact size={75}/>
                <p className="text-center">React</p>
            </div>
            <div className="flex-col">
                <FaFigma size={75}/>
                <p className="text-center">Figma</p>
            </div>
            <div className="flex-col">
                <IoLogoJavascript size={75}/>
                <p className="text-center">Javascript</p>
            </div>
            <div className="flex-col">
                <RiTailwindCssFill size={75}/>
                <p className="text-center">Javascript</p>
            </div>
            <div className="flex-col">
                <RxAccessibility size={75}/>
                <p className="text-center">Accessibility</p>
            </div>
        </div>
    );
}
export default Tools;