import React, { useState } from 'react';
import {
  Globe2,
  Palette,
  Radio,
  Smartphone,
  Megaphone
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts continue growing with the latest technology such as Laravel, Angular, Node.Js, and more.',
    icon: Globe2
  },
  {
    id: 2,
    title: 'UI/UX Graphics & Design',
    description:
      'Tecoreng is the best UI/UX graphics design agency. We build smooth and high-quality designs with our UI/UX team, focusing on creating a strong brand identity and enhancing product awareness.',
    icon: Palette
  },
  {
    id: 3,
    title: 'Internet of Things',
    description:
      'IoT application development connects physical devices to the Internet, enabling seamless data exchange. It supports various interfaces and devices to make life convenient.',
    icon: Radio
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description:
      'Tecoreng is a leading mobile app development company in India. Our expert team creates high-quality mobile apps for multiple platforms, including iOS and Android.',
    icon: Smartphone
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description:
      'Technical Core Engineers is a digital organization offering services to create your brand identity by refining ideas and focusing on getting your products and services to the ever-growing digital market, increasing brand awareness, sales, and demand.',
    icon: Megaphone
  },
];

const OurSpecialization = () => {
  const [selectedCard, setSelectedCard] = useState(2);

  const getVisibleCards = () => {
    const currentIndex = services.findIndex((service) => service.id === selectedCard);
    const previousIndex = (currentIndex - 1 + services.length) % services.length;
    const nextIndex = (currentIndex + 1) % services.length;
    return [
      services[previousIndex],
      services[currentIndex],
      services[nextIndex],
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="flex flex-col  py-8 md:py-16 px-0.5 md:px-10" style={{ backgroundColor: '#01132E' }}>
      {/* Header Section */}
      <div className="w-full max-w-6xl mb-8 md:mb-6">
  <h1 className="text-left text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-white pl-4 lg:pl-12">
    Our Specialization
  </h1>
  <p className="text-left text-base md:text-lg text-white pl-4 lg:pl-12">
    We offer a full range of web app development services that make things better for enterprises and companies we work with.
    Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services.
    We specialize in the following services:
  </p>
</div>


      {/* Cards Section */}
      <div className="relative w-full lg:ml-28 max-w-6xl h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden">
        {visibleCards.map((service, index) => {
          const Icon = service.icon;
          const isCenter = index === 1;

          return (
            <div
              key={service.id}
              onClick={() => setSelectedCard(service.id)}
              className={`
                absolute w-[280px] md:w-[380px] lg:w-[420px] p-4 md:p-8
                rounded-xl shadow-xl cursor-pointer
                transition-all duration-500
                hover:scale-105
                ${isCenter
                  ? 'bg-white z-30'
                  : 'bg-white z-20 opacity-60 hover:opacity-80'
                }
                transform
                ${index === 0 ? '-translate-x-1/2' : ''}
                ${index === 2 ? 'translate-x-1/2' : ''}
              `}
              style={{
                transform: `
                  translateX(${(index - 1) * (window.innerWidth < 768 ? 260 : 400)}px)
                  ${isCenter ? 'scale(1.1)' : 'scale(0.8)'}
                `,
              }}
            >
              <div className="flex justify-center mb-6">
                <Icon
                  size={isCenter ? 48 : 40}
                  className={`${isCenter ? 'text-blue-600' : 'text-gray-600'}`}
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-black">
                {service.title}
              </h2>
              <p className={`text-sm md:text-base leading-relaxed text-center
                ${isCenter ? 'text-gray-700' : 'text-gray-600'}`}
              >
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Navigation Dots */}
      
    </div>
  );
};

export default OurSpecialization;
