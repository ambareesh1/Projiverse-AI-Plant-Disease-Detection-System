import { Link } from 'react-router-dom';
import { Bot, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

const prompts = ['Explain this disease', 'Suggest prevention', 'Explain CNN model', 'Generate viva questions'];

export function AIAssistantSection() {
  return (
    <section className="home-section mx-auto max-w-7xl px-4 py-16">
      <SectionHeader title="PlantCare AI Assistant" subtitle="A safe AI helper for disease explanation, project viva, and architecture guidance." />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
              <Bot aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-950">PlantCare AI Assistant</h3>
              <p className="text-sm text-slate-500">Demo mode available without API key</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-green-600 px-4 py-3 text-sm leading-6 text-white">
              My tomato leaf has yellow spots. What could it be?
            </div>
            <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-800">
              Yellow spots may indicate fungal or bacterial infection. Please upload a clear leaf image for analysis.
              For serious crop damage, consult a local agriculture expert.
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
            <ShieldAlert className="mr-2 inline" size={16} aria-hidden="true" />
            The assistant gives educational guidance and does not guarantee diagnosis.
          </div>
        </div>

        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <div key={prompt} className="landing-card rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <MessageCircle className="mb-3 text-green-600" aria-hidden="true" />
                <p className="font-semibold text-slate-800">{prompt}</p>
              </div>
            ))}
          </div>
          <Link
            to="/ai-assistant"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <Sparkles className="mr-2" size={18} aria-hidden="true" />
            Open AI Assistant
          </Link>
        </div>
      </div>
    </section>
  );
}
