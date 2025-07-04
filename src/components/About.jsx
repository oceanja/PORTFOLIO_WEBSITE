import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Web Development Intern",
    company: "OctaNet",
    timeline: "June 2024 – July 2024",
    desc: "Built a responsive landing page using HTML, CSS, and JavaScript.",
  },
  {
    role: "Team Lead – IPO Web App",
    company: "Bluestock Fintech",
    timeline: "June 2025 – July 2025",
    desc: "Led the development of an IPO listing platform using React and Django.",
  },
  {
    role: "Lead Generation Executive",
    company: "Vert Ventures",
    timeline: "Dec 2024 – July 2025",
    desc: "Generated high-quality leads for app promotions in US-based markets.",
  },
];

function About() {
  return (
    <section id="about" className="bg-[#0f172a] py-24 px-4 scroll-mt-20">
      <motion.h2
        className="text-center text-4xl font-bold text-cyan-300 mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto bg-white/5 p-8 rounded-xl border border-white/10 shadow-md hover:shadow-cyan-500/20 transition hover:scale-[1.02]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2 mb-3">
          <FaGraduationCap /> Education
        </h3>
        <ul className="text-gray-300 list-disc list-inside space-y-2 text-base">
          <li>Delhi Public School – CBSE (10th & 12th)</li>
          <li>SVNIT Surat – B.Tech in Electrical Engineering (2022–2026)</li>
        </ul>
      </motion.div>

      <motion.h3
        className="text-3xl font-semibold text-cyan-300 flex items-center gap-3 mt-24 mb-12 justify-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FaBriefcase className="text-2xl" />
        Experience
      </motion.h3>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:border-cyan-300 hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cyan-200 font-semibold text-xl">{exp.role}</h4>
            <p className="text-white text-sm mt-1">{exp.company}</p>
            <p className="text-gray-400 text-xs italic">{exp.timeline}</p>
            <p className="text-gray-300 text-base mt-3">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
