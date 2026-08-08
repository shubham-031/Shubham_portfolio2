import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const displayedProjects = projects.slice(0, 3);

  return (
    <>
     <motion.div variants={textVariant()}>

  <p className={`${styles.sectionSubText} text-center !text-[#14532D]`}>
    My Work
  </p>

  <h2 className={`${styles.sectionHeadText} text-center !text-[#14532D]`}>
    Projects
    <span className="text-[#14532D]">
      .
    </span>
  </h2>

</motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#0d5a1e] text-[17px] leading-[30px] text-center px-4 max-w-4xl font-medium"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center relative w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/70 via-[#dcfce7]/60 to-[#ecfdf5]/70 rounded-3xl blur-3xl -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#86efac]/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/all-projects"
          className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-[#22c55e] hover:to-[#86efac] transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl hover:shadow-[#22c55e]/30 hover:scale-105 active:scale-95"
        >
          See More Projects →
        </Link>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
