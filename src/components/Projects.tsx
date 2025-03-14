
import React from 'react';
import { ExternalLink, Github, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group flex flex-col">
            <CardHeader className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-4">
              <div className="flex justify-between items-start">
                <Shield size={24} className="text-white" />
                <div className="flex space-x-2">
                  <a href="https://github.com/sayan-does/Streamlitapp_threat" className="text-white hover:text-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"  viewBox="0 0 24 24" fill="currentColor" ><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>

                  </a>
                  <a href="https://github.com/sayan-does/Streamlitapp_threat" className="text-white hover:text-gray-200 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
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
              <a href="https://github.com/sayan-does/Streamlitapp_threat" className="text-portfolio-highlight text-sm hover:underline inline-flex items-center">
                Link
                <ExternalLink size={14} className="ml-1" />
              </a>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
            <CardHeader className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple p-4">
                <div className="flex justify-between items-start">
                  <Shield size={24} className="text-white" />
                  <div className="flex space-x-2">
                    <a href="https://github.com/Raito03/just-a-f1-race-prediction" className="text-white hover:text-gray-200 transition-colors">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"  viewBox="0 0 24 24" fill="currentColor" ><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>

                    </a>
                    <a href="https://github.com/Raito03/just-a-f1-race-prediction" className="text-white hover:text-gray-200 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-portfolio-highlight transition-colors">
                  AI-Driven Formula 1 Race Outcome Prediction Model
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                AI F1 Predictor: ML model (95% accuracy) predicting race outcomes via historical/track data, optimizing team/fantasy strategies.
                </CardDescription>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  <li>Led the development of a machine learning model to predict Formula 1 race outcomes (podium finishes, points, DNFs) using historical race data, driver/constructor performance metrics, weather conditions, and circuit characteristics.</li>
                  <li>Engineered novel features like Home Advantage Index (track familiarity impact) and DNF Risk Scores (driver/constructor reliability) using Pandas/NumPy.</li>
                  <li>Trained and optimized 6+ ML models (Random Forest, XGBoost, SVM, Logistic Regression) using Scikit-learn, achieving 95% accuracy post hyperparameter tuning (GridSearchCV) and k-fold cross-validation.</li>
                  <li>Uncovered actionable insights, such as 18% performance boost for teams in home races, validated through feature importance analysis.</li>
                </ul>
              </CardContent>
              <CardFooter className="px-6 py-3 bg-gray-50 dark:bg-gray-800 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Pandas</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Scikit-learn</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">XGBoost</span>
                </div>
                <a href="https://just-a-f1-race-prediction.vercel.app/" className="text-portfolio-highlight text-sm hover:underline inline-flex items-center">
                  Link
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </CardFooter>
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
