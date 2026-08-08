import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { PageWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hackathons } from "../constants";

const HackathonCard = ({ hackathon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative rounded-2xl overflow-hidden border border-[#86efac]/60 bg-gradient-to-br from-[#f0fdf4]/90 to-[#dcfce7]/90 shadow-lg shadow-[#22c55e]/10 hover:shadow-[#22c55e]/25 transition-all duration-300 group flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/45 via-transparent to-[#dcfce7]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <img
      src={hackathon.image}
      alt={hackathon.title}
      className="w-full h-[210px] object-cover group-hover:scale-110 transition-transform duration-500"
    />

    <div className="absolute top-4 right-4 z-10">
      <a
        href={hackathon.credential}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-[#22c55e]/25 hover:bg-[#22c55e]/45 rounded-full flex items-center justify-center border border-[#22c55e]/40 transition-all duration-300"
      >
        <span className="text-[#0d3323] text-sm font-bold">↗</span>
      </a>
    </div>

    <div className="relative p-6 flex-1 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[#0d3323] font-bold text-[18px] tracking-tight flex-1">
          {hackathon.title}
        </h3>
        <span className="text-[12px] px-3 py-1 rounded-full font-bold whitespace-nowrap bg-[#22c55e]/15 text-[#0d7a2e] border border-[#86efac]/60">
          {hackathon.points[0]?.split(" ")[0]}
        </span>
      </div>

      <p className="text-[14px] text-[#0d5a1e] mb-4 font-medium">{hackathon.date}</p>
      <p className="text-[13px] text-[#0d3323] leading-[20px] font-medium flex-1">
        {hackathon.points[0]}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {hackathon.points.slice(1).map((point, pointIndex) => (
          <span
            key={`${hackathon.title}-${pointIndex}`}
            className="text-[11px] px-2 py-1 rounded-full border font-semibold border-[#86efac]/60 text-[#0d5a1e] bg-[#86efac]/15"
          >
            {point}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const AllHackathons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#dcfce7]">
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center text-[#0d7a2e]`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#0d3323]`}>
          All Hackathons<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#0d5a1e] text-[17px] max-w-3xl leading-[30px] text-center font-medium"
        >
          Here are all the hackathons I have participated in, showing the challenges, outcomes, and learning moments from each event.
        </motion.p>
      </div>

      <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="mt-8 flex justify-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-[#22c55e] hover:to-[#86efac] transition-all duration-300 border border-white/20 shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center relative pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/70 via-[#dcfce7]/60 to-[#ecfdf5]/70 rounded-3xl blur-3xl" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#86efac]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {hackathons.map((hackathon, index) => (
          <div
            key={`hackathon-${index}`}
            className={isMobile ? "w-full max-w-[360px] mx-auto" : "w-full max-w-[360px] mx-auto"}
          >
            <HackathonCard hackathon={hackathon} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageWrapper(AllHackathons, "all-hackathons");