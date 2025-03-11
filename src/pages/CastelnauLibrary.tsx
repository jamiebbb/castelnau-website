
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { books, videos, podcasts, categories } from '@/data/libraryData';
import { Book } from '@/types/library';
import CategoryFilter from '@/components/library/CategoryFilter';
import NavigationTabs from '@/components/library/NavigationTabs';
import BooksSection from '@/components/library/BooksSection';
import VideosSection from '@/components/library/VideosSection';
import PodcastsSection from '@/components/library/PodcastsSection';
import BookSummaryDialog from '@/components/library/BookSummaryDialog';
import '../styles/library.css';

const CastelnauLibrary = () => {
  const [flippedBookId, setFlippedBookId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<'books' | 'videos' | 'podcasts'>('books');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const toggleFlip = (id: number) => {
    if (flippedBookId === id) {
      setFlippedBookId(null);
    } else {
      setFlippedBookId(id);
    }
  };

  const openBookSummary = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the flip card
    setSelectedBook(book);
    setDialogOpen(true);
  };
  
  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);
  
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);
  
  const filteredPodcasts = selectedCategory === 'All' 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === selectedCategory);
  
  return (
    <MainLayout>
      <section className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen text-white pt-24 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold max-w-4xl leading-tight mb-10">
            The Castelnau Library
          </h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8 font-serif">
            A curated collection of exceptional investment wisdom and business insights
          </p>
          <div className="h-1 bg-gradient-to-r from-castelnau-gold/70 to-castelnau-gold w-36"></div>
        </div>
        
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
            <path 
              fill="#FFFFFF" 
              fillOpacity="1" 
              d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Investment Knowledge Hub</h2>
            <p className="text-lg text-gray-700">
              Welcome to the Castelnau Library, our curated collection of investment wisdom, business insights, 
              and thought leadership. Explore our resources to deepen your understanding of value investing principles 
              and long-term business building.
            </p>
            
            {/* Category Filters */}
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
            {/* Navigation Tabs */}
            <NavigationTabs 
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          
          {/* Books Section */}
          {activeSection === 'books' && (
            <BooksSection 
              filteredBooks={filteredBooks}
              flippedBookId={flippedBookId}
              toggleFlip={toggleFlip}
              openBookSummary={openBookSummary}
            />
          )}
          
          {/* Videos Section */}
          {activeSection === 'videos' && (
            <VideosSection filteredVideos={filteredVideos} />
          )}
          
          {/* Podcasts Section */}
          {activeSection === 'podcasts' && (
            <PodcastsSection filteredPodcasts={filteredPodcasts} />
          )}
        </div>
      </section>

      {/* Book Summary Dialog */}
      <BookSummaryDialog 
        selectedBook={selectedBook}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </MainLayout>
  );
};

export default CastelnauLibrary;
