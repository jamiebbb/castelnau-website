
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-castelnau-green">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-white text-sm">
              <span>Share price: <strong>0.93</strong></span>
              <span className="text-xs">Updated: 25/02/2025</span>
            </div>
            <div className="flex items-center space-x-1 text-white text-sm">
              <span>NAV price: <strong>1.02</strong></span>
              <span className="text-xs">Updated: 31/01/2025</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink to="/news" className="text-white hover:text-white/80 text-sm font-medium transition-colors">
              News
            </NavLink>
            <button className="header-button">
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <NavLink to="/" className="flex items-center">
              <img src="/logo.svg" alt="Castelnau Group" className="h-10" />
            </NavLink>
            
            <nav className="flex space-x-6">
              <NavLink to="/who-we-are" className="nav-link">
                Who We Are
              </NavLink>
              <NavLink to="/what-we-do" className="nav-link">
                What We Do
              </NavLink>
              <NavLink to="/explore-the-group" className="nav-link">
                Explore the Group
              </NavLink>
              <NavLink to="/investor-relations" className="nav-link">
                Investor Relations
              </NavLink>
              <NavLink to="/graduate-programme" className="nav-link">
                Graduate Programme
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
