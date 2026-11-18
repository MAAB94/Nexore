import React from 'react';
import { ArrowUpRight, ChevronRight, Cpu, Eye, Navigation, Zap } from 'lucide-react';
import { TECHNICAL_VERTICALS, TechnicalVertical } from '../data/nexoreData';
import { VerticalSchematic } from './NexoreMark';

interface VerticalsSectionProps {
  activeVerticalId: TechnicalVertical['id'];
  onChangeVertical: (id: TechnicalVertical['id']) => void;
  onSelectVerticalForInquiry: (verticalTitle: string) => void;
}

const VERTICAL_ICONS: Record<TechnicalVertical['id'], React.ReactNode> = {
  isr: <Navigation className="w-4 h-4 shrink-0" />,
  gpu: <Cpu className="w-4 h-4 shrink-0" />,
  c2: <Eye className="w-4 h-4 shrink-0" />,
  pwr: <Zap className="w-4 h-4 shrink-0" />,
};

export const VerticalsSection: React.FC<VerticalsSectionProps> = ({
  activeVerticalId,
  onChangeVertical,
  onSelectVerticalForInquiry,
}) => {
  const activeVertical =
    TECHNICAL_VERTICALS.find((v) => v.id === activeVerticalId) ?? TECHNICAL_VERTICALS[0];

  return (
    <section
      id="verticals"
      className="bg-[#F8FAFC] text-slate-900 py-20 lg:py-28 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2.5 max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
              02 · Specialization &amp; Portfolio
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#071120] text-balance">
              Four Technical Verticals
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            Integrated hardware and infrastructure solutions engineered for defense-grade
            reliability and enterprise-scale deployment.
          </p>
        </div>

        {/* Master-Detail Executive Dossier Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Selector Rail */}
          <div
            role="tablist"
            aria-label="Technical verticals"
            className="lg:col-span-4 flex flex-col gap-2"
          >
            {TECHNICAL_VERTICALS.map((vertical) => {
              const isActive = vertical.id === activeVertical.id;
              return (
                <button
                  key={vertical.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => onChangeVertical(vertical.id)}
                  className={`text-left p-5 rounded-lg border transition-colors duration-150 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5FD6] ${
                    isActive
                      ? 'bg-[#071120] text-white border-[#071120]'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider">
                      <span className={isActive ? 'text-[#C89B3C]' : 'text-slate-500'}>
                        {vertical.roman}
                      </span>
                      <span aria-hidden="true" className="text-slate-500">·</span>
                      <span className={isActive ? 'text-slate-300' : 'text-slate-400'}>
                        {vertical.code}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base truncate">
                      {vertical.shortTitle}
                    </h3>
                    <p
                      className={`text-xs truncate ${
                        isActive ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {vertical.subtitle}
                    </p>
                  </div>
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-white/10 text-[#C89B3C]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isActive ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      VERTICAL_ICONS[vertical.id]
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Dossier Specification Sheet */}
          <div
            role="tabpanel"
            className="lg:col-span-8 bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Header Bar */}
              <div className="px-6 py-6 sm:px-8 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-slate-500 uppercase tracking-wider">
                    <span className="text-[#C89B3C] font-semibold">{activeVertical.roman}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeVertical.code}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#071120]">
                    {activeVertical.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectVerticalForInquiry(activeVertical.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <span>Inquire About {activeVertical.code}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Capabilities List */}
              <div className="divide-y divide-slate-200">
                {activeVertical.capabilities.map((cap) => (
                  <div
                    key={cap.index}
                    className="px-6 py-5 sm:px-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-mono text-sm font-semibold text-[#1D5FD6] tabular-nums pt-0.5">
                        {cap.index}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-display font-semibold text-base text-[#071120]">
                          {cap.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap shrink-0 pt-0.5">
                      {cap.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Architectural Topology & Spec Strip */}
            <div className="bg-[#071120] text-white border-t border-slate-200 grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-6 aspect-[16/10] border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                <VerticalSchematic verticalId={activeVertical.id} />
              </div>

              <div className="md:col-span-6 p-6 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#C89B3C]">
                    Architecture Summary
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeVertical.summary}
                  </p>
                </div>

                <dl className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {activeVertical.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[10px] font-mono uppercase text-slate-400">
                        {spec.label}
                      </dt>
                      <dd className="text-xs font-semibold text-white mt-0.5 leading-snug">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
