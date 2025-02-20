import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <footer className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contato
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
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
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <p>&copy; 2025 Sérgio Félix Júnior. Todos os direitos reservados.</p>
        </motion.p>
      </div>
    </footer>
  );
};
export default Contact;
