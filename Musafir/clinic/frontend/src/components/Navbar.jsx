import React from 'react';
import { Search, Mic, ChevronDown, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="nav-outer bg-gray-900 text-white m-4 rounded-3xl h-16 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo/Brand */}
        <div className="font-bold text-lg mx-4">
          EPICARE
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-1 bg-gray-700 rounded-full px-8 py-2 mx-4">
          <button className="p-1 rounded-full hover:bg-zinc-700">
            <Mic className="w-5 h-5" />
          </button>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Voice Search"
            className="bg-transparent border-none outline-none w-full mx-4"
          />
          
          {/* Search Icon */}
          <button className="p-1 rounded-full hover:bg-zinc-700 ml-2">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2 mx-4">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          <span className="text-sm">Sarah Ruth</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;