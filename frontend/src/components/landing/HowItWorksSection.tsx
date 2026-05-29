import { SectionHeader } from '../common/SectionHeader';

const steps = [
  'Upload plant leaf image',
  'Select crop type',
  'AI model analyzes image',
  'System predicts disease',
  'User gets treatment and prevention tips',
  'Result is saved in prediction history',
];

export function HowItWorksSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="How it works" subtitle="From image upload to advisory report in six clear steps." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="landing-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 font-bold text-white">
              {index + 1}
            </div>
            <h3 className="font-bold text-slate-950">{step}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The workflow remains simple for farmers while exposing enough architecture for academic demos.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
