import { IoMail } from "react-icons/io5";
import logo from "../assets/images/logoWhite.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-25" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sergio-felix-junior-592163181/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sergioj1123">
          <FaGithub />
        </a>
        <a
          href="mailto:sergiojunior9@hotmail.com?subject=Orçamento&body=Olá, estou entrando em contato porque..."
          target="_blank"
        >
          <IoMail />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
