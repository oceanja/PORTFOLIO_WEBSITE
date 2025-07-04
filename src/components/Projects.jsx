import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IPO Listing Platform",
    description:
      "Built an IPO dashboard during internship using React, Node.js & PostgreSQL.",
    tags: ["React", "Tailwind", "Node.js", "PostgreSQL"],
    link: "https://github.com/oceanja/ipo-web-app",
  },
  {
    title: "QuilQuest –  Blog Website",
    description:
      "A blog platform using React.js and Next.js stack and styled with Tailwind.",
    tags: ["Firebase", "Next.js", "React", "Node.js"],
    link: "https://github.com/oceanja/QuillQuest-Blog",
  },
  {
    title: "StudySync – AI Study Planner",
    description:
      "GPT-powered study planner. Generates weekly schedules and resources.",
    tags: ["React", "OpenAI API", "Tailwind"],
    link: "#",
  },
  {
    title: "Zomato Data Analysis",
    description:
      "Explored and Visualized restaurant trends using Python, Pandas, and Matplotlib.",
    tags: ["Python", "Pandas", "Data Visualization"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-8 lg:px-20 bg-[#0a192f] text-white"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        Projects
      </h2>

      {/* Vertical Line */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-7rem)] bg-cyan-500 opacity-30 z-0"></div>

      <div className="relative z-10 flex flex-col gap-24">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative w-full flex ${
                isLeft ? "justify-start pr-6" : "justify-end pl-6"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-400 border-2 border-white rounded-full z-20 left-1/2 -translate-x-1/2`}
              ></div>

              {/* Card */}
              <div className="group w-full sm:w-[45%] bg-white/10 border border-cyan-500/20 backdrop-blur-md p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-1 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-800/50 text-cyan-200 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-cyan-400 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
