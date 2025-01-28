import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import img from '../assets/Iaas-Blog.jpeg'; // Import the image you want to use

const Tecoreng = () => {
  const cardData = [
    {
      id: 1,
      title: "Top IOS App Development Tools for Efficient Mobile App Creation",
      date: "03-11-2023 - Tecoreng",
      description: "As technology continues to evolve at a rapid pace, the demand for mobile applications has skyrocketed. Mobile apps are now an integral part of our daily lives, providing us with convenient access to information, entertainment, and services. If you're considering venturing into the world of app development, it's crucial to understand the importance of efficient..."
    },
    {
      id: 2,
      title: "What Is IaaS? Infrastructure as a Service",
      date: "02-03-2023 - Paresh Solanki",
      description: "What Is IaaS? IaaS stands for Infrastructure as a Service. That is a part of cloud computing services. It offers the necessary computers, storage, and networking resources on demand according to a pay-as-you-go system. Additionally, IaaS is also known as Haas (Hardware as a service). It is one of the cloud computing platforms. Service-based..."
    },
    {
      id: 3,
      title: "Mobile App Development Process: From Idea to Launch",
      date: "09-06-2023 - Paresh Solanki",
      description: "Mobile app development has become an integral part of the digital landscape, transforming the way we interact with technology and enhancing our daily lives. From social networking and entertainment to productivity and e-commerce, mobile apps have revolutionized the way we access information, communicate, and conduct business. In this era of smartphones and tablets, the demand..."
    },
    {
      id: 4,
      title: "Artificial Intelligence: How AI is Transforming Every Industry",
      date: "20-07-2023 - Paresh Solanki",
      description: "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been designed to behave and think like humans. The phrase may also be used to refer to any computer that demonstrates characteristics of the human intellect, such as learning and problem-solving. Furthermore, there are many ways to use artificial intelligence (AI) in every industry..."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white inline-block pb-2">
          Tecoreng Blog Posts
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40} // Adjust this value for the gap between the cards
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
            spaceBetween: 40 // Adjust this value for the gap on larger screens
          }
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-[#0b1b33] rounded-2xl shadow-xl p-8 h-[550px]  flex flex-col justify-between transform transition-transform duration-300">
              {/* Card image */}
              <div className="w-full h-[200px] bg-cover rounded-lg mb-4" style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}></div>
              
              <div className="space-y-4 mt-4">
                <h3 className="text-xl font-bold text-center text-white">{card.title}</h3>
                <h4 className="text-lg font-medium text-center text-gray-400">{card.date}</h4>
                <p className="text-gray-300 text-sm text-center leading-relaxed overflow-hidden line-clamp-6">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tecoreng;
