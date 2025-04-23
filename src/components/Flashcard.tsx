import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FlashcardType } from '../types/types';

interface FlashcardProps {
  card: FlashcardType;
  onNextCard: () => void;
  onPrevCard: () => void;
  currentIndex: number;
  totalCards: number;
}

const Flashcard: React.FC<FlashcardProps> = ({ 
  card, 
  onNextCard, 
  onPrevCard,
  currentIndex,
  totalCards
}) => {
  const { theme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  
  const handleNext = () => {
    setIsFlipped(false);
    onNextCard();
  };
  
  const handlePrev = () => {
    setIsFlipped(false);
    onPrevCard();
  };
  
  return (
    <div className="w-full max-w-xl">
      <div className="relative perspective-1000">
        <div 
          className={`relative w-full cursor-pointer transition-transform duration-700 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
          onClick={handleFlip}
        >
          {/* Front of card */}
          <div 
            className={`p-8 rounded-xl shadow-lg h-64 backface-hidden ${
              theme === 'dark' 
                ? 'bg-gray-800' 
                : 'bg-white'
            }`}
            style={{ 
              backfaceVisibility: 'hidden',
              position: isFlipped ? 'absolute' : 'relative',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              {card.category}
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Question</h3>
                <p className="text-lg">{card.question}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs opacity-70">
              Tap to flip
            </div>
          </div>
          
          {/* Back of card */}
          <div 
            className={`p-8 rounded-xl shadow-lg h-64 backface-hidden ${
              theme === 'dark' 
                ? 'bg-indigo-900' 
                : 'bg-indigo-50'
            }`}
            style={{ 
              backfaceVisibility: 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: 'rotateY(180deg)',
              height: '100%'
            }}
          >
            <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100">
              {card.category}
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Answer</h3>
                <p className="text-lg">{card.answer}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs opacity-70">
              Tap to flip back
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handlePrev}
          className={`flex items-center gap-1 px-4 py-2 rounded-md ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          <ChevronLeft size={16} />
          Previous
        </button>
        
        <div className="text-sm">
          Card {currentIndex + 1} of {totalCards}
        </div>
        
        <button
          onClick={handleNext}
          className={`flex items-center gap-1 px-4 py-2 rounded-md ${
            theme === 'dark'
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          Next
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setIsFlipped(false)}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          <RefreshCw size={14} />
          Reset
        </button>
        
        <button
          onClick={handleNext}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${
            theme === 'dark'
              ? 'bg-green-700 hover:bg-green-600 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          <Check size={14} />
          Mark as Learned
        </button>
      </div>
    </div>
  );
};

export default Flashcard;