
import React from 'react';
import { ExternalLink, Github, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-4">
              <div className="flex justify-between items-start">
                <Shield size={24} className="text-white" />
                <div className="flex space-x-2">
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2 group-hover:text-portfolio-highlight transition-colors">
                Firearms and Knives Threat Detection using YOLOv8
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                A deep learning model for real-time weapon detection in images and videos
              </CardDescription>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                <li>Developed a threat detection system using YOLOv8, a state-of-the-art object detection algorithm, to identify firearms and knives in images and videos in real-time</li>
                <li>Leveraged deep learning techniques and computer vision to train the model on a custom dataset of firearm and knife images, achieving high accuracy of 84% in detection</li>
                <li>Tools Used: Roboflow, YOLO, PyTorch</li>
              </ul>
            </CardContent>
            <CardFooter className="px-6 py-3 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">YOLOv8</span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Computer Vision</span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">PyTorch</span>
              </div>
              <a href="#" className="text-portfolio-highlight text-sm hover:underline inline-flex items-center">
                Link
                <ExternalLink size={14} className="ml-1" />
              </a>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow opacity-50 cursor-not-allowed">
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">
                Project 2
              </CardTitle>
              <CardDescription>
                Coming soon...
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow opacity-50 cursor-not-allowed">
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">
                Project 3
              </CardTitle>
              <CardDescription>
                Coming soon...
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
