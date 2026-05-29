import { AlertTriangle, Clock, GraduationCap, Sprout } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

const problems = [
  { title: 'Late disease detection', text: 'Farmers often detect plant diseases after visible damage has already spread.', icon: Clock },
  { title: 'Limited expert access', text: 'Manual inspection is slow and requires expert availability at the right time.', icon: Sprout },
  { title: 'Wrong treatment risk', text: 'Unclear symptoms can lead to unnecessary or incorrect treatment decisions.', icon: AlertTriangle },
  { title: 'Academic project gap', text: 'Students need a practical AI project with real-world agriculture value.', icon: GraduationCap },
];

export function ProblemSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="Problem" subtitle="Farmers often detect plant diseases too late, and students need meaningful AI projects that solve real problems." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problems.map(({ title, text, icon: Icon }) => (
          <Card key={title} className="landing-card p-6 hover:-translate-y-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="font-bold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
