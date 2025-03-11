
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="mr-10">
              <img 
                alt="Castelnau Group" 
                className="h-16" 
                src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
                loading="eager"
                fetchPriority="high"
              />
            </NavLink>
            
            <div className="flex items-center space-x-8">
              <div className="text-white">
                <p className="flex items-center text-lg font-serif">
                  <span className="mr-2 text-castelnau-cream/90">Share price:</span> 
                  <strong className="font-serif">0.92</strong>
                </p>
                <p className="text-xs italic text-white/80">Updated: 10/03/2025</p>
              </div>
              
              <div className="text-white">
                <p className="flex items-center text-lg font-serif">
                  <span className="mr-2 text-castelnau-cream/90">NAV price:</span> 
                  <strong className="font-serif">1.01</strong>
                </p>
                <p className="text-xs italic text-white/80">Updated: 28/02/2025</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <NavLink to="/news" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              News
            </NavLink>
            <NavLink to="/castelnau-library" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              Castelnau Library
            </NavLink>
            <button className="bg-gradient-to-r from-castelnau-gold/90 to-castelnau-gold text-castelnau-darkgreen font-serif font-medium px-6 py-3 rounded-sm shadow-md hover:shadow-lg transition-all">
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4">
          <nav className="flex py-5 space-x-10">
            <NavLink to="/who-we-are" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              Who We Are
            </NavLink>
            <NavLink to="/what-we-do" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              What We Do
            </NavLink>
            <NavLink to="/explore-the-group" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              Explore the Group
            </NavLink>
            <NavLink to="/investor-relations" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              Investor Relations
            </NavLink>
            <NavLink to="/graduate-programme" className="text-white hover:text-castelnau-cream text-base font-medium transition-colors">
              Graduate Programme
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
