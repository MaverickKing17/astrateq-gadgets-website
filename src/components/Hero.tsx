import { Radar, ArrowDown, Cpu, Camera, Activity, ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, rgba(13, 181, 176, 0.06), transparent 50%)',
        }}
      />

      {/* Scan line */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent animate-scan-line pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 px-3 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-teal-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-teal-300 uppercase">
                  Pre-Launch · Build #68 · In Active Development
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white text-balance">
                Driver intelligence,
                <br />
                <span className="shimmer-text">observed in real time.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-xl text-base lg:text-lg leading-relaxed text-ink-300">
                Astrateq Gadgets is a pre-launch iOS driver-awareness technology
                project for the Canadian market — combining deterministic
                driver-state simulation, camera observation, and a
                driver-intelligence interpretation engine to understand the
                person behind the wheel.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    document.querySelector('#technology')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-ink-900 transition-all hover:bg-teal-300 hover:shadow-[0_0_30px_rgba(34,211,206,0.3)]"
                >
                  Explore the Technology
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </button>
                <button
                  onClick={() =>
                    document.querySelector('#validation')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-teal-400/40 hover:bg-white/5"
                >
                  View Validation Timeline
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
                {[
                  { icon: Camera, label: 'Camera' },
                  { icon: Cpu, label: 'Simulation' },
                  { icon: Activity, label: 'Interpretation' },
                  { icon: ShieldCheck, label: 'Testing' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-ink-850 px-4 py-5"
                  >
                    <Icon className="h-5 w-5 text-teal-400" />
                    <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Animated visual panel */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={300}>
              <HeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent pointer-events-none" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] rounded-2xl border border-white/8 bg-ink-850/60 backdrop-blur-sm overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-50" />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(13, 181, 176, 0.1), transparent 60%)',
        }}
      />

      {/* Corner brackets */}
      {[
        'top-4 left-4 border-l-2 border-t-2',
        'top-4 right-4 border-r-2 border-t-2',
        'bottom-4 left-4 border-l-2 border-b-2',
        'bottom-4 right-4 border-r-2 border-b-2',
      ].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos} h-6 w-6 border-teal-400/30 rounded-sm`}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
        {/* Central radar */}
        <div className="relative flex items-center justify-center">
          {/* Pulse rings */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-teal-400/20"
              style={{
                width: `${80 + i * 70}px`,
                height: `${80 + i * 70}px`,
                animation: `pulseRing 2.5s ease-out ${i * 0.8}s infinite`,
              }}
            />
          ))}

          {/* Core */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/10 border border-teal-400/30">
            <Radar className="h-8 w-8 text-teal-300 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </div>

        {/* Telemetry lines */}
        <div className="mt-10 w-full space-y-2.5">
          {[
            { label: 'DRIVER STATE', value: 'ATTENTIVE', color: 'text-teal-300' },
            { label: 'GAZE ALIGNMENT', value: '95%', color: 'text-white' },
            { label: 'DROWSINESS INDEX', value: '5%', color: 'text-white' },
            { label: 'TELEMETRY', value: 'ACTIVE', color: 'text-teal-300' },
          ].map((row, i) => (
            <div
              key={row.label}
              className="flex items-center justify-between border-b border-white/5 pb-2 animate-fade-in-up"
              style={{ animationDelay: `${0.5 + i * 0.15}s`, opacity: 0 }}
            >
              <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
                {row.label}
              </span>
              <span className={`font-mono text-xs font-semibold ${row.color} animate-data-flicker`}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 w-full">
          <div className="rounded border border-amber-500/20 bg-amber-500/5 px-3 py-2">
            <p className="font-mono text-[9px] tracking-wider text-amber-400/80 uppercase text-center leading-relaxed">
              Concept Interface
              <br />
              Illustrative data — not real-world performance
            </p>
          </div>
        </div>
      </div>

      {/* Scan line */}
      <div className="absolute left-4 right-4 top-0 h-px bg-teal-400/40 animate-scan-line pointer-events-none" />
    </div>
  );
}
