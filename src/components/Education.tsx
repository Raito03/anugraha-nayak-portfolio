
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-semibold">B.Tech CSE (AI ML)</h3>
              <p className="text-gray-600 dark:text-gray-300">The Neotia University - Sarisha, West Bengal</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Sept 2021 - Present</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-end gap-1">
                CGPA: 9.35/10.0
                <a href="#" className="text-portfolio-highlight hover:underline inline-flex items-center">
                  <span>Link</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-semibold">Indian School Certificate (ISC)</h3>
              <p className="text-gray-600 dark:text-gray-300">The Assembly of God Church School - Kolkata, West Bengal</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Apr 2019 - May 2021</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-end gap-1">
                Class 12th - 93%
                <a href="#" className="text-portfolio-highlight hover:underline inline-flex items-center">
                  <span>Link</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-xl font-semibold">Indian Certificate of Secondary Education (ICSE)</h3>
              <p className="text-gray-600 dark:text-gray-300">The Assembly of God Church School - Kolkata, West Bengal</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Apr 2018 - May 2019</p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center justify-end gap-1">
                Class 10th - 91%
                <a href="#" className="text-portfolio-highlight hover:underline inline-flex items-center">
                  <span>Link</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
