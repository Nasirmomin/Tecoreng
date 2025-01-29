import React, { useEffect, useState } from 'react';
import '../styles/OurDevelopmentProcess.css';
import BallEntry from '../../tecoreng.com-svg/ball entry.svg';
import Ball from '../../tecoreng.com-svg/Ball.svg';
import img from '../assets/kickOff.1c1198b2.webp';

const DevelopmentProcess = () => {
  const [isBallVisible, setIsBallVisible] = useState(false);

  const steps = [
    {
      title: "Research and Analysis",
      description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
      imageSrc: img,
      position: "left",
    },
    {
      title: "Design",
      description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
      imageSrc: img,
      position: "right",
    },
    {
      title: "Development",
      description: "Functional Implementation, Software Coding & Optimization",
      imageSrc: img,
      position: "left",
    },
    {
      title: "Testing",
      description: "Quality Assurance, Troubleshooting, & Testing",
      imageSrc: img,
      position: "right",
    },
    {
      title: "Deployment",
      description: "Launch, Beta Live, & Live",
      imageSrc: img,
      position: "left",
    },
    {
      title: "Evaluation",
      description: "Performance Evaluation, & Analytics Implementation",
      imageSrc: img,
      position: "right",
    },
    {
      title: "Maintenance",
      description: "Monitoring, Feedback, Analysis, & Complete Support",
      imageSrc: img,
      position: "left",
    },
  ];

  const handleScroll = () => {
    const ball = document.querySelector('.ball');
    if (ball) {
      const ballPosition = ball.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (ballPosition <= windowHeight) {
        setIsBallVisible(true);
      } else {
        setIsBallVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="development-container">
      <h1 className="development-heading">Our Development Process</h1>

      <div className="svg-container">
        <img src={BallEntry} alt="Ball Entry" className="ball-entry" />
        <img
          src={Ball}
          alt="Ball"
          className={`ball ${isBallVisible ? 'visible' : ''}`}
        />
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
    </div>
  );
};

export default DevelopmentProcess;
