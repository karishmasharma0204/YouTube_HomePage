import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="flex">
        <Sidebar className="hidden sm:block" />
        <main className="main-content flex-grow bg-black ">
          <div className="ffilter-bar p-5  flex-wrap justify-center sm:block hidden">
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md">
              All
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              React
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              Live
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              Music
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              JavaScript
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              CSS
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              Html
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              ReactJS
            </button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-md ml-2">
              Bootstrap
            </button>
          </div>
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
