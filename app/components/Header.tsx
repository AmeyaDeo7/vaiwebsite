'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Organization Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* V-shaped logo */}
              <div className="w-8 h-8 relative">
                <div className="absolute w-4 h-6 bg-blue-600 transform rotate-[-30deg] origin-top-right"></div>
                <div className="absolute w-4 h-6 bg-blue-600 transform rotate-[30deg] origin-top-left"></div>
              </div>
            </div>
            <div className="ml-3 text-xl font-bold text-gray-800">VAI</div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Resources
                <span className="ml-1">▼</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Documentation
                    </Link>
                    <Link href="/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Tutorials
                    </Link>
                    <Link href="/examples" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Examples
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link href="/about" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 