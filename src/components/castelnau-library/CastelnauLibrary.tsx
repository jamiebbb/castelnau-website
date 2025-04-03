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

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-2">
          {allCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === category.name
                  ? 'bg-castelnau-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-castelnau-green"
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book, index) => (
          <div
            key={book.id}
            className="cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedBook(book)}
          >
            <BookCover
              title={book.title}
              author={book.author}
              category={book.category}
              coverImage={book.coverImage}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Book Details Dialog */}
      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-4">{selectedBook?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4]">
              <img
                src={selectedBook?.coverImage}
                alt={selectedBook?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Author</h3>
                <p>{selectedBook?.author}</p>
              </div>
              <div>
                <h3 className="font-semibold">Published</h3>
                <p>{selectedBook?.publishDate}</p>
              </div>
              <div>
                <h3 className="font-semibold">Categories</h3>
                <p>{selectedBook?.category}</p>
              </div>
              <div>
                <h3 className="font-semibold">Description</h3>
                <p className="text-gray-600">{selectedBook?.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CastelnauLibrary; 