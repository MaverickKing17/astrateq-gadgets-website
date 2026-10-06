import {
  Eye,
  Cpu,
  BrainCircuit,
  BellRing,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { PIPELINE_STAGES } from '@/constants';

const ICONS = { Eye, Cpu, BrainCircuit, BellRing };

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(13, 181, 176, 0.05), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-teal-400 uppercase">
              Technology
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white text-balance">
              Observe. Interpret. Understand. Alert.
            </h2>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-300">
              Four stages form a continuous pipeline — from raw camera
              observation to calibrated re-engagement alerts. Each stage has
              been built and is at a distinct point in its validation journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline flow */}
        <div className="mt-16 lg:mt-20">
          {/* Connector line — desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[88px] left-0 right-0 h-px bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-teal-400/0" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
            {PIPELINE_STAGES.map((stage, i) => {
              const Icon = ICONS[stage.icon as keyof typeof ICONS];
              return (
                <ScrollReveal key={stage.id} delay={i * 120}>
                  <PipelineCard
                    index={stage.index}
                    title={stage.title}
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
      </div>
    </section>
  );
}

interface PipelineCardProps {
  index: string;
  title: string;
  description: string;
  metrics: readonly string[];
  icon: React.ComponentType<{ className?: string }>;
  isLast: boolean;
}

function PipelineCard({
  index,
  title,
  description,
  metrics,
  icon: Icon,
  isLast,
}: PipelineCardProps) {
  return (
    <div className="group relative">
      {/* Node dot on connector line */}
      <div className="hidden lg:flex absolute top-[80px] left-1/2 -translate-x-1/2 z-10">
        <div className="h-4 w-4 rounded-full bg-ink-850 border-2 border-teal-400/40 group-hover:border-teal-400 transition-colors" />
      </div>

      {/* Card */}
      <div className="relative rounded-xl border border-white/8 bg-ink-850/60 p-6 transition-all duration-500 group-hover:border-teal-400/20 group-hover:bg-ink-800/60 h-full">
        {/* Index + Icon */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-400/8 border border-teal-400/15 transition-all group-hover:bg-teal-400/15 group-hover:border-teal-400/30">
            <Icon className="h-6 w-6 text-teal-300" />
          </div>
          <span className="font-mono text-2xl font-bold text-white/8 group-hover:text-teal-400/20 transition-colors">
            {index}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-300 mb-5">
          {description}
        </p>

        <ul className="space-y-2">
          {metrics.map((metric) => (
            <li
              key={metric}
              className="flex items-start gap-2 text-xs text-ink-300"
            >
              <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-400 flex-shrink-0" />
              {metric}
            </li>
          ))}
        </ul>

        {/* Arrow connector — desktop */}
        {!isLast && (
          <div className="hidden lg:flex absolute top-[80px] -right-2 z-10 items-center">
            <ArrowRight className="h-4 w-4 text-teal-400/30" />
          </div>
        )}
      </div>
    </div>
  );
}
