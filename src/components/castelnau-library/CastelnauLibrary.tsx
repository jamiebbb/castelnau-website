'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import BookCover from './BookCover';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: string;
  publishDate: string;
  shortDescription: string;
}

interface BookCategory {
  name: string;
  books: Book[];
}

const CastelnauLibrary = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Castelnau Favourites');
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  // Define all categories
  const allCategories: BookCategory[] = [
    {
      name: 'Castelnau Favourites',
      books: [
        {
          id: '1',
          title: 'The Servant as Leader',
          author: 'Robert Greenleaf',
          description: 'A groundbreaking work on servant leadership, exploring how leaders can serve their organizations and teams while achieving exceptional results.',
          coverImage: '/books/the-servant-as-leader.jfif',
          category: 'Leadership',
          publishDate: '1970',
          shortDescription: 'The foundation of servant leadership philosophy'
        },
        {
          id: '2',
          title: 'Competition Demystified',
          author: 'Bruce C. Greenwald & Judd Kahn',
          description: 'A radically simplified approach to business strategy, offering clear frameworks for analyzing competitive advantages and market dynamics.',
          coverImage: '/books/competition-dymystified.jfif',
          category: 'Strategy',
          publishDate: '2005',
          shortDescription: 'A simplified approach to business strategy'
        },
        {
          id: '3',
          title: 'No Rules Rules',
          author: 'Reed Hastings & Erin Meyer',
          description: 'An inside look at Netflix\'s unique culture of freedom and responsibility, and how it drives innovation and success.',
          coverImage: '/books/no-rules-rules.jfif',
          category: 'Culture',
          publishDate: '2020',
          shortDescription: 'Netflix and the culture of reinvention'
        }
      ]
    },
    {
      name: 'Leadership & Management',
      books: [
        {
          id: '4',
          title: 'The Servant as Leader',
          author: 'Robert Greenleaf',
          description: 'A groundbreaking work on servant leadership, exploring how leaders can serve their organizations and teams while achieving exceptional results.',
          coverImage: '/books/the-servant-as-leader.jfif',
          category: 'Leadership',
          publishDate: '1970',
          shortDescription: 'The foundation of servant leadership philosophy'
        },
        {
          id: '5',
          title: 'Managing Oneself',
          author: 'Peter F. Drucker',
          description: 'A classic guide to personal effectiveness and self-management, offering insights into how to maximize your strengths and manage your career.',
          coverImage: '/books/managing-oneself.jpg',
          category: 'Management',
          publishDate: '1999',
          shortDescription: 'Personal effectiveness and self-management'
        },
        {
          id: '6',
          title: 'HBR\'s 10 Must Reads on Leadership',
          author: 'Various Authors',
          description: 'A collection of essential articles on leadership, covering emotional intelligence, decision-making, and leadership best practices.',
          coverImage: '/books/HBR\'s-10-Must-Reads-on-Leadership.jpg',
          category: 'Leadership',
          publishDate: '2011',
          shortDescription: 'Essential leadership insights from Harvard Business Review'
        },
        {
          id: '7',
          title: 'Think Lead Succeed: The Admiral Way',
          author: 'Henry Engelhardt',
          description: 'Insights into building a successful company culture and leadership framework from the founder of Admiral Insurance.',
          coverImage: '/books/think-lead-succeed.jpg',
          category: 'Leadership',
          publishDate: '2014',
          shortDescription: 'Company culture and leadership frameworks'
        },
        {
          id: '8',
          title: 'The Richer Way',
          author: 'Julian Richer',
          description: 'A practical guide to getting the best out of people through effective management and exceptional customer service.',
          coverImage: '/books/the-richer-way.jpg',
          category: 'Management',
          publishDate: '2014',
          shortDescription: 'How to get the best out of people'
        },
        {
          id: '9',
          title: 'Trillion Dollar Coach',
          author: 'Eric Schmidt, Jonathan Rosenberg, Alan Eagle',
          description: 'The leadership handbook of Silicon Valley\'s Bill Campbell, revealing his coaching principles and how they helped build some of the world\'s most successful companies.',
          coverImage: '/books/trillion-dollar-coach.jpg',
          category: 'Leadership',
          publishDate: '2019',
          shortDescription: 'The leadership handbook of Silicon Valley\'s Bill Campbell'
        },
        {
          id: '10',
          title: 'Measure What Matters',
          author: 'John Doerr',
          description: 'How Google, Bono, and the Gates Foundation rock the world with OKRs. A comprehensive guide to implementing and using Objectives and Key Results.',
          coverImage: '/books/measure-what-matters.jpg',
          category: 'Management',
          publishDate: '2018',
          shortDescription: 'How Google, Bono, and the Gates Foundation rock the world with OKRs'
        }
      ]
    },
    {
      name: 'Business Strategy & Innovation',
      books: [
        {
          id: '11',
          title: 'Competition Demystified',
          author: 'Bruce C. Greenwald & Judd Kahn',
          description: 'A radically simplified approach to business strategy, offering clear frameworks for analyzing competitive advantages and market dynamics.',
          coverImage: '/books/competition-dymystified.jfif',
          category: 'Strategy',
          publishDate: '2005',
          shortDescription: 'A simplified approach to business strategy'
        },
        {
          id: '12',
          title: 'The Outsiders',
          author: 'William N. Thorndike',
          description: 'Eight unconventional CEOs and their radically rational blueprint for success. A study of exceptional capital allocation and business strategy.',
          coverImage: '/books/the-outsiders.jpg',
          category: 'Strategy',
          publishDate: '2012',
          shortDescription: 'Eight unconventional CEOs and their radically rational blueprint for success'
        },
        {
          id: '13',
          title: 'The Geek Way',
          author: 'Andrew McAfee',
          description: 'The radical mindset that drives extraordinary results. How technology and innovation are transforming business and creating new opportunities.',
          coverImage: '/books/the-geek-way.jpg',
          category: 'Innovation',
          publishDate: '2023',
          shortDescription: 'The radical mindset that drives extraordinary results'
        }
      ]
    },
    {
      name: 'Organizational Culture & Workplace Innovation',
      books: [
        {
          id: '14',
          title: 'No Rules Rules',
          author: 'Reed Hastings & Erin Meyer',
          description: 'An inside look at Netflix\'s unique culture of freedom and responsibility, and how it drives innovation and success.',
          coverImage: '/books/no-rules-rules.jfif',
          category: 'Culture',
          publishDate: '2020',
          shortDescription: 'Netflix and the culture of reinvention'
        },
        {
          id: '15',
          title: 'Setting the Table',
          author: 'Danny Meyer',
          description: 'The transforming power of hospitality in business. How exceptional service and culture can drive business success.',
          coverImage: '/books/setting-the-table.jpg',
          category: 'Culture',
          publishDate: '2006',
          shortDescription: 'The transforming power of hospitality in business'
        },
        {
          id: '16',
          title: 'Four Seasons',
          author: 'Isadore Sharp',
          description: 'The story of a business philosophy. How Four Seasons built a global luxury hospitality brand through service excellence and organizational culture.',
          coverImage: '/books/four-seasons.jpg',
          category: 'Culture',
          publishDate: '2009',
          shortDescription: 'The story of a business philosophy'
        }
      ]
    },
    {
      name: 'Decision-Making & Problem Solving',
      books: [
        {
          id: '17',
          title: 'Six Thinking Hats',
          author: 'Edward de Bono',
          description: 'A powerful technique for looking at decisions from a number of important perspectives. A framework for parallel thinking and creative problem-solving.',
          coverImage: '/books/six-thinking-hats.jpg',
          category: 'Decision Making',
          publishDate: '1985',
          shortDescription: 'A powerful technique for looking at decisions from multiple perspectives'
        },
        {
          id: '18',
          title: 'Superforecasting',
          author: 'Philip Tetlock',
          description: 'The art and science of prediction. How to improve forecasting accuracy and make better decisions in an uncertain world.',
          coverImage: '/books/super-forecasting.jpg',
          category: 'Decision Making',
          publishDate: '2015',
          shortDescription: 'The art and science of prediction'
        },
        {
          id: '19',
          title: 'How Big Things Get Done',
          author: 'Bent Flyvbjerg',
          description: 'The surprising factors behind project success and failure. A comprehensive analysis of what makes major projects succeed or fail.',
          coverImage: '/books/how-big-things-get-done.jpg',
          category: 'Project Management',
          publishDate: '2023',
          shortDescription: 'The surprising factors behind project success and failure'
        }
      ]
    }
  ];

  // Create the final categories array with the "All" category
  const categories: BookCategory[] = [
    {
      name: 'All',
      books: allCategories.flatMap(cat => cat.books)
    },
    ...allCategories
  ];

  const currentCategory = categories.find(cat => cat.name === activeCategory);

  // Filter books based on search query
  const filteredBooks = currentCategory?.books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Get current book
  const currentBook = filteredBooks[currentBookIndex];

  // Calculate visible books (show 5 at a time)
  const visibleBooks = currentCategory?.books.slice(
    Math.max(0, currentBookIndex - 2), // Show 2 books before current
    Math.min((currentCategory?.books.length || 0), currentBookIndex + 3) // Show 2 books after current
  ) || [];

  // Calculate positions for each visible book
  const getBookPosition = (index: number) => {
    const centerIndex = 2; // Center book is at index 2
    const offset = index - centerIndex;
    const angle = offset * 45;
    const radius = 500;
    const x = Math.sin(angle * Math.PI / 180) * radius;
    const z = Math.cos(angle * Math.PI / 180) * radius;
    const opacity = Math.max(0, 1 - Math.abs(offset) * 0.4);
    const scale = Math.max(0.6, 1 - Math.abs(offset) * 0.15);
    return { x, z, opacity, scale, angle };
  };

  // Remove mouse-based rotation values since we don't need them anymore
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], ["0deg", "0deg"]); // Set to 0 to remove tilt
  const rotateY = useTransform(mouseX, [-300, 300], ["0deg", "0deg"]); // Set to 0 to remove tilt

  // Spring animations for smooth movement
  const springConfig = { damping: 20, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Simplified navigation
  const handleNavigation = (direction: 'left' | 'right') => {
    if (!currentCategory) return;
    
    const totalBooks = currentCategory.books.length;
    if (direction === 'left') {
      setCurrentBookIndex(prev => (prev - 1 + totalBooks) % totalBooks);
    } else {
      setCurrentBookIndex(prev => (prev + 1) % totalBooks);
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    setCurrentBookIndex(0);
  };

  return (
    <div className="relative -mt-48">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background - matching page hero exactly */}
        <div className="absolute inset-0 bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/pattern.png')] opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8 px-4 md:px-0">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search books by title, author, or category..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentBookIndex(0);
                  }}
                  className="w-full px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/50 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
                />
                <BookOpen className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/50" />
              </div>
            </div>

            {/* Category Navigation */}
            <motion.div 
              className="flex flex-wrap gap-2 md:gap-4 justify-center mb-0 px-4 md:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-white text-castelnau-green shadow-lg scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Book Carousel */}
            <div className="relative h-[600px] md:h-[800px] -mt-4">
              <div className="relative h-full flex items-center">
                {/* Left Navigation Arrow */}
                <button
                  onClick={() => handleNavigation('left')}
                  className="absolute -left-64 z-20 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Books Container with Fixed Width */}
                <div className="w-full md:w-[1500px] mx-auto relative px-4 md:px-0">
                  <div className="flex items-center justify-center">
                    {filteredBooks.map((book, index) => {
                      const isCurrent = index === currentBookIndex;
                      const isNext = index === (currentBookIndex + 1) % filteredBooks.length;
                      const isPrev = index === (currentBookIndex - 1 + filteredBooks.length) % filteredBooks.length;
                      const isNextNext = index === (currentBookIndex + 2) % filteredBooks.length;
                      const isPrevPrev = index === (currentBookIndex - 2 + filteredBooks.length) % filteredBooks.length;
                      
                      if (!isCurrent && !isNext && !isPrev && !isNextNext && !isPrevPrev) return null;

                      const position = isCurrent ? 0 : isNext ? 1 : isPrev ? -1 : isNextNext ? 2 : -2;
                      const x = position * 340;
                      const opacity = isCurrent ? 1 : isNext || isPrev ? 0.7 : 0.5;
                      const scale = isCurrent ? 1.2 : isNext || isPrev ? 0.9 : 0.8;

                      return (
                        <motion.div
                          key={book.id}
                          className="absolute cursor-pointer"
                          style={{
                            x,
                            opacity,
                            scale,
                            left: '50%',
                            transform: `translateX(-50%) translateX(${x}px)`,
                          }}
                          animate={{
                            x,
                            opacity,
                            scale,
                            transform: `translateX(-50%) translateX(${x}px)`,
                          }}
                          initial={{
                            x: position > 0 ? 2000 : -2000,
                            opacity: 0,
                            scale: 0.8,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 1,
                          }}
                          onClick={() => setSelectedBook(book)}
                          whileHover={{
                            scale: scale * 1.1,
                            y: -10,
                          }}
                        >
                          <div className="w-[280px] md:w-[320px] aspect-[3/4] shadow-2xl">
                            <BookCover
                              title={book.title}
                              author={book.author}
                              category={book.category}
                              coverImage={book.coverImage}
                              className="w-full h-full"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() => handleNavigation('right')}
                  className="absolute -right-64 z-20 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
            </div>

            {/* Book Progress */}
            <div className="flex justify-center items-center gap-2 mt-4 md:mt-8 px-4 md:px-0">
              {filteredBooks.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    index === currentBookIndex
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Business Case Studies Section */}
            <div className="mt-32">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                Business Case Studies
              </h2>
              <p className="text-xl text-white/80 mb-12 text-center max-w-2xl mx-auto">
                Watch our colleagues share their experiences of founding and scaling successful businesses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Video Card 1 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-castelnau-dark-green to-castelnau-green flex items-center justify-center">
                      <div className="text-center p-6 transform group-hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-serif font-bold text-white mb-2">
                          Building a Tech Startup
                        </h3>
                        <p className="text-white/80 text-sm">
                          From concept to successful exit
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      John Smith
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Former founder of TechStart, acquired by Castelnau in 2020
                    </p>
                    <button className="w-full bg-white text-castelnau-green px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Case Study
                    </button>
                  </div>
                </motion.div>

                {/* Video Card 2 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-castelnau-dark-green to-castelnau-green flex items-center justify-center">
                      <div className="text-center p-6 transform group-hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-serif font-bold text-white mb-2">
                          Scaling a Retail Business
                        </h3>
                        <p className="text-white/80 text-sm">
                          Lessons from rapid growth
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      Sarah Johnson
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Former founder of RetailPro, acquired by Castelnau in 2021
                    </p>
                    <button className="w-full bg-white text-castelnau-green px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Case Study
                    </button>
                  </div>
                </motion.div>

                {/* Video Card 3 */}
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-castelnau-dark-green to-castelnau-green flex items-center justify-center">
                      <div className="text-center p-6 transform group-hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-serif font-bold text-white mb-2">
                          Financial Services Innovation
                      </h3>
                        <p className="text-white/80 text-sm">
                          Building a modern fintech company
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-serif font-bold text-white mb-2">
                      Michael Chen
                    </h4>
                    <p className="text-white/80 text-sm mb-4">
                      Former founder of FinTech Solutions, acquired by Castelnau in 2022
                    </p>
                    <button className="w-full bg-white text-castelnau-green px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Case Study
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
                Stay Updated
              </h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-white mb-4 text-center">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/80 mb-6 text-center">
                  Receive regular updates on our latest research, insights, and market analysis directly in your inbox.
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-white/50 focus:border-white/50"
                  />
                  <button
                    type="submit"
                    className="bg-white text-castelnau-green px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Details Dialog */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif font-bold text-castelnau-green">
              {selectedBook?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedBook && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                className="aspect-[3/4] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <BookCover
                  title={selectedBook.title}
                  author={selectedBook.author}
                  category={selectedBook.category}
                  coverImage={selectedBook.coverImage}
                  className="w-full h-full"
                />
              </motion.div>
              <div>
                <p className="text-xl text-gray-600 mb-4">{selectedBook.author}</p>
                <p className="text-sm text-gray-500 mb-4">{selectedBook.category} • {selectedBook.publishDate}</p>
                <p className="text-gray-700 leading-relaxed">{selectedBook.description}</p>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CastelnauLibrary; 