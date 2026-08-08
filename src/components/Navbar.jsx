import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-400 ${
        scrolled ? "bg-gradient-to-r from-[#f0fdf4]/95 to-[#dcfce7]/95 backdrop-blur-2xl shadow-lg shadow-[#22c55e]/25 border-b border-[#86efac]/40" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo Circle */}
          <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#16a34a] via-[#22c55e] to-[#4ade80] flex items-center justify-center font-bold text-white text-lg hover:shadow-xl hover:shadow-[#22c55e]/70 transition-all duration-300 hover:scale-110 transform'>
            S
          </div>
          
          {/* Branding Text */}
          <div className='hidden sm:flex flex-col'>
            <p className='text-[#0d3323] text-[16px] font-bold leading-none tracking-tight'>
              Shubham
            </p>
            <p className='text-[#0d7a2e] text-[12px] font-bold'>
              Software Developer
            </p>
          </div>

          {/* Mobile Branding */}
          <div className='sm:hidden flex flex-col'>
            <p className='text-[#0d3323] text-[14px] font-bold tracking-tight'>Shubham</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[16px] font-bold cursor-pointer transition-all duration-300 pb-2 group ${
                active === nav.title ? "text-[#0d7a2e]" : "text-[#0d5a1e] hover:text-[#0d3323]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="tracking-tight">{nav.title}</a>
              <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-[#16a34a] to-[#4ade80] rounded-full transition-all duration-300 ${
                active === nav.title ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 hover:scale-110 transform p-2 hover:bg-[#22c55e]/10 rounded-lg filter brightness-0 saturate-150'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-b from-[#f0fdf4]/95 via-[#dcfce7]/95 to-[#bbf7d0]/95 backdrop-blur-2xl absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl border border-[#86efac]/40 shadow-xl shadow-[#22c55e]/20`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-6'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-bold cursor-pointer text-[16px] transition-all duration-300 group relative ${
                    active === nav.title ? "text-[#0d7a2e]" : "text-[#0d5a1e] hover:text-[#0d3323]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="tracking-tight">{nav.title}</a>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#16a34a] to-[#4ade80] rounded-full transition-all duration-300 ${
                    active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
