import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    // <section className="relative w-full min-h-screen mx-auto pt-40 pb-12 overflow-hidden">
    //   {/* Background Elements */}
    //   <div className="absolute inset-0 pointer-events-none">
    //     <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#2F578A]/20 to-transparent rounded-full blur-3xl"></div>
    //     <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-[#2F578A]/40 to-[#1a2a3d]/40 rounded-full blur-3xl"></div>
    //   </div>
    <section className="relative w-full min-h-screen mx-auto pt-40 pb-12 overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#bbf7d0]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#86efac]/40 to-transparent rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-[#4ade80]/25 to-[#86efac]/15 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-[#22c55e]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

      </div>

      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-between w-full relative z-10`}>
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start justify-center flex-1"
          variants={textVariant()}
          initial="hidden"
          animate="show"
        >
          {/* Accent Badge
          <motion.div 
            className="mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#7c3aed]/20 to-[#ec4899]/20 border border-[#7c3aed]/50 backdrop-blur-sm"
            variants={fadeIn("right", "spring", 0.1, 0.75)}
          >
            
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            className={`${styles.heroHeadText} tracking-tight font-black`}
            variants={fadeIn("right", "spring", 0.2, 0.75)}
          >
            <span className="text-[#0d3323] drop-shadow-sm">Hi, I'm</span> <span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">Shubham</span>
          </motion.h1>

          {/* Subtitle */}
          {/* <p 
            className={`${styles.heroSubText} mt-4 text-[#20a015] max-w-2xl leading-[45px] tracking-wide font-black drop-shadow-md`}
          >
            I design and develop user interfaces,
            <br />
            platforms and web applications.
          </p> */}

 <p
  className={`${styles.heroSubText} mt-4 text-[#064E3B] max-w-2xl leading-[45px] tracking-[0.01em] font-black`}
  style={{ fontFamily: "'Outfit', sans-serif" }}
>
  I design and develop user interfaces,
  <br />
  platforms and web applications.
</p>
          {/* Description */}
          <motion.p
            className="mt-6 text-[#0d3323] max-w-2xl text-[16px] sm:text-[18px] leading-8 font-semibold drop-shadow-md"
            variants={fadeIn("right", "spring", 0.5, 0.75)}
          >
            Crafting beautiful, functional digital experiences with modern technologies and innovative design principles.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex gap-4"
            variants={fadeIn("right", "spring", 0.6, 0.75)}
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-[#16a34a] to-[#4ade80] hover:from-[#22c55e] hover:to-[#86efac] text-white font-bold rounded-xl shadow-lg shadow-[#22c55e]/50 hover:shadow-xl hover:shadow-[#22c55e]/70 transition-all duration-300 flex items-center gap-2 tracking-wide">
                Explore My Work
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </button>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group px-8 py-4 border-2 border-[#22c55e] hover:border-[#16a34a] text-[#0d3323] font-bold rounded-xl transition-all duration-300 hover:bg-[#dcfce7] flex items-center gap-2 hover:shadow-lg hover:shadow-[#22c55e]/30 tracking-wide">
                Get in Touch
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="w-full flex justify-center items-center pt-12 absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.a
          href="#about"
          className="hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#22c55e] hover:border-[#16a34a] flex justify-center items-start p-2 transition-colors duration-300 shadow-lg shadow-[#22c55e]/30 hover:shadow-[#22c55e]/50">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-b from-[#22c55e] to-[#4ade80]"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
