import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HomeHeader } from '../components/layout/HomeHeader';
import { HeroSection } from '../components/landing/HeroSection';
import { ProblemSection } from '../components/landing/ProblemSection';
import { SolutionSection } from '../components/landing/SolutionSection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { CropSupportSection } from '../components/landing/CropSupportSection';
import { DetectionPreviewSection } from '../components/landing/DetectionPreviewSection';
import { AIAssistantSection } from '../components/landing/AIAssistantSection';
import { AcademicValueSection } from '../components/landing/AcademicValueSection';
import { CTASection } from '../components/landing/CTASection';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function LandingPage() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 768;

    if (reduceMotion) {
      return;
    }

    gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' });
    gsap.from('.hero-title', { opacity: 0, y: 40, duration: 0.9, delay: 0.1, ease: 'power3.out' });
    gsap.from('.hero-subtitle', { opacity: 0, y: 25, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    gsap.from('.hero-ctas > *', { opacity: 0, y: 20, stagger: 0.12, delay: 0.45, ease: 'power3.out' });
    gsap.from('.hero-preview', { opacity: 0, x: 40, duration: 1, delay: 0.25, ease: 'power3.out' });
    gsap.to('.floating-card', { y: -12, repeat: -1, yoyo: true, duration: 2.5, ease: 'sine.inOut' });

    if (!mobile) {
      gsap.utils.toArray<HTMLElement>('.home-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: 'top 80%' },
          opacity: 0,
          y: 48,
          duration: 0.9,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray<HTMLElement>('.landing-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50">
      <HomeHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <CropSupportSection />
        <DetectionPreviewSection />
        <AIAssistantSection />
        <AcademicValueSection />
        <CTASection />
      </main>
      <footer className="border-t border-green-100 bg-white py-8 text-center text-sm text-slate-500">
        Built for Projiverse Academic Project Platform
      </footer>
    </div>
  );
}
