import { Link } from 'react-router-dom';
import { ArrowRight, Bot, CheckCircle2, ImageUp, Leaf, PlayCircle, ShieldCheck, Sparkles, Upload } from 'lucide-react';
import { ConfidenceScore } from '../common/ConfidenceScore';
import { SeverityBadge } from '../common/SeverityBadge';

const heroStats = [
  { value: '94%', label: 'Model accuracy ready' },
  { value: '20+', label: 'Plant diseases supported' },
  { value: '<10s', label: 'Instant leaf image analysis' },
  { value: 'AI', label: 'Treatment guidance' },
];

const primaryLink =
  'inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto';
const secondaryLink =
  'inline-flex w-full items-center justify-center rounded-xl border border-green-200 bg-white px-5 py-3 font-semibold text-green-700 transition-all duration-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto';
const ghostLink =
  'inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto';

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 md:grid-cols-[1.02fr_0.98fr] md:pt-20">
      <div>
        <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-green-100 bg-green-50 px-4 py-1 text-sm font-medium text-green-700">
          <Sparkles size={15} aria-hidden="true" />
          Projiverse academic agri-tech AI
        </span>

        <h1 className="hero-title mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
          AI Plant Disease <span className="text-green-600">Detection System</span>
        </h1>

        <p className="hero-subtitle mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          Upload a plant leaf image and get instant AI-powered disease detection, confidence score, severity
          level, treatment guidance, prevention tips, and farmer-friendly explanations.
        </p>

        <div className="hero-ctas mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/detect" className={primaryLink}>
            <Upload className="mr-2" size={18} aria-hidden="true" />
            Detect Disease
          </Link>
          <Link to="/result/101" className={secondaryLink}>
            <PlayCircle className="mr-2" size={18} aria-hidden="true" />
            View Demo
          </Link>
          <Link to="/ai-assistant" className={ghostLink}>
            <Bot className="mr-2" size={18} aria-hidden="true" />
            Ask PlantCare AI
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:hidden">
          <Link to="/login" className={secondaryLink}>
            Login
          </Link>
          <Link to="/signup" className={primaryLink}>
            Create Student/Farmer Account
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="stat-number rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
              <p className="text-xl font-bold text-green-700">{stat.value}</p>
              <p className="mt-1 font-semibold leading-5 text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-preview relative">
        <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white/90 p-4 shadow-xl backdrop-blur">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-green-50">
            <img
              src="/images/home/leaf-disease-analysis.svg"
              alt="AI leaf disease analysis dashboard preview"
              className="h-auto w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute left-4 top-4 rounded-2xl bg-white/92 p-3 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Leaf size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">Uploaded leaf analysis</p>
                  <h3 className="font-bold text-slate-950">Tomato Leaf Blight</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <ConfidenceScore value={91.4} />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Severity</span>
                <SeverityBadge severity="Medium" />
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 lg:max-w-56">
              <Sparkles className="mr-2 inline text-green-600" size={16} aria-hidden="true" />
              Remove infected leaves and avoid overhead watering.
            </div>
          </div>
        </div>

        <div className="floating-card absolute -right-2 top-12 hidden rounded-2xl border border-green-100 bg-white p-4 shadow-lg sm:block lg:-right-6">
          <ShieldCheck className="mb-2 text-green-600" aria-hidden="true" />
          <p className="text-sm font-bold text-slate-800">Healthy crop monitoring</p>
        </div>
        <div className="floating-card absolute -left-2 bottom-10 hidden rounded-2xl border border-sky-100 bg-white p-4 shadow-lg sm:block lg:-left-6">
          <ImageUp className="mb-2 text-sky-600" aria-hidden="true" />
          <p className="text-sm font-bold text-slate-800">Image quality checked</p>
        </div>
        <div className="absolute -bottom-8 left-10 right-10 rounded-2xl border border-amber-100 bg-white p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-green-600" size={20} aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">
              Advisory and educational output only. Consult a local agriculture expert for serious crop damage.
            </p>
            <ArrowRight className="ml-auto hidden shrink-0 text-green-600 sm:block" size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
