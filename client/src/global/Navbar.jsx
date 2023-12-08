// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Expense Tracker</Link>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/expenses" className="text-white hover:text-gray-200">Expenses</Link>
          {/* Add more links as needed */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-500 p-4">
            <Link to="/" className="block text-white hover:text-gray-200 mb-2">Home</Link>
            <Link to="/expenses" className="block text-white hover:text-gray-200 mb-2">Expenses</Link>
            {/* Add more links as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
