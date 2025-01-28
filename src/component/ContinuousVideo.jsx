import React, { useRef, useState } from 'react';
import videoSrc from '../assets/video4.mp4'; // Import your video file

const ContinuousVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#1e3b66] via-[#021839] to-[#07162c] flex justify-center items-center">
      <video
        ref={videoRef}
        className="w-[90%] h-[80%] pb-1 object-cover rounded-3xl shadow-lg"
        src={videoSrc}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button (Positioned at Right-Bottom Corner of the Video) */}
      <button
        onClick={togglePlay}
        className="absolute bottom-24 right-24 bg-[#005c99] text-white p-4 rounded-full shadow-lg hover:bg-[#003d66] transition duration-300 z-10"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14l9-7-9-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ContinuousVideo;
