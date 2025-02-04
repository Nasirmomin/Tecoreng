import React, { useEffect, useState, useRef } from 'react';
import '../styles/OurDevelopmentProcess.css';
import BallEntry from '../../tecoreng.com-svg/ball-entry.svg';
import Ball from '../../tecoreng.com-svg/Ball.svg';
import img from '../assets/betting.png';
import Ballexit from '../assets/ballexit.webp';

const DevelopmentProcess = () => {
  const [isBallVisible, setIsBallVisible] = useState(false);
  const [ballStyle, setBallStyle] = useState({
    transform: 'translate3d(27.622px, 0.98716px, 0px) rotate(2.37289deg)',
    animation: 'fall 4s ease-out 1, roll 10s linear infinite, bounce 2s ease-in-out infinite',
  });
  
  const containerRef = useRef(null);

  const steps = [
    { title: "Research and Analysis", description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering", imageSrc: img, position: "left" },
    { title: "Design", description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping", imageSrc: img, position: "right" },
    { title: "Development", description: "Functional Implementation, Software Coding & Optimization", imageSrc: img, position: "left" },
    { title: "Testing", description: "Quality Assurance, Troubleshooting, & Testing", imageSrc: img, position: "right" },
    { title: "Deployment", description: "Launch, Beta Live, & Live", imageSrc: img, position: "left" },
    { title: "Evaluation", description: "Performance Evaluation, & Analytics Implementation", imageSrc: img, position: "right" },
    { title: "Maintenance", description: "Monitoring, Feedback, Analysis, & Complete Support", imageSrc: img, position: "left" },
  ];

  const handleScroll = () => {
    const ball = document.querySelector('.ball');
    if (ball) {
      const ballPosition = ball.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsBallVisible(ballPosition <= windowHeight);
    }

    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerHeight = containerRect.height;
    const viewportHeight = window.innerHeight;

    let progress = (viewportHeight - containerTop) / (containerHeight + viewportHeight);
    progress = Math.max(0, Math.min(1, progress));

    const path = [
      { x: 30, y: 70 },      
      { x: 1100, y: 400 },     
      { x: -10, y: 700 },      
      { x: 1100, y: 900 },     
      { x: -10, y: 1280 },     
      { x: 1100, y: 1550 },    
      { x: 50, y: 1800 },     
      { x: 850, y: 2000 },    
      { x: 890, y: 2130 }       
    ];

    const totalSegments = path.length - 1;
    const currentSegment = Math.min(Math.floor(progress * totalSegments), totalSegments - 1);
    const segmentProgress = (progress * totalSegments) % 1;

    const start = path[currentSegment];
    const end = path[currentSegment + 1];

    const x = start.x + (end.x - start.x) * segmentProgress;
    const y = start.y + (end.y - start.y) * segmentProgress;

    const rotation = 2.37289 + (Math.sin(progress * Math.PI * 2) * 5);

    setBallStyle({
      transform: `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg)`,
      transition: 'transform 1s ease-out',
      animation: 'fall 4s ease-out 1, roll 10s linear infinite, bounce 2s ease-in-out infinite',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="development-container" ref={containerRef}>
      <h1 className="development-heading text-6xl">Our Development Process</h1>

      <div className="ball-container">
        <img src={BallEntry} alt="Ball Entry" className="ball-entry" />
        <img src={Ball} alt="Ball" className={`rolling-ball ${isBallVisible ? 'visible' : ''}`} style={ballStyle} />
      </div>

      {steps.map((step, index) => (
        <div key={index} className={`development-step ${step.position}`}>
          <div className="development-box">
            {step.position === 'left' ? (
              <>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="ballexit-container ml-[50rem] mt-[-10rem]">
        <img src={Ballexit} alt="Ball Exit" className="ballexit-image" />
      </div>
    </div>
  );
};

export default DevelopmentProcess;
 