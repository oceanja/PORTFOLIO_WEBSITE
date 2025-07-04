import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-transparent px-4 py-10 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-2xl py-8 px-6 sm:px-12 text-white shadow-lg shadow-cyan-500/10">
        <h3 className="text-center text-2xl font-semibold text-cyan-400 mb-6">
          Connect with Me
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-6 text-2xl">
          <a
            href="https://github.com/oceanja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/oceanjayant_19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition duration-300 hover:scale-110"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://codeforces.com/profile/oceanj_19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition duration-300 hover:scale-110"
          >
            <SiCodeforces />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/u22eenthd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition duration-300 hover:scale-110"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://www.linkedin.com/in/ocean-jayant-469943212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Ocean. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
