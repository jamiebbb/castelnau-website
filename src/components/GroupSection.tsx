
import React, { useEffect, useRef } from 'react';

const GroupSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const logoContainer = logoContainerRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          if (entry.target === title) {
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('-translate-y-10');
          }
          if (entry.target === subtitle) {
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('-translate-y-8');
          }
          if (entry.target === logoContainer) {
            entry.target.classList.add('translate-y-0');
            entry.target.classList.remove('translate-y-10');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (title) observer.observe(title);
    if (subtitle) observer.observe(subtitle);
    if (logoContainer) observer.observe(logoContainer);
    
    return () => {
      if (title) observer.unobserve(title);
      if (subtitle) observer.unobserve(subtitle);
      if (logoContainer) observer.unobserve(logoContainer);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-6 opacity-0 -translate-y-10 transition-all duration-700 ease-out"
          >
            The Group
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-lg text-gray-800 mb-12 opacity-0 -translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            Take a look through our family of current holdings.
          </p>
          
          <div 
            ref={logoContainerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-700 ease-out delay-400"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-48">
              <div className="text-center">
                <div className="font-serif text-xl font-bold text-castelnau-green">Stanley Gibbons</div>
                <div className="text-sm text-gray-500 mt-2">Stamp Collecting & Philately</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-48">
              <div className="text-center">
                <div className="font-serif text-xl font-bold text-castelnau-green">Hornby</div>
                <div className="text-sm text-gray-500 mt-2">Model Railways & Collectibles</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center h-48">
              <div className="text-center">
                <div className="font-serif text-xl font-bold text-castelnau-green">More Coming Soon</div>
                <div className="text-sm text-gray-500 mt-2">Future Acquisitions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
