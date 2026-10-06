import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  Eye,
  Gauge,
  Radio,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { DASHBOARD_METRICS, DASHBOARD_SIGNALS } from '@/constants';

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-850" />
      <div className="absolute inset-0 grid-bg-fine opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(13, 181, 176, 0.06), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-teal-400 uppercase">
              Driver-Intelligence Dashboard
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              A concept interface for
              <br />
              real-time driver understanding.
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-300">
              The dashboard below illustrates how interpreted driver-state
              signals could be presented — gaze, drowsiness, posture, and
              distraction — unified into a single live view.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12">
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
    <div className="relative rounded-2xl border border-white/8 bg-ink-900/80 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 bg-ink-850/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="ml-3 font-mono text-xs text-ink-300">
            astrateq.driver-intelligence — concept
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-teal-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
          </span>
          <span className="font-mono text-[10px] tracking-widest text-teal-300 uppercase">
            Live
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="grid lg:grid-cols-12 gap-px bg-white/5">
        {/* Left: Camera view */}
        <div className="lg:col-span-5 bg-ink-900 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
              Camera Observation
            </span>
          </div>
          <CameraView tick={tick} />
        </div>

        {/* Center: Metrics */}
        <div className="lg:col-span-4 bg-ink-900 p-5 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Gauge className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
              State Metrics
            </span>
          </div>
          {DASHBOARD_METRICS.map((metric, i) => (
            <MetricBar key={metric.label} metric={metric} delay={i * 200} />
          ))}
        </div>

        {/* Right: Signals + telemetry */}
        <div className="lg:col-span-3 bg-ink-900 p-5 space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Radio className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
              Signals
            </span>
          </div>
          <div className="space-y-2.5">
            {DASHBOARD_SIGNALS.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-[10px] text-ink-300">
                  {signal.label}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-teal-400" />
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
              <Activity className="h-3.5 w-3.5 text-teal-400" />
              <span className="font-mono text-[10px] tracking-widest text-ink-300 uppercase">
                Telemetry
              </span>
            </div>
            <TelemetryGraph tick={tick} />
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-white/5 px-5 py-3 bg-ink-850/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-md bg-teal-400/10 border border-teal-400/20 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-blink" />
            <span className="font-mono text-[10px] tracking-widest text-teal-300 uppercase font-semibold">
              Driver State — Attentive
            </span>
          </div>
        </div>
        <span className="font-mono text-[10px] text-ink-300">
          Frame: {2400 + tick * 90} · 30 FPS
        </span>
      </div>

      {/* Disclaimer banner */}
      <div className="border-t border-amber-500/15 bg-amber-500/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-400/70 flex-shrink-0" />
          <p className="font-mono text-[10px] tracking-wider text-amber-400/70 uppercase">
            Concept Interface — Illustrative data, not real-world performance results.
          </p>
        </div>
      </div>
    </div>
  );
}

function CameraView({ tick }: { tick: number }) {
  const overlayClass = tick % 2 === 0 ? 'border-teal-400/50' : 'border-teal-400/30';

  return (
    <div className="relative aspect-[4/3] rounded-lg border border-white/8 bg-ink-950 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-40" />

      {/* Face tracking box */}
      <div className={`absolute left-1/2 top-[30%] -translate-x-1/2 h-[35%] w-[28%] rounded border-2 ${overlayClass} transition-colors duration-500`}>
        {/* Corner markers */}
        {[
          '-top-px -left-px border-l-2 border-t-2',
          '-top-px -right-px border-r-2 border-t-2',
          '-bottom-px -left-px border-l-2 border-b-2',
          '-bottom-px -right-px border-r-2 border-b-2',
        ].map((pos) => (
          <div key={pos} className={`absolute ${pos} h-2 w-2 border-teal-300`} />
        ))}

        {/* Label */}
        <div className="absolute -top-5 left-0 font-mono text-[8px] text-teal-300 tracking-wider">
          DRIVER · 0.98
        </div>
      </div>

      {/* Gaze vector */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-px w-12 bg-gradient-to-r from-teal-400/60 to-transparent"
          style={{ transform: 'rotate(0deg)' }}
        />
      </div>

      {/* HUD overlays */}
      <div className="absolute top-2 left-2 font-mono text-[8px] text-teal-300/70 tracking-wider">
        CAM: FRONT · 1080p
      </div>
      <div className="absolute top-2 right-2 font-mono text-[8px] text-teal-300/70 tracking-wider">
        REC ●
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[8px] text-teal-300/70 tracking-wider">
        ORIENTATION: VALID
      </div>
      <div className="absolute bottom-2 right-2 font-mono text-[8px] text-teal-300/70 tracking-wider">
        MIRROR: CORRECTED
      </div>

      {/* Scan line */}
      <div className="absolute left-2 right-2 top-0 h-px bg-teal-400/30 animate-scan-line" />
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
  const displayValue = metric.inverted ? metric.value : metric.value;
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
    metric.state === 'optimal' ? 'text-teal-300' : 'text-amber-400';
  const barColor =
    metric.state === 'optimal' ? 'bg-teal-400' : 'bg-amber-400';

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[10px] tracking-wider text-ink-300 uppercase">
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
          style={{ width: '0%' }}
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
          className="flex-1 rounded-sm bg-teal-400/40 transition-all duration-300"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}
