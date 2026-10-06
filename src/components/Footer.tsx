import { Radar, Mail, Github, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 100%, rgba(13, 181, 176, 0.05), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Radar className="h-5 w-5 text-teal-400" />
              <span className="font-display text-base font-semibold tracking-wide text-white">
                ASTRATEQ
                <span className="text-teal-400">.</span>
                <span className="text-ink-300 font-normal text-xs ml-1">GADGETS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
              A pre-launch iOS driver-awareness technology project for the
              Canadian market. Deterministic simulation, camera observation,
              and driver-intelligence interpretation — in active development.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:contact@astrateq.gadgets"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-ink-300 hover:text-teal-400 hover:border-teal-400/30 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-ink-300 hover:text-teal-400 hover:border-teal-400/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-widest text-ink-300 uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] tracking-widest text-ink-300 uppercase mb-4">
              Project Status
            </h4>
            <div className="rounded-lg border border-white/8 bg-ink-850/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-ink-300">Current Build</span>
                <span className="font-mono text-xs font-semibold text-teal-300">
                  #68
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-ink-300">Stage</span>
                <span className="font-mono text-xs text-amber-400">
                  Reliability Hardening
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-300">Launch</span>
                <span className="font-mono text-xs text-ink-300">
                  Not Announced
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-ink-300/60 uppercase text-center sm:text-left">
            © 2026 Astrateq Gadgets · Pre-Launch Technology Project · Canada
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-medium text-ink-300 hover:text-teal-400 transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
