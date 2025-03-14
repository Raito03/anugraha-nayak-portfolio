
import React from 'react';
import { Linkedin, Mail, Github, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex flex-col items-center justify-center min-h-[92vh] text-center px-4">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Anugraha Nayak</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          AI & Machine Learning Engineer
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <a 
            href="mailto:anugraha.nayak@tmu.in" 
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
          >
            <Mail size={18} />
            <span>anugraha.nayak@tmu.in</span>
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a 
            href="tel:7003840076" 
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
          >
            <span>7003840076</span>
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a 
            href="https://linkedin.com/in/anugraha-nayak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
          >
            <Linkedin size={18} />
            <span>linkedin.com/in/anugraha-nayak</span>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-portfolio-highlight dark:hover:text-portfolio-highlight transition-colors"
          >
            <Github size={18} />
          </a>
        </div>
        
        <Button 
          className="mt-6 bg-portfolio-highlight hover:bg-portfolio-purple animate-slide-up"
          onClick={scrollToContact}
        >
          Get in touch
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
