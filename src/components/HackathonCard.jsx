import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const HackathonCard = ({ hackathon, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative rounded-xl overflow-hidden border border-[#86efac]/60 hover:border-[#22c55e]/90 transition-all duration-300 group shadow-lg shadow-transparent hover:shadow-[#22c55e]/40 hover:scale-102 transform flex flex-col"
  >
    <img
      src={hackathon.image}
      alt={hackathon.title}
      className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-300"
    />

    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/70" />

    <div className="absolute top-4 right-4">
      <a
        href={hackathon.credential}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-[#22c55e]/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#22c55e]/70 transition-all duration-300 border border-[#22c55e]/60 shadow-md"
      >
        <span className="text-white text-sm font-bold">⤴</span>
      </a>
    </div>

    <div className="relative px-6 py-6 bg-gradient-to-br from-[#f0fdf4]/50 to-[#dcfce7]/50 backdrop-blur-md flex-1 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[#0d3323] font-bold text-[18px] flex-1 tracking-tight">{hackathon.title}</h3>
        <span
          className={`text-[12px] px-3 py-1 rounded-full font-bold ml-2 whitespace-nowrap ${
            hackathon.credential?.includes("1st")
              ? "bg-orange-500/25 text-orange-700 border border-orange-500/50"
              : hackathon.credential?.includes("Top")
                ? "bg-[#22c55e]/25 text-[#0d7a2e] border border-[#22c55e]/50"
                : "bg-[#22c55e]/25 text-[#0d7a2e] border border-[#22c55e]/50"
          }`}
        >
          {hackathon.points[0]?.split(" ")[0]}
        </span>
      </div>

      <p className="text-[14px] text-[#0d5a1e] mb-4 font-medium">{hackathon.date}</p>
      <p className="text-[13px] text-[#0d3323] leading-[20px] font-medium flex-1">{hackathon.points[0]}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {hackathon.points.slice(1).map((point, idx) => (
          <span
            key={idx}
            className={`text-[11px] px-2 py-1 rounded-full border font-semibold ${
              point.includes("Prize")
                ? "border-orange-500/60 text-orange-700 bg-orange-500/15"
                : point.includes("Automation")
                  ? "border-[#22c55e]/60 text-[#0d7a2e] bg-[#22c55e]/15"
                  : "border-[#86efac]/60 text-[#0d5a1e] bg-[#86efac]/15"
            }`}
          >
            {point}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default HackathonCard;