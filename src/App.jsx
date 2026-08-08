// import React from 'react'
// import './App.css'
// import { BrowserRouter } from 'react-router-dom'
// import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas, ScrollToTop } from './components'

// function App() {
//   return (
// //       <BrowserRouter>
// //         <div className='relative z-0 bg-green-900'>
// //           <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
// //             <Navbar />
// //             <Hero />

// //           </div>

// //           <div className="div relative z-0 bg-green-190">     
// //            <About />

// //           </div>

// //           <div className="div relative z-0 bg-green-100">     
// //            <Education />

// //           </div> 
// //           <div className="div relative z-0 bg-green-50">     
// //             <Experience />

// //           </div>

// // <div className="relative z-0 bg-gradient-to-br from-green-50 via-emerald-100/60 to-lime-50">
// //   <Experience />
// // </div>

// //           <div className="div relative z-0 bg-green-100">     
// //            <Education />

// //           </div>
// //           <div className="div relative z-0 bg-green-100">     
// //            <Extracurricular />

// //           </div>

// //           <div className="div relative z-0 bg-green-100">     
// //           <Tech />

// //           </div>

// //           <div className="div relative z-0 bg-green-100">     
// //             <Works />

// //           </div>

// //           <div className="div relative z-0 bg-green-100">     
// //             <Contact />   
// //             <StarsCanvas /> 
// //           </div>   
// <BrowserRouter>
//   <div className="relative z-0 bg-[#ecfdf5]">

//     {/* HERO SECTION */}
//     <div className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#065f46] bg-cover bg-no-repeat bg-center">
//       <Navbar />
//       <Hero />
//     </div>

//     {/* ABOUT */}
//     <div className="relative z-0 bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#ecfdf5]">
//       <About />
//     </div>

//     {/* EDUCATION */}
//     <div className="relative z-0 bg-gradient-to-br from-[#ecfeff] via-[#d1fae5] to-[#f0fdfa]">
//       <Education />
//     </div>

//     {/* EXPERIENCE */}
//     <div className="relative z-0 bg-gradient-to-br from-[#f7fee7] via-[#d9f99d]/50 to-[#ecfccb]">
//       <Experience />
//     </div>

//     {/* EXTRACURRICULAR */}
//     <div className="relative z-0 bg-gradient-to-br from-[#f0fdfa] via-[#ccfbf1]/60 to-[#ecfeff]">
//       <Extracurricular />
//     </div>

//     {/* TECH STACK */}
//     <div className="relative z-0 bg-gradient-to-br from-[#ecfccb] via-[#dcfce7] to-[#f0fdf4]">
//       <Tech />
//     </div>

//     {/* WORKS */}
//     <div className="relative z-0 bg-gradient-to-br from-[#f0fdf4] via-[#bbf7d0]/40 to-[#dcfce7]">
//       <Works />
//     </div>

//     {/* CONTACT */}
//     <div className="relative z-0 bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#f0fdfa]">
//       <Contact />
//       <StarsCanvas />
//     </div>

//   </div>
// </BrowserRouter>
         
//           <ScrollToTop />   
//         </div >
//       </BrowserRouter >
//   )
// }

// export default App
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Experience,
  Extracurricular,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ScrollToTop,
} from "./components";
import AllCertifications from "./components/AllCertifications";
import AllHackathons from "./components/AllHackathons";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-[#ecfdf5]">
              <div className="bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#065f46] bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#ecfdf5]">
                <About />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#f0fdfa]">
                <Education />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#ecfdf5]">
                <Experience />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#f0fdfa]">
                <Extracurricular />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#ecfdf5]">
                <Tech />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#ecfccb] via-[#dcfce7] to-[#f0fdf4]">
                <Works />
              </div>

              <div className="relative z-0 bg-gradient-to-br from-[#d1fae5] via-[#ecfdf5] to-[#f0fdfa]">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/all-certifications" element={<AllCertifications />} />
        <Route path="/all-hackathons" element={<AllHackathons />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;