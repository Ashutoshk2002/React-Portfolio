import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGeeksforgeeks } from "react-icons/si";

import logo from "../assets/raviKumarLogo.webp"

const Navbar = () => {
    return (
        <nav className="flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} alt="Logo" className="mx-2" width={50} height={33} /></a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a className="hover:text-[#0A66C2] transform hover:scale-125 transition duration-300" href="https://www.linkedin.com/in/ashutosh-khairnar-70ab151ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a className="hover:text-gray-400 transform hover:scale-125 transition duration-300" href="https://github.com/Ashutoshk2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a className="hover:text-green-400 transform hover:scale-125 transition duration-300" href="https://www.geeksforgeeks.org/user/ashutoshkhairnar/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer" aria-label="GeeksForGeeks">
                    <SiGeeksforgeeks />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
