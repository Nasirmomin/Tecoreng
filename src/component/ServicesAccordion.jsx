import { useState } from "react";
import Reactsvg from '../assets/react-jsTCE.dc2e1b7f.svg';
import Laravel from '../assets/laravelTCE.46e12fe8.svg';
import Node from '../assets/nodejsTCE.ed01dd43.svg';
import Angular from '../assets/angularTCE.190d8320.svg';

const ServicesAccordion = () => {
  const services = [
    {
      title: "Web Development",
      details: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    },
    {
      title: "Mobile App Development",
      details: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    },
    {
      title: "Graphic Designing",
      details: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    },
    {
      title: "UI/UX Design",
      details: "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    },
    {
      title: "Quality Assurance",
      details: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
    },
    {
      title: "Digital Marketing",
      details: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full max-w-[90%] mx-auto p-4">
      <h2 className="text-5xl font-bold text-left text-white mb-3 text-shadow-xl">
        Services We Offer
      </h2>

      <div className="mb-20 text-white text-left text-sm">
        <p>
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services. We specialise in the following services:
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-10 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`w-full border rounded-3xl shadow-md overflow-hidden transition-all duration-300 ease-out transform
              ${activeIndex === index ? 'bg-gradient-to-r from-[#6ec1e4] to-[#0b1b33] border-[#6ec1e4] translate-y-[-5px] scale-105' : 'bg-[#0b1b33] border-white hover:border-[#6ec1e4] scale-105'}
            `}
            style={{ borderWidth: '0.5px' }}
          >
            {/* Accordion Header */}
            <div className="p-4 text-lg font-semibold text-white">
              {service.title}
            </div>

            {/* Accordion Content */}
            <div
              className={`px-4 text-white text-sm flex justify-between items-center transition-all duration-300 ease-out
                ${activeIndex === index ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
              style={{ overflow: 'hidden' }}
            >
              {/* Description */}
              <div className="flex-grow">
                <p>{service.details}</p>
              </div>

              {/* Icons */}
              <div className="flex space-x-4">
                <img
                  src={Reactsvg}
                  alt="React Icon"
                  className="w-10 h-10"
                />
                <img
                  src={Laravel}
                  alt="Laravel Icon"
                  className="w-10 h-10"
                />
                <img
                  src={Node}
                  alt="Node Icon"
                  className="w-10 h-10"
                />
                <img
                  src={Angular}
                  alt="Angular Icon"
                  className="w-10 h-10"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
