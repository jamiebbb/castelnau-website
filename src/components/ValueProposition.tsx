
import React, { useEffect, useRef } from 'react';

const ValueProposition = () => {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          if (entry.target === leftSection) {
            entry.target.classList.add('translate-x-0');
            entry.target.classList.remove('-translate-x-10');
          }
          if (entry.target === rightSection) {
            entry.target.classList.add('translate-x-0');
            entry.target.classList.remove('translate-x-10');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (leftSection) observer.observe(leftSection);
    if (rightSection) observer.observe(rightSection);
    
    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
          <div 
            ref={leftSectionRef}
            className="md:w-1/3 opacity-0 -translate-x-10 transition-all duration-700 ease-out"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green">
              Creating value <br />
              with permanence <br />
              and vision
            </h2>
          </div>
          
          <div 
            ref={rightSectionRef}
            className="md:w-2/3 opacity-0 translate-x-10 transition-all duration-700 ease-out delay-200"
          >
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              We aim to do this by acquiring businesses with a competitive advantage at
              attractive prices. Our structure helps us to clear away short-term pressures
              that inhibit value creation and nurture rational long-term capital allocation
              frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
