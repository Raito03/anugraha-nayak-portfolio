
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Anugraha Nayak. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Built with React, Tailwind CSS, and shadcn/ui
        </p>
      </div>
    </footer>
  );
};

export default Footer;
