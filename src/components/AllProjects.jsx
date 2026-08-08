import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { PageWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const AllProjects = () => {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#dcfce7]">
   <motion.div variants={textVariant()} className="mb-10">
  <p className={`${styles.sectionSubText} text-center !text-[#0F3D2E]`}>
    My Work
  </p>

  <h2 className={`${styles.sectionHeadText} text-center !text-[#0F3D2E]`}>
    All Projects
    <span className="bg-gradient-to-r from-[#0F3D2E] via-[#14532D] to-[#166534] bg-clip-text text-transparent">
      .
    </span>
  </h2>
</motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#0d5a1e] text-[17px] max-w-3xl leading-[30px] text-center font-medium"
        >
          Here are all the projects I have built, with the code and live demo links grouped in one place so the work is easy to review.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center relative pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/70 via-[#dcfce7]/60 to-[#ecfdf5]/70 rounded-3xl blur-3xl -z-10" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#86efac]/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-[#22c55e] hover:to-[#86efac] transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl hover:shadow-[#22c55e]/30 hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageWrapper(AllProjects, "all-projects");
