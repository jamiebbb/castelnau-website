
import React, { useState } from 'react';
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
}

interface Podcast {
  id: number;
  title: string;
  host: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const CastelnauLibrary = () => {
  const [flippedBookId, setFlippedBookId] = useState<number | null>(null);
  
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
    }
  ];
  
  const videos: Video[] = [
    {
      id: 1,
      title: "Value Investing in a Changing World",
      thumbnail: "https://i.ytimg.com/vi/2MZQn5NBuGc/maxresdefault.jpg",
      duration: "45:30",
      category: "Value Investing"
    },
    {
      id: 2,
      title: "Building Sustainable Business Models",
      thumbnail: "https://i.ytimg.com/vi/NiAZ5S76ags/maxresdefault.jpg",
      duration: "38:15",
      category: "Business Strategy"
    },
    {
      id: 3,
      title: "Capital Allocation: The Art of Decision Making",
      thumbnail: "https://i.ytimg.com/vi/MrDmnN7FQXU/maxresdefault.jpg",
      duration: "52:40",
      category: "Capital Allocation"
    }
  ];
  
  const podcasts: Podcast[] = [
    {
      id: 1,
      title: "The Long View: Investment Horizons",
      host: "James Anderson",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-art-template-design-podcast-icon-modern-podcast-logo-template_625493-430.jpg",
      duration: "1:12:45",
      category: "Value Investing"
    },
    {
      id: 2,
      title: "Market Analysis & Trends",
      host: "Sarah Reynolds",
      thumbnail: "https://img.freepik.com/premium-vector/podcast-cover-design-template_474309-186.jpg",
      duration: "58:20",
      category: "Market Perspectives"
    }
  ];
  
  const toggleFlip = (id: number) => {
    if (flippedBookId === id) {
      setFlippedBookId(null);
    } else {
      setFlippedBookId(id);
    }
  };
  
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">The Castelnau Library</h1>
          <p className="text-xl max-w-3xl text-white/90 mb-8 font-serif">A curated collection of exceptional investment wisdom and business insights</p>
          <div className="h-1 bg-castelnau-gold w-36"></div>
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
      
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Investment Knowledge Hub</h2>
            <p className="text-lg text-gray-700">
              Welcome to the Castelnau Library, our curated collection of investment wisdom, business insights, 
              and thought leadership. Explore our resources to deepen your understanding of value investing principles 
              and long-term business building.
            </p>
          </div>
          
          {/* Book Collection */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-8">Book Collection</h3>
            <p className="text-gray-700 mb-8 max-w-4xl">Explore our carefully selected collection of investment classics and contemporary wisdom. Hover or tap on a book to learn more.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {books.map((book) => (
                <div 
                  key={book.id} 
                  className="perspective-1000 cursor-pointer h-80"
                  onClick={() => toggleFlip(book.id)}
                >
                  <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${flippedBookId === book.id ? 'rotate-y-180' : ''}`}>
                    {/* Front of book (cover) */}
                    <div className="absolute w-full h-full backface-hidden shadow-lg rounded-md overflow-hidden">
                      <img 
                        src={book.coverImg} 
                        alt={book.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Back of book (description) */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-castelnau-cream p-4 rounded-md shadow-lg flex flex-col">
                      <h4 className="text-lg font-bold text-castelnau-green mb-2">{book.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
                      <span className="inline-block px-2 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-3">
                        {book.category}
                      </span>
                      <p className="text-sm text-gray-700 flex-grow overflow-y-auto">{book.description}</p>
                      <button className="mt-2 text-sm text-castelnau-green hover:underline">Read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Videos & Podcasts */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-8">Media Collection</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Videos */}
              <div>
                <h4 className="text-xl font-serif font-bold text-castelnau-green mb-6 flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Video Insights
                </h4>
                
                <div className="space-y-6">
                  {videos.map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                      <div className="relative md:w-2/5">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer">
                          <div className="h-14 w-14 rounded-full bg-castelnau-green/80 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4 md:w-3/5">
                        <span className="inline-block px-2 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-2">
                          {video.category}
                        </span>
                        <h5 className="text-lg font-bold text-castelnau-green mb-2">{video.title}</h5>
                        <p className="text-sm text-gray-600">
                          A comprehensive exploration of investment methodologies and market dynamics in the context of changing global economic landscapes.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Podcasts */}
              <div>
                <h4 className="text-xl font-serif font-bold text-castelnau-green mb-6 flex items-center">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </span>
                  Audio Perspectives
                </h4>
                
                <div className="space-y-6">
                  {podcasts.map((podcast) => (
                    <div key={podcast.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={podcast.thumbnail} 
                          alt={podcast.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 md:w-2/3">
                        <span className="inline-block px-2 py-1 bg-castelnau-green/10 text-castelnau-green text-xs font-medium rounded-full mb-2">
                          {podcast.category}
                        </span>
                        <h5 className="text-lg font-bold text-castelnau-green mb-1">{podcast.title}</h5>
                        <p className="text-sm text-gray-600 mb-3">Hosted by {podcast.host}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            <button className="p-2 rounded-full bg-castelnau-green text-white hover:bg-castelnau-green/90 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </button>
                            <button className="text-sm text-castelnau-green hover:underline">
                              Subscribe
                            </button>
                          </div>
                          <span className="text-xs text-gray-500">{podcast.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-castelnau-green/5 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-castelnau-green mb-3">Subscribe to Our Podcast</h5>
                  <p className="text-sm text-gray-700 mb-4">
                    Never miss an episode. Subscribe to receive updates when new content is available.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-castelnau-green/50"
                    />
                    <button className="px-6 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-green/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* More resources section */}
          <div className="col-span-1">
            <div className="bg-castelnau-cream p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-castelnau-green mb-4">Stay Informed</h4>
              <p className="mb-4 text-gray-700">
                Receive our latest insights and investment perspectives delivered directly to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded bg-white border border-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-castelnau-green/50"
                />
                <button className="w-full bg-gradient-to-r from-castelnau-darkgreen to-castelnau-green text-white font-medium py-2 rounded hover:shadow-md transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CastelnauLibrary;
