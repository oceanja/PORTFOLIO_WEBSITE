import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 lg:px-20 bg-[#0a192f] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-cyan-400 mb-8"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 mb-12 max-w-xl mx-auto"
      >
        I'm always open to discussing new opportunities, collaborating on projects, or just connecting. Drop me a message!
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label className="block text-sm mb-1 text-cyan-300">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 bg-[#0a192f] text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-cyan-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-[#0a192f] text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-cyan-300">Message</label>
          <textarea
            rows="5"
            placeholder="Let's talk..."
            className="w-full px-4 py-2 bg-[#0a192f] text-white border border-cyan-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-md transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
