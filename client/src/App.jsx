import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-bg overflow-x-hidden noise-bg">
        {/* Ambient background orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent opacity-[0.03] blur-[120px]" />
          <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-accent-2 opacity-[0.04] blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent-3 opacity-[0.03] blur-[100px]" />
        </div>

        {/* Grid background */}
        <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />

        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
