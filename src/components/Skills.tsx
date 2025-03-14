
import React from 'react';
import { Database, Code, Brain } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Database className="text-portfolio-highlight mr-2" size={20} />
              <h3 className="text-lg font-semibold">Data Analysis & Visualization</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>SQL</li>
              <li>Python (Pandas, NumPy, Seaborn, Matplotlib)</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Brain className="text-portfolio-highlight mr-2" size={20} />
              <h3 className="text-lg font-semibold">Machine Learning & Statistics</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Scikit-Learn, TensorFlow, PyTorch, Keras</li>
              <li>Linear Regression, Logistic Regression, Decision Trees</li>
              <li>Random Forest, XG Boost, Neural Networks</li>
              <li>Deep Learning, Natural Language Processing</li>
              <li>Exploratory Data Analysis</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex items-center mb-4">
              <Code className="text-portfolio-highlight mr-2" size={20} />
              <h3 className="text-lg font-semibold">Programming & Technical Skills</h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Programming Languages: C, Java, Python, JavaScript, HTML, SQL</li>
              <li>Software Development, Web Development, React, NextJs, FastAPI, Flask, AWS, Docker, Git</li>
              <li>Github Codespace, Expo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
