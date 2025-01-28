import React from 'react';
import '../styles/EngagementModels.css';  // Importing the custom styles

const EngagementModels = () => {
  const cardData = [
    {
      title: 'Hire Full-time Developer',
      description:
        "Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals.",
    },
    {
      title: 'Hire Part-time Developer',
      description:
        "Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire.",
    },
    {
      title: 'Professional Services',
      description:
        "Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale.",
    },
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h2>Our Flexible Engagement Models</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#01132E] text-white shadow-md rounded-2xl border-1 border-white overflow-hidden group min-h-[396px]"
          >
            {/* Pseudo-element for background fill effect */}
            <div className="absolute inset-0 bg-[#81B3FF] transition-all duration-700 ease-in-out h-0 group-hover:h-full group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out"></div>

            {/* Title with sky blue gradient background */}
            <h3
              className="text-xl font-semibold mb-2 pt-4 p-2 text-center rounded-xl min-h-[100px] text-white rounded-t-2xl relative z-10 group-hover:bg-[linear-gradient(rgba(135, 206, 235, 0.58) 0%, rgba(135, 206, 235, 0) 100%), linear-gradient(91.17deg, rgb(135, 206, 235) -93.64%, rgb(176, 224, 230) 98.85%)] group-hover:text-white transition-all duration-500"
              style={{
                background:
                  'linear-gradient(rgba(135, 206, 235, 0.58) 0%, rgba(135, 206, 235, 0) 100%), linear-gradient(91.17deg, rgb(135, 206, 235) -93.64%, rgb(176, 224, 230) 98.85%)', // Sky blue gradient
              }}
            >
              {card.title}
            </h3>

            {/* Content */}
            <p className="p-4 relative z-10 group-hover:bg-[linear-gradient(rgba(135, 206, 235, 0.58) 0%, rgba(135, 206, 235, 0) 100%), linear-gradient(91.17deg, rgb(135, 206, 235) -93.64%, rgb(176, 224, 230) 98.85%)] group-hover:text-white transition-all duration-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementModels;
