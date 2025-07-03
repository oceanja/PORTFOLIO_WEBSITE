import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
    </div>
  );
}

export default App;
