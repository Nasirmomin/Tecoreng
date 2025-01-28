import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CardSlider = () => {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

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
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white inline-block pb-2">
          Appreciation from Clients
        </h2>
      </div>
      <Swiper
        ref={swiperRef} // Attach the swiperRef to Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
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
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-gradient-to-b from-gray-100 to-blue-900 rounded-2xl shadow-xl p-6 h-[400px] flex flex-col justify-between transform transition-transform duration-300">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                <h4 className="text-lg font-medium text-gray-600">{card.company}</h4>
                <p className="text-gray-700 text-sm leading-relaxed overflow-hidden line-clamp-6">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
