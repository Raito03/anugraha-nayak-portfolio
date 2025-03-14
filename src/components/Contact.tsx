
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="section-title">Contact</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out to me through any of the channels below. I'm always open to discussing new projects, opportunities, or collaborations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a 
            href="mailto:anugraha.nayak@tmu.in" 
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="text-portfolio-highlight mr-4" size={24} />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600 dark:text-gray-300">anugraha.nayak@tmu.in</p>
            </div>
          </a>
          
          <a 
            href="tel:7003840076" 
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Phone className="text-portfolio-highlight mr-4" size={24} />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600 dark:text-gray-300">7003840076</p>
            </div>
          </a>
          
          <a 
            href="https://linkedin.com/in/anugraha-nayak" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="text-portfolio-highlight mr-4" size={24} />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/anugraha-nayak</p>
            </div>
          </a>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="text-portfolio-highlight mr-4" size={24} />
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-gray-600 dark:text-gray-300">github.com</p>
            </div>
          </a>
        </div>
        
        <div className="text-center">
          <Button className="bg-portfolio-highlight hover:bg-portfolio-purple">
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
