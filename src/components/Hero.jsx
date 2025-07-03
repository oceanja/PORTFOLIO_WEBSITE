import { useEffect, useState } from "react";

function Hero() {
  const titles = ["Aspiring SDE", "Problem Solver", " Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-28 text-white 
                 bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-700 
                 bg-size-200 animate-gradient-x"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-cyan-300">Ocean</span>
          </h1>

          <p className="text-xl text-cyan-100 font-mono transition duration-500">
            {titles[index]}
          </p>

          <p className="text-gray-100 max-w-md">
            Final-year student focused on web development
            and solving challenging DSA problems.
          </p>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            className="inline-block px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-lg shadow-md transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/assets/profile.jpg"
            alt="profile"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-cyan-300 hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
