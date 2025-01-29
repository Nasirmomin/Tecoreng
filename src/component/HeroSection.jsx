import React from "react";
import img from '../assets/infinite.c057ea68.webp'; // Import the infinite image
import img2 from '../assets/ball.9fdf93ca.webp'; // Import the ball image
import '../styles/HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        {/* Left Content */}
        <div className="left-content">
          <h1 className="title">
            Transform your enterprise with digital innovation
          </h1>
          <p className="description">
            Your success as a market innovator reflects our strides as a unified
            partner. Committed to assisting you in attaining excellence through
            our solutions, we boast a team of adept professionals and dynamic
            facilitators. Our steadfast commitment to a collaborative strategy,
            coupled with agile methodologies, propels business expansion. Rely
            on our strategic insights and development processes, and we will
            fuel your concepts to manifest as groundbreaking disruptions.
          </p>
          <button className="hire-btn">
            HIRE NOW
          </button>
        </div>

        {/* Right Image with Animated Ball */}
        <div className="right-content">
          <img src={img} alt="Digital Innovation" className="main-image" />
          <svg width="0" height="0">
            <path id="infinityPath" d="M 100,50 C 0,0 0,100 100,50 C 200,0 200,100 100,50" />
          </svg>
          <img src={img2} alt="Animated Ball" className="animated-ball" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
