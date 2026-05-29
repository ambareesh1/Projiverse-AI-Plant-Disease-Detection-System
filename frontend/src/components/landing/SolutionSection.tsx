import { Bot, Download, Leaf, ShieldCheck, Sparkles, Stethoscope, TrendingUp, UploadCloud } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

const features = [
  { title: 'Leaf Image Upload', icon: UploadCloud },
  { title: 'AI Disease Prediction', icon: Stethoscope },
  { title: 'Confidence Score', icon: TrendingUp },
  { title: 'Severity Detection', icon: ShieldCheck },
  { title: 'Treatment Suggestions', icon: Sparkles },
  { title: 'Prevention Tips', icon: Leaf },
  { title: 'AI Explanation Assistant', icon: Bot },
  { title: 'Downloadable Report', icon: Download },
];

export function SolutionSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="Solution" subtitle="A complete AI advisory workflow for leaf disease detection, explanation, and report generation." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, icon: Icon }) => (
          <Card key={title} className="landing-card p-5 hover:-translate-y-1">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Icon size={21} aria-hidden="true" />
            </div>
            <p className="font-semibold text-slate-800">{title}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
