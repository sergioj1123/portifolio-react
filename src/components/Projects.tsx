import { motion } from "framer-motion";
import { FaSitemap, FaGithub } from "react-icons/fa";
import eplay from "../assets/images/Eplay.png";
import food from "../assets/images/Food.png";
import around from "../assets/images/Around.png";
import disney from "../assets/images/Disney.png";
import apartament from "../assets/images/Apartamento.png";
import lampada from "../assets/images/Lampada.png";

const allProjects = [
  {
    title: "E-commerce de jogos",
    description:
      "Esse projeto é o front-end de uma loja de games, contendo uma seção na página inicial que mostra um jogo em destaque no banner, além das divisões de jogos em promoção e destaques. Também existe outra seção dentro do site, onde os jogos são divididos em categorias (luta, simulação, RPG, dentre outros), cada jogo possuindo uma página específica que contém suas informações, preço, algumas imagens e um breve vídeo sobre o jogo. É possível adicionar novos jogos ao carrinho e, por fim, finalizar a compra, adicionando informações e selecionando a forma de pagamento (boleto ou cartão). Caso a forma de pagamento seja cartão, é necessário adicionar as informações do cartão para concluir a compra. Após finalizar a compra, a página retorna as informações do pedido junto ao seu código de compra.",
    image: eplay,
    technologies: ["React", "TypeScript", "Redux", "Styled Components"],
    github: "https://github.com/sergioj1123/gameStore",
    link: "https://game-store-green.vercel.app/",
  },
  {
    title: "Landig Page da Disney+",
    description:
      "Esse projeto é uma página clone da Landing Page do Disney+, sendo desenvolvido utilizando as linguagens HTML, SASS e Javascript também sendo utilizado o Gulp como framework de automação.",
    image: disney,
    technologies: ["HTML", "SASS", "Javascript", "Gulp"],
    github: "https://github.com/sergioj1123/landingPageDisneyPlus",
    link: "https://clone-disneyplus-pvyxparia-sergioj1123.vercel.app/",
  },
  {
    title: "Efood",
    description:
      "Esse projeto é o front-end de uma aplicação semelhante ao iFood, onde é possível abrir uma lista de restaurantes, verificando suas pontuações e tipos de comida. Dentro da página dos restaurantes, é possível verificar os pratos que oferecem, assim como a quantidade de porções e valor, sendo possível adicionar o alimento ao carrinho. Ao clicar em finalizar a compra no carrinho, é possível preencher os dados do endereço e cartão de crédito. Após finalizar, é exibida a tela com o número do pedido.",
    image: food,
    technologies: ["React", "TypeScript", "Redux", "Styled Components"],
    github: "https://github.com/sergioj1123/EbacFinalProject",
    link: "https://efood-phi-seven.vercel.app/",
  },
  {
    title: "Around the World",
    description:
      "é um projeto que foi desenvolvido utilizando HTML, CSS e JavaScript, sendo um perfil de uma rede de fotos, mostrando algumas imagens, contendo uma função de editar o perfil, adicionar e deletar imagens, sendo possível dar like e também zoom ao clicar nas imagens.",
    image: around,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sergioj1123/web_project_4_ptbr",
  },
  {
    title: "Lâmpada",
    description:
      "Landing Page desenvolvida para a Lâmpada como projeto freelance. Sendo desenvolvido utilizando HTML, SASS, Bootstrap.",
    image: lampada,
    technologies: ["HTML", "SASS", "Bootstrap"],
  },
  {
    title: "Apartamento",
    description:
      "O projeto foi desenvolvido desde a parte do Front-end até a parte do Back-end. O mesmo possui as funcionalidades de um sistema de aluguel de apartamentos ou casas, com funções de cadastro de novos locatários no sistema (locatários devem possuir nome e CPF), novos condomínios/prédios (possuindo um nome, rua e número), por fim, novos apartamentos (possuindo número, descrição, valor de aluguel e número de cômodos). Todos os apartamentos são vinculados a um condomínio/prédio, podendo possuir ou não um inquilino.",
    image: apartament,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MYSQL"],
    github: "https://github.com/sergioj1123/apartment-rental-system",
  },
];

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0 }}
        className="my-20 text-center text-4xl"
      >
        Projetos
      </motion.h2>
      <div>
        {allProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              {(project.link || project.github) && (
                <>
                  <h6 className="mb-2 font-semibold">
                    {project.link && project.github ? "Links" : "Link"}
                  </h6>
                  <div className="mb-2 flex items-center gap-6 text-2xl">
                    {project.link && (
                      <a href={project.link} className="text-neutral-400 mb-4">
                        <FaSitemap />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-neutral-400 mb-4"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </>
              )}
              <div className="flex flex-row gap-2 flex-wrap">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
