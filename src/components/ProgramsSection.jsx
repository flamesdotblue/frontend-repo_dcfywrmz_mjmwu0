import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    id: 1,
    title: 'Leader Lab: 90-Day Strategic Sprint',
    date: 'Sat, Nov 16 • 11:00 AM IST',
    host: 'Hosted by Anika Sharma',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    description: 'Design a focused 90-day plan with OKRs, cadence, and accountability for your team.'
  },
  {
    id: 2,
    title: 'Financial Fluency for Operators',
    date: 'Sun, Nov 24 • 5:00 PM IST',
    host: 'Hosted by Arjun Patel',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    description: 'Understand P&L, unit economics, runway, and make better decisions with financial clarity.'
  },
  {
    id: 3,
    title: 'Scaling Systems: Process, People, Performance',
    date: 'Sat, Dec 07 • 6:30 PM IST',
    host: 'Hosted by Dev Mehta',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    description: 'Build scalable operating systems, hiring scorecards, and weekly reviews that work.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.5 } })
};

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming & Featured Programs</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Learn live with practitioners. Each session includes templates, case studies, and time for implementation.</p>
          </div>
          <a href="#contact" className="inline-flex h-10 px-4 items-center justify-center rounded-md border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors">Need help choosing?</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-lg hover:shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-[1.05]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D0F] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-[#0F3D0F]/70 text-white/90 text-xs">{p.date}</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white/70 text-sm">{p.host}</span>
                  <span className="text-white font-semibold">₹{p.price}</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#007BFF] text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                    Join Now
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
