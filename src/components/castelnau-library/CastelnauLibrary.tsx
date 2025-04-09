'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, ArrowLeft, ArrowRight, Play, Headphones } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import BookCover from './BookCover';
import PodcastCover from './PodcastCover';

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

interface Podcast {
  id: string;
  title: string;
  host: string;
  description: string;
  coverImage: string;
  category: string;
  publishDate: string;
  duration: string;
  url: string;
}

interface BookCategory {
  name: string;
  books: Book[];
}

interface PodcastCategory {
  name: string;
  podcasts: Podcast[];
}

const CastelnauLibrary = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Castelnau Favourites');
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0);
  const [currentPodcastIndex, setCurrentPodcastIndex] = useState<number>(0);
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
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/the-servant-as-leader.jpg`,
          category: 'Servant Leadership, Ethical Leadership',
          publishDate: '1970',
          shortDescription: 'The foundation of servant leadership philosophy'
        },
        {
          id: '2',
          title: 'Managing Oneself',
          author: 'Peter F. Drucker',
          description: 'A classic guide to personal effectiveness and self-management, offering insights into how to maximize your strengths and manage your career.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/managing-oneself.jpg`,
          category: 'Personal Effectiveness, Self-Management',
          publishDate: '1999',
          shortDescription: 'Personal effectiveness and self-management'
        },
        {
          id: '3',
          title: 'HBR\'s 10 Must Reads on Leadership',
          author: 'Various Authors',
          description: 'A collection of essential articles on leadership, covering emotional intelligence, decision-making, and leadership best practices.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/HBR\'s-10-Must-Reads-on-Leadership.jpg`,
          category: 'Leadership Best Practices, Emotional Intelligence',
          publishDate: '2011',
          shortDescription: 'Essential articles on leadership'
        }
      ]
    },
    {
      name: 'Leadership & Management',
      books: [
        {
          id: '4',
          title: 'Think Lead Succeed: The Admiral Way',
          author: 'Henry Engelhardt',
          description: 'An exploration of Admiral Insurance\'s unique leadership framework and company culture that drove its success.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/think-lead-succeed.jpg`,
          category: 'Company Culture, Leadership Frameworks',
          publishDate: '2015',
          shortDescription: 'The Admiral Insurance leadership framework'
        },
        {
          id: '5',
          title: 'The Richer Way',
          author: 'Julian Richer',
          description: 'A practical guide to getting the best out of people through effective management and customer service principles.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/the-richer-way.jpg`,
          category: 'Management, People Management, Customer Service',
          publishDate: '2014',
          shortDescription: 'How to get the best out of people'
        },
        {
          id: '6',
          title: 'Trillion Dollar Coach',
          author: 'Eric Schmidt, Jonathan Rosenberg, Alan Eagle',
          description: 'The leadership playbook of Silicon Valley\'s Bill Campbell, who coached some of the most successful tech leaders.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/trillion-dollar-coach.jpg`,
          category: 'Coaching, Leadership Development',
          publishDate: '2019',
          shortDescription: 'The leadership handbook of Silicon Valley\'s Bill Campbell'
        },
        {
          id: '7',
          title: 'Measure What Matters',
          author: 'John Doerr',
          description: 'How Google, Bono, and the Gates Foundation rock the world with OKRs.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/measure-what-matters.jpg`,
          category: 'Objective and Key Results (OKRs), Performance Management',
          publishDate: '2018',
          shortDescription: 'How to achieve ambitious goals with OKRs'
        }
      ]
    },
    {
      name: 'Business Strategy & Innovation',
      books: [
        {
          id: '8',
          title: 'Competition Demystified',
          author: 'Bruce C. Greenwald & Judd Kahn',
          description: 'A radically simplified approach to business strategy, offering clear frameworks for analyzing competitive advantages and market dynamics.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/competition-dymystified.jpg`,
          category: 'Competitive Strategy, Market Analysis',
          publishDate: '2005',
          shortDescription: 'A simplified approach to business strategy'
        },
        {
          id: '9',
          title: 'The Outsiders',
          author: 'William N. Thorndike',
          description: 'A study of eight unconventional CEOs and their radically rational blueprint for success.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/the-outsiders.jpg`,
          category: 'Strategic Management, Business Case Studies',
          publishDate: '2012',
          shortDescription: 'Eight unconventional CEOs and their radically rational blueprint for success'
        },
        {
          id: '10',
          title: 'The Geek Way',
          author: 'Andrew McAfee',
          description: 'A groundbreaking exploration of how technology companies are revolutionizing management and leadership practices.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/the-geek-way.jpg`,
          category: 'Technology & Business Innovation, Culture Building',
          publishDate: '2023',
          shortDescription: 'The radical mindset that drives extraordinary results'
        }
      ]
    },
    {
      name: 'Culture & Operations',
      books: [
        {
          id: '11',
          title: 'No Rules Rules',
          author: 'Reed Hastings & Erin Meyer',
          description: 'An inside look at Netflix\'s unique culture of freedom and responsibility, and how it drives innovation and success.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/no-rules-rules.jpg`,
          category: 'Corporate Culture, Innovation, Freedom & Responsibility',
          publishDate: '2020',
          shortDescription: 'Netflix and the culture of reinvention'
        },
        {
          id: '12',
          title: 'Setting the Table',
          author: 'Danny Meyer',
          description: 'The transformative power of hospitality in business and life.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/setting-the-table.jpg`,
          category: 'Customer Service, Hospitality, Business Philosophy',
          publishDate: '2006',
          shortDescription: 'The transforming power of hospitality in business'
        },
        {
          id: '13',
          title: 'Four Seasons',
          author: 'Isadore Sharp',
          description: 'The story of a business philosophy that revolutionized the hospitality industry.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/four-seasons.jpg`,
          category: 'Service Excellence, Organizational Culture, Hospitality',
          publishDate: '2009',
          shortDescription: 'The story of a business philosophy'
        }
      ]
    },
    {
      name: 'Decision-Making & Problem Solving',
      books: [
        {
          id: '14',
          title: 'Six Thinking Hats',
          author: 'Edward de Bono',
          description: 'A powerful technique for looking at decisions from a number of important perspectives.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/six-thinking-hats.jpg`,
          category: 'Decision-Making Framework, Creative Thinking',
          publishDate: '1985',
          shortDescription: 'A powerful technique for looking at decisions'
        },
        {
          id: '15',
          title: 'Superforecasting',
          author: 'Philip Tetlock',
          description: 'An exploration of how to make better predictions and decisions in an uncertain world.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/super-forecasting.jpg`,
          category: 'Forecasting, Decision-Making',
          publishDate: '2015',
          shortDescription: 'The art and science of prediction'
        },
        {
          id: '16',
          title: 'How Big Things Get Done',
          author: 'Bent Flyvbjerg',
          description: 'A comprehensive analysis of why major projects fail and how to make them succeed.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/books/how-big-things-get-done.jpg`,
          category: 'Project Management, Decision-Making',
          publishDate: '2023',
          shortDescription: 'The surprising factors that determine the fate of every project'
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

  // Define podcast categories
  const podcastCategories: PodcastCategory[] = [
    {
      name: 'Investment Insights',
      podcasts: [
        {
          id: 'p1',
          title: 'The Future of Value Investing',
          host: 'John Smith',
          description: 'An in-depth discussion on the evolution of value investing strategies in today\'s market environment.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/value-investing.jpg`,
          category: 'Investment Strategy',
          publishDate: '2023-05-15',
          duration: '45 min',
          url: 'https://example.com/podcast1'
        },
        {
          id: 'p2',
          title: 'Private Equity Deep Dive',
          host: 'Sarah Johnson',
          description: 'Exploring the latest trends and opportunities in the private equity landscape.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/private-equity.jpg`,
          category: 'Private Equity',
          publishDate: '2023-06-22',
          duration: '38 min',
          url: 'https://example.com/podcast2'
        },
        {
          id: 'p3',
          title: 'Market Outlook 2023',
          host: 'Michael Brown',
          description: 'A comprehensive analysis of market trends and investment opportunities for the coming year.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/market-outlook.jpg`,
          category: 'Market Analysis',
          publishDate: '2023-01-10',
          duration: '52 min',
          url: 'https://example.com/podcast3'
        }
      ]
    },
    {
      name: 'Business Strategy',
      podcasts: [
        {
          id: 'p4',
          title: 'Scaling Successful Businesses',
          host: 'Emma Wilson',
          description: 'Lessons learned from scaling successful businesses in various industries.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/scaling-businesses.jpg`,
          category: 'Business Growth',
          publishDate: '2023-04-05',
          duration: '42 min',
          url: 'https://example.com/podcast4'
        },
        {
          id: 'p5',
          title: 'Innovation in Established Companies',
          host: 'David Lee',
          description: 'How established companies can foster innovation and stay competitive in rapidly changing markets.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/innovation.jpg`,
          category: 'Innovation',
          publishDate: '2023-07-18',
          duration: '39 min',
          url: 'https://example.com/podcast5'
        }
      ]
    },
    {
      name: 'Leadership & Culture',
      podcasts: [
        {
          id: 'p6',
          title: 'Building High-Performance Teams',
          host: 'Lisa Chen',
          description: 'Strategies for building and maintaining high-performance teams in today\'s competitive environment.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/high-performance-teams.jpg`,
          category: 'Team Building',
          publishDate: '2023-03-12',
          duration: '47 min',
          url: 'https://example.com/podcast6'
        },
        {
          id: 'p7',
          title: 'Servant Leadership in Practice',
          host: 'Robert Green',
          description: 'Practical applications of servant leadership principles in modern organizations.',
          coverImage: `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/podcasts/servant-leadership.jpg`,
          category: 'Leadership',
          publishDate: '2023-02-28',
          duration: '44 min',
          url: 'https://example.com/podcast7'
        }
      ]
    }
  ];

  // Create the final podcast categories array with the "All" category
  const allPodcastCategories: PodcastCategory[] = [
    {
      name: 'All',
      podcasts: podcastCategories.flatMap(cat => cat.podcasts)
    },
    ...podcastCategories
  ];

  const [activePodcastCategory, setActivePodcastCategory] = useState<string>('All');
  const currentPodcastCategory = allPodcastCategories.find(cat => cat.name === activePodcastCategory);

  // Filter podcasts based on search query
  const filteredPodcasts = currentPodcastCategory?.podcasts.filter(podcast => 
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    podcast.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
    podcast.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Get current podcast
  const currentPodcast = filteredPodcasts[currentPodcastIndex];

  // Calculate visible podcasts (show 5 at a time)
  const visiblePodcasts = currentPodcastCategory?.podcasts.slice(
    Math.max(0, currentPodcastIndex - 2), // Show 2 podcasts before current
    Math.min((currentPodcastCategory?.podcasts.length || 0), currentPodcastIndex + 3) // Show 2 podcasts after current
  ) || [];

  // Handle podcast category change
  const handlePodcastCategoryChange = (categoryName: string) => {
    setActivePodcastCategory(categoryName);
    setCurrentPodcastIndex(0);
  };

  // Handle podcast navigation
  const handlePodcastNavigation = (direction: 'left' | 'right') => {
    if (!currentPodcastCategory) return;
    
    const totalPodcasts = currentPodcastCategory.podcasts.length;
    if (direction === 'left') {
      setCurrentPodcastIndex(prev => (prev - 1 + totalPodcasts) % totalPodcasts);
    } else {
      setCurrentPodcastIndex(prev => (prev + 1) % totalPodcasts);
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
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Castelnau Library
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our curated collection of books and resources that have shaped our investment philosophy and business approach.
          </p>
        </motion.div>

        {/* Books Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Recommended Books
          </motion.h2>

          {/* Category Filter */}
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
                    const scale = isCurrent ? 1.4 : isNext || isPrev ? 0.9 : 0.8;

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
        </div>

        {/* Podcasts Section */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Castelnau Podcasts
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Listen to our team share insights on investment strategies, business leadership, and market trends.
          </motion.p>

          {/* Podcast Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {allPodcastCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => handlePodcastCategoryChange(category.name)}
                className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                  activePodcastCategory === category.name
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

          {/* Podcast Carousel */}
          <div className="relative h-[500px] mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Left Navigation Arrow */}
                <button
                  onClick={() => handlePodcastNavigation('left')}
                  className="absolute -left-64 z-20 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Podcast Covers */}
                <div className="relative h-full flex items-center justify-center">
                  {filteredPodcasts.map((podcast, index) => {
                    const isCurrent = index === currentPodcastIndex;
                    const position = index - currentPodcastIndex;
                    const { x, opacity, scale } = getBookPosition(position);

                    return (
                      <motion.div
                        key={podcast.id}
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
                        onClick={() => setSelectedPodcast(podcast)}
                        whileHover={{
                          scale: scale * 1.1,
                          y: -10,
                        }}
                      >
                        <div className="w-[280px] md:w-[320px] aspect-[3/4] shadow-2xl">
                          <PodcastCover
                            title={podcast.title}
                            host={podcast.host}
                            category={podcast.category}
                            coverImage={podcast.coverImage}
                            duration={podcast.duration}
                            className="w-full h-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() => handlePodcastNavigation('right')}
                  className="absolute -right-64 z-20 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* Podcast Progress */}
          <div className="flex justify-center items-center gap-2 mt-4 md:mt-8 px-4 md:px-0">
            {filteredPodcasts.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentPodcastIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Book Dialog */}
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

      {/* Podcast Dialog */}
      <Dialog open={!!selectedPodcast} onOpenChange={() => setSelectedPodcast(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif font-bold text-castelnau-green">
              {selectedPodcast?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedPodcast && (
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
                <PodcastCover
                  title={selectedPodcast.title}
                  host={selectedPodcast.host}
                  category={selectedPodcast.category}
                  coverImage={selectedPodcast.coverImage}
                  duration={selectedPodcast.duration}
                  className="w-full h-full"
                />
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Headphones className="w-5 h-5 text-castelnau-green" />
                  <p className="text-xl text-gray-600">{selectedPodcast.host}</p>
                </div>
                <p className="text-sm text-gray-500 mb-4">{selectedPodcast.category} • {selectedPodcast.publishDate} • {selectedPodcast.duration}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedPodcast.description}</p>
                <a 
                  href={selectedPodcast.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-castelnau-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Listen to Podcast
                </a>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CastelnauLibrary; 