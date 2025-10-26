import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F3D0F]/80 via-[#0F3D0F]/70 to-[#0F3D0F]" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Master Strategic Planning
              <span className="block text-[#007BFF]">Lead with Clarity & Impact</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/80">
              A live, actionable webinar designed for leaders, operators, and business owners to apply real-world strategy frameworks and build execution momentum.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#007BFF] text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Join Live Webinar
              </a>
              <span className="text-sm text-white/60">No previews — jump straight into the action.</span>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            {[
              'Practical frameworks you can use immediately',
              'Hands-on exercises, templates, and planning boards',
              'Designed for busy operators and ambitious leaders',
              'Q&A and guided next steps to ensure momentum',
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#007BFF]/20 text-[#007BFF]">✓</span>
                <p className="text-white/85">{text}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
