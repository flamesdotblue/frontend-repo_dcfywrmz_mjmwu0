import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramsSection from './components/ProgramsSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#0F3D0F] text-white selection:bg-[#007BFF]/30 selection:text-white/90">
      <Navbar />
      <main>
        <Hero />
        <ProgramsSection />
        <Testimonials />

        {/* Contact anchor to support nav link; actual contact page can be added later */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 md:p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold">Stay in the loop</h3>
              <p className="mt-2 text-white/70 max-w-2xl">Subscribe for new program drops, strategic playbooks, and exclusive offers. No spam.</p>
              <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-md bg-[#0F3D0F] border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:border-white/30"
                />
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#007BFF] text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-semibold text-lg"><span className="text-[#007BFF]">Leader</span> Webinar</div>
            <p className="mt-2 text-sm text-white/70">Practical, live learning for leaders and operators. Build momentum with clarity and cadence.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a className="hover:text-white" href="#programs">Programs</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Connect</div>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a className="hover:text-white" href="mailto:hello@leaderwebinar.com">hello@leaderwebinar.com</a></li>
              <li><a className="hover:text-white" href="https://wa.me/">WhatsApp</a></li>
              <li><a className="hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Newsletter</div>
            <form className="mt-3 grid grid-cols-[1fr_auto] gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-md bg-[#0F3D0F] border border-white/15 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:border-white/30" />
              <button className="inline-flex items-center justify-center px-4 rounded-md bg-[#007BFF] text-white text-sm font-medium">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Leader Webinar. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
