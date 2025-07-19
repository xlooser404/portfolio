import { motion } from "framer-motion";

import nextUpImage from "../assets/nextup-app.png";
import salesImage from "../assets/sales-analysis.png";
import photoImage from "../assets/photography-website.png";
import vehicleImage from "../assets/vehicle-system.png";


// Array of your projects, with the new Task Management App added at the beginning
const projects = [
  {
    title: "NextUP - Task Management App",
    image: nextUpImage, // Make sure this path is correct
    description:
      "A sleek, full-stack web application for modern task management. Features secure JWT authentication, email verification, and password reset flows. Users can perform full CRUD operations on tasks, with advanced filtering by status/priority and sorting. The UI is built with Tailwind CSS and includes smooth animations from Framer Motion, with state managed by Zustand.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Zustand"],
  },
  {
    title: "Sales Data Analysis System",
    image: salesImage, // Make sure this path is correct
    description:
      "Designed and implemented a GUI-based system for real-time sales data analysis, incorporating SOLID principles and automated testing.",
    technologies: ["Python", "CustomTkinter"],
  },
  {
    title: "Photography Website",
    image: photoImage, // Make sure this path is correct
    description:
      "Designed and developed a website with a backend, image gallery feature, and a package selection page. (Sample project, no payment gateway).",
    technologies: ["PHP", "CSS", "JS", "MySQL"],
  },
  {
    title: "Vehicle and Parts Selling System",
    image: vehicleImage, // Make sure this path is correct
    description:
      "Designed and implemented a GUI-based system for Vehicle and parts Selling and report generating, incorporating SOLID principles.",
    technologies: ["C#", "Krypton", "Crystal Report", "SQL"],
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold tracking-tight text-neutral-200"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            {/* Project Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
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

export default Projects;