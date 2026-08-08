import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const cardStyles = [
  "bg-gradient-to-br from-[#f0fdf4]/90 to-[#dcfce7]/90 border border-[#86efac]/50",
  "bg-gradient-to-br from-[#ecfdf5]/90 to-[#d1fae5]/90 border border-[#86efac]/50",
  "bg-gradient-to-br from-[#f7fee7]/90 to-[#ecfccb]/90 border border-[#86efac]/50",
];

const tagPalette = [
  "bg-[#16a34a]/10 text-[#0d7a2e] border-[#16a34a]/30",
  "bg-[#0d9488]/10 text-[#0f766e] border-[#0d9488]/30",
  "bg-[#db2777]/10 text-[#be185d] border-[#db2777]/30",
  "bg-[#7c3aed]/10 text-[#6d28d9] border-[#7c3aed]/30",
  "bg-[#0284c7]/10 text-[#0369a1] border-[#0284c7]/30",
];

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
}) => {
  const selectedStyle = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.7)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${selectedStyle} w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-lg shadow-[#22c55e]/10 hover:shadow-2xl hover:shadow-[#22c55e]/25 transition-shadow duration-300 group relative flex flex-col`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0fdf4]/45 via-transparent to-[#dcfce7]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" />

      <div className="relative h-[170px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${name} live demo`}
          className="absolute top-3.5 right-3.5 w-10 h-10 bg-[#0d3323]/85 hover:bg-[#16a34a] backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg z-10 transition-all duration-300 ease-out hover:scale-110 hover:rotate-45 active:scale-95"
        >
          <span className="text-white">
            <ExternalLinkIcon />
          </span>
        </a>
      </div>

      <div className="relative flex flex-col flex-1 p-5">
        <h3 className="text-[#0d3323] font-black text-[18px] leading-snug tracking-tight line-clamp-1">
          {name}
        </h3>
        <p className="mt-2 text-[#0d5a1e] text-[13.5px] leading-[21px] font-medium line-clamp-3">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tagPalette[tagIndex % tagPalette.length]}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {live_project_link && (
          <a
            href={live_project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 block"
          >
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#16a34a] to-[#4ade80] hover:from-[#15803d] hover:to-[#22c55e] text-white px-4 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.03] active:scale-95 text-[13.5px] tracking-wide shadow-md hover:shadow-lg hover:shadow-[#22c55e]/40">
              View Live Demo
              <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
