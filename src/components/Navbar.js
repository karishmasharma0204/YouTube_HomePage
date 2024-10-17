import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <nav className="navbar bg-black text-white p-2 flex items-center justify-between">
      {/* Left Side: Hamburger and YouTube Logo */}
      <div className="flex items-center space-x-4">
        {/* Hamburger menu for mobile view */}
        <button
          className="hamburger text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="w-20"
          />
          <span className="text-sm font-light">IN</span>
        </div>
      </div>

      {/* Center: Search bar */}
      <div
        className={`search-bar flex items-center bg-gray-800 rounded-full w-full md:w-1/2 ${
          searchVisible ? "flex" : "hidden md:flex"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 p-2 pl-4 w-full rounded-l-full text-white outline-none"
        />
        <button className="p-2 bg-gray-700 rounded-r-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 16l6-6m0 0l-6-6m6 6H4"
            />
          </svg>
        </button>
      </div>

      {/* Right Side: Search icon for mobile view */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setSearchVisible(!searchVisible)}>
          <img src="/assets/search.png" alt="search" className="h-6 w-6" />
        </button>
      </div>

      {/* Right Side: Icons and Profile for larger screens */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="notifications flex items-center space-x-2">
          <button className="bg-gray-800 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16M4 22h16"
              />
            </svg>
          </button>
          <div className="relative">
            <button className="bg-gray-800 p-2 rounded-full">
              <img
                src="/assets/bellIcon.png"
                alt="bellIcon"
                className="h-6 w-6 text-white"
              />
            </button>
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs p-1">
              9+
            </span>
          </div>
        </div>
        <button className="profile bg-pink-600 p-2 h-10 w-10 rounded-full">
          K
        </button>
      </div>

      {/* Mobile Menu: Show Sidebar when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex ">
          <Sidebar className="hidden sm:block" />
          <div className="flex-grow" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
