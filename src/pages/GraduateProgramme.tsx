
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const GraduateProgramme = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Graduate Programme</h1>
          <div className="h-1 bg-white w-36"></div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Launch Your Career with Castelnau</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our graduate programme offers exceptional candidates the opportunity to learn and grow within the world 
              of value investing and business development. We provide a structured environment for ambitious graduates 
              to develop the skills needed for a successful career in investment management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-castelnau-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-castelnau-green mb-2">Knowledge</h3>
                <p className="text-gray-700">
                  Learn from experienced investors and business leaders through structured training and mentorship.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-castelnau-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-castelnau-green mb-2">Experience</h3>
                <p className="text-gray-700">
                  Gain hands-on experience working on real investment cases and portfolio company projects.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-castelnau-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-castelnau-green mb-2">Growth</h3>
                <p className="text-gray-700">
                  Develop both professionally and personally with clear progression paths and regular feedback.
                </p>
              </div>
            </div>
            
            <div className="bg-castelnau-green text-white p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-serif font-bold mb-4">Who We're Looking For</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <span>Graduates with strong academic backgrounds in finance, economics, business, or related fields</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <span>Analytical thinkers with excellent problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <span>Individuals who demonstrate intellectual curiosity and a passion for investing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center mt-1 mr-3">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <span>Team players with strong communication skills</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Apply Now</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Applications for our 2025 graduate programme are now open. We review applications on a rolling basis, 
                so we encourage you to apply early.
              </p>
              <button className="px-8 py-3 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors font-medium text-lg">
                Start Your Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GraduateProgramme;
