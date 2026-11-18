/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveSection } from './components/ExecutiveSection';
import { VerticalsSection } from './components/VerticalsSection';
import { ProductsSection } from './components/ProductsSection';
import { DeliveryAndMatrixSection } from './components/DeliveryAndMatrixSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { TechnicalVertical } from './data/nexoreData';

export default function App() {
  const [activeVerticalId, setActiveVerticalId] = useState<TechnicalVertical['id']>('isr');
  const [preselectedTopic, setPreselectedTopic] = useState<string>('');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  const scrollToContact = (topic?: string) => {
    if (topic) {
      setPreselectedTopic(topic);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJumpToVertical = (verticalId: TechnicalVertical['id']) => {
    setActiveVerticalId(verticalId);
    const el = document.getElementById('verticals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar onNavigateContact={() => scrollToContact()} />

      <main className="flex-1">
        <HeroSection
          onRequestConsultation={() => scrollToContact()}
          onOpenProfilePdf={() => setIsPdfModalOpen(true)}
          onJumpToVertical={handleJumpToVertical}
        />

        <ExecutiveSection />

        <VerticalsSection
          activeVerticalId={activeVerticalId}
          onChangeVertical={setActiveVerticalId}
          onSelectVerticalForInquiry={(title) => scrollToContact(title)}
        />

        <ProductsSection
          onSelectProductForInquiry={(name) => scrollToContact(name)}
        />

        <DeliveryAndMatrixSection
          onSelectCapabilityForInquiry={(focusArea) => scrollToContact(focusArea)}
        />

        <ContactAndFooter
          preselectedTopic={preselectedTopic}
          isPdfModalOpen={isPdfModalOpen}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
          onClosePdfModal={() => setIsPdfModalOpen(false)}
        />
      </main>
    </div>
  );
}
