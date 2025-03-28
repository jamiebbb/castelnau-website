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
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      description: 'Timeless lessons on wealth, greed, and happiness. The Psychology of Money explores the complex relationship between money and human behavior, offering insights into how we think about and handle financial decisions.',
      coverImage: '/books/psychology-of-money.jpg',
      category: 'Personal Finance',
      publishDate: '2020',
      shortDescription: 'Timeless lessons on wealth, greed, and happiness'
    },
    {
      id: '2',
      title: 'Thinking in Bets',
      author: 'Annie Duke',
      description: 'Making Smarter Decisions When You Don\'t Have All the Facts. A former World Series of Poker champion turns decision-making into a science, showing how to embrace uncertainty and make better choices.',
      coverImage: '/books/thinking-in-bets.jpg',
      category: 'Decision Making',
      publishDate: '2018',
      shortDescription: 'Making Smarter Decisions When You Don\'t Have All the Facts'
    },
        {
          id: '3',
          title: 'The Intelligent Investor',
          author: 'Benjamin Graham',
          description: 'The definitive book on value investing, offering timeless wisdom on how to analyze stocks and make informed investment decisions.',
          coverImage: '/books/intelligent-investor.jpg',
          category: 'Investment',
          publishDate: '1949',
          shortDescription: 'The definitive book on value investing'
        }
      ]
    },
    {
      name: 'Value Investing',
      books: [
        {
          id: '4',
          title: 'Security Analysis',
          author: 'Benjamin Graham & David Dodd',
          description: 'The foundation of value investing, providing detailed methods for analyzing securities and making investment decisions. A comprehensive guide to fundamental analysis and security valuation.',
          coverImage: '/books/security-analysis.jpg',
          category: 'Investment',
          publishDate: '1934',
          shortDescription: 'The foundation of value investing'
        },
        {
          id: '5',
          title: 'Common Stocks and Uncommon Profits',
          author: 'Philip Fisher',
          description: 'A classic guide to stock market investing, focusing on growth stocks and long-term investment strategies. Fisher\'s principles of qualitative analysis remain relevant today.',
          coverImage: '/books/common-stocks.jpg',
          category: 'Investment',
          publishDate: '1958',
          shortDescription: 'A classic guide to stock market investing'
        },
        {
          id: '6',
          title: 'The Little Book of Value Investing',
          author: 'Christopher Browne',
          description: 'A concise guide to value investing principles, offering practical advice on finding undervalued stocks and building a value-focused portfolio.',
          coverImage: '/books/little-book-value.jpg',
          category: 'Investment',
          publishDate: '2006',
          shortDescription: 'A concise guide to value investing principles'
        }
      ]
    },
    {
      name: 'Market Psychology',
      books: [
        {
          id: '7',
          title: 'A Random Walk Down Wall Street',
          author: 'Burton Malkiel',
          description: 'The Time-Tested Strategy for Successful Investing. A comprehensive guide to various investment strategies and market behavior, including the efficient market hypothesis.',
          coverImage: '/books/random-walk.jpg',
          category: 'Investment',
          publishDate: '1973',
          shortDescription: 'The Time-Tested Strategy for Successful Investing'
        },
        {
          id: '8',
          title: 'The Art of Thinking Clearly',
          author: 'Rolf Dobelli',
          description: 'Better Thinking, Better Decisions. A collection of cognitive biases and how to avoid them in decision-making, essential for understanding market psychology.',
          coverImage: '/books/thinking-clearly.jpg',
          category: 'Decision Making',
          publishDate: '2013',
          shortDescription: 'Better Thinking, Better Decisions'
        },
        {
          id: '9',
          title: 'Thinking, Fast and Slow',
          author: 'Daniel Kahneman',
          description: 'A groundbreaking work on cognitive biases and decision-making, by the Nobel Prize-winning economist. Essential reading for understanding human behavior in markets.',
          coverImage: '/books/thinking-fast-slow.jpg',
          category: 'Psychology',
          publishDate: '2011',
          shortDescription: 'Understanding cognitive biases and decision-making'
        }
      ]
    },
    {
      name: 'Business & Economics',
      books: [
        {
          id: '10',
          title: 'Capital in the Twenty-First Century',
          author: 'Thomas Piketty',
          description: 'A comprehensive analysis of wealth and income inequality, offering insights into economic trends and their implications for investors.',
          coverImage: '/books/capital-21st.jpg',
          category: 'Economics',
          publishDate: '2013',
          shortDescription: 'Analysis of wealth and income inequality'
        },
        {
          id: '11',
          title: 'The Big Short',
          author: 'Michael Lewis',
          description: 'Inside the Doomsday Machine. A fascinating account of the 2008 financial crisis and the few who saw it coming, offering lessons for modern investors.',
          coverImage: '/books/big-short.jpg',
          category: 'Finance',
          publishDate: '2010',
          shortDescription: 'Inside the Doomsday Machine'
        },
        {
          id: '12',
          title: 'The Alchemy of Finance',
          author: 'George Soros',
          description: 'Reading the Mind of the Market. Soros\'s theory of reflexivity and its application to financial markets, offering insights into market behavior.',
          coverImage: '/books/alchemy-finance.jpg',
          category: 'Finance',
          publishDate: '1987',
          shortDescription: 'Reading the Mind of the Market'
        }
      ]
    },
    {
      name: 'Risk Management',
      books: [
        {
          id: '13',
          title: 'Fooled by Randomness',
          author: 'Nassim Nicholas Taleb',
          description: 'The Hidden Role of Chance in Life and in the Markets. An exploration of how randomness and probability affect our decisions and market outcomes.',
          coverImage: '/books/fooled-randomness.jpg',
          category: 'Risk',
          publishDate: '2001',
          shortDescription: 'The Hidden Role of Chance in Life and Markets'
        },
        {
          id: '14',
          title: 'Against the Gods',
          author: 'Peter L. Bernstein',
          description: 'The Remarkable Story of Risk. A comprehensive history of risk management, from ancient times to modern financial theory.',
          coverImage: '/books/against-gods.jpg',
          category: 'Risk',
          publishDate: '1996',
          shortDescription: 'The Remarkable Story of Risk'
        },
        {
          id: '15',
          title: 'The Black Swan',
          author: 'Nassim Nicholas Taleb',
          description: 'The Impact of the Highly Improbable. An examination of rare, unpredictable events and their profound impact on markets and society.',
          coverImage: '/books/black-swan.jpg',
          category: 'Risk',
          publishDate: '2007',
          shortDescription: 'The Impact of the Highly Improbable'
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

  // Get current book
  const currentBook = currentCategory?.books[currentBookIndex];

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
            {/* Category Navigation */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setCurrentBookIndex(0);
                  }}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
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

            {/* Circular Book Carousel */}
            <div className="relative h-[700px] perspective-1000 -mt-4">
              <motion.div 
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative h-full flex items-center justify-center">
                  {currentCategory?.books.map((book, index) => {
                    const isCurrent = index === currentBookIndex;
                    const isNext = index === (currentBookIndex + 1) % currentCategory.books.length;
                    const isPrev = index === (currentBookIndex - 1 + currentCategory.books.length) % currentCategory.books.length;
                    
                    if (!isCurrent && !isNext && !isPrev) return null;

                    const position = isCurrent ? 0 : isNext ? 1 : -1;
                    const x = position * 400;
                    const z = position * 100;
                    const opacity = isCurrent ? 1 : 0.5;
                    const scale = isCurrent ? 1 : 0.8;
                    const rotateY = position * 30;

                    return (
                      <motion.div
                        key={book.id}
                        className="absolute cursor-pointer"
                        style={{
                          x,
                          z,
                          opacity,
                          scale,
                          rotateY: `${rotateY}deg`,
                        }}
                        animate={{
                          x,
                          z,
                          opacity,
                          scale,
                          rotateY: `${rotateY}deg`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        onClick={() => setSelectedBook(book)}
                        whileHover={{
                          scale: scale * 1.1,
                          z: z + 50,
                          rotateY: `${rotateY + 5}deg`,
                        }}
                      >
                        <div className="w-[350px] aspect-[3/4] shadow-2xl">
                          <BookCover
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            className="w-full h-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() => handleNavigation('left')}
                    className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors pointer-events-auto backdrop-blur-sm border border-white/10"
                  >
                    <ArrowLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => handleNavigation('right')}
                    className="p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors pointer-events-auto backdrop-blur-sm border border-white/10"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Book Progress */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {currentCategory?.books.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
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