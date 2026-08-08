import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative rounded-xl overflow-hidden border border-[#86efac]/60 hover:border-[#22c55e]/90 transition-all duration-300 group bg-gradient-to-br from-[#f0fdf4]/50 to-[#dcfce7]/50 hover:from-[#f0fdf4]/60 hover:to-[#dcfce7]/60 backdrop-blur-md p-6 shadow-lg shadow-transparent hover:shadow-[#22c55e]/40 hover:scale-102 transform"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-start gap-4 flex-1">
        <img 
          src={edu.icon} 
          alt={edu.title}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#22c55e] shadow-lg"
        />
        <div>
          <h3 className="text-[#0d3323] font-bold text-[18px] tracking-tight">{edu.title}</h3>
          <p className="text-[14px] text-[#2d6a4f] font-medium">{edu.company_name}</p>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      {edu.points.map((point, idx) => (
        <div key={idx} className="flex items-center gap-2 text-[#0d5a1e] text-[14px] font-medium">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] flex-shrink-0" />
          <span>{point}</span>
        </div>
      ))}
    </div>

    {edu.date === "2019-2023" && (
      <div className="mt-6 pt-6 border-t border-[#86efac]/50">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-white bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-3 py-1.5 rounded-full shadow-md">
            Graduation: {edu.date.split("-")[1]}
          </span>
          <span className="text-2xl">👨‍🎓</span>
        </div>
      </div>
    )}

    {edu.date === "2018-2019" && (
      <div className="mt-6 pt-6 border-t border-[#86efac]/50">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-white bg-gradient-to-r from-[#22c55e] to-[#4ade80] px-3 py-1.5 rounded-full shadow-md">
            Completed: {edu.date}
          </span>
          <span className="text-2xl">📚</span>
        </div>
      </div>
    )}

    {edu.date === "2016-2017" && (
      <div className="mt-6 pt-6 border-t border-[#86efac]/50">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-bold text-white bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-3 py-1.5 rounded-full shadow-md">
            Perfect Score ⭐
          </span>
          <span className="text-2xl">⭐</span>
        </div>
      </div>
    )}
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest text-center drop-shadow-sm">
          My Educational Background
        </p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight text-center drop-shadow-sm">
          Education<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[#0d3323] text-[17px] max-w-4xl text-center mx-auto leading-[30px] mt-4 mb-12 font-semibold drop-shadow-sm"
      >
        My educational background showcases my commitment to learning and academic excellence. Each institution has played a crucial role in shaping my technical skills and knowledge.
      </motion.p>

      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <EducationCard key={`education-${index}`} edu={edu} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");