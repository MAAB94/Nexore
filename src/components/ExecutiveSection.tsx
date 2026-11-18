import React from 'react';
import { COMPANY_INFO, EXECUTIVE_METRICS, STRATEGIC_PILLARS } from '../data/nexoreData';

export const ExecutiveSection: React.FC = () => {
  return (
    <section id="overview" className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
        {/* Executive Summary 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2.5">
              <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
                01 · Executive Summary
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#071120] text-balance leading-tight">
                Mission-Ready Technology Integration
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed max-w-2xl">
              <p>
                NEXORE is a premier, mission-ready technology integrator specializing in the rapid
                deployment of specialized hardware, surveillance networks, and critical electronics
                for enterprise and defense applications.
              </p>
              <p>
                Our expertise bridges cutting-edge technology and rigorous operational environments.
                We provide ruggedized systems, high-performance computing, and resilient
                infrastructure for defense contractors, armed forces, and multi-sector enterprises —
                reliable, compliant, and rapidly scalable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full bg-[#071120] text-white rounded-lg border border-slate-800 p-8 sm:p-10 flex flex-col justify-between gap-10">
              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#C89B3C]">
                  Core Mandate
                </p>
                <blockquote className="font-display font-semibold text-2xl sm:text-[1.65rem] leading-[1.3] tracking-tight text-white text-balance">
                  We don&apos;t just supply equipment — we architect and deliver end-to-end mission
                  capabilities.
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-1.5">
                <p className="text-sm text-slate-200 font-medium">
                  Trusted by defense, government, and enterprise clients across Pakistan.
                </p>
                <p className="text-xs font-mono text-slate-400">
                  {COMPANY_INFO.authorization}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional 4-Column KPI Ledger (Hairline Dividers, Zero Box Clutter) */}
        <div className="border-y border-slate-200 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-slate-200">
          {EXECUTIVE_METRICS.map((metric) => (
            <div key={metric.label} className="px-6 py-8 text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-[#071120] tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="mt-2 text-[11px] font-mono font-medium tracking-[0.12em] uppercase text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Three Strategic Pillars */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
                Strategic Foundation
              </p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#071120] text-balance">
                Three Pillars That Define NEXORE
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-sm">
              Engineered around institutional resilience, technical innovation, and uninterrupted
              operational readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STRATEGIC_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="border-t-2 border-[#071120] pt-6 flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#C89B3C] font-semibold uppercase tracking-wider">
                      {pillar.index}
                    </span>
                    <span className="text-slate-400 uppercase tracking-wider">{pillar.focus}</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-[#071120]">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
