import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="detail-movie">
      <div className="movie-background">
        <img
          src="https://wallpapers.com/images/featured-full/avengers-vm16xv4a69smdauy.jpg"
          alt="Movie Background"
        />
        <div className="play-icon" onClick={playVideo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
            <path fill="#e50914" d="M9.5 18V6l9 6-9 6z" />
          </svg>
        </div>
        {showVideo && (
          <div className="video-overlay">
            <div className="video-wrapper">
              <div className="video-responsive">
                <iframe
                  title="Movie Trailer"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/eOrNdBpGMv8"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <button className="close-button" onClick={closeVideo}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
