const allExperience = [
  {
    title: "Experience",
    company: "Company",
    year: "2021 - 2022",
    description:
      "I have worked in different companies and projects, which have allowed me to acquire knowledge and experience in different areas of software development.",
    Tecnologies: ["HTML", "CSS", "JavaScript", "React", "Vue"],
  },
  {
    title: "Experience",
    company: "Company",
    year: "2020 - 2022",
    description:
      "I have worked in different companies and projects, which have allowed me to acquire knowledge and experience in different areas of software development.",
    Tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "SQL",
      "PostgreSQL",
      "Java",
      "Spring Boot",
      "Python",
      "GitHub",
    ],
  },
];

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {allExperience.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap ">
            <div className="w-full lg:w-1/4">
              <p className="mb2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
