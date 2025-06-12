import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetMoreCustomers = () => {
    window.open('https://calendly.com/solarsmartleads/new-meeting', '_blank');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-solar-emerald">SolarSmartLeads</h1>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#services" className="text-solar-darkGray hover:text-solar-emerald px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-solar-darkGray hover:text-solar-emerald px-3 py-2 text-sm font-medium transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-solar-darkGray hover:text-solar-emerald px-3 py-2 text-sm font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-solar-darkGray hover:text-solar-emerald px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
            <Button 
              className="ml-4 bg-solar-emerald hover:bg-solar-green text-white"
              onClick={handleGetMoreCustomers}
            >
              Get More Customers
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-solar-darkGray hover:text-solar-emerald hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-solar-emerald"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#services" className="text-solar-darkGray hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Services
          </a>
          <a href="#benefits" className="text-solar-darkGray hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Benefits
          </a>
          <a href="#testimonials" className="text-solar-darkGray hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Testimonials
          </a>
          <a href="#contact" className="text-solar-darkGray hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>
            Contact
          </a>
          <div className="mt-4 px-3">
            <Button 
              className="w-full bg-solar-emerald hover:bg-solar-green text-white"
              onClick={handleGetMoreCustomers}
            >
              Get More Customers
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
