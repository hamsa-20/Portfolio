import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './utils/ThemeContext';

function App() {
  React.useEffect(() => {
    document.title = "Hamsa Dixit | Full Stack Developer";
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen dark:bg-slate-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;