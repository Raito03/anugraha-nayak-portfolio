
import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
