import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardList, ScanLine } from 'lucide-react';
import { ConfidenceScore } from '../common/ConfidenceScore';
import { SectionHeader } from '../common/SectionHeader';
import { SeverityBadge } from '../common/SeverityBadge';

const resultItems = [
  'Predicted disease: Tomato Leaf Blight',
  'Confidence: 91.4%',
  'Severity: Medium',
  'Advisory and educational output only',
];

export function DetectionPreviewSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="Detection preview" subtitle="Home page images show how farmers and students can understand AI output without opening a technical notebook." />
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-green-100 bg-white p-4 shadow-sm">
          <img
            src="/images/home/farmer-mobile-diagnosis.svg"
            alt="Farmer using a mobile plant disease detection report"
            className="w-full rounded-2xl bg-slate-50"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="rounded-3xl border border-green-100 bg-white/90 p-6 shadow-sm backdrop-blur">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <ScanLine aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Mock ML prediction result</p>
              <h3 className="text-xl font-bold text-slate-950">Tomato Leaf Blight</h3>
            </div>
          </div>

          <ConfidenceScore value={91.4} />
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <span className="text-sm font-semibold text-slate-600">Severity level</span>
            <SeverityBadge severity="Medium" />
          </div>

          <div className="mt-5 grid gap-3">
            {resultItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-600" size={18} aria-hidden="true" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/report/101"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <ClipboardList className="mr-2" size={18} aria-hidden="true" />
            View printable report
            <ArrowRight className="ml-2" size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
