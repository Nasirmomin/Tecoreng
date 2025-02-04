import { useEffect, useState } from 'react';
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import ane from '../assets/ane.png';
import betting from '../assets/betting.png';
import helthe from '../assets/helthe.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const SuccessStories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stories = [
    {
      title: "Betting Platform",
      image: betting,
      video: video1,
      description: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more."
    },
    {
      title: "Health and Wellness",
      image: helthe,
      video: video2,
      description: "Excitement fills the air as we proudly unveil our Health and Wellness Platform-a pivotal portal toward maximizing your health journey."
    },
    {
      title: "E-Commerce",
      image: ane,
      video: video3,
      description: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship."
    }
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .video-react .video-react-control-bar {
        display: none;
      }
      .video-react .video-react-big-play-button {
        display: none;
      }
      .video-react .video-react-loading-spinner {
        display: none;
      }
      .video-react video {
        object-fit: cover;
      }
      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 2rem;
        font-weight: bold;
      }
      @media (max-width: 768px) {
        .story-card {
          margin-left: -10px;
          width: calc(100% + 5%) !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1
        className="text-2xl ml-1 md:text-6xl md:-ml-6 font-extrabold text-left mb-10 text-gray-100 tracking-wide"
        style={{
          textShadow:
            "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
        }}
      >
        Our Success Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-card bg-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 relative"
            style={{ width: 'calc(100% + 5%)' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-80 w-full overflow-hidden rounded-xl">
              {hoveredIndex === index ? (
                <div className="absolute inset-0 z-0">
                  <Player
                    playsInline
                    muted
                    autoPlay
                    src={story.video}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {index === 2 ? (
                    <div className="relative w-full h-full">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover rounded-xl opacity-50"
                      />
                      <div className="image-overlay">An E-commerce Store</div>
                    </div>
                  ) : (
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="p-8 z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {story.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;