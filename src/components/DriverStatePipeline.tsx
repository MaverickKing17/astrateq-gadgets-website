import { ArrowRight, CheckCircle2, AlertTriangle, Eye, EyeOff, Moon, Activity } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface StateStep {
  state: string;
  label: string;
  icon: typeof CheckCircle2;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
}

const STATE_SEQUENCE: StateStep[] = [
  {
    state: 'ATTENTIVE',
    label: 'Attentive',
    icon: CheckCircle2,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/30',
    bgColor: 'bg-cyan-400/5',
    description: 'Gaze forward, stable posture',
  },
  {
    state: 'DISTRACTED',
    label: 'Distracted',
    icon: EyeOff,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    bgColor: 'bg-amber-400/5',
    description: 'Gaze away, attention shifted',
  },
  {
    state: 'RECOVERED',
    label: 'Recovered',
    icon: CheckCircle2,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/30',
    bgColor: 'bg-cyan-400/5',
    description: 'Attention re-engaged',
  },
  {
    state: 'DROWSY',
    label: 'Drowsy',
    icon: Moon,
    color: 'text-amber-400',
    borderColor: 'border-amber-400/30',
    bgColor: 'bg-amber-400/5',
    description: 'Blink rate up, posture dropping',
  },
  {
    state: 'RECOVERED',
    label: 'Recovered',
    icon: CheckCircle2,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/30',
    bgColor: 'bg-cyan-400/5',
    description: 'Awareness signal delivered',
  },
];

export default function DriverStatePipeline() {
  return (
    <section id="pipeline" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(0, 229, 255, 0.06), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Intelligence Pipeline
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              From observation to driver state.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              Astrateq doesn't just detect a face — it interprets observations
              over time into a continuous understanding of the driver's state.
              Here's how the intelligence pipeline moves through real driver
              conditions.
            </p>
          </div>
        </ScrollReveal>

        {/* State sequence visualization */}
        <ScrollReveal delay={150}>
          <div className="mt-14">
            {/* Horizontal state flow — desktop */}
            <div className="hidden lg:flex items-stretch gap-2">
              {STATE_SEQUENCE.map((step, i) => (
                <div key={i} className="flex items-stretch gap-2 flex-1">
                  <div className={`relative flex-1 rounded-xl border ${step.borderColor} ${step.bgColor} p-5 transition-all hover:scale-[1.02]`}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg border ${step.borderColor} ${step.bgColor}`}>
                        <step.icon className={`h-4.5 w-4.5 ${step.color}`} />
                      </div>
                      <span className={`font-mono text-[11px] tracking-wider ${step.color} uppercase font-semibold`}>
                        {step.state}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                    {/* State indicator dot */}
                    <div className={`absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full ${step.color.replace('text-', 'bg-')} animate-pulse`} />
                  </div>
                  {i < STATE_SEQUENCE.length - 1 && (
                    <div className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-cyan-400/30 animate-flow-pulse flex-shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Vertical state flow — mobile */}
            <div className="lg:hidden space-y-3">
              {STATE_SEQUENCE.map((step, i) => (
                <div key={i}>
                  <div className={`relative rounded-xl border ${step.borderColor} ${step.bgColor} p-4`}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${step.borderColor} ${step.bgColor}`}>
                        <step.icon className={`h-4 w-4 ${step.color}`} />
                      </div>
                      <span className={`font-mono text-[11px] tracking-wider ${step.color} uppercase font-semibold`}>
                        {step.state}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < STATE_SEQUENCE.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="h-4 w-4 rotate-90 text-cyan-400/30 animate-flow-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Observation → Intelligence breakdown */}
        <ScrollReveal delay={250}>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {/* Observation side */}
            <div className="rounded-xl border border-white/8 bg-ink-800/50 p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Eye className="h-5 w-5 text-cyan-400" />
                <h3 className="font-display text-lg font-semibold text-white">
                  What the camera observes
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Gaze direction', value: 'Where the driver is looking' },
                  { label: 'Head position', value: 'Posture and head orientation' },
                  { label: 'Eye openness', value: 'Blink patterns and eye state' },
                  { label: 'Blink rate', value: 'Frequency over time' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intelligence side */}
            <div className="rounded-xl border border-white/8 bg-ink-800/50 p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Activity className="h-5 w-5 text-cyan-400" />
                <h3 className="font-display text-lg font-semibold text-white">
                  What the intelligence interprets
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Driver state', value: 'Attentive, distracted, or drowsy' },
                  { label: 'Temporal patterns', value: 'Momentary glance vs. sustained drift' },
                  { label: 'Awareness signals', value: 'When to prompt re-engagement' },
                  { label: 'Recovery detection', value: 'Confirming attention returned' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                    <div>
                      <span className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="text-sm text-gray-300 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Disclaimer */}
        <ScrollReveal delay={300}>
          <div className="mt-8 flex items-center gap-2 rounded-lg border border-amber-500/15 bg-amber-500/5 px-4 py-3">
            <AlertTriangle className="h-4 w-4 text-amber-400/70 flex-shrink-0" />
            <p className="font-mono text-[10px] tracking-wider text-amber-400/70 uppercase">
              Concept pipeline — Illustrative state sequence, not real-world performance results.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
