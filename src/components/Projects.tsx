import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "https://placehold.co/600x400",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "https://placehold.co/600x400",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "https://placehold.co/600x400",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
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
        Projects
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
                width={150}
                height={150}
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
