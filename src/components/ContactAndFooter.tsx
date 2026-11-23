import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from 'lucide-react';
import {
  COMPANY_INFO,
  ENGAGEMENT_AREAS,
  SOFTWARE_PRODUCTS,
  TECHNICAL_VERTICALS,
} from '../data/nexoreData';
import { NexoreEmblem } from './NexoreMark';

interface ContactAndFooterProps {
  preselectedTopic: string;
  isPdfModalOpen: boolean;
  onOpenPdfModal: () => void;
  onClosePdfModal: () => void;
}

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  engagementArea: string;
  details: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  details?: string;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({
  preselectedTopic,
  isPdfModalOpen,
  onOpenPdfModal,
  onClosePdfModal,
}) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    engagementArea: ENGAGEMENT_AREAS[0],
    details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedTopic) {
      setForm((prev) => ({
        ...prev,
        details: `Requesting technical briefing and procurement scope for: ${preselectedTopic}.`,
      }));
      setSubmittedRef(null);
    }
  }, [preselectedTopic]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid work email address.';
    }
    if (form.phone.trim() && !/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact number.';
    }
    if (form.details.trim().length < 12) {
      nextErrors.details =
        'Please include brief project or mission requirements (min. 12 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setErrors({});
    const referenceCode = `NXR-${String(Date.now()).slice(-6)}`;
    setSubmittedRef(referenceCode);
  };

  const handleResetForm = () => {
    setForm({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      engagementArea: ENGAGEMENT_AREAS[0],
      details: '',
    });
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <>
      <section id="contact" className="bg-[#071120] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Company & Executive Directory */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#C89B3C]">
                  06 · Engage
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white text-balance">
                  Connect &amp; Begin Collaboration
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  NEXORE is ready to deliver the technological edge for your next critical mission
                  or corporate initiative.
                </p>
              </div>

              {/* Direct Contact Directory */}
              <div className="bg-[#0B182E] border border-white/10 rounded-lg divide-y divide-white/10">
                <div className="p-6 space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#C89B3C]">
                    Corporate Entity
                  </p>
                  <p className="text-sm font-semibold text-white">{COMPANY_INFO.legalName}</p>
                  <p className="text-xs text-slate-400">{COMPANY_INFO.authorization}</p>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#C89B3C]">
                    Executive &amp; Department Contacts
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {COMPANY_INFO.ceo} · Chief Executive Officer
                  </p>
                  <div className="space-y-2 pt-1 text-sm text-slate-200">
                    {COMPANY_INFO.emails.map((item) => (
                      <div key={item.address} className="flex items-center justify-between gap-4">
                        <a
                          href={`mailto:${item.address}`}
                          className="inline-flex items-center gap-2 hover:text-[#60A5FA] transition-colors"
                        >
                          <Mail className="w-4 h-4 text-[#1D5FD6] shrink-0" />
                          <span>{item.address}</span>
                        </a>
                        <span className="text-[11px] font-mono text-slate-400">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-white/10 text-sm text-slate-200">
                    {COMPANY_INFO.phones.map((phoneNumber) => (
                      <a
                        key={phoneNumber}
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2 hover:text-[#60A5FA] transition-colors tabular-nums"
                      >
                        <Phone className="w-4 h-4 text-[#1D5FD6] shrink-0" />
                        <span>{phoneNumber}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#C89B3C]">
                    Headquarters &amp; Operations Office
                  </p>
                  <p className="text-sm text-slate-200 flex items-start gap-2.5 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#1D5FD6] shrink-0 mt-1" />
                    <span>{COMPANY_INFO.address}</span>
                  </p>
                </div>
              </div>

              {/* Company Profile PDF Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenPdfModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 rounded transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#C89B3C]" />
                  <span>Preview Official PDF Profile</span>
                </button>
                <a
                  href={COMPANY_INFO.profilePdfUrl}
                  download="NEXORE_Company_Profile_2026.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white border border-white/15 hover:border-white/30 rounded transition-colors"
                >
                  <Download className="w-4 h-4 text-[#60A5FA]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Contrast Crisp Corporate Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-lg border border-slate-200 p-7 sm:p-10">
                {submittedRef ? (
                  <div className="py-8 space-y-6">
                    <div className="w-12 h-12 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D5FD6]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-mono text-xs text-[#C89B3C] font-semibold uppercase tracking-wider">
                        Inquiry Prepared · Reference {submittedRef}
                      </p>
                      <h3 className="font-display font-bold text-2xl text-[#071120]">
                        Consultation Brief Ready for {form.engagementArea}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                        Thank you, {form.fullName}. Your technical inquiry for{' '}
                        <span className="text-[#071120] font-semibold">{form.engagementArea}</span>{' '}
                        has been validated. Transmit this brief directly via your mail client to{' '}
                        <a
                          href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                            `[${submittedRef}] ${form.engagementArea} Inquiry — ${form.organization || form.fullName}`
                          )}&body=${encodeURIComponent(
                            `Name: ${form.fullName}\nOrganization: ${form.organization || 'N/A'}\nPhone: ${form.phone || 'N/A'}\nScope: ${form.engagementArea}\n\nDetails:\n${form.details}`
                          )}`}
                          className="text-[#1D5FD6] font-medium underline underline-offset-2"
                        >
                          {COMPANY_INFO.email}
                        </a>
                        .
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                          `[${submittedRef}] ${form.engagementArea} Inquiry — ${form.organization || form.fullName}`
                        )}&body=${encodeURIComponent(
                          `Name: ${form.fullName}\nOrganization: ${form.organization || 'N/A'}\nPhone: ${form.phone || 'N/A'}\nScope: ${form.engagementArea}\n\nDetails:\n${form.details}`
                        )}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#071120] border border-slate-300 rounded transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="space-y-1 border-b border-slate-200 pb-4">
                      <h3 className="font-display font-bold text-xl text-[#071120]">
                        Project &amp; Procurement Inquiry
                      </h3>
                      <p className="text-xs text-slate-500">
                        Select an engagement domain and provide mission or enterprise requirements.
                      </p>
                    </div>

                    {/* Interactive Engagement Area Selector */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                        Engagement Area
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ENGAGEMENT_AREAS.map((area) => {
                          const selected = form.engagementArea === area;
                          return (
                            <button
                              key={area}
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({ ...prev, engagementArea: area }))
                              }
                              className={`text-left px-3.5 py-2.5 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                                selected
                                  ? 'bg-[#071120] text-white border-[#071120]'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {area}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700">
                          Full Name <span className="text-[#1D5FD6]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                          placeholder="e.g. Tariq Mahmood"
                          className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:outline-none focus:border-[#1D5FD6]"
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="organization" className="block text-xs font-semibold text-slate-700">
                          Organization / Unit
                        </label>
                        <input
                          id="organization"
                          type="text"
                          value={form.organization}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, organization: e.target.value }))
                          }
                          placeholder="Defense, Government, or Enterprise"
                          className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:outline-none focus:border-[#1D5FD6]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                          Official Email <span className="text-[#1D5FD6]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="name@organization.org"
                          className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:outline-none focus:border-[#1D5FD6]"
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                          Direct Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="03XX XXXXXXX"
                          className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:outline-none focus:border-[#1D5FD6] tabular-nums"
                        />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="details" className="block text-xs font-semibold text-slate-700">
                        Technical Scope &amp; Timeline <span className="text-[#1D5FD6]">*</span>
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        value={form.details}
                        onChange={(e) => setForm((prev) => ({ ...prev, details: e.target.value }))}
                        placeholder="Describe required verticals (ISR, GPU clusters, C2 surveillance, power/HVAC) or software systems (HSE, PMS, E-Tolling)."
                        className="w-full px-3.5 py-2.5 text-sm bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:outline-none focus:border-[#1D5FD6]"
                      />
                      {errors.details && <p className="text-xs text-red-600">{errors.details}</p>}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                      <span className="text-xs text-slate-500">
                        OPSEC-aware handling for all defense and government inquiries.
                      </span>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Technical Inquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Column Institutional Corporate Footer */}
      <footer className="bg-[#050C18] text-slate-400 border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <NexoreEmblem className="w-7 h-7 text-white shrink-0" />
                <span className="font-display font-bold text-base tracking-[0.04em] text-white">
                  NEXORE
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                {COMPANY_INFO.legalName} — {COMPANY_INFO.authorization}. Authorized Technology
                Integrator for Defense, Government, and Enterprise.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                Technical Verticals
              </p>
              <ul className="space-y-2 text-xs">
                {TECHNICAL_VERTICALS.map((v) => (
                  <li key={v.id}>
                    <a href="#verticals" className="hover:text-white transition-colors">
                      {v.shortTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                Software Suite
              </p>
              <ul className="space-y-2 text-xs">
                {SOFTWARE_PRODUCTS.map((p) => (
                  <li key={p.id}>
                    <a href="#products" className="hover:text-white transition-colors">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                Headquarters &amp; Contact
              </p>
              <div className="space-y-1.5 text-xs">
                <p className="text-slate-300">{COMPANY_INFO.address}</p>
                <div className="space-y-1 pt-1">
                  {COMPANY_INFO.emails.map((item) => (
                    <p key={item.address}>
                      <a
                        href={`mailto:${item.address}`}
                        className="text-[#60A5FA] hover:text-white transition-colors"
                      >
                        {item.address}
                      </a>
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 tabular-nums text-slate-300">
                  {COMPANY_INFO.phones.map((phoneNumber) => (
                    <a
                      key={phoneNumber}
                      href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                      className="hover:text-white transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</p>
            <p className="font-mono text-[11px]">
              Defense · Government · Enterprise · Pakistan
            </p>
          </div>
        </div>
      </footer>

      {/* In-App Company Profile PDF Modal Viewer */}
      {isPdfModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-[#071120] border border-white/15 rounded-lg w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden">
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#C89B3C]" />
                <h3 id="pdf-modal-title" className="font-display font-semibold text-sm text-white">
                  NEXORE (Private) Limited — Official Company Profile (2026)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={COMPANY_INFO.profilePdfUrl}
                  download="NEXORE_Company_Profile_2026.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1D5FD6] hover:bg-[#174FB5] rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={onClosePdfModal}
                  className="inline-flex items-center justify-center w-8 h-8 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close PDF viewer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-900">
              <iframe
                src={COMPANY_INFO.profilePdfUrl}
                title="NEXORE Company Profile PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
