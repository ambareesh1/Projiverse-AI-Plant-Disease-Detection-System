import { Link } from 'react-router-dom';
import { Bot, Gauge, LogIn, Upload, UserPlus } from 'lucide-react';

export function CTASection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-gradient-to-br from-green-600 to-green-700 p-8 text-white shadow-xl md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold text-green-50">
              Production-ready academic MVP
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Detect plant diseases smarter with AI</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-green-50/90 md:text-lg">
              Start detection, open dashboards, ask PlantCare AI, or create an account from the home page.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[460px]">
            <Link to="/detect" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-green-700 transition hover:bg-green-50">
              <Upload className="mr-2" size={18} aria-hidden="true" /> Start Detection
            </Link>
            <Link to="/dashboard" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              <Gauge className="mr-2" size={18} aria-hidden="true" /> Open Dashboard
            </Link>
            <Link to="/ai-assistant" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              <Bot className="mr-2" size={18} aria-hidden="true" /> Ask PlantCare AI
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/login" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15">
                <LogIn className="mr-2" size={16} aria-hidden="true" /> Login
              </Link>
              <Link to="/signup" className="inline-flex items-center justify-center rounded-xl bg-lime-400 px-4 py-3 font-semibold text-green-950 transition hover:bg-lime-300">
                <UserPlus className="mr-2" size={16} aria-hidden="true" /> Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
