import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CardSlider = () => {
  const swiperRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "Juan S Ortiz Salazar",
      company: "Acme Corp",
      description: "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!"
    },
    {
      id: 2,
      title: "Tim Loenders",
      company: "BPOS LOENDERS GCV",
      description: "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money."
    },
    {
      id: 3,
      title: "Denis Cartin",
      company: "CTO, SoSFba",
      description: "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project."
    },
    {
      id: 4,
      title: "Kean Graham",
      company: "CEO, MonetizeMore",
      description: "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive."
    },
    {
      id: 5,
      title: "Chetan Patwardhan",
      company: "CEO, HiQuest Group of IT Companies",
      description: "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs."
    }
  ];

  return (
    <div className="w-full bg-[#0A192F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white pb-2 tracking-wide">
            Appreciation from Clients
          </h2>
        </div>
        <div className="h-[400px]">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="h-full"
          >
            {cardData.map((card) => (
              <SwiperSlide key={card.id} className="h-full">
                <div className="backdrop-blur-lg bg-opacity-10 bg-white rounded-3xl shadow-xl p-8 
                  h-full w-full transition-all duration-300
                  border border-gray-200 border-opacity-10
                  bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                      <h4 className="text-lg font-medium text-gray-300 mt-2">{card.company}</h4>
                    </div>
                    <p className="text-gray-200 text-base leading-relaxed mt-4 line-clamp-6">{card.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;