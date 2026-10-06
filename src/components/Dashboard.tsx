import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Eye,
  Gauge,
  Radio,
  AlertTriangle,
  CheckCircle2,
  Camera,
  BrainCircuit,
  ArrowRight,
  User,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { DASHBOARD_METRICS, DASHBOARD_SIGNALS, DASHBOARD_INDICATORS } from '@/constants';

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-850" />
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(0, 229, 255, 0.05), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Product Experience
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              A clearer view of driver awareness.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              The Astrateq Gadgets experience is being designed around a simple
              idea: turn complex driver observations into a clearer
              understanding of driver state.
            </p>
          </div>
        </ScrollReveal>

        {/* Vision pipeline visual */}
        <ScrollReveal delay={100}>
          <div className="mt-12 rounded-2xl border border-white/8 bg-ink-800/40 p-5 lg:p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2">
              {[
                { icon: User, label: 'Driver' },
                { icon: Camera, label: 'Camera' },
                { icon: Eye, label: 'Observation' },
                { icon: BrainCircuit, label: 'Intelligence' },
                { icon: Activity, label: 'Driver State' },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 w-full lg:w-auto">
                  <div className="flex items-center gap-3 lg:gap-0">
                    <div className="flex items-center gap-2.5 rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-4 py-2.5">
                      <step.icon className="h-4 w-4 text-cyan-300" />
                      <span className="font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
                        {step.label}
                      </span>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center justify-center py-1 lg:py-0 lg:px-1">
                      <ArrowRight className="hidden lg:block h-4 w-4 text-cyan-400/30 animate-flow-pulse" />
                      <ArrowRight className="lg:hidden h-4 w-4 rotate-90 text-cyan-400/30 animate-flow-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-6">
            <DashboardPanel />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function DashboardPanel() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 bg-ink-900/80 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-3 bg-ink-800/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="ml-3 font-mono text-xs text-gray-400">
            astrateq.driver-intelligence — concept
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-mono text-[10px] tracking-widest text-cyan-300 uppercase">
            Live
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="grid lg:grid-cols-12 gap-px bg-white/5">
        {/* Left: Camera view */}
        <div className="lg:col-span-5 bg-ink-900 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-4 w-4 text-cyan-400" />
            <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              Camera Observation
            </span>
          </div>
          <CameraView tick={tick} />
        </div>

        {/* Center: Metrics */}
        <div className="lg:col-span-4 bg-ink-900 p-5 space-y-5">
          <div className="flex items-center gap-2 mb-1">
            <Gauge className="h-4 w-4 text-cyan-400" />
            <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              State Metrics
            </span>
          </div>
          {DASHBOARD_METRICS.map((metric, i) => (
            <MetricBar key={metric.label} metric={metric} delay={i * 200} />
          ))}

          {/* Indicators grid */}
          <div className="pt-3 border-t border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                Indicators
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {DASHBOARD_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="flex items-center justify-between rounded-md border border-white/5 bg-ink-800/50 px-2.5 py-2"
                >
                  <span className="font-mono text-[9px] tracking-wider text-gray-400 uppercase">
                    {ind.label}
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-cyan-300">
                    {ind.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Signals + telemetry */}
        <div className="lg:col-span-3 bg-ink-900 p-5 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Radio className="h-4 w-4 text-cyan-400" />
            <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
              Signals
            </span>
          </div>
          <div className="space-y-2.5">
            {DASHBOARD_SIGNALS.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-[10px] text-gray-400">
                  {signal.label}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                  <span className="font-mono text-[10px] text-white">
                    {signal.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Mini telemetry */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                Telemetry
              </span>
            </div>
            <TelemetryGraph tick={tick} />
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-white/8 px-5 py-3 bg-ink-800/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-md bg-cyan-400/10 border border-cyan-400/20 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-blink" />
            <span className="font-mono text-[10px] tracking-widest text-cyan-300 uppercase font-semibold">
              Driver State — Attentive
            </span>
          </div>
        </div>
        <span className="font-mono text-[10px] text-gray-400">
          Frame: {2400 + tick * 90} · 30 FPS
        </span>
      </div>

      {/* Disclaimer banner */}
      <div className="border-t border-amber-500/15 bg-amber-500/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-400/70 flex-shrink-0" />
          <p className="font-mono text-[10px] tracking-wider text-amber-400/80 uppercase">
            Concept Interface — Product currently in development — Illustrative data, not real-world performance results.
          </p>
        </div>
      </div>
    </div>
  );
}

function CameraView({ tick }: { tick: number }) {
  const overlayClass = tick % 2 === 0 ? 'border-cyan-400/50' : 'border-cyan-400/30';

  return (
    <div className="relative aspect-[4/3] rounded-lg border border-white/8 bg-ink-950 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-30" />

      {/* Face tracking box */}
      <div className={`absolute left-1/2 top-[30%] -translate-x-1/2 h-[35%] w-[28%] rounded border-2 ${overlayClass} transition-colors duration-500`}>
        {/* Corner markers */}
        {[
          '-top-px -left-px border-l-2 border-t-2',
          '-top-px -right-px border-r-2 border-t-2',
          '-bottom-px -left-px border-l-2 border-b-2',
          '-bottom-px -right-px border-r-2 border-b-2',
        ].map((pos) => (
          <div key={pos} className={`absolute ${pos} h-2 w-2 border-cyan-300`} />
        ))}

        {/* Label */}
        <div className="absolute -top-5 left-0 font-mono text-[8px] text-cyan-300 tracking-wider">
          DRIVER · 0.98
        </div>
      </div>

      {/* Gaze vector */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

      {/* HUD overlays */}
      <div className="absolute top-2 left-2 font-mono text-[8px] text-cyan-300/70 tracking-wider">
        CAM: FRONT · 1080p
      </div>
      <div className="absolute top-2 right-2 font-mono text-[8px] text-cyan-300/70 tracking-wider">
        REC ●
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[8px] text-cyan-300/70 tracking-wider">
        ORIENTATION: VALID
      </div>
      <div className="absolute bottom-2 right-2 font-mono text-[8px] text-cyan-300/70 tracking-wider">
        MIRROR: CORRECTED
      </div>

      {/* Scan line */}
      <div className="absolute left-2 right-2 top-0 h-px bg-cyan-400/30 animate-scan-line" />
    </div>
  );
}

interface MetricBarProps {
  metric: {
    label: string;
    value: number;
    unit: string;
    state: string;
    inverted?: boolean;
  };
  delay: number;
}

function MetricBar({ metric, delay }: MetricBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const displayValue = metric.value;
  const barWidth = metric.inverted ? 100 - metric.value : metric.value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.style.setProperty('--fill', `${barWidth}%`);
          el.classList.add('animate-bar-fill');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [barWidth]);

  const stateColor =
    metric.state === 'optimal' ? 'text-cyan-300' : 'text-amber-400';
  const barColor =
    metric.state === 'optimal' ? 'bg-cyan-400' : 'bg-amber-400';

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[10px] tracking-wider text-gray-400 uppercase">
          {metric.label}
        </span>
        <span className={`font-mono text-sm font-semibold ${stateColor}`}>
          {displayValue}{metric.unit}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          ref={ref}
          className={`h-full rounded-full ${barColor} opacity-80`}
          style={{ width: '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function TelemetryGraph({ tick }: { tick: number }) {
  const [bars, setBars] = useState<number[]>(Array.from({ length: 24 }, () => Math.random() * 60 + 30));

  useEffect(() => {
    setBars((prev) => [...prev.slice(1), Math.random() * 50 + 40]);
  }, [tick]);

  return (
    <div className="flex items-end gap-0.5 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-cyan-400/40 transition-all duration-300"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
