import aboutImage from "../assets/images/FotoPerfilLinkedin2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Sobre <span className="text-neutral-500">Mim</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImage} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start gap-y-3">
            <p className="mt-2 pt-6">
              Olá! Tenho 27 anos e sou um desenvolvedor full stack apaixonado
              por tecnologia, dedicado a criar experiências digitais inovadoras.
            </p>
            <p>
              Sou formado em Engenharia da Computação pela Universidade Estadual
              de Minas Gerais (UEMG) e estou finalizando minha especialização em
              Desenvolvimento Ágil de Software na Universidade Federal do
              Paraná.
            </p>
            <p>
              Estou constantemente aprimorando minhas habilidades por meio do
              curso de Front-end da EBAC e do bootcamp da Practicum, onde me
              aprofundei em diversas tecnologias, como:
            </p>
            <p>
              <span className="font-bold">• Front-end: </span>HTML, CSS,
              JavaScript, jQuery, TypeScript, Bootstrap, SASS, Less, Gulp,
              Vue.js, React, Cypress
            </p>
            <p>
              <span className="font-bold">• Back-end: </span>Java, Spring Boot,
              Python, SQL
            </p>
            <p>
              Minha trajetória profissional inclui 2 anos como Analista de
              Suporte na Cartsys, onde adquiri uma visão abrangente do mundo
              corporativo e desenvolvi habilidades de trabalho em equipe. Em
              2022, assumi um papel na coordenação da equipe, aprimorando minha
              liderança e capacidade de resolução de problemas.
            </p>
            <p>
              Atualmente, trabalho como freelancer, ajudando meus clientes a
              desenvolverem aplicações e páginas inovadoras que impulsionam seus
              negócios.
            </p>
            <p>
              Minha paixão pelo desenvolvimento de software começou durante a
              universidade, no meu primeiro contato com a programação. Desde
              então, venho transformando essa paixão em projetos reais e
              impactantes.
            </p>
            <p className="pb-6">
              Estou sempre aberto a novas oportunidades e desafios — vamos
              construir algo incrível juntos!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
