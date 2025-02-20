import { motion } from "framer-motion";

const allExperience = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    year: "2024 - Atual",
    description:
      "Trabalho como freelancer full stack, ajudando meus clientes a desenvolver aplicações e páginas inovadoras que impulsionam seus negócios. Utilizo as tecnologias mais populares para entregar soluções de alta qualidade e escalabilidade, garantindo desempenho e eficiência.",
    Tecnologies: [
      "HTML",
      "CSS",
      "JQuery",
      "React",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "SASS",
      "Less",
      "Gulp",
      "VueJS",
      "Java",
      "Spring Boot",
      "Git",
      "Github",
      "WebPack",
      "Babel",
      "Cypress",
      "SQL",
      "UX (User Experience)",
      "Desenvolvimento Ágil",
    ],
  },
  {
    title: "Coordenação da Análise de Suporte",
    company: "Cartsys",
    year: "Janeiro/2022 - Agosto/2022",
    description:
      "Identifiquei problemas e inconsistências no sistema, categorizei a urgência dos casos e coordenei uma equipe de 6 integrantes, atuando também como referência técnica para o time. Além disso, realizei manutenção e consultas em banco de dados do tipo SQL.",
    Tecnologies: [
      "SQL",
      "Resolução de problemas",
      "Coordenação de equipe",
      "Atendimento ao cliente",
      "Manutenção de banco de dados",
    ],
  },
  {
    title: "Analista de Suporte",
    company: "Cartsys",
    year: "Dezembro/2019 - Dezembro/2021",
    description:
      "Realizei atendimento direto com clientes por meio de chats e telefonemas, auxiliando no esclarecimento de dúvidas e garantindo um suporte eficiente. Além disso, fui responsável pela configuração de ambientes operacionais.",
    Tecnologies: ["SQL", "Resolução de problemas", "Atendimento ao cliente"],
  },
];

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiência
      </motion.h2>
      <div>
        {allExperience.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.title} at{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-row gap-2 flex-wrap ">
                {experience.Tecnologies.map((tecnology, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tecnology}
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

export default Experience;
