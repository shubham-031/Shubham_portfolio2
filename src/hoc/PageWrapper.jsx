import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Used for standalone full-page routes (e.g. /all-certifications, /all-hackathons,
// /all-projects) instead of SectionWrapper. SectionWrapper uses `whileInView` with a
// 25%-visible threshold, which is meant for sections inside one long scrolling home
// page. On a tall standalone page (e.g. many certification cards), the initial
// viewport never covers 25% of the whole page, so `whileInView` never fires and the
// content stays stuck at opacity: 0 - it's rendered (links are clickable) but
// invisible. PageWrapper instead animates in immediately on mount, so it always
// shows regardless of page height or scroll position.
const PageWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        animate='show'
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default PageWrapper;
