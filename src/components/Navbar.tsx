
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-lg cursor-pointer" onClick={() => scrollToSection('header')}>
            <span className="text-portfolio-highlight">AN</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('education')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
