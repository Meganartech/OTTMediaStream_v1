import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch video URL from the API
    fetch('http://localhost:8010/api/play/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Assuming the response is a direct link
      })
      .then(url => {
        setVideoUrl(url);
        console.log(videoUrl);
      })
      .catch(error => console.error('Error fetching video:', error));
  }, []); // Empty dependency array indicates this effect runs only once

  return (
    <div className="video-player">
        <video controls width="100%" height="auto">
          <source src="./src/img/Color Burst.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  );
};

export default VideoPlayer;
