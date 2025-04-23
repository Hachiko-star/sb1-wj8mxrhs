import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import Flashcard from './Flashcard';
import { flashcardData } from '../data/flashcardData';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';
import { Shuffle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FlashcardApp: React.FC = () => {
  const { theme } = useTheme();
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  
  // Filter cards based on category and search query
  const filteredCards = flashcardData.filter(card => 
    (currentCategory === 'all' || card.category === currentCategory) &&
    (searchQuery === '' || 
     card.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     card.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const totalCards = filteredCards.length;
  const studiedCount = Array.from(studiedCards).filter(id => 
    filteredCards.some(card => card.id === id)
  ).length;
  
  const progress = totalCards > 0 ? (studiedCount / totalCards) * 100 : 0;
  
  const handleNextCard = () => {
    if (totalCards === 0) return;
    
    // Mark current card as studied
    setStudiedCards(prev => new Set(prev.add(filteredCards[currentCardIndex].id)));
    
    // Move to next card
    setCurrentCardIndex(prevIndex => 
      prevIndex < totalCards - 1 ? prevIndex + 1 : 0
    );
  };
  
  const handlePrevCard = () => {
    if (totalCards === 0) return;
    
    setCurrentCardIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : totalCards - 1
    );
  };
  
  const shuffleCards = () => {
    setCurrentCardIndex(0);
    // The actual shuffling is handled by setting a random index
    setCurrentCardIndex(Math.floor(Math.random() * totalCards));
  };
  
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Mathematics Flash Cards</h1>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Enhance your mathematics knowledge with these interactive flash cards. 
          Select a category, flip the cards to reveal answers, and track your learning progress.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <CategorySelector 
          currentCategory={currentCategory}
          setCurrentCategory={(category) => {
            setCurrentCategory(category);
            setCurrentCardIndex(0);
            setStudiedCards(new Set());
          }}
        />
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={(query) => {
            setSearchQuery(query);
            setCurrentCardIndex(0);
          }}
        />
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">
          {currentCategory === 'all' ? 'All Topics' : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
        </h2>
        <button 
          onClick={shuffleCards}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 transition-colors"
          aria-label="Shuffle cards"
        >
          <Shuffle size={16} />
          Shuffle
        </button>
      </div>
      
      <ProgressBar progress={progress} />
      
      <div className="flex justify-center my-8">
        {totalCards > 0 ? (
          <Flashcard 
            card={filteredCards[currentCardIndex]}
            onNextCard={handleNextCard}
            onPrevCard={handlePrevCard}
            currentIndex={currentCardIndex}
            totalCards={totalCards}
          />
        ) : (
          <div className={`p-10 rounded-lg text-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <p className="text-xl">No cards found matching your criteria.</p>
            <p className="mt-2">Try selecting a different category or adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardApp;