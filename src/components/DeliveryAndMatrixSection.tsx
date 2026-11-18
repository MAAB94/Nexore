import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, RefreshCw, ShieldCheck, Truck } from 'lucide-react';
import {
  CAPABILITY_MATRIX,
  COMMITMENT_STANDARDS,
  DELIVERY_PIPELINE,
  STRATEGIC_COMPETENCIES,
} from '../data/nexoreData';

interface DeliveryAndMatrixSectionProps {
  onSelectCapabilityForInquiry: (focusArea: string) => void;
}

const COMPETENCY_ICONS = [
  <ShieldCheck key="comp" className="w-5 h-5 text-[#1D5FD6]" />,
  <Truck key="supply" className="w-5 h-5 text-[#1D5FD6]" />,
  <RefreshCw key="lifecycle" className="w-5 h-5 text-[#1D5FD6]" />,
];

export const DeliveryAndMatrixSection: React.FC<DeliveryAndMatrixSectionProps> = ({
  onSelectCapabilityForInquiry,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'isr' | 'gpu' | 'c2' | 'pwr'>('all');

  const activeStep = DELIVERY_PIPELINE[activeStepIndex] ?? DELIVERY_PIPELINE[0];
  const filteredMatrix =
    matrixFilter === 'all'
      ? CAPABILITY_MATRIX
      : CAPABILITY_MATRIX.filter((row) => row.verticalId === matrixFilter);

  return (
    <>
      {/* Strategic Competencies & 4-Step Delivery Pipeline */}
      <section
        id="delivery"
        className="bg-[#F8FAFC] text-slate-900 py-20 lg:py-28 border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
          {/* Strategic Competencies */}
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="space-y-2.5 max-w-2xl">
                <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
                  04 · Strategic Competencies
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#071120] text-balance">
                  High-Security, High-Reliability Workflows
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-md">
                NEXORE integrates into demanding project environments with governance, Tier-1
                supply strength, and full lifecycle ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STRATEGIC_COMPETENCIES.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-lg p-7 space-y-4"
                >
                  <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {COMPETENCY_ICONS[idx]}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#071120]">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Operational Delivery Pipeline */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
                  Operational Flow
                </p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#071120]">
                  4-Step Delivery Pipeline
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-500">
                Select any phase to inspect deliverables
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DELIVERY_PIPELINE.map((item, idx) => {
                const isSelected = idx === activeStepIndex;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`text-left p-6 rounded-lg border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5FD6] ${
                      isSelected
                        ? 'bg-[#071120] text-white border-[#071120]'
                        : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono uppercase mb-3 tabular-nums">
                      <span className="text-[#C89B3C] font-semibold">{item.step}</span>
                      <span className={isSelected ? 'text-slate-400' : 'text-slate-400'}>
                        {item.phase}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base mb-2">{item.title}</h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Deliverable Detail Strip */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-md">
                <span className="font-mono text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                  {activeStep.step} · {activeStep.phase}
                </span>
                <h4 className="font-display font-bold text-xl text-[#071120]">
                  {activeStep.title}
                </h4>
                <p className="text-sm text-slate-600">{activeStep.summary}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                {activeStep.deliverables.map((del) => (
                  <div
                    key={del}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded p-4 text-xs text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1D5FD6] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment to Excellence Institutional Bar */}
            <div className="bg-[#071120] text-white rounded-lg border border-slate-800 p-7 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-1">
                <p className="font-display font-bold text-xl text-white">
                  Commitment to Excellence
                </p>
                <p className="text-xs text-slate-400">
                  Core operational guarantees across every engagement.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {COMMITMENT_STANDARDS.map((std) => (
                  <div
                    key={std.title}
                    className="border-t sm:border-t-0 sm:border-l border-white/15 pt-4 sm:pt-0 sm:pl-6 first:border-0 first:pt-0 first:pl-0"
                  >
                    <p className="font-display font-semibold text-sm text-white">{std.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{std.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Outcome Matrix */}
      <section id="matrix" className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-2.5 max-w-2xl">
              <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
                05 · Illustrative Project Capabilities
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#071120] text-balance">
                Capability Outcome Matrix
              </h2>
            </div>

            {/* Matrix Vertical Filter */}
            <div
              role="group"
              aria-label="Filter capability matrix"
              className="flex flex-wrap gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start lg:self-auto"
            >
              {[
                { id: 'all', label: 'All Capabilities' },
                { id: 'isr', label: 'ISR' },
                { id: 'gpu', label: 'AI Workstations' },
                { id: 'pwr', label: 'Critical Tech' },
                { id: 'c2', label: 'CCTV & C2' },
              ].map((tab) => {
                const isActive = matrixFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMatrixFilter(tab.id as typeof matrixFilter)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#071120] text-white'
                        : 'text-slate-600 hover:text-[#071120]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#071120] text-white text-[11px] font-mono uppercase tracking-[0.12em]">
                    <th scope="col" className="py-4 px-6 font-semibold w-14 tabular-nums">
                      #
                    </th>
                    <th scope="col" className="py-4 px-6 font-semibold">
                      Focus Area
                    </th>
                    <th scope="col" className="py-4 px-6 font-semibold">
                      Project Capability
                    </th>
                    <th scope="col" className="py-4 px-6 font-semibold">
                      Intended Outcome
                    </th>
                    <th scope="col" className="py-4 px-6 font-semibold text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {filteredMatrix.map((row, idx) => (
                    <tr
                      key={row.id}
                      className="bg-white hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-5 px-6 font-mono text-xs text-slate-400 tabular-nums align-top">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="py-5 px-6 font-display font-bold text-[#071120] whitespace-nowrap align-top">
                        {row.focusArea}
                      </td>
                      <td className="py-5 px-6 text-slate-600 leading-relaxed align-top max-w-md">
                        {row.projectCapability}
                      </td>
                      <td className="py-5 px-6 text-[#071120] font-medium leading-relaxed align-top max-w-sm">
                        {row.intendedOutcome}
                      </td>
                      <td className="py-5 px-6 text-right align-top whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => onSelectCapabilityForInquiry(row.focusArea)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D5FD6] hover:text-[#174FB5] cursor-pointer"
                        >
                          <span>Scope Project</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
