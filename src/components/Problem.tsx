import { EyeOff, Moon, TrendingDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PROBLEM_CONCEPTS } from '@/constants';

const ICONS = { EyeOff, Moon, TrendingDown };

const PROBLEM_IMAGE = 'https://images.pexels.com/photos/3586772/pexels-photo-3586772.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-850" />
      <div className="absolute inset-0 grid-bg-fine opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Why This Matters
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              Attention can change before a driver realizes it.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              Driver awareness isn't a fixed state — it shifts gradually and
              sometimes suddenly. Astrateq Gadgets is exploring technology
              designed to identify three key categories of change.
            </p>
          </div>
        </ScrollReveal>

        {/* Cinematic wide image */}
        <ScrollReveal delay={150}>
          <div className="mt-14 relative aspect-[21/9] rounded-2xl border border-white/10 overflow-hidden bg-ink-800">
            <img
              src={PROBLEM_IMAGE}
              alt="A driver inside a vehicle during a night drive, illuminated by city lights"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlays for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-850/50 to-transparent" />

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 grid-bg-fine opacity-15" />

            {/* Corner brackets */}
            {[
              'top-3 left-3 border-l-2 border-t-2',
              'top-3 right-3 border-r-2 border-t-2',
              'bottom-3 left-3 border-l-2 border-b-2',
              'bottom-3 right-3 border-r-2 border-b-2',
            ].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} h-5 w-5 border-cyan-400/15 rounded-sm pointer-events-none`}
              />
            ))}

            {/* Minimal HUD label */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-cyan-400/50 tracking-wider uppercase">
              Driving Environment · Night
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PROBLEM_CONCEPTS.map((concept, i) => {
            const Icon = ICONS[concept.icon as keyof typeof ICONS];
            return (
              <ScrollReveal key={concept.id} delay={i * 120}>
                <div className="group h-full rounded-xl border border-white/8 bg-ink-800/60 p-6 transition-all duration-500 hover:border-cyan-400/20 hover:bg-ink-750/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/8 border border-cyan-400/15 mb-5 transition-all group-hover:bg-cyan-400/15 group-hover:border-cyan-400/30">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    {concept.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-10 text-sm text-gray-400 max-w-2xl leading-relaxed">
            Astrateq Gadgets does not claim that this technology prevents
            crashes, guarantees safer driving, or has been clinically validated.
            These are the categories of driver-state change the technology is
            being designed to observe.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
