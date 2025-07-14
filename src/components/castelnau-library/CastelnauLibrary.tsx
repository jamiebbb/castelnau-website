"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookOpen, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import BookCover from "./BookCover";

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
  const [activeCategory, setActiveCategory] = useState<string>(
    "Castelnau Favourites"
  );
  const [currentBookIndex, setCurrentBookIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const controls = useAnimation();
  const bookRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      console.log(
        "Window width:",
        window.innerWidth,
        "Is mobile:",
        isMobileDevice
      );
    };

    // Initial check - run immediately
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Define all categories
  const allCategories: BookCategory[] = [
    {
      name: "Castelnau Favourites",
      books: [
        {
          id: "1",
          title: "The Servant as Leader",
          author: "Robert Greenleaf",
          description:
            "A groundbreaking work on servant leadership, exploring how leaders can serve their organizations and teams while achieving exceptional results.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/the-servant-as-leader.jpg`,
          category: "Servant Leadership, Ethical Leadership",
          publishDate: "1970",
          shortDescription: "The foundation of servant leadership philosophy",
        },
        {
          id: "2",
          title: "Managing Oneself",
          author: "Peter F. Drucker",
          description:
            "A classic guide to personal effectiveness and self-management, offering insights into how to maximize your strengths and manage your career.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/managing-oneself.jpg`,
          category: "Personal Effectiveness, Self-Management",
          publishDate: "1999",
          shortDescription: "Personal effectiveness and self-management",
        },
        {
          id: "3",
          title: "HBR's 10 Must Reads on Leadership",
          author: "Various Authors",
          description:
            "A collection of essential articles on leadership, covering emotional intelligence, decision-making, and leadership best practices.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/HBR\'s-10-Must-Reads-on-Leadership.jpg`,
          category: "Leadership Best Practices, Emotional Intelligence",
          publishDate: "2011",
          shortDescription: "Essential articles on leadership",
        },
      ],
    },
    {
      name: "Leadership & Management",
      books: [
        {
          id: "4",
          title: "Think Lead Succeed: The Admiral Way",
          author: "Henry Engelhardt",
          description:
            "An exploration of Admiral Insurance's unique leadership framework and company culture that drove its success.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/think-lead-succeed.jpg`,
          category: "Company Culture, Leadership Frameworks",
          publishDate: "2015",
          shortDescription: "The Admiral Insurance leadership framework",
        },
        {
          id: "5",
          title: "The Richer Way",
          author: "Julian Richer",
          description:
            "A practical guide to getting the best out of people through effective management and customer service principles.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/the-richer-way.jpg`,
          category: "Management, People Management, Customer Service",
          publishDate: "2014",
          shortDescription: "How to get the best out of people",
        },
        {
          id: "6",
          title: "Trillion Dollar Coach",
          author: "Eric Schmidt, Jonathan Rosenberg, Alan Eagle",
          description:
            "The leadership playbook of Silicon Valley's Bill Campbell, who coached some of the most successful tech leaders.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/trillion-dollar-coach.jpg`,
          category: "Coaching, Leadership Development",
          publishDate: "2019",
          shortDescription:
            "The leadership handbook of Silicon Valley's Bill Campbell",
        },
        {
          id: "7",
          title: "Measure What Matters",
          author: "John Doerr",
          description:
            "How Google, Bono, and the Gates Foundation rock the world with OKRs.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/measure-what-matters.jpg`,
          category: "Objective and Key Results (OKRs), Performance Management",
          publishDate: "2018",
          shortDescription: "How to achieve ambitious goals with OKRs",
        },
      ],
    },
    {
      name: "Business Strategy & Innovation",
      books: [
        {
          id: "8",
          title: "Competition Demystified",
          author: "Bruce C. Greenwald & Judd Kahn",
          description:
            "A radically simplified approach to business strategy, offering clear frameworks for analyzing competitive advantages and market dynamics.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/competition-dymystified.jpg`,
          category: "Competitive Strategy, Market Analysis",
          publishDate: "2005",
          shortDescription: "A simplified approach to business strategy",
        },
        {
          id: "9",
          title: "The Outsiders",
          author: "William N. Thorndike",
          description:
            "A study of eight unconventional CEOs and their radically rational blueprint for success.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/the-outsiders.jpg`,
          category: "Strategic Management, Business Case Studies",
          publishDate: "2012",
          shortDescription:
            "Eight unconventional CEOs and their radically rational blueprint for success",
        },
        {
          id: "10",
          title: "The Geek Way",
          author: "Andrew McAfee",
          description:
            "A groundbreaking exploration of how technology companies are revolutionizing management and leadership practices.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/the-geek-way.jpg`,
          category: "Technology & Business Innovation, Culture Building",
          publishDate: "2023",
          shortDescription:
            "The radical mindset that drives extraordinary results",
        },
      ],
    },
    {
      name: "Culture & Operations",
      books: [
        {
          id: "11",
          title: "No Rules Rules",
          author: "Reed Hastings & Erin Meyer",
          description:
            "An inside look at Netflix's unique culture of freedom and responsibility, and how it drives innovation and success.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/no-rules-rules.jpg`,
          category: "Corporate Culture, Innovation, Freedom & Responsibility",
          publishDate: "2020",
          shortDescription: "Netflix and the culture of reinvention",
        },
        {
          id: "12",
          title: "Setting the Table",
          author: "Danny Meyer",
          description:
            "The transformative power of hospitality in business and life.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/setting-the-table.jpg`,
          category: "Customer Service, Hospitality, Business Philosophy",
          publishDate: "2006",
          shortDescription: "The transforming power of hospitality in business",
        },
        {
          id: "13",
          title: "Four Seasons",
          author: "Isadore Sharp",
          description:
            "The story of a business philosophy that revolutionized the hospitality industry.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/four-seasons.jpg`,
          category: "Service Excellence, Organizational Culture, Hospitality",
          publishDate: "2009",
          shortDescription: "The story of a business philosophy",
        },
      ],
    },
    {
      name: "Decision-Making & Problem Solving",
      books: [
        {
          id: "14",
          title: "Six Thinking Hats",
          author: "Edward de Bono",
          description:
            "A powerful technique for looking at decisions from a number of important perspectives.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/six-thinking-hats.jpg`,
          category: "Decision-Making Framework, Creative Thinking",
          publishDate: "1985",
          shortDescription: "A powerful technique for looking at decisions",
        },
        {
          id: "15",
          title: "Superforecasting",
          author: "Philip Tetlock",
          description:
            "An exploration of how to make better predictions and decisions in an uncertain world.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/super-forecasting.jpg`,
          category: "Forecasting, Decision-Making",
          publishDate: "2015",
          shortDescription: "The art and science of prediction",
        },
        {
          id: "16",
          title: "How Big Things Get Done",
          author: "Bent Flyvbjerg",
          description:
            "A comprehensive analysis of why major projects fail and how to make them succeed.",
          coverImage: `${
            process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
          }/books/how-big-things-get-done.jpg`,
          category: "Project Management, Decision-Making",
          publishDate: "2023",
          shortDescription:
            "The surprising factors that determine the fate of every project",
        },
      ],
    },
  ];

  // Create the final categories array with the "All" category
  const categories: BookCategory[] = [
    {
      name: "All",
      books: allCategories.flatMap((cat) => cat.books),
    },
    ...allCategories,
  ];

  const currentCategory = categories.find((cat) => cat.name === activeCategory);

  // Filter books based on search query
  const filteredBooks =
    currentCategory?.books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  // Simplified navigation
  const handleNavigation = (direction: "left" | "right") => {
    if (!currentCategory) return;

    const totalBooks = currentCategory.books.length;
    if (direction === "left") {
      setCurrentBookIndex((prev) => (prev - 1 + totalBooks) % totalBooks);
    } else {
      setCurrentBookIndex((prev) => (prev + 1) % totalBooks);
    }
  };

  // Handle category change
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    setCurrentBookIndex(0);
    setIsAnimating(false);
  };

  // Handle swipe gesture for mobile
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!isMobile || isAnimating) return;

    const swipeThreshold = 50; // Minimum distance to trigger a swipe
    const { offset } = info;

    if (Math.abs(offset.x) > swipeThreshold) {
      setIsAnimating(true);

      // First, animate the current book out
      controls.start({
        x: offset.x > 0 ? 300 : -300,
        opacity: 0,
        transition: { duration: 0.2 },
      });

      // After a short delay, change the book and reset position
      setTimeout(() => {
        if (offset.x > 0) {
          // Swiped right - go to previous book
          handleNavigation("left");
        } else {
          // Swiped left - go to next book
          handleNavigation("right");
        }

        // Reset position for the new book
        controls.set({ x: offset.x > 0 ? -300 : 300, opacity: 0 });

        // Animate the new book in
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.2 },
        });

        // Reset animation state
        setTimeout(() => {
          setIsAnimating(false);
        }, 200);
      }, 200);
    } else {
      // If swipe wasn't strong enough, just reset position
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.2 },
      });
    }
  };

  return (
    <div className="relative">

      {/* Content */}
      <div className="relative z-10 py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6 px-4 md:px-0 pt-4">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search books by title or author..."
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
                      ? "bg-white text-castelnau-green shadow-lg scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Book Carousel */}
            <div className="relative h-[500px] md:h-[700px]">
              <div className="relative h-full flex items-center justify-center">
                {/* Left Navigation Arrow - Only visible on desktop */}
                {!isMobile && (
                  <button
                    onClick={() => handleNavigation("left")}
                    className="absolute left-4 md:left-8 z-50 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                  >
                    <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                )}

                {/* Books Container with Fixed Width */}
                <div className="w-full max-w-full md:w-[1200px] mx-auto relative px-4 md:px-0">
                  <div className="flex items-center justify-center w-full h-full">
                    {isMobile
                      ? // Mobile view - only show current book with swipe support
                        filteredBooks.length > 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              key={filteredBooks[currentBookIndex].id}
                              ref={bookRef}
                              className="cursor-pointer"
                              drag={isMobile && !isAnimating ? "x" : false}
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0.1}
                              onDragEnd={handleDragEnd}
                              animate={controls}
                              style={{
                                width: "240px",
                                height: "auto",
                                zIndex: 10
                              }}
                              initial={{
                                x: 0,
                                opacity: 1
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass: 1
                              }}
                              onClick={() =>
                                setSelectedBook(filteredBooks[currentBookIndex])
                              }
                              whileHover={{
                                scale: 1.1,
                                y: -10
                              }}
                            >
                              <div className="w-full aspect-[3/4] shadow-2xl mx-auto">
                                <BookCover
                                  title={filteredBooks[currentBookIndex].title}
                                  author={filteredBooks[currentBookIndex].author}
                                  category={
                                    filteredBooks[currentBookIndex].category
                                  }
                                  coverImage={
                                    filteredBooks[currentBookIndex].coverImage
                                  }
                                  className="w-full h-full"
                                />
                              </div>
                            </motion.div>
                          </div>
                        )
                      : // Desktop view - show carousel with multiple books
                        filteredBooks.map((book, index) => {
                          const isCurrent = index === currentBookIndex;
                          const isNext =
                            index ===
                            (currentBookIndex + 1) % filteredBooks.length;
                          const isPrev =
                            index ===
                            (currentBookIndex - 1 + filteredBooks.length) %
                              filteredBooks.length;

                          if (!isCurrent && !isNext && !isPrev) return null;

                          const position = isCurrent ? 0 : isNext ? 1 : -1;
                          const x = position * 340;
                          const opacity = isCurrent
                            ? 1
                            : isNext || isPrev
                            ? 0.7
                            : 0.5;
                          const scale = isCurrent
                            ? 1.4
                            : isNext || isPrev
                            ? 0.9
                            : 0.8;

                          return (
                            <motion.div
                              key={book.id}
                              className="absolute cursor-pointer"
                              style={{
                                x,
                                opacity,
                                scale,
                                left: "50%",
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

                {/* Right Navigation Arrow - Only visible on desktop */}
                {!isMobile && (
                  <button
                    onClick={() => handleNavigation("right")}
                    className="absolute right-4 md:right-8 z-50 p-2 md:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                )}
              </div>
            </div>

            {/* Book Progress */}
            <div className="flex justify-center items-center gap-2 mt-4 md:mt-8 px-4 md:px-0">
              {filteredBooks.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                    index === currentBookIndex
                      ? "bg-white scale-125 shadow-lg"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>



            {/* Newsletter Signup */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-center">
                Stay Updated
              </h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif text-white mb-4 text-center">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/80 mb-6 text-center">
                  Receive regular updates on our latest research, insights, and
                  market analysis directly in your inbox.
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
            <DialogTitle className="text-2xl font-serif text-castelnau-green">
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
                <p className="text-xl text-gray-600 mb-4">
                  {selectedBook.author}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {selectedBook.category} • {selectedBook.publishDate}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedBook.description}
                </p>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CastelnauLibrary;
