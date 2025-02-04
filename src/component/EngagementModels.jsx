import React from 'react';

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
    <div className="p-0 sm:p-8 bg-[#01132E] text-white lg:mx-16">
      <div className="text-left mb-8 px-2.5 sm:px-0">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-left mb-6 sm:mb-8 text-gray-100 tracking-wide px-2.5 sm:px-0"
          style={{
            textShadow:
              "rgb(239, 237, 227) -1px -1px 1px, rgb(1, 19, 46) 0px 1px 0px, rgb(1, 19, 46) 0px 2px 0px, rgb(1, 19, 46) 0px 3px 0px, rgb(1, 19, 46) 0px 4px 0px, rgb(1, 19, 46) 0px 5px 0px, rgb(77, 89, 108) 0px 6px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 0px 0px, rgba(0, 0, 0, 0.5) 0px 0px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px",
          }}
        >
          <span className="sm:hidden">
            Our Flexible Engagement<br />
            Models
          </span>
          <span className="hidden sm:inline">
            Our Flexible Engagement Models
          </span>
        </h1>

        <p className="text-sm sm:text-sm md:text-lg lg:text-xl text-gray-300 px-2.5 sm:px-0">
          Our team is your partner for the next big digital leap. Our customized and highly flexible engagement models are designed to meet business objectives. All of our service engagements are focused on customer satisfaction, and we ensure that clear communication is maintained throughout.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 sm:gap-6 px-2.5 sm:px-0">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#01132E] text-white shadow-md rounded-2xl border-1 border-white overflow-hidden group min-h-[320px] sm:min-h-[396px]"
          >
            <div
              className="absolute inset-0 transition-all duration-700 ease-in-out h-0 group-hover:h-full"
              style={{
                background: 'linear-gradient(rgba(255, 255, 255, 0.58) 0%, rgba(1, 19, 46, 0) 100%), linear-gradient(91.17deg, rgb(255, 255, 255) -93.64%, rgb(129, 179, 255) 98.85%)',
              }}
            ></div>

            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 pt-4 p-2 text-center rounded-xl min-h-[80px] sm:min-h-[80px] text-black rounded-t-2xl relative z-10 group-hover:bg-[linear-gradient(rgba(255, 255, 255, 0.58) 0%, rgba(1, 19, 46, 0) 100%), linear-gradient(91.17deg, rgb(255, 255, 255) -93.64%, rgb(129, 179, 255) 98.85%)] transition-all duration-500"
              style={{
                background:
                  'linear-gradient(rgba(255, 255, 255, 0.58) 0%, rgba(1, 19, 46, 0) 100%), linear-gradient(91.17deg, rgb(255, 255, 255) -93.64%, rgb(129, 179, 255) 98.85%)',
              }}
            >
              {card.title}
            </h3>

            <p className="p-4 relative z-10 group-hover:text-black text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementModels;
