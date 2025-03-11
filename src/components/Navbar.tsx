
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-castelnau-darkgreen to-castelnau-green">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="mr-10">
              <img 
                alt="Castelnau Group" 
                className="h-16" 
                src="/lovable-uploads/d0c87d8a-b6c8-4b43-bc85-feec0bab9862.png"
                loading="eager" // Force eager loading
              />
            </NavLink>
            
            <div className="flex items-center space-x-8">
              <div className="text-white">
                <p className="flex items-center text-lg">
                  <span className="mr-2">Share price:</span> 
                  <strong>0.92</strong>
                </p>
                <p className="text-xs">Updated: 10/03/2025</p>
              </div>
              
              <div className="text-white">
                <p className="flex items-center text-lg">
                  <span className="mr-2">NAV price:</span> 
                  <strong>1.01</strong>
                </p>
                <p className="text-xs">Updated: 28/02/2025</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink to="/news" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              News
            </NavLink>
            <NavLink to="/castelnau-library" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              Castelnau Library
            </NavLink>
            <button className="bg-castelnau-lightgreen hover:bg-castelnau-lightgreen/90 text-white px-6 py-3 rounded-sm transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4">
          <nav className="flex py-5 space-x-10">
            <NavLink to="/who-we-are" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              Who We Are
            </NavLink>
            <NavLink to="/what-we-do" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              What We Do
            </NavLink>
            <NavLink to="/explore-the-group" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              Explore the Group
            </NavLink>
            <NavLink to="/investor-relations" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              Investor Relations
            </NavLink>
            <NavLink to="/graduate-programme" className="text-white hover:text-white/80 text-base font-medium transition-colors">
              Graduate Programme
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
