function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold text-cyan-400">Ocean</h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
