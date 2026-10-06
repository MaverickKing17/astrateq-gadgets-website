import {
  CheckCircle2,
  Loader2,
  Circle,
  GitBranch,
  Cloud,
  Camera,
  Cpu,
  FlaskConical,
  Smartphone,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { TIMELINE_EVENTS } from '@/constants';

const STATUS_CONFIG = {
  Complete: {
    icon: CheckCircle2,
    color: 'text-teal-400',
    bg: 'bg-teal-400/10',
    border: 'border-teal-400/30',
    label: 'Complete',
  },
  'In Progress': {
    icon: Loader2,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    label: 'In Progress',
  },
  Pending: {
    icon: Circle,
    color: 'text-ink-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
    label: 'Pending',
  },
} as const;

const PHASE_ICONS = [Cpu, FlaskConical, Camera, Cloud, GitBranch, Smartphone];

export default function Validation() {
  return (
    <section id="validation" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-teal-400 uppercase">
              Validation Timeline
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              Engineering checkpoints,
              <br />
              honestly reported.
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-300">
              Every milestone below reflects actual development progress —
              what has been built, what is being hardened, and what has not yet
              started. No claimed performance, no certifications, no launch.
            </p>
          </div>
        </ScrollReveal>

        {/* Build badge */}
        <ScrollReveal delay={100}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-teal-400/20 bg-teal-400/5 px-5 py-3">
            <GitBranch className="h-5 w-5 text-teal-400" />
            <div>
              <span className="font-mono text-sm font-semibold text-white">
                Build #68
              </span>
              <span className="ml-2 font-mono text-xs text-teal-300">
                — Cloud build & automated testing passed
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/30 via-white/10 to-transparent lg:-translate-x-1/2" />

          <div className="space-y-8">
            {TIMELINE_EVENTS.map((event, i) => {
              const config = STATUS_CONFIG[event.status as keyof typeof STATUS_CONFIG];
              const Icon = PHASE_ICONS[i] || CheckCircle2;
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal key={event.phase} delay={i * 80}>
                  <div
                    className={`relative flex items-start gap-6 lg:gap-0 ${
                      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-10 flex-shrink-0">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${config.bg} border ${config.border}`}
                      >
                        <Icon className={`h-4 w-4 ${config.color}`} />
                      </div>
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />

                    {/* Card */}
                    <div className="flex-1 ml-12 lg:ml-0 lg:w-1/2 lg:px-8">
                      <div className="rounded-xl border border-white/8 bg-ink-850/60 p-5 transition-all hover:border-white/12">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-display text-lg font-semibold text-white">
                            {event.phase}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md ${config.bg} border ${config.border} px-2 py-0.5`}
                          >
                            <config.icon
                              className={`h-3 w-3 ${config.color} ${
                                event.status === 'In Progress' ? 'animate-spin' : ''
                              }`}
                            />
                            <span
                              className={`font-mono text-[10px] tracking-wider uppercase ${config.color}`}
                            >
                              {config.label}
                            </span>
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {event.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-ink-300"
                            >
                              <span
                                className={`mt-1.5 h-1 w-1 rounded-full flex-shrink-0 ${
                                  event.status === 'Complete'
                                    ? 'bg-teal-400'
                                    : event.status === 'In Progress'
                                    ? 'bg-amber-400'
                                    : 'bg-ink-300'
                                }`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Honest disclosure */}
        <ScrollReveal delay={200}>
          <div className="mt-16 rounded-xl border border-white/8 bg-ink-850/40 p-6 lg:p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              What this project is not — yet
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'No physical iPhone validation completed',
                'No commercial launch',
                'No established customers or fleet deployments',
                'No public partnerships',
                'No claimed performance statistics',
                'No certifications or regulatory approvals',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink-300"
                >
                  <Circle className="mt-0.5 h-3.5 w-3.5 text-ink-300/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-300/80 border-t border-white/5 pt-4">
              Astrateq Gadgets does not claim that this technology prevents
              crashes or guarantees safer driving. The project is in active
              engineering development, and this timeline reflects its current,
              honest state.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
