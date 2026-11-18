import React, { useState } from 'react';
import { ArrowUpRight, CheckSquare, Route, Settings2, ShieldAlert } from 'lucide-react';
import { SOFTWARE_PRODUCTS, SoftwareProduct } from '../data/nexoreData';

interface ProductsSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
}

const PRODUCT_ICONS: Record<SoftwareProduct['id'], React.ReactNode> = {
  hse: <ShieldAlert className="w-4 h-4 shrink-0" />,
  pms: <Settings2 className="w-4 h-4 shrink-0" />,
  etoll: <Route className="w-4 h-4 shrink-0" />,
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProductForInquiry,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<SoftwareProduct['id']>('hse');

  const activeProduct =
    SOFTWARE_PRODUCTS.find((p) => p.id === selectedProductId) ?? SOFTWARE_PRODUCTS[0];

  return (
    <section id="products" className="bg-white text-slate-900 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Section Header & Segmented Platform Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2.5 max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#1D5FD6]">
              03 · Enterprise Software Suite
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#071120] text-balance">
              NEXORE Product Suite
            </h2>
            <p className="text-base text-slate-600">
              Purpose-built platforms that digitize safety, maintenance, and revenue operations
              for government, defense, and enterprise.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="NEXORE software platforms"
            className="flex flex-wrap gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start lg:self-auto"
          >
            {SOFTWARE_PRODUCTS.map((product) => {
              const isSelected = product.id === activeProduct.id;
              return (
                <button
                  key={product.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5FD6] ${
                    isSelected
                      ? 'bg-[#071120] text-white'
                      : 'text-slate-600 hover:text-[#071120] hover:bg-white'
                  }`}
                >
                  {PRODUCT_ICONS[product.id]}
                  <span>{product.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Platform Showcase */}
        <div
          role="tabpanel"
          className="border border-slate-200 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          {/* Left Executive Summary Panel */}
          <div className="lg:col-span-4 bg-[#071120] text-white p-8 sm:p-10 flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C89B3C]">
                  {activeProduct.index}
                </span>
                <div className="w-9 h-9 rounded bg-white/10 text-white flex items-center justify-center border border-white/10">
                  {PRODUCT_ICONS[activeProduct.id]}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {activeProduct.category}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => onSelectProductForInquiry(activeProduct.name)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Request Platform Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Functional Capabilities & Outcomes */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.14em] text-slate-500">
                Core Functional Modules
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                {activeProduct.features.map((feature, idx) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 py-2 border-b border-slate-100 text-sm text-slate-800"
                  >
                    <CheckSquare className="w-4 h-4 text-[#1D5FD6] shrink-0 mt-0.5" />
                    <span className="flex-1">{feature}</span>
                    <span className="font-mono text-[11px] text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Outcomes Ledger */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {activeProduct.outcomes.map((outcome, idx) => (
                <div key={outcome.label} className="space-y-1.5">
                  <p className="font-mono text-[11px] text-[#C89B3C] uppercase tracking-wider tabular-nums">
                    Outcome 0{idx + 1}
                  </p>
                  <p className="font-display font-semibold text-sm text-[#071120]">
                    {outcome.label}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">{outcome.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Platform Portfolio Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOFTWARE_PRODUCTS.map((product) => {
            const isSelected = product.id === activeProduct.id;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setSelectedProductId(product.id)}
                className={`text-left p-6 rounded-lg border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D5FD6] ${
                  isSelected
                    ? 'bg-slate-50 border-[#071120]'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#C89B3C] font-semibold uppercase">{product.index}</span>
                  <span className="text-slate-500">{product.category}</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#071120] mb-1.5">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
