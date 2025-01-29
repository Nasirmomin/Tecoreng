import { useState } from "react";
import Reactsvg from '../assets/react-jsTCE.dc2e1b7f.svg';
import Laravel from '../assets/laravelTCE.46e12fe8.svg';
import Node from '../assets/nodejsTCE.ed01dd43.svg';
import Angular from '../assets/angularTCE.190d8320.svg';
import { ChevronRight } from 'lucide-react'; // Importing a chevron arrow icon from lucide-react
import Laptop from '../../tecoreng.com-svg/meta.svg';

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
    <div className="w-full max-w-[85%] mx-auto p-6">
      <h2 className="text-5xl font-semibold text-left text-white mb-2 text-shadow-xl">
        Services We Offer
      </h2>

      <div className="mb-12 text-white text-left text-base">
        <p>
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfills your diverse business requirements through a number of services. We specialise in the following services:
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-8 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`w-full border-zinc-10 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-out transform
              ${activeIndex === index ? 'bg-gradient-to-r from-[#6ec1e4] to-[#0b1b33] border-[#6ec1e4] translate-y-[-5px] scale-105' : 'bg-[#0b1b33] border-white hover:border-[#6ec1e4] scale-105'}
            `}
            style={{ borderWidth: '0.5px', marginBottom: '24px' }}  
          >
            {/* Accordion Header */}
            <div className="p-4 flex items-center justify-between">  {/* Reduced padding */}
              {/* Left Section: Heading */}
              <div className="flex-grow flex items-center space-x-3">
                <img src={Laptop} alt="Laptop" className="w-6 h-6 object-contain" />  {/* Decreased icon size */}
                <span className="text-xl font-semibold text-white">{service.title}</span>  {/* Increased font size */}
              </div>

              {/* Right Section: Chevron and Icons (visible only on hover) */}
              <div className={`flex items-center space-x-3 transition-all duration-300 ease-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'} justify-center`}>
                <div className="flex justify-center items-center">
                  <img src={Reactsvg} alt="React Icon" className="w-8 h-8" style={{ transform: 'translateY(40px)' }} />  {/* Moved down using transform */}
                </div>
                <div className="flex justify-center items-center">
                  <img src={Laravel} alt="Laravel Icon" className="w-8 h-8" style={{ transform: 'translateY(40px)' }} />  {/* Moved down using transform */}
                </div>
                <div className="flex justify-center items-center">
                  <img src={Node} alt="Node Icon" className="w-8 h-8" style={{ transform: 'translateY(40px)' }} />  {/* Moved down using transform */}
                </div>
                <div className="flex justify-center items-center">
                  <img src={Angular} alt="Angular Icon" className="w-8 h-8" style={{ transform: 'translateY(40px)' }} />  {/* Moved down using transform */}
                </div>
                {/* Chevron Arrow Icon */}
                <div className="flex justify-center items-center">
                  <ChevronRight className="w-6 h-6 text-[#6ec1e4]" style={{ transform: 'translateY(40px)' }} />  {/* Moved down using transform */}
                </div>
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`px-5 text-white text-sm flex justify-between items-center transition-all duration-300 ease-out
                ${activeIndex === index ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}`}  
              style={{ overflow: 'hidden' }}
            >
              {/* Middle Section: Paragraph (only visible on hover) */}
              <div className={`flex-grow space-y-2 transition-all duration-300 ease-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-base">
                  {service.details.split(' ').slice(0, 8).join(' ')}...  {/* Reduced number of words displayed initially */}
                </p>
                <p className={`text-base transition-all duration-300 ease-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  {service.details.split(' ').slice(8).join(' ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
