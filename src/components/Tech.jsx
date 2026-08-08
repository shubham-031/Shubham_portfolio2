import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const TechCategory = ({ title, techs, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full"
  >
    <h3 className="text-[#0d3323] text-[28px] font-bold text-center mb-8 relative pb-3 tracking-tight">
      {title}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#4ade80] rounded-full shadow-lg shadow-[#22c55e]/40" />
    </h3>
    
    <div className="flex flex-wrap justify-center gap-6">
      {techs.map((tech, idx) => (
        <motion.div
          key={`${title}-${tech.name}`}
          whileHover={{ scale: 1.15 }}
          className="relative w-24 h-24 rounded-2xl border border-[#86efac]/60 hover:border-[#22c55e]/90 transition-all duration-300 overflow-hidden group shadow-lg shadow-transparent hover:shadow-[#22c55e]/40 hover:scale-110 transform"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/40 to-[#dcfce7]/40 group-hover:from-[#f0fdf4]/50 group-hover:to-[#dcfce7]/50 backdrop-blur-md transition-all duration-300 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-[#4ade80]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          <div className="relative h-full flex flex-col items-center justify-center gap-2 p-2 z-20">
            <img 
              src={tech.icon} 
              alt={tech.name}
              className="w-12 h-12 object-contain drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="text-[#0d3323] text-xs font-bold text-center truncate w-full px-1 tracking-tight">
              {tech.name}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  // Categorize technologies
  const frontendTechs = technologies.filter(tech => 
    ["HTML 5", "CSS 3", "JavaScript", "React JS", "Redux", "Figma", "Tailwind CSS", "Bootstrap"].includes(tech.name)
  );
  const backendTechs = technologies.filter(tech => 
    ["Node.js", "MongoDB", "MySQL", "Docker", "AWS", "git"].includes(tech.name)
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest text-center drop-shadow-sm">
          MY TECHNICAL EXPERTISE
        </p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight text-center drop-shadow-sm">
          Technologies<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#0d3323] text-[17px] max-w-3xl text-center mx-auto leading-[30px] font-semibold drop-shadow-sm"
      >
        I've worked with a range of technologies in web development. From front-end to back-end, I'm always eager to learn new technologies and apply them to real-world projects.
      </motion.p>

      <div className="mt-20 space-y-16">
        <TechCategory title="Frontend Technologies" techs={frontendTechs} index={0} />
        <TechCategory title="Backend & Database" techs={backendTechs} index={1} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");