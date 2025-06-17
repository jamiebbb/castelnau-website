
import React from 'react';
import { cn } from "@/lib/utils";

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
          className={cn(
            "pb-4 font-medium text-lg transition-all relative",
            activeSection === 'books' 
              ? 'text-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          )}
        >
          Books
          {activeSection === 'books' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-castelnau-darkgreen to-castelnau-lightgreen rounded-t-full"></span>
          )}
        </button>
        <button 
          onClick={() => setActiveSection('videos')}
          className={cn(
            "pb-4 font-medium text-lg transition-all relative",
            activeSection === 'videos' 
              ? 'text-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          )}
        >
          Videos
          {activeSection === 'videos' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-castelnau-darkgreen to-castelnau-lightgreen rounded-t-full"></span>
          )}
        </button>
        <button 
          onClick={() => setActiveSection('podcasts')}
          className={cn(
            "pb-4 font-medium text-lg transition-all relative",
            activeSection === 'podcasts' 
              ? 'text-castelnau-green' 
              : 'text-gray-500 hover:text-castelnau-green'
          )}
        >
          Podcasts
          {activeSection === 'podcasts' && (
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-castelnau-darkgreen to-castelnau-lightgreen rounded-t-full"></span>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavigationTabs;
