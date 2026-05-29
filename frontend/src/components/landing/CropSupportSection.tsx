import { Apple, Bean, Flower2, Grape, Leaf, Sprout, Wheat } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeader } from '../common/SectionHeader';

const crops = [
  { name: 'Tomato', icon: Sprout },
  { name: 'Potato', icon: Leaf },
  { name: 'Corn', icon: Wheat },
  { name: 'Rice', icon: Sprout },
  { name: 'Wheat', icon: Wheat },
  { name: 'Grape', icon: Grape },
  { name: 'Apple', icon: Apple },
  { name: 'Cotton', icon: Flower2 },
  { name: 'Beans', icon: Bean },
];

export function CropSupportSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="Supported crops" subtitle="Demo-ready crop coverage for academic and farmer-friendly use cases." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
        {crops.map(({ name, icon: Icon }) => (
          <Card key={name} className="landing-card p-4 text-center hover:-translate-y-1">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Icon size={21} aria-hidden="true" />
            </div>
            <p className="font-semibold text-slate-800">{name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
