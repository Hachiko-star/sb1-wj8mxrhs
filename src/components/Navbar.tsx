import React, { useState } from 'react';
import { Brain, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className={`sticky top-0 z-10 shadow-md ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-white text-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">MathCards</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-gray-700">
              Home
            </button>
            <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-gray-700">
              About
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;