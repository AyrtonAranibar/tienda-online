import { FaLinkedin,FaGithub  } from "react-icons/fa";
import "./Footer.css"
function Footer(){
    return(
        <footer className="footer w-full flex justify-center py-5 px-8 text-sm ">
            <p className="f-text inline-block text-base pt-1 px-3">Made by Ayrton Aranibar</p>
            <a href="https://www.linkedin.com/in/ayrtonaranibar/" ><FaLinkedin className="f-icons inline-block text-3xl mx-4" /></a>
            <a href="https://github.com/AyrtonAranibar/tienda-online" ><FaGithub className="f-icons inline-block text-3xl  mx-4" /></a>
        </footer>
    );
}
export default Footer;