// components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar h-screen w-60 bg-black text-white p-4 space-y-4 overflow-y-auto">
      {/* Home Section */}
      <div className="space-y-2">
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>🏠</span>
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>🎬</span>
          <span>Shorts</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>📦</span>
          <span>Subscriptions</span>
        </a>
      </div>

      <hr className="border-gray-600" />

      {/* You Section */}
      <div className="space-y-2">
        <h3 className="text-gray-400 uppercase text-xs tracking-wide">You</h3>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>👤</span>
          <span>Your channel</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>⏳</span>
          <span>History</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>📃</span>
          <span>Playlists</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>🎥</span>
          <span>Your videos</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>📚</span>
          <span>Your courses</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>🕒</span>
          <span>Watch later</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <span>👍</span>
          <span>Liked videos</span>
        </a>
      </div>

      <hr className="border-gray-600" />

      {/* Subscriptions Section */}
      <div className="space-y-2">
        <h3 className="text-gray-400 uppercase text-xs tracking-wide">
          Subscriptions
        </h3>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <img
            src="https://via.placeholder.com/24"
            alt="Rajasthan Patrika"
            className="rounded-full"
          />
          <span>Rajasthan Patrika</span>
          <span className="ml-auto text-red-600">●</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <img
            src="https://via.placeholder.com/24"
            alt="zoom"
            className="rounded-full"
          />
          <span>zoom</span>
          <span className="ml-auto text-red-600">●</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <img
            src="https://via.placeholder.com/24"
            alt="JioCinema Kids"
            className="rounded-full"
          />
          <span>JioCinema Kids</span>
          <span className="ml-auto text-red-600">●</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700"
        >
          <img
            src="https://via.placeholder.com/24"
            alt="JioCinema Kids"
            className="rounded-full"
          />
          <span>Code Karo</span>
          <span className="ml-auto text-red-600">●</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
