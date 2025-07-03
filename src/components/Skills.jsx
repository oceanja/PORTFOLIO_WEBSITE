import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-28 px-6 bg-[#0f172a] scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-cyan-300"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-10 animate-slide-slow whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-36 h-36 bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-lg hover:scale-110 hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <p className="text-base font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
