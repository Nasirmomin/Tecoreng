import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import img from '../assets/ane.png';
import img1 from '../assets/ane.png';
import img2 from '../assets/ane.png';
import img3 from '../assets/ane.png';
import img4 from '../assets/ane.png';

const Tecoreng = () => {
  const cardData = [
    {
      id: 1,
      title: "Top IOS App Development Tools for Efficient Mobile App Creation",
      date: "03-11-2023 - Tecoreng",
      description: "As technology continues to evolve at a rapid pace, the demand for mobile applications has skyrocketed. Mobile apps are now an integral part of our daily lives, providing us with convenient access to information, entertainment, and services...",
      image: img,
    },
    {
      id: 2,
      title: "What Is IaaS? Infrastructure as a Service",
      date: "02-03-2023 - Paresh Solanki",
      description: "What Is IaaS? IaaS stands for Infrastructure as a Service. That is a part of cloud computing services. It offers the necessary computers, storage, and networking resources on demand according to a pay-as-you-go system...",
      image: img1,
    },
    {
      id: 3,
      title: "Mobile App Development Process: From Idea to Launch",
      date: "09-06-2023 - Paresh Solanki",
      description: "Mobile app development has become an integral part of the digital landscape, transforming the way we interact with technology and enhancing our daily lives. From social networking and entertainment to productivity and e-commerce...",
      image: img2,
    },
    {
      id: 4,
      title: "Artificial Intelligence: How AI is Transforming Every Industry",
      date: "20-07-2023 - Paresh Solanki",
      description: "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been designed to behave and think like humans. The phrase may also be used to refer to any computer that demonstrates characteristics of the human intellect...",
      image: img3,
    },
    {
      id: 5,
      title: "Artificial Intelligence: How AI is Transforming Every Industry",
      date: "20-07-2023 - Paresh Solanki",
      description: "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been designed to behave and think like humans. The phrase may also be used to refer to any computer that demonstrates characteristics of the human intellect...",
      image: img4,
    }
  ];

  return (
    <div className="w-full bg-[#0A192F] py-8 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-6xl ml-4 md:ml-3 font-bold text-white pb-2">
            Tecoreng Insight
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30
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
          className="px-2 md:px-4"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-[#0b1b33] rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 mx-auto 
                h-[500px] md:h-[580px] w-full flex flex-col">
                <div className="w-full h-48 md:h-64 relative">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">
                    {card.date}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tecoreng;