import { User, Building2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { AUDIENCE_GROUPS } from '@/constants';

const ICONS = { User, Building2 };

export default function Audience() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="audience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Who We're Validating With
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              Exploring this with two audiences.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              We're validating both the technology and the market. Here's who
              we're exploring this with.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {AUDIENCE_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon as keyof typeof ICONS];
            return (
              <ScrollReveal key={group.id} delay={i * 120}>
                <div className="group h-full rounded-xl border border-white/8 bg-ink-800/60 p-6 lg:p-8 transition-all duration-500 hover:border-cyan-400/20 hover:bg-ink-750/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/8 border border-cyan-400/15 mb-6 transition-all group-hover:bg-cyan-400/15 group-hover:border-cyan-400/30">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-4">
                    {group.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed italic">
                    {group.language}
                  </p>
                  <button
                    onClick={() => handleNav('#early-access')}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    Join the early-access list
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
