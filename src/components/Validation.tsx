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
  Clock,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { VALIDATION_STAGES } from '@/constants';

const STATUS_CONFIG = {
  Complete: {
    icon: CheckCircle2,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    label: 'Complete',
  },
  'In Progress': {
    icon: Loader2,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/30',
    label: 'In Progress',
  },
  'Future Stage': {
    icon: Clock,
    color: 'text-gray-400',
    bg: 'bg-white/5',
    border: 'border-white/10',
    label: 'Future Stage',
  },
} as const;

const PHASE_ICONS = [Cpu, Cpu, Cloud, Camera, Smartphone];

export default function Validation() {
  return (
    <section id="validation" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Validation Timeline
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              Engineering checkpoints,
              <br />
              honestly reported.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              Every milestone below reflects actual development progress —
              what has been built, what is being hardened, and what has not yet
              started. No claimed performance, no certifications, no launch.
            </p>
          </div>
        </ScrollReveal>

        {/* Build badge */}
        <ScrollReveal delay={100}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3">
            <GitBranch className="h-5 w-5 text-cyan-400" />
            <div>
              <span className="font-mono text-sm font-semibold text-white">
                Build #68
              </span>
              <span className="ml-2 font-mono text-xs text-cyan-300">
                — Cloud build & automated testing passed
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Engineering visual — supporting element */}
        <ScrollReveal delay={150}>
          <div className="mt-10 relative aspect-[16/5] rounded-xl border border-white/8 overflow-hidden bg-ink-900 max-w-3xl">
            <img
              src="https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Code on a dark monitor representing the engineering and testing work behind Astrateq Gadgets"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 to-transparent" />
            <div className="absolute inset-0 grid-bg-fine opacity-10" />

            {/* Label */}
            <div className="absolute top-3 left-3 font-mono text-[9px] text-cyan-400/50 tracking-wider uppercase">
              Engineering & Testing Environment
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-cyan-400/40 tracking-wider uppercase">
              Build #68 · Codemagic CI
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent lg:-translate-x-1/2" />

          <div className="space-y-8">
            {VALIDATION_STAGES.map((event, i) => {
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
                      <div className="rounded-xl border border-white/8 bg-ink-800/60 p-5 transition-all hover:border-white/12">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-xs text-cyan-400/60 font-semibold">
                              {event.index}
                            </span>
                            <h3 className="font-display text-lg font-semibold text-white">
                              {event.phase}
                            </h3>
                          </div>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md ${config.bg} border ${config.border} px-2 py-0.5 flex-shrink-0`}
                          >
                            <config.icon
                              className={`h-3 w-3 ${config.color} ${
                                String(event.status) === 'In Progress' ? 'animate-spin' : ''
                              }`}
                              aria-hidden="true"
                            />
                            <span
                              className={`font-mono text-[10px] tracking-wider uppercase ${config.color}`}
                            >
                              {config.label}
                            </span>
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          {event.description}
                        </p>
                        <ul className="space-y-2">
                          {event.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <span
                                className={`mt-1.5 h-1 w-1 rounded-full flex-shrink-0 ${
                                  String(event.status) === 'Complete'
                                    ? 'bg-cyan-400'
                                    : String(event.status) === 'Future Stage'
                                    ? 'bg-gray-500'
                                    : 'bg-amber-400'
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
          <div className="mt-16 rounded-xl border border-white/8 bg-ink-800/40 p-6 lg:p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-4">
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
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <Circle className="mt-0.5 h-3.5 w-3.5 text-gray-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-400 border-t border-white/5 pt-4">
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
