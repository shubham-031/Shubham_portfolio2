import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceIcon = ({ id }) => {
  switch (id) {
    case "fullstack":
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="svc-fullstack" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#0d3323" />
            </linearGradient>
          </defs>
          <rect x="4" y="10" width="56" height="34" rx="4" fill="url(#svc-fullstack)" />
          <rect x="9" y="15" width="46" height="20" rx="2" fill="#f0fdf4" />
          <path d="M17 21l-5 4 5 4" stroke="#16a34a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 20l-4 10" stroke="#0d3323" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M35 21l5 4-5 4" stroke="#16a34a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="26" y="46" width="12" height="4" rx="1.5" fill="#0d3323" />
          <rect x="18" y="50" width="28" height="4" rx="2" fill="#4ade80" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="svc-backend" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
          </defs>
          <rect x="10" y="8" width="44" height="12" rx="3" fill="url(#svc-backend)" />
          <rect x="10" y="26" width="44" height="12" rx="3" fill="url(#svc-backend)" opacity="0.85" />
          <rect x="10" y="44" width="44" height="12" rx="3" fill="url(#svc-backend)" opacity="0.7" />
          <circle cx="18" cy="14" r="2" fill="#f0fdf4" />
          <circle cx="18" cy="32" r="2" fill="#f0fdf4" />
          <circle cx="18" cy="50" r="2" fill="#f0fdf4" />
          <path d="M46 14h4M46 32h4M46 50h4" stroke="#f0fdf4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "ml":
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="svc-ml" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
          </defs>
          <path
            d="M32 8c9 0 15 6 15 13 0 5-2 7-2 11 0 3 2 4 2 8 0 6-6 10-15 10s-15-4-15-10c0-4 2-5 2-8 0-4-2-6-2-11 0-7 6-13 15-13z"
            fill="url(#svc-ml)"
          />
          <circle cx="24" cy="24" r="2" fill="#f0fdf4" />
          <circle cx="32" cy="20" r="2" fill="#f0fdf4" />
          <circle cx="40" cy="24" r="2" fill="#f0fdf4" />
          <circle cx="32" cy="34" r="2" fill="#f0fdf4" />
          <path d="M24 24l8-4 8 4M32 20v14" stroke="#f0fdf4" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <rect x="28" y="46" width="8" height="6" rx="1.5" fill="#0d3323" />
        </svg>
      );
    case "genai":
    default:
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="svc-genai" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#86efac" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#svc-genai)" />
          <path
            d="M32 18l3.4 8.6L44 30l-8.6 3.4L32 42l-3.4-8.6L20 30l8.6-3.4z"
            fill="#f0fdf4"
          />
          <circle cx="46" cy="18" r="2.6" fill="#f0fdf4" />
          <circle cx="18" cy="46" r="2" fill="#f0fdf4" />
        </svg>
      );
  }
};

const ServiceCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className="relative w-full rounded-2xl border border-[#86efac]/50 hover:border-[#22c55e]/90 transition-all duration-300 overflow-hidden group cursor-pointer shadow-lg shadow-transparent hover:shadow-[#22c55e]/30 hover:-translate-y-1 transform"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/60 to-[#dcfce7]/60 backdrop-blur-sm" />

    <div className="relative flex flex-col items-start gap-4 p-6">
      <div className="w-16 h-16 rounded-2xl bg-[#0d3323]/5 border border-[#86efac]/60 p-2.5 group-hover:scale-110 transition-transform duration-300 shadow-md">
        <ServiceIcon id={icon} />
      </div>

      <div>
        <h3 className="text-[#0d3323] text-[17px] sm:text-[19px] font-bold tracking-tight">
          {title}
        </h3>
        <span className="block w-8 h-[3px] rounded-full bg-gradient-to-r from-[#16a34a] to-[#4ade80] mt-2 mb-3 group-hover:w-14 transition-all duration-300" />
        <p className="text-[#0d5a1e] text-[13px] sm:text-[14px] leading-[20px] font-medium">
          {description}
        </p>
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 to-[#4ade80]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

const About = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest drop-shadow-sm">
          INTRODUCTION
        </p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight drop-shadow-sm">
          Overview<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      {/* Main Content - Two Column Layout */}
      <div className="w-full mt-8 lg:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Section - Bio & Social Links */}
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 0.75)}
            className="flex flex-col justify-center"
          >

            {/* Developer Experience Paragraph */}
            <p className="text-[#0d3323] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] mb-8 font-semibold drop-shadow-sm">
              I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
            </p>

            {/* Social Links */}
            <div className="flex gap-6 items-center">
              <span className="text-[#0d5a1e] text-[14px] font-bold">Follow me:</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/shubham-jadhav-developer" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#86efac] hover:border-[#22c55e] hover:bg-[#22c55e]/15 transition-all duration-300 hover:scale-110 transform shadow-md hover:shadow-lg hover:shadow-[#22c55e]/30"
                >
                  <svg className="w-6 h-6 text-[#0d5a1e] hover:text-[#0d3323] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/shubham-031" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#86efac] hover:border-[#22c55e] hover:bg-[#22c55e]/15 transition-all duration-300 hover:scale-110 transform shadow-md hover:shadow-lg hover:shadow-[#22c55e]/30"
                >
                  <svg className="w-6 h-6 text-[#0d5a1e] hover:text-[#0d3323] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.hackerrank.com/shubham_jadhav_2002" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#86efac] hover:border-[#22c55e] hover:bg-[#22c55e]/15 transition-all duration-300 hover:scale-110 transform shadow-md hover:shadow-lg hover:shadow-[#22c55e]/30"
                >
                  <span className="text-2xl hover:scale-125 transition-transform">⚙️</span>
                </a>
                <a href="mailto:shubhamjadhav031@gmail.com"
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#86efac] hover:border-[#22c55e] hover:bg-[#22c55e]/15 transition-all duration-300 hover:scale-110 transform shadow-md hover:shadow-lg hover:shadow-[#22c55e]/30"
                >
                  <svg className="w-6 h-6 text-[#0d5a1e] hover:text-[#0d3323] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shubham_Jadhav_Resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#16a34a] to-[#4ade80] text-white px-8 py-3.5 rounded-2xl font-bold text-[15px] sm:text-base hover:from-[#22c55e] hover:to-[#86efac] transition-all duration-300 border border-white/20 shadow-lg shadow-[#22c55e]/30 hover:scale-105 transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm h-[400px] sm:h-[450px]">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#22c55e]/20 to-[#4ade80]/10 blur-3xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#22c55e] shadow-2xl shadow-green-500/50 flex items-center justify-center bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]">
                <img 
                  src="/profile.jpg" 
                  alt="Shubham" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-secondary text-center"><div><div class="text-6xl mb-4">📸</div><p>Add your profile image</p><p class="text-sm mt-2">Place profile.jpg in public folder</p></div></div>';
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-full border-2 border-[#22c55e] opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border-2 border-[#4ade80] opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Cards - Full Width */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-16 lg:mt-20 w-full"
      >
        <h3 className="text-[#0d3323] text-[24px] sm:text-[32px] font-bold tracking-tight drop-shadow-sm">
          What I <span className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] bg-clip-text text-transparent">specialize in</span>
        </h3>
        <span className="block w-16 h-[3px] rounded-full bg-gradient-to-r from-[#16a34a] to-[#4ade80] mt-3" />
        <p className="text-[#0d5a1e] text-[14px] sm:text-[16px] font-medium mt-4 mb-8 max-w-2xl">
          I build end-to-end solutions and intelligent systems that solve real-world problems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
