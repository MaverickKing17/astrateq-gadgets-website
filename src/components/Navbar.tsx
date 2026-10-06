import { useEffect, useState } from 'react';
import { Menu, X, Radar } from 'lucide-react';
import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-900/90 backdrop-blur-xl border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <button
          onClick={() => handleNav('#hero')}
          className="flex items-center gap-2.5 group"
          aria-label="Astrateq Gadgets home"
        >
          <Radar className="h-5 w-5 text-cyan-400 transition-transform group-hover:rotate-180 duration-700" />
          <span className="font-display text-base font-semibold tracking-wide text-white">
            ASTRATEQ
            <span className="text-cyan-400">.</span>
            <span className="text-gray-400 font-normal text-xs ml-1">GADGETS</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-px bg-cyan-400/0 group-hover:bg-cyan-400/60 transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            BUILD #68
          </span>
          <button
            onClick={() => handleNav('#early-access')}
            className="inline-flex items-center rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-ink-900 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            Join Early Access
          </button>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-ink-800/95 backdrop-blur-xl border-t border-white/8">
          <div className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-2 py-3 text-base font-medium text-gray-300 hover:text-white border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#early-access')}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-ink-900 transition-all hover:bg-cyan-300"
            >
              Join Early Access
            </button>
            <span className="flex items-center gap-2 px-2 pt-4 text-xs font-mono text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-cyan-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              BUILD #68 — PASSED
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
