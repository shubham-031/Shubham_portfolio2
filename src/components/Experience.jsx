import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(to br, rgba(240, 253, 244, 0.4), rgba(220, 252, 231, 0.4))",
        backdropFilter: "blur(12px)",
        color: "#0d3323",
        border: "1.5px solid rgba(134, 239, 172, 0.6)",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(34, 197, 94, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #22c55e" }}
      date={experience.date}
      dateClassName="text-[#0d5a1e] font-bold"
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[#0d3323] text-[24px] font-bold tracking-tight'>{experience.title}</h3>
        <p
          className='text-[#0d7a2e] text-[16px] font-bold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-none ml-0 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#0d5a1e] text-[14px] pl-6 relative tracking-normal font-medium'
          >
            <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#22c55e] shadow-md" />
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest text-center drop-shadow-sm">
          PROFESSIONAL JOURNEY
        </p>
        <h2 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight text-center drop-shadow-sm">
          Work Experience<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#0d3323] text-[17px] max-w-4xl text-center mx-auto leading-[30px] font-semibold drop-shadow-sm"
      >
        My professional experience showcases my growth as a developer, with roles spanning different technologies and industries. Each position has contributed to my skill development and problem-solving abilities.
      </motion.p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
