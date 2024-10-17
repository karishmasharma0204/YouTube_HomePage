import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = "AIzaSyAWvA-jKyqsrG3c5JUcC6IRKg5Z4_z_kns"; // Your API key
      try {
        const searchResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: 8,
              q: "programming",
              type: "video",
              key: API_KEY
            }
          }
        );

        // Extract video IDs
        const videoIds = searchResponse.data.items
          .map((item) => item.id.videoId)
          .join(",");

        // Get details for the videos
        const videoDetailsResponse = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet,statistics",
              id: videoIds,
              key: API_KEY
            }
          }
        );

        // Format the video data
        const videoData = videoDetailsResponse.data.items.map((item) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          channel: item.snippet.channelTitle,
          channelThumbnail: item.snippet.thumbnails.default.url,
          views: item.statistics.viewCount,
          timestamp: item.snippet.publishedAt
        }));

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching videos from YouTube API", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img
              className="w-full rounded-lg"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="flex mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src={video.channelThumbnail}
                alt={video.channel}
              />
              <div className="ml-3">
                <h3 className="text-white font-medium leading-tight">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm">{video.channel}</p>
                <p className="text-gray-400 text-sm">
                  {video.views} views ·{" "}
                  {new Date(video.timestamp).toLocaleDateString()}{" "}
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
