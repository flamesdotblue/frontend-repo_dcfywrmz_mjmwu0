import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rohit Verma',
    role: 'COO, Retail Startup',
    quote:
      'This webinar cut through the noise. We went from scattered goals to a crisp 90-day plan that the team actually follows.',
  },
  {
    name: 'Neha Gupta',
    role: 'Founder, SaaS',
    quote:
      'Clear, tactical, and high-signal. The frameworks and templates alone were worth it. Our Monday reviews are transformed.',
  },
  {
    name: 'Arvind Iyer',
    role: 'Head of Ops',
    quote:
      'Loved the practical exercises. The focus on execution cadence made the difference for us.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What leaders are saying</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="rounded-xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-lg"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/70">{t.name} • {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
