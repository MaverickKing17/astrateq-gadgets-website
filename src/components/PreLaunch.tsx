import { Cpu, TrendingUp, Smartphone, Rocket, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PRELAUNCH_STATUS } from '@/constants';

const ICONS = { Cpu, TrendingUp, Smartphone, Rocket };

export default function PreLaunch() {
  return (
    <section id="prelaunch" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-850" />
      <div className="absolute inset-0 grid-bg-fine opacity-25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Pre-Launch Status
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              We're not launching yet.
              <br />
              We're validating first.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              We are deliberately validating the technology and market before
              launch. Here's where things stand.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRELAUNCH_STATUS.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            const isFuture = item.state === 'future';
            return (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className={`h-full rounded-xl border p-6 transition-all ${
                  isFuture
                    ? 'border-white/8 bg-ink-800/40'
                    : 'border-cyan-400/15 bg-ink-800/60 hover:border-cyan-400/25'
                }`}>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg mb-4 ${
                    isFuture
                      ? 'bg-white/5 border border-white/8'
                      : 'bg-cyan-400/8 border border-cyan-400/15'
                  }`}>
                    <Icon className={`h-5 w-5 ${isFuture ? 'text-gray-400' : 'text-cyan-300'}`} />
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-2">
                    {item.label}
                  </p>
                  <p className={`font-display text-lg font-semibold ${isFuture ? 'text-gray-300' : 'text-white'}`}>
                    {item.value}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Canadian market */}
        <ScrollReveal delay={200}>
          <div className="mt-12 inline-flex items-center gap-3 rounded-xl border border-white/8 bg-ink-800/40 px-6 py-4">
            <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Starting with the Canadian market.</p>
              <p className="text-sm text-gray-400 mt-0.5">
                Exploring driver-awareness technology for Canadian drivers and organizations first.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
