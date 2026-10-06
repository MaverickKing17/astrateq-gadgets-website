import { Radar, ArrowRight, ArrowDown, Crosshair, ScanLine } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const HERO_IMAGE = 'https://images.pexels.com/photos/8387443/pexels-photo-8387443.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 radial-glow" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 50%, rgba(0, 229, 255, 0.05), transparent 50%)',
        }}
      />

      {/* Scan line */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-scan-line pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="font-mono text-[11px] tracking-widest text-cyan-300 uppercase">
                  Pre-Launch Driver Awareness Technology
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-white text-balance">
                Stay aware.
                <br />
                <span className="shimmer-text">Drive safer.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-8 max-w-xl text-lg lg:text-xl leading-relaxed text-gray-300">
                Astrateq Gadgets is exploring intelligent driver-awareness
                technology designed to identify indicators of distraction and
                drowsiness and provide timely awareness signals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Currently in pre-launch validation.
              </div>
            </ScrollReveal>

            <ScrollReveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    document.querySelector('#early-access')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]"
                >
                  Join Early Access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() =>
                    document.querySelector('#technology')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/5"
                >
                  Explore the Technology
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Cinematic driver visual + telemetry panel */}
          <div className="lg:col-span-6">
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
    <div className="space-y-3">
      {/* Cinematic driver image with CV overlay */}
      <div className="relative aspect-[16/11] rounded-2xl border border-white/10 overflow-hidden bg-ink-800">
        {/* Base image */}
        <img
          src={HERO_IMAGE}
          alt="Driver inside a vehicle at night with interior lighting — driver-monitoring concept visualization"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        {/* Dark gradient overlay for blending with design system */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 to-transparent" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-bg-fine opacity-15" />

        {/* Computer-vision face tracking overlay — positioned on the driver's face */}
        <div className="absolute left-[28%] top-[18%] h-[40%] w-[24%]">
          {/* Tracking frame */}
          <div className="absolute inset-0 border border-cyan-400/40 rounded">
            {/* Corner markers */}
            {[
              '-top-px -left-px border-l-2 border-t-2',
              '-top-px -right-px border-r-2 border-t-2',
              '-bottom-px -left-px border-l-2 border-b-2',
              '-bottom-px -right-px border-r-2 border-b-2',
            ].map((pos) => (
              <div key={pos} className={`absolute ${pos} h-2.5 w-2.5 border-cyan-400`} />
            ))}
          </div>
          {/* Label */}
          <div className="absolute -top-5 left-0 font-mono text-[9px] text-cyan-400 tracking-wider">
            DRIVER · 0.98
          </div>
          {/* Gaze direction indicator */}
          <div className="absolute left-[42%] top-[35%]">
            <Crosshair className="h-3.5 w-3.5 text-cyan-400/70" />
          </div>
          {/* Gaze vector line */}
          <div className="absolute left-[48%] top-[42%] h-px w-8 bg-gradient-to-r from-cyan-400/50 to-transparent" />
        </div>

        {/* Observation points — subtle cyan tracking dots */}
        <div className="absolute left-[32%] top-[25%] h-1 w-1 rounded-full bg-cyan-400/60 animate-pulse" />
        <div className="absolute left-[42%] top-[30%] h-1 w-1 rounded-full bg-cyan-400/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute left-[38%] top-[42%] h-1 w-1 rounded-full bg-cyan-400/40 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* HUD overlays */}
        <div className="absolute top-3 left-3 font-mono text-[8px] text-cyan-400/70 tracking-wider">
          CAM: INTERIOR · 1080p
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[8px] text-cyan-400/70 tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-blink" />
          OBSERVING
        </div>
        <div className="absolute bottom-3 left-3 font-mono text-[8px] text-cyan-400/60 tracking-wider">
          GAZE: FORWARD · ATTENTIVE
        </div>
        <div className="absolute bottom-3 right-3 font-mono text-[8px] text-cyan-400/60 tracking-wider">
          FRAME: 2400 · 30 FPS
        </div>

        {/* Scan line */}
        <div className="absolute left-3 right-3 top-0 h-px bg-cyan-400/30 animate-scan-line pointer-events-none" />

        {/* Corner brackets */}
        {[
          'top-3 left-3 border-l-2 border-t-2',
          'top-3 right-3 border-r-2 border-t-2',
          'bottom-3 left-3 border-l-2 border-b-2',
          'bottom-3 right-3 border-r-2 border-b-2',
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} h-5 w-5 border-cyan-400/20 rounded-sm pointer-events-none`}
          />
        ))}
      </div>

      {/* Telemetry panel */}
      <div className="relative rounded-xl border border-white/10 bg-ink-800/70 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 grid-bg-fine opacity-25" />
        <div className="relative z-10 p-4">
          {/* Mini telemetry rows */}
          <div className="space-y-2">
            {[
              { label: 'DRIVER STATE', value: 'ATTENTIVE', color: 'text-cyan-300' },
              { label: 'GAZE ALIGNMENT', value: '95%', color: 'text-white' },
              { label: 'DROWSINESS INDEX', value: '5%', color: 'text-white' },
              { label: 'AWARENESS', value: 'ACTIVE', color: 'text-cyan-300' },
            ].map((row, i) => (
              <div
                key={row.label}
                className="flex items-center justify-between border-b border-white/5 pb-1.5 animate-fade-in-up"
                style={{ animationDelay: `${0.6 + i * 0.1}s`, opacity: 0 }}
              >
                <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                  {row.label}
                </span>
                <span className={`font-mono text-xs font-semibold ${row.color} animate-data-flicker`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-3 rounded border border-amber-500/20 bg-amber-500/5 px-3 py-1.5">
            <p className="font-mono text-[9px] tracking-wider text-amber-400/80 uppercase text-center leading-relaxed">
              Concept Interface — Illustrative data, not real-world performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
