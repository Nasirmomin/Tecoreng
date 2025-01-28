import React from 'react';

const SlopedProcess = () => {
  const processes = [
    {
      title: "Research and Analysis",
      description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
      color: "from-blue-600 to-blue-800",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5V3m0 18v-2m7-7h2M3 12h2m12.5-5.5l1-1M5.5 17.5l1-1m11 0l1 1M5.5 6.5l1 1" />
        </svg>
      )
    },
    {
      title: "Design",
      description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
      color: "from-purple-600 to-purple-800",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12h6m-6 4h6m-6-8h6" />
        </svg>
      )
    },
    {
      title: "Development",
      description: "Frontend & Backend Implementation with Modern Technologies",
      color: "from-indigo-600 to-indigo-800",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a2642] relative overflow-hidden">
      {processes.map((process, index) => (
        <div
          key={index}
          className={`relative h-[400px] -mt-20 first:mt-0`}
          style={{
            clipPath: `polygon(0 0, 100% ${index * 10}%, 100% 100%, 0 ${90 - index * 10}%)`
          }}
        >
          {/* Background with gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${process.color}`}>
            {/* Content container */}
            <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
              {/* Content alignment alternates between left and right */}
              <div className={`flex items-center gap-12 ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                {/* Icon circle */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                      {process.icon}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="max-w-xl">
                  <h2 className="text-white text-4xl font-light mb-4">
                    {process.title}
                  </h2>
                  <p className="text-white/70 text-xl">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-[20%] w-8 h-8 rounded-full bg-white/10 blur-sm" />
      <div className="absolute bottom-40 left-[30%] w-6 h-6 rounded-full bg-white/10 blur-sm" />
    </div>
  );
};

export default SlopedProcess;