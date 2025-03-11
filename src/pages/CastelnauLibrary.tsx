
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';

interface Book {
  id: number;
  title: string;
  author: string;
  coverImg: string;
  category: string;
  description: string;
}

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}

interface Podcast {
  id: number;
  title: string;
  host: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}

const CastelnauLibrary = () => {
  const [flippedBookId, setFlippedBookId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<'books' | 'videos' | 'podcasts'>('books');
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const books: Book[] = [
    {
      id: 1,
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      coverImg: "https://m.media-amazon.com/images/I/91yj3mbz4JL._AC_UF1000,1000_QL80_.jpg",
      category: "Value Investing",
      description: "The classic text on value investing. Graham's philosophy of 'value investing' has made this book the investment bible for generations of investors."
    },
    {
      id: 2,
      title: "Common Stocks and Uncommon Profits",
      author: "Philip Fisher",
      coverImg: "https://m.media-amazon.com/images/I/81ofrCfBYsL._AC_UF1000,1000_QL80_.jpg",
      category: "Business Analysis",
      description: "Fisher's investment philosophies, introduced almost forty years ago, are not only studied and applied by today's finance professionals, but are also regarded by many as gospel."
    },
    {
      id: 3,
      title: "Margin of Safety",
      author: "Seth Klarman",
      coverImg: "https://m.media-amazon.com/images/I/41RPWCRbiPL._AC_UY436_QL65_.jpg",
      category: "Value Investing",
      description: "A rare book on risk-averse value investing strategies for the average investor. Klarman explains his approach to finding values in any type of market."
    },
    {
      id: 4,
      title: "The Most Important Thing",
      author: "Howard Marks",
      coverImg: "https://m.media-amazon.com/images/I/71EiEWiZ8QL._AC_UF1000,1000_QL80_.jpg",
      category: "Market Perspectives",
      description: "Howard Marks, the chairman and cofounder of Oaktree Capital Management, is renowned for his insightful assessments of market opportunity and risk."
    },
    {
      id: 5,
      title: "Capital Returns",
      author: "Edward Chancellor",
      coverImg: "https://m.media-amazon.com/images/I/71MYz7NzdWL._AC_UF1000,1000_QL80_.jpg",
      category: "Capital Allocation",
      description: "This book focuses on the practical implementation of the capital cycle approach to investment. Edited by Edward Chancellor, the book collects the best insights from Marathon Asset Management."
    },
    {
      id: 6,
      title: "Poor Charlie's Almanack",
      author: "Charles T. Munger",
      coverImg: "https://m.media-amazon.com/images/I/61YvqYX0-yL._SY466_.jpg",
      category: "Business Analysis",
      description: "Charlie Munger's insights on decision-making, psychology, and mental models that have guided his investment approaches."
    },
    {
      id: 7,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      coverImg: "https://m.media-amazon.com/images/I/71J3+5lrCKL._AC_UF1000,1000_QL80_.jpg",
      category: "Behavioral Finance",
      description: "Timeless lessons on wealth, greed, and happiness. Doing well with money isn't necessarily about what you know. It's about how you behave."
    },
    {
      id: 8,
      title: "Security Analysis",
      author: "Benjamin Graham & David Dodd",
      coverImg: "https://m.media-amazon.com/images/I/91jKSQTG6GL._AC_UF1000,1000_QL80_.jpg",
      category: "Value Investing",
      description: "The classic text that first articulated value investing. A must-read for serious investors seeking long-term success."
    }
  ];
  
  const videos: Video[] = [
    {
      id: 1,
      title: "Value Investing in a Changing World",
      thumbnail: "https://i.ytimg.com/vi/2MZQn5NBuGc/maxresdefault.jpg",
      duration: "45:30",
      category: "Value Investing",
      description: "An in-depth exploration of how value investing principles adapt to today's rapidly evolving markets while maintaining core fundamentals."
    },
    {
      id: 2,
      title: "Building Sustainable Business Models",
      thumbnail: "https://i.ytimg.com/vi/NiAZ5S76ags/maxresdefault.jpg",
      duration: "38:15",
      category: "Business Strategy",
      description: "This presentation details the key components of creating business models that thrive through market cycles and technological disruption."
    },
    {
      id: 3,
      title: "Capital Allocation: The Art of Decision Making",
      thumbnail: "https://i.ytimg.com/vi/MrDmnN7FQXU/maxresdefault.jpg",
      duration: "52:40",
      category: "Capital Allocation",
      description: "Learn the strategic frameworks used by successful capital allocators to make decisions that compound value over decades."
    },
    {
      id: 4,
      title: "The Future of Investing: AI and Technological Disruption",
      thumbnail: "https://i.ytimg.com/vi/7sRjonStJv0/maxresdefault.jpg",
      duration: "41:25",
      category: "Market Perspectives",
      description: "How artificial intelligence and emerging technologies are reshaping investment strategies and market dynamics."
    }
  ];
  
  const podcasts: Podcast[] = [
    {
      id: 1,
      title: "The Long View: Investment Horizons",
      host: "James Anderson",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-template-design-podcast-icon-modern-podcast-logo-template_625493-430.jpg",
      duration: "1:12:45",
      category: "Value Investing",
      description: "A deep dive into the advantages of long-term investment strategies, featuring insights from renowned market veterans."
    },
    {
      id: 2,
      title: "Market Analysis & Trends",
      host: "Sarah Reynolds",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-design-template_474309-186.jpg",
      duration: "58:20",
      category: "Market Perspectives",
      description: "Weekly analysis of market movements and emerging trends that matter for long-term investors."
    },
    {
      id: 3,
      title: "The Capital Cycle",
      host: "Edward Chancellor",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-template_93835-212.jpg",
      duration: "1:05:30",
      category: "Capital Allocation",
      description: "Understanding how capital flows influence economic cycles and create investment opportunities."
    },
    {
      id: 4,
      title: "Behavioral Finance: The Psychology of Investing",
      host: "Daniel Kahneman & Richard Thaler",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-design-template_688905-24.jpg",
      duration: "1:24:15",
      category: "Behavioral Finance",
      description: "Two Nobel laureates discuss how cognitive biases impact investment decisions and market dynamics."
    }
  ];
  
  const categories = ['All', 'Value Investing', 'Business Analysis', 'Market Perspectives', 'Capital Allocation', 'Behavioral Finance'];
  
  const toggleFlip = (id: number) => {
    if (flippedBookId === id) {
      setFlippedBookId(null);
    } else {
      setFlippedBookId(id);
    }
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
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-castelnau-green text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Navigation Tabs */}
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
          </div>
          
          {/* Books Section */}
          {activeSection === 'books' && (
            <div className="mb-20 animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {filteredBooks.map((book) => (
                  <div 
                    key={book.id} 
                    className="perspective-1000 cursor-pointer group h-96"
                    onClick={() => toggleFlip(book.id)}
                    onMouseEnter={() => toggleFlip(book.id)}
                    onMouseLeave={() => setFlippedBookId(null)}
                  >
                    <div className={`relative w-full h-full transition-all duration-500 transform-style-3d hover:shadow-xl ${flippedBookId === book.id ? 'rotate-y-180' : 'group-hover:animate-book-bounce'}`}>
                      {/* Front of book (cover) */}
                      <div className="absolute w-full h-full backface-hidden shadow-lg rounded-md overflow-hidden">
                        <img 
                          src={book.coverImg} 
                          alt={book.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h4 className="text-white font-bold">{book.title}</h4>
                          <p className="text-white/80 text-sm">{book.author}</p>
                        </div>
                      </div>
                      
                      {/* Back of book (description) */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-b from-castelnau-cream to-white p-6 rounded-md shadow-lg flex flex-col">
                        <h4 className="text-xl font-bold text-castelnau-green mb-2">{book.title}</h4>
                        <p className="text-gray-600 mb-2">by {book.author}</p>
                        <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-4">
                          {book.category}
                        </span>
                        <p className="text-gray-700 flex-grow overflow-y-auto">{book.description}</p>
                        <button className="mt-4 text-sm bg-castelnau-green text-white py-2 px-4 rounded hover:bg-castelnau-green/90 transition-colors">
                          Read Summary
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredBooks.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No books found in this category.</p>
                </div>
              )}
            </div>
          )}
          
          {/* Videos Section */}
          {activeSection === 'videos' && (
            <div className="mb-20 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {filteredVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow">
                    <div className="relative md:w-2/5 overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer">
                        <div className="h-16 w-16 rounded-full bg-castelnau-green/80 flex items-center justify-center transform transition-transform hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 text-xs rounded-full">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6 md:w-3/5">
                      <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-3">
                        {video.category}
                      </span>
                      <h5 className="text-xl font-bold text-castelnau-green mb-3">{video.title}</h5>
                      <p className="text-gray-600 mb-4">
                        {video.description}
                      </p>
                      <div className="flex space-x-3">
                        <button className="text-castelnau-green hover:underline font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                          Save
                        </button>
                        <button className="text-castelnau-green hover:underline font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredVideos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No videos found in this category.</p>
                </div>
              )}
            </div>
          )}
          
          {/* Podcasts Section */}
          {activeSection === 'podcasts' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {filteredPodcasts.map((podcast) => (
                  <div key={podcast.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={podcast.thumbnail} 
                        alt={podcast.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <span className="inline-block px-3 py-1 bg-castelnau-gold/80 text-white text-xs font-medium rounded-full mb-2">
                          {podcast.category}
                        </span>
                        <h5 className="text-xl font-bold text-white">{podcast.title}</h5>
                        <p className="text-white/80">Hosted by {podcast.host}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{podcast.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          <button className="p-3 rounded-full bg-castelnau-green text-white hover:bg-castelnau-green/90 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button className="p-3 rounded-full bg-castelnau-gold/80 text-white hover:bg-castelnau-gold transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                        </div>
                        <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">{podcast.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPodcasts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No podcasts found in this category.</p>
                </div>
              )}
              
              <div className="mt-16 bg-gradient-to-r from-castelnau-darkgreen/5 to-castelnau-green/5 p-8 rounded-lg border border-castelnau-green/10">
                <h5 className="text-2xl font-serif font-bold text-castelnau-green mb-4">Subscribe to Our Investment Insights</h5>
                <p className="text-gray-700 mb-6">
                  Receive our latest podcasts, articles, and investment perspectives delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-castelnau-green/50"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-castelnau-darkgreen to-castelnau-green text-white rounded font-medium hover:shadow-md transition-all">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to receive marketing communications from Castelnau Group. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default CastelnauLibrary;
