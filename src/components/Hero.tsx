import profilePicture from "../assets/images/FotoPerfilLinkedin.jpg";
import { motion } from "framer-motion";

const animationMotion = (delay: number, x?: number) => ({
  hidden: { x: x === undefined ? -100 : x, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="w-full flex-col items-center lg:items-start">
            <motion.h1
              variants={animationMotion(0)}
              initial="hidden"
              animate="show"
              className="pb-16 text-6x1 font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sérgio Félix
            </motion.h1>
            <motion.span
              variants={animationMotion(0.5)}
              initial="hidden"
              animate="show"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Desenvolvedor Full Stack
            </motion.span>
            <motion.p
              variants={animationMotion(1)}
              initial="hidden"
              animate="show"
              className="my-2 max-w-xl pt-6 font-light"
            >
              Sou formado em Engenharia da Computação pela Universidade Estadual
              de Minas Gerais e estou finalizando uma especialização em
              Desenvolvimento Ágil de Software na Universidade Federal do
              Paraná. Além disso, estou sempre em busca de aprimorar meus
              conhecimentos na área de desenvolvimento web.
            </motion.p>
            <motion.p
              variants={animationMotion(1.5)}
              initial="hidden"
              animate="show"
              className="my-2 max-w-xl font-light pb-6"
            >
              Atualmente, atuo como freelancer e estou aberto a novas
              oportunidades, seja como freelancer ou em uma posição full-time.
              Sinta-se à vontade para entrar em contato – será um prazer
              trabalharmos juntos!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={animationMotion(1.7, 100)}
              initial="hidden"
              animate="show"
              src={profilePicture}
              alt="Sérgio Félix"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
