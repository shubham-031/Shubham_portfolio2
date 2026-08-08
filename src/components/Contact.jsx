import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shubham Jadhav ",
          from_email: form.email,
          to_email: "shubhamajadhav200@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)} 
        className='w-full xl:flex-[0.75] flex-1 bg-gradient-to-br from-[#f0fdf4]/70 to-[#dcfce7]/70 hover:from-[#dcfce7]/80 hover:to-[#bbf7d0]/80 backdrop-blur-md p-8 rounded-2xl border border-[#86efac]/60 hover:border-[#22c55e]/90 hover:shadow-lg hover:shadow-[#22c55e]/40 transition-all duration-300 hover:scale-102 transform'
      >
        <p className="text-[#0d7a2e] text-[14px] sm:text-[18px] font-bold uppercase tracking-widest drop-shadow-sm">GET IN TOUCH</p>
        <h3 className="text-[#0d3323] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight drop-shadow-sm">
          Contact<span className="bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">.</span>
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-[#0d3323] font-semibold mb-4 text-[16px]'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='bg-[#f0fdf4]/50 backdrop-blur-sm py-4 px-6 placeholder:text-[#2d6a4f] text-[#0d3323] rounded-lg outline-none border border-[#86efac]/60 focus:border-[#22c55e]/90 hover:border-[#22c55e]/80 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-[#22c55e]/40'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#0d3323] font-semibold mb-4 text-[16px]'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='bg-[#f0fdf4]/50 backdrop-blur-sm py-4 px-6 placeholder:text-[#2d6a4f] text-[#0d3323] rounded-lg outline-none border border-[#86efac]/60 focus:border-[#22c55e]/90 hover:border-[#22c55e]/80 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-[#22c55e]/40'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#0d3323] font-semibold mb-4 text-[16px]'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className='bg-[#f0fdf4]/50 backdrop-blur-sm py-4 px-6 placeholder:text-[#2d6a4f] text-[#0d3323] rounded-lg outline-none border border-[#86efac]/60 focus:border-[#22c55e]/90 hover:border-[#22c55e]/80 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-[#22c55e]/40 resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-[#16a34a] to-[#4ade80] hover:from-[#22c55e] hover:to-[#86efac] py-4 px-8 rounded-lg text-white font-bold shadow-lg shadow-[#22c55e]/50 hover:shadow-xl hover:shadow-[#22c55e]/70 transition-all duration-300 transform hover:scale-105 active:scale-95 text-[16px] tracking-wide'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)} 
        className='w-full xl:flex-1 h-[350px] sm:h-[450px] md:h-[550px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
