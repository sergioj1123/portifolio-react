import { motion } from "framer-motion";

const educationalBackground = [
  {
    title: "Especialização em Desenvolvimento Ágil de Software",
    college: "Universidade Federal do Paraná (UFPR)",
    year: "2024 - 2025",
    description:
      "Pós Graduação Lato Sensu, ministrado pela Universidade Federal do Paraná (UFPR)",
  },
  {
    title: "Profissão: Engenheiro Front-end",
    college: "Escola Britânica de Artes Criativas e Tecnologia (EBAC)",
    year: "2022 - 2024",
    description:
      "Curso voltado para desenvolvedores Web, da Escola Britânica de Artes Criativas e Tecnologia (EBAC)",
  },
  {
    title: "Bacharelado em Engenharia da Computação",
    college: "Universidade Estadual de Minas Gerais (UEMG)",
    year: "2016 - 2022",
    description:
      "Formado em 2022 pela Universidade Estadual de Minas Gerias (UEMG), com CORA Integralizado (Acumulado) do curso de 74,0 pontos.",
  },
];

const Education = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Formação
      </motion.h2>
      <div>
        {educationalBackground.map((educationEntry, index) => (
          <div key={index} className="mb-8 flex flex-wrap ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb2 text-sm text-neutral-400">
                {educationEntry.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb font-semibold">{educationEntry.title}</h6>
              <span className="text-sm text-purple-100">
                {educationEntry.college}
              </span>
              <p className="my-4 text-neutral-400">
                {educationEntry.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
