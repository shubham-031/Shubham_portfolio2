import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const CertificationCard = ({ cert, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative rounded-3xl overflow-hidden border-2 border-[#86efac]/60 hover:border-[#22c55e]/90 transition-all duration-300 group shadow-xl shadow-[#22c55e]/10 hover:shadow-[#22c55e]/30 hover:-translate-y-1 transform bg-gradient-to-br from-[#f0fdf4]/90 via-[#ecfdf5]/90 to-[#dcfce7]/90"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/55 via-transparent to-[#dcfce7]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Certificate thumbnail */}
    <div className="relative w-full h-[160px] overflow-hidden bg-white">
      <img
        src={cert.icon}
        alt={cert.title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d3323]/10 to-transparent" />
    </div>

    <div className="relative p-6 min-h-[220px] flex flex-col justify-between">
      <div className="absolute top-4 right-4 z-10">
        <a
          href={cert.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-[#22c55e]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#22c55e]/70 transition-all duration-300 border border-[#22c55e]/60 shadow-md"
        >
          <span className="text-[#0d3323] text-sm font-bold">⤴</span>
        </a>
      </div>

      <div className="pr-12">
        <p className="text-[#0d7a2e] text-[12px] font-bold uppercase tracking-[0.2em] mb-2">
          Certification / Achievement
        </p>
        <h3 className="text-[#0d3323] font-black text-[20px] leading-[28px] tracking-tight mb-2">
          {cert.title}
        </h3>
        <p className="text-[#0d7a2e] text-[14px] font-semibold">Completed: {cert.date}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {cert.points.map((point, idx) => (
          <span
            key={idx}
            className="text-[12px] px-3 py-1.5 bg-[#22c55e]/15 text-[#0d3323] rounded-full border border-[#86efac]/60 font-medium"
          >
            {point.split(":")[1]?.trim() || point}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-5 border-t border-[#86efac]/50">
        <p className="text-[13px] leading-[22px] text-[#0d5a1e] font-medium">
          Verified credential included for quick reference and trust.
        </p>
      </div>
    </div>
  </motion.div>
);

export default CertificationCard;