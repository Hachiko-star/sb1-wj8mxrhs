import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`py-6 ${
      theme === 'dark' 
        ? 'bg-gray-800 text-gray-300' 
        : 'bg-gray-100 text-gray-600'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 MathCards. All rights reserved.</p>
          </div>
          <div className="flex items-center text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>for Skillset AI Hackathon 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;