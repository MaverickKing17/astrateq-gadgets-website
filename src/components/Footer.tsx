import { Radar, Mail, ArrowUp } from 'lucide-react';
import { FOOTER_NAV } from '@/constants';

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/8 bg-ink-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 100%, rgba(0, 229, 255, 0.04), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Radar className="h-5 w-5 text-cyan-400" />
              <span className="font-display text-base font-semibold tracking-wide text-white">
                ASTRATEQ
                <span className="text-cyan-400">.</span>
                <span className="text-gray-400 font-normal text-xs ml-1">GADGETS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-300">
              Driver Awareness Technology. An early-stage driver-awareness
              technology project currently in pre-launch validation for the
              Canadian market.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:contact@astrateq.gadgets"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-4">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {FOOTER_NAV.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-gray-400 uppercase text-center sm:text-left">
            © 2026 Astrateq Gadgets · Pre-launch technology project · Canada
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
