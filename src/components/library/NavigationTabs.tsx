
import React from 'react';

interface NavigationTabsProps {
  activeSection: 'books' | 'videos' | 'podcasts';
  setActiveSection: (section: 'books' | 'videos' | 'podcasts') => void;
}

const NavigationTabs = ({ activeSection, setActiveSection }: NavigationTabsProps) => {
  return (
    <div className="mt-12 border-b border-gray-200">
      <div className="flex space-x-8">
        <button 
          onClick={() => setActiveSection('books')}
          className={`pb-4 font-medium text-lg transition-colors ${
            activeSection === 'books' 
              ? 'text-castelnau-green border-b-2 border-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          }`}
        >
          Books
        </button>
        <button 
          onClick={() => setActiveSection('videos')}
          className={`pb-4 font-medium text-lg transition-colors ${
            activeSection === 'videos' 
              ? 'text-castelnau-green border-b-2 border-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          }`}
        >
          Videos
        </button>
        <button 
          onClick={() => setActiveSection('podcasts')}
          className={`pb-4 font-medium text-lg transition-colors ${
            activeSection === 'podcasts' 
              ? 'text-castelnau-green border-b-2 border-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          }`}
        >
          Podcasts
        </button>
      </div>
    </div>
  );
};

export default NavigationTabs;
