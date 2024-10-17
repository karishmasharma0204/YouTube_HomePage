import React from "react";

const videos = [
  {
    id: 1,
    title: "Stunning Beach Sunset",
    thumbnail:
      "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "1.2M views",
    timestamp: "1 year ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2675515/2675515-sd_640_360_30fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40"
  },
  {
    id: 2,
    title: "Snowy Mountain Peaks",
    thumbnail:
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "800K views",
    timestamp: "2 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=40"
  },
  {
    id: 3,
    title: "City Lights at Night",
    thumbnail:
      "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "A Journey Through the Woods",
    thumbnail:
      "https://images.pexels.com/photos/464336/pexels-photo-464336.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Breathtaking Waterfall",
    thumbnail:
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/273740/pexels-photo-273740.jpeg?auto=compress&cs=tinysrgb&w=40"
  },
  {
    id: 6,
    title: "Breathtaking Waterfall",
    thumbnail:
      "https://images.pexels.com/photos/464336/pexels-photo-464336.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/464336/pexels-photo-464336.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    title: "A Journey Through the Woods",
    thumbnail:
      "https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1542495/pexels-photo-1542495.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    title: "City Lights at Night",
    thumbnail:
      "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600",
    views: "600K views",
    timestamp: "3 years ago",
    videoUrl:
      "https://videos.pexels.com/video-files/2934978/2934978-sd_640_360_24fps.mp4",
    channelImage:
      "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const VideoGrid = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            {/* Video Player */}
            <video
              controls
              className="w-full rounded-lg"
              poster={video.thumbnail}
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src={video.channelImage}
                alt={video.title}
              />
              <div className="ml-3">
                <h3 className="text-white font-medium leading-tight">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {video.views} · {video.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
