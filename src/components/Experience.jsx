import { motion } from "framer-motion";

// Array of your work experiences, based on your CV
const experiences = [
  {
    year: "2023 - Present",
    role: "Full-Stack Developer",
    company: "Freelance",
    description: `As a freelance developer, I have successfully created dynamic user interfaces and managed robust APIs. My responsibilities included implementing server-side logic using Node.js and Python, designing and maintaining databases for scalability, and ensuring application security. I am proficient in creating maintainable code structures and architectural diagrams.`,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Python", "MySQL"],
  },
  {
    year: "2023 - Present",
    role: "Graphic Designer",
    company: "Freelance",
    description: `In my role as a graphic designer, I developed compelling visual concepts for both print and digital media. This included creating layouts for websites, advertisements, and marketing materials. I have a keen eye for detail, ensuring design accuracy and quality, and I am adept at incorporating client feedback to deliver polished final products.`,
    technologies: ["Figma", "Photoshop", "Adobe XD", "SQL Server"],
  },
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            {/* Details Column */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;