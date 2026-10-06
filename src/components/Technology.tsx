import {
  Eye,
  Cpu,
  BrainCircuit,
  BellRing,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PIPELINE_STAGES, PIPELINE_FLOW } from '@/constants';

const ICONS = { Eye, Cpu, BrainCircuit, BellRing };

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(0, 229, 255, 0.04), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Technology
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              Observe. Interpret. Understand. Alert.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              Four stages form a continuous pipeline — from raw camera
              observation to calibrated re-engagement alerts. Each stage has
              been built and is at a distinct point in its validation journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline cards */}
        <div className="mt-16 lg:mt-20">
          {/* Connector line — desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[88px] left-0 right-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
            {PIPELINE_STAGES.map((stage, i) => {
              const Icon = ICONS[stage.icon as keyof typeof ICONS];
              return (
                <ScrollReveal key={stage.id} delay={i * 120}>
                  <PipelineCard
                    index={stage.index}
                    title={stage.title}
                    short={stage.short}
                    description={stage.description}
                    metrics={stage.metrics as readonly string[]}
                    icon={Icon}
                    isLast={i === PIPELINE_STAGES.length - 1}
                  />
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Flow diagram */}
        <ScrollReveal delay={200}>
          <div className="mt-16 lg:mt-20 rounded-2xl border border-white/8 bg-ink-800/50 p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2">
              {PIPELINE_FLOW.map((step, i) => (
                <div key={step.label} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 w-full lg:w-auto">
                  <div className="flex items-center gap-3 lg:gap-0">
                    <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-center">
                      <span className="font-mono text-[11px] tracking-wider text-cyan-300 uppercase">
                        {step.label}
                      </span>
                    </div>
                  </div>
                  {i < PIPELINE_FLOW.length - 1 && (
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
      </div>
    </section>
  );
}

interface PipelineCardProps {
  index: string;
  title: string;
  short: string;
  description: string;
  metrics: readonly string[];
  icon: React.ComponentType<{ className?: string }>;
  isLast: boolean;
}

function PipelineCard({
  index,
  title,
  short,
  description,
  metrics,
  icon: Icon,
  isLast,
}: PipelineCardProps) {
  return (
    <div className="group relative">
      {/* Node dot on connector line */}
      <div className="hidden lg:flex absolute top-[80px] left-1/2 -translate-x-1/2 z-10">
        <div className="h-4 w-4 rounded-full bg-ink-800 border-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
      </div>

      {/* Card */}
      <div className="relative rounded-xl border border-white/8 bg-ink-800/60 p-6 transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-ink-750/60 h-full">
        {/* Index + Icon */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/8 border border-cyan-400/15 transition-all group-hover:bg-cyan-400/15 group-hover:border-cyan-400/30">
            <Icon className="h-6 w-6 text-cyan-300" />
          </div>
          <span className="font-mono text-2xl font-bold text-white/8 group-hover:text-cyan-400/20 transition-colors">
            {index}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-1.5">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-400 mb-3">{short}</p>
        <p className="text-sm leading-relaxed text-gray-300 mb-5">
          {description}
        </p>

        <ul className="space-y-2">
          {metrics.map((metric) => (
            <li
              key={metric}
              className="flex items-start gap-2 text-xs text-gray-400"
            >
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
              {metric}
            </li>
          ))}
        </ul>

        {/* Arrow connector — desktop */}
        {!isLast && (
          <div className="hidden lg:flex absolute top-[80px] -right-2 z-10 items-center">
            <ArrowRight className="h-4 w-4 text-cyan-400/30" />
          </div>
        )}
      </div>
    </div>
  );
}
