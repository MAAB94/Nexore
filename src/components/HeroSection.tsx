import React from 'react';
import { ArrowRight, ArrowUpRight, FileText, Mail } from 'lucide-react';
import {
  COMPANY_INFO,
  HERO_PILLARS,
  TECHNICAL_VERTICALS,
  TechnicalVertical,
} from '../data/nexoreData';

interface HeroSectionProps {
  onRequestConsultation: () => void;
  onOpenProfilePdf: () => void;
  onJumpToVertical: (verticalId: TechnicalVertical['id']) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestConsultation,
  onOpenProfilePdf,
  onJumpToVertical,
}) => {
  return (
    <section
      id="top"
      className="relative bg-[#071120] text-white overflow-hidden border-b border-white/10"
    >
      {/* Subtle architectural coordinate grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Subtle directional depth vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050C18]/70"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Institutional Header Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-3 font-medium tracking-[0.14em] uppercase text-[#C89B3C]">
            <span>Defense</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Government</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Enterprise</span>
          </div>
          <div className="font-mono text-[11px] tracking-wide text-slate-400">
            {COMPANY_INFO.legalName} · {COMPANY_INFO.authorization}
          </div>
        </div>

        {/* Main 2-Column Executive Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center pt-12 lg:pt-16">
          <div className="lg:col-span-7 space-y-7">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-slate-400">
              {COMPANY_INFO.tagline}
            </p>

            <h1 className="font-display font-bold tracking-tight text-white text-balance text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06]">
              Enterprise Technology &amp; Defense Systems Integration
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Authorized Technology Integrator and Reliable Solutions Provider for Pakistan&apos;s
              defense, government, and corporate sectors. We architect mission-ready hardware,
              resilient infrastructure, and end-to-end operational capabilities.
            </p>

            {/* Primary CTA + Secondary Profile Document Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenProfilePdf}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 rounded transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5FD6]"
              >
                <FileText className="w-4 h-4 text-[#C89B3C]" />
                <span>Company Profile (PDF)</span>
              </button>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-2 py-2 text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Domain Index & Crest Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B182E] border border-white/12 rounded-lg overflow-hidden">
              {/* Corporate Crest Header */}
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between gap-4 bg-[#0D1D36]">
                <div className="flex items-center gap-3.5">
                  <div className="h-11 px-2.5 py-1.5 rounded bg-white flex items-center justify-center shrink-0">
                    <img
                      src="/assets/nexore-mark.png"
                      alt="NEXORE (Private) Limited Emblem"
                      referrerPolicy="no-referrer"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white tracking-wide">
                      NEXORE (PRIVATE) LIMITED
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      NASTP · Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#C89B3C] uppercase tracking-wider">
                  4 Verticals
                </span>
              </div>

              {/* Interactive Domain Directory */}
              <div className="divide-y divide-white/10">
                {TECHNICAL_VERTICALS.map((vertical) => (
                  <button
                    key={vertical.id}
                    type="button"
                    onClick={() => onJumpToVertical(vertical.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span className="font-mono text-xs font-semibold text-[#C89B3C] tabular-nums shrink-0">
                        {vertical.code}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-sm text-white truncate group-hover:text-[#60A5FA] transition-colors">
                          {vertical.shortTitle}
                        </p>
                        <p className="text-xs text-slate-400 truncate mt-0.5">
                          {vertical.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Institutional Commitment Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 bg-[#0A1628]/80 rounded-lg mt-14">
          {HERO_PILLARS.map((item) => (
            <div key={item.index} className="p-6 sm:p-7 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#C89B3C] tabular-nums">
                  {item.index}
                </span>
              </div>
              <h2 className="font-display font-semibold text-base text-white">
                {item.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
