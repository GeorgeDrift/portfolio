
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-black/60 z-[-1]"></div>
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
