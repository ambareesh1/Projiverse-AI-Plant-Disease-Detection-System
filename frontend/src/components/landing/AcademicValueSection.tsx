import { BookOpenCheck, BrainCircuit, Code2, Database, FileCheck2, GraduationCap, Network, Server } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

const values = [
  { title: 'CNN-based AI project', icon: BrainCircuit },
  { title: 'Image classification workflow', icon: Network },
  { title: 'FastAPI backend', icon: Server },
  { title: 'React dashboard', icon: Code2 },
  { title: 'Disease knowledge base', icon: Database },
  { title: 'AI assistant integration', icon: BookOpenCheck },
  { title: 'Report-ready project', icon: FileCheck2 },
  { title: 'Viva preparation support', icon: GraduationCap },
];

export function AcademicValueSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="Academic value" subtitle="Final-year-ready modules that are easy to explain, demonstrate, extend, and document." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ title, icon: Icon }) => (
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
