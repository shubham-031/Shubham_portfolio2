import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { PageWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, title, points, icon, credential, date }) => {
  const cardStyles = [
    "bg-gradient-to-br from-[#f0fdf4]/85 to-[#dcfce7]/85 border border-[#86efac]/50",
    "bg-gradient-to-br from-[#ecfdf5]/85 to-[#d1fae5]/85 border border-[#86efac]/50",
    "bg-gradient-to-br from-[#f7fee7]/85 to-[#ecfccb]/85 border border-[#86efac]/50",
    "bg-gradient-to-br from-[#f0fdfa]/85 to-[#ccfbf1]/85 border border-[#86efac]/50",
  ];

  const selectedStyle = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className={`${selectedStyle} rounded-3xl overflow-hidden shadow-xl shadow-[#22c55e]/15 hover:shadow-[#22c55e]/30 transition-all duration-300 group relative w-full max-w-[390px] mx-auto border-2`}
      whileHover={{ scale: 1.025, y: -6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/50 via-transparent to-[#dcfce7]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Certificate thumbnail */}
      <a href={credential} target="_blank" rel="noopener noreferrer" className="block relative w-full h-[190px] overflow-hidden bg-white border-b-2 border-[#86efac]/40">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d3323]/15 to-transparent" />
        <span className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center border border-[#22c55e]/50 shadow-md">
          <span className="text-[#0d3323] text-sm font-bold">↗</span>
        </span>
      </a>

      <div className="relative p-6 min-h-[190px] flex flex-col justify-between">
        <div>
          <h3 className="text-[#0d3323] font-black text-[18px] leading-[26px] tracking-tight">
            {title}
          </h3>
          <p className="text-[#0d7a2e] text-[14px] font-semibold mt-1">Completed: {date}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {points.map((point, pointIndex) => (
            <span
              key={`${title}-${pointIndex}`}
              className="text-[12px] px-3 py-1 rounded-full bg-[#22c55e]/15 text-[#0d3323] border border-[#86efac]/60 font-medium"
            >
              {point.split(":")[1]?.trim() || point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AllCertifications = () => {
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
        <p className={`${styles.sectionSubText} text-center text-[#068f2f]`}>My Achievements</p>
        {/* <h2 className={`${styles.sectionHeadText} text-center text-[#0d3323]`}>
          All Certifications
          
          <span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2> */}

        <h2 className={`${styles.sectionHeadText} text-center text-[#166534]`}>
  All Certifications
  <span className="bg-gradient-to-r from-[#166534] via-[#15803d] to-[#22c55e] bg-clip-text text-transparent">
    .
  </span>
</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[#0d5a1e] text-[17px] max-w-3xl leading-[30px] text-center font-medium"
        >
          Below are the certifications and achievements I have earned. The page keeps the same light green visual style as the rest of the portfolio.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/70 via-[#dcfce7]/60 to-[#ecfdf5]/70 rounded-3xl blur-3xl" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#86efac]/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {certifications.map((certificate, index) => (
          <CertificationCard
            key={`certificate-${index}`}
            index={index}
            title={certificate.title}
            points={certificate.points}
            icon={certificate.icon}
            credential={certificate.credential}
            date={certificate.date}
            isMobile={isMobile}
          />
        ))}
      </div>

      <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="mt-12 flex justify-center">
        <Link
          to="/"
          className="bg-gradient-to-r from-[#16a34a] to-[#4ade80] text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-[#22c55e] hover:to-[#86efac] transition-all duration-300 border border-white/20 shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default PageWrapper(AllCertifications, "all-certifications");