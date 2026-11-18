import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NexoreEmblem } from './NexoreMark';

interface NavbarProps {
  onNavigateContact: () => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Verticals', href: '#verticals' },
  { label: 'Products', href: '#products' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Matrix', href: '#matrix' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigateContact }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleActionClick = () => {
    setMobileOpen(false);
    onNavigateContact();
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#071120]/95 backdrop-blur-md border-b border-white/10 shadow-sm'
          : 'bg-[#071120] border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-white font-display font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5FD6]"
        >
          <NexoreEmblem className="w-7 h-7 text-white shrink-0" />
          <span className="tracking-[0.04em]">NEXORE</span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-slate-300 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#C89B3C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D5FD6]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleActionClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request Consultation
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1628] border-b border-white/10 px-5 py-4 space-y-2">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={handleActionClick}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors cursor-pointer"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
