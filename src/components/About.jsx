import { motion } from "framer-motion";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 scroll-mt-20 bg-[#0f172a] overflow-hidden"
    >
      {/* Glowing Background Orb */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400 blur-[200px] opacity-20 rounded-full z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-10 text-cyan-300 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left */}
          <div className="space-y-4 text-gray-300">
            <p>
              I’m <span className="text-cyan-300">Ocean</span>, a final-year Computer student with a strong foundation in
  Data Structures and Algorithms and a keen interest in web development.
            </p>
            <p>
               I enjoy solving coding problems, exploring frontend and backend technologies, and I'm actively building projects to sharpen my development skills.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-cyan-400 transition">
              <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>
              <ul className="text-gray-400 list-disc list-inside mt-2 text-sm">
                <li>Delhi Public School, CBSE (10th & 12th)</li>
                <li>Sardar Vallabhbhai National Institute of Technology – B.Tech EE (2022–2026)</li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-cyan-400 transition">
              <h3 className="text-lg font-semibold text-cyan-300 flex items-center gap-2">
                <FaLightbulb /> Interests
              </h3>
              <ul className="text-gray-400 list-disc list-inside mt-2 text-sm">
                <li>Competitive Programming</li>
                <li>REST APIs & Backend</li>
                <li>System Design</li>
                <li>Teaching & Open Source</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
