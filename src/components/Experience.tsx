
import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-1">
        <div className="timeline-item">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Briefcase size={18} className="mr-2 text-portfolio-highlight" />
                  AI & Machine Learning Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Xeta Labs, Guwahati, Assam, India</p>
              </div>
              <div className="text-right">
                <p className="font-medium">June 2024 - Aug 2024</p>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Engineered an advanced conversational AI chatbot capable of ingesting and processing news from 5 online sources, enhancing user engagement by enabling real-time queries on current events and news topics</li>
              <li>Engineered a dynamic quiz application using Expo and React Native, featuring a level-based progression system and incorporating both text and image-based questions to enhance user engagement and learning outcomes</li>
            </ul>
            
            <div className="flex justify-between items-center flex-wrap mt-2">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Key Technologies:</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Python, Selenium, Beautiful Soup, FastAPI, React Native, Pandas, NumPy, Expo, Github Codespace</p>
              </div>
              <a href="#" className="text-portfolio-highlight hover:underline flex items-center text-sm mt-2">
                <span>Link</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Briefcase size={18} className="mr-2 text-portfolio-highlight" />
                  Artificial Intelligence with Machine Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">AILABS, Kolkata, West Bengal</p>
              </div>
              <div className="text-right">
                <p className="font-medium">June 2023 - July 2023</p>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Spearheaded the development of an advanced movie recommendation system utilizing machine learning algorithms and content-based filtering, leveraging TF-IDF vectorization for enhanced personalization and accuracy</li>
            </ul>
            
            <div className="flex justify-between items-center flex-wrap mt-2">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Key Technologies:</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Python, Pandas, NumPy, Scikit-learn, TfidfVectorizer</p>
              </div>
              <a href="#" className="text-portfolio-highlight hover:underline flex items-center text-sm mt-2">
                <span>Link</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <Briefcase size={18} className="mr-2 text-portfolio-highlight" />
                  Amazon Web Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">BrainOrision Solutions Pvt. Ltd.</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Jan 2024 - Apr 2024</p>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Successfully completed a three-month intensive internship program specializing in Amazon Web Services (AWS), actively contributing to multiple projects. Demonstrated strong initiative, technical proficiency, and commitment to achieving project success in a fast-paced cloud computing environment</li>
            </ul>
            
            <div className="flex justify-between items-center flex-wrap mt-2">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Key Technologies:</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">AWS CLI, EC2 instance, S3 bucket, Elastic IP, VPC</p>
              </div>
              <a href="#" className="text-portfolio-highlight hover:underline flex items-center text-sm mt-2">
                <span>Link</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
