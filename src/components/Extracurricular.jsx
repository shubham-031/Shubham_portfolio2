import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { extracurricular, hackathons } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import CertificationCard from "./CertificationCard";
import HackathonCard from "./HackathonCard";

const Extracurricular = () => {
  const certifications = extracurricular.filter(item => item.type === "Certification" || item.type === "Achievements");
  const featuredCertifications = certifications.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()} className="mb-16">
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest text-center drop-shadow-sm">MY ACHIEVEMENTS</p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight text-center drop-shadow-sm">
          Certifications<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[#0d3323] text-[17px] max-w-4xl text-center mx-auto leading-[30px] mb-12 font-semibold drop-shadow-sm"
      >
        Below are some of the certifications I have earned, showcasing my expertise and
        commitment to continuous learning. Each certification includes details and links to verify
        or learn more about them.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredCertifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} cert={cert} index={index} />
        ))}
      </div>

      <div className="flex justify-center mb-20">
        <Link
          to="/all-certifications"
          className="px-8 py-3 bg-gradient-to-r from-[#16a34a] to-[#4ade80] hover:from-[#22c55e] hover:to-[#86efac] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#22c55e]/50 tracking-wide"
        >
          See More Certifications →
        </Link>
      </div>

      <motion.div variants={textVariant()} className="mb-16">
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest text-center drop-shadow-sm">MY ACHIEVEMENTS</p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight text-center drop-shadow-sm">
          Hackathons<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[#0d3323] text-[17px] max-w-4xl text-center mx-auto leading-[30px] mb-12 font-semibold drop-shadow-sm"
      >
        Participating in hackathons has been an exciting journey of innovation and rapid
        prototyping. These events have challenged me to think creatively, work under pressure,
        and deliver impactful solutions within tight timeframes.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={`hackathon-${index}`} hackathon={hackathon} index={index} />
        ))}
      </div>

      <div className="flex justify-center mb-20 mt-8">
        <Link
          to="/all-hackathons"
          className="px-8 py-3 bg-gradient-to-r from-[#16a34a] to-[#4ade80] hover:from-[#22c55e] hover:to-[#86efac] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#22c55e]/50 tracking-wide"
        >
          See More Hackathons →
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");