import React, { useState } from 'react';
import img from '../logo2.png';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const SuccessStories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stories = [
    {
      title: "Betting Platform",
      image: img,
      video: video1,
      description: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more."
    },
    {
      title: "Health and Wellness",
      image: img,
      video: video2,
      description: "Excitement fills the air as we proudly unveil our Health and Wellness Platform-a pivotal portal toward maximizing your health journey."
    },
    {
      title: "E-Commerce",
      image: img,
      video: video3,
      description: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-slate-900">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Our Success Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative" style={{ height: '300px' }}>
              {hoveredIndex === index ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={story.video}
                />
              ) : (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-4 z-10">
              <h3 className="text-2xl font-semibold mb-2 text-white">
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