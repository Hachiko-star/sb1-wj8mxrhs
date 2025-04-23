import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface CategorySelectorProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Topics' },
  { id: 'algebra', name: 'Algebra' },
  { id: 'geometry', name: 'Geometry' },
  { id: 'calculus', name: 'Calculus' },
  { id: 'statistics', name: 'Statistics' }
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  currentCategory, 
  setCurrentCategory 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setCurrentCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === category.id
              ? 'bg-indigo-600 text-white'
              : theme === 'dark'
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;