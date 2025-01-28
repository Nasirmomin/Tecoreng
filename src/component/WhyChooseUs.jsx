import { FaRegThumbsUp, FaTachometerAlt, FaUsers, FaTools } from "react-icons/fa"; // Importing icons

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaRegThumbsUp className="text-3xl text-blue-500" />,
      title: "Reporting & Analysis",
    },
    {
      icon: <FaTachometerAlt className="text-3xl text-blue-500" />,
      title: "On-Time Delivery",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-500" />,
      title: "Seamless Communication",
    },
    {
      icon: <FaTools className="text-3xl text-blue-500" />,
      title: "Post Launch Support",
    },
    {
      icon: null,
      title: "Agile Methodology",
    },
    {
      icon: null,
      title: "Certified Experts",
    },
    {
      icon: null,
      title: "Budget Friendly",
    },
    {
      icon: null,
      title: "100% Client Expectation",
    },
  ];

  return (
    <div
      className="w-full min-h-screen p-4"
      style={{
        backgroundImage:
          "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)",
        backgroundSize: "100% 100%", // Ensures the background covers the entire viewport
        paddingBottom: "0", // Remove extra space below the component
      }}
    >
      {/* Heading */}
      <h2
        className="text-5xl font-bold text-left text-white mb-6 text-shadow-xl pl-6 uppercase"
        style={{
          fontFamily: "Arial",
        }}
      >
        Why Tecoreng for Your Next Project?
      </h2>

      {/* Description */}
      <div className="mb-6 text-white text-left text-sm pl-6">
        <p>
          Introducing Technical Core Engineers (TCE), the intersection of technology and innovation. At TCE, we excel in delivering exceptional IT services customized to fulfill your development requirements. Harnessing our expertise and enthusiasm, we breathe life into your ideas. Backed by a team of seasoned developers with extensive knowledge in various programming technologies, our dedication is unwavering, ensuring the delivery of outstanding results. Our mission is straightforward: decode the language of binary and transform it into extraordinary digital solutions that empower your business.
        </p>
      </div>

      {/* Button */}
      <button
        className="mt-4 px-6 py-2 text-white rounded-full transition duration-300 transform ml-6"
        style={{
          backgroundImage: "linear-gradient(to right, #FFA07A, #FF6347)", // light orange to dark orange gradient
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-5px)"; // Moves the button up on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)"; // Resets the translation when the hover ends
        }}
      >
        Get in Touch
      </button>

      {/* Reason Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pl-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#0b1b33] text-white p-6 rounded-lg flex flex-col items-center text-center"
            style={{
              boxShadow: "rgb(1, 19, 46) 0px 12px 17px", // Shadow effect
              borderTopLeftRadius: "17px",
              borderTopRightRadius: "17px",
              borderBottomRightRadius: "17px",
              borderBottomLeftRadius: "17px",
              backgroundImage: "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)), linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%)",
            }}
          >
            {reason.icon && <div className="mb-4">{reason.icon}</div>}
            <h3 className="text-lg font-semibold">{reason.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
