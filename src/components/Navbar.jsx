import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          <span className="text-[#007BFF]">Leader</span> Webinar
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#programs" className="text-white/80 hover:text-white transition-colors">Programs</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>

        <a
          href="#programs"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#007BFF] text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Join Live Webinar
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
