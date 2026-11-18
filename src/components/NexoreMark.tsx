import React from 'react';
import { TechnicalVertical } from '../data/nexoreData';

interface BrandMarkProps {
  className?: string;
}

/**
 * Geometric SVG emblem adapted from the NEXORE NC monogram + neural mesh nodes.
 */
export const NexoreEmblem: React.FC<BrandMarkProps> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer gold arc */}
    <path
      d="M48.5 18.5C44.2 13.8 38 11 31.2 11C18.4 11 8 21.4 8 34.2C8 47 18.4 57.4 31.2 57.4C38.4 57.4 44.9 54.1 49.2 48.9"
      stroke="#C89B3C"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    {/* Network nodes on left */}
    <circle cx="13" cy="24" r="2.2" fill="#C89B3C" />
    <circle cx="9" cy="34" r="2.2" fill="#C89B3C" />
    <circle cx="13" cy="44" r="2.2" fill="#C89B3C" />
    <path d="M13 24L21 29M9 34H21M13 44L21 39" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" />

    {/* N letterform */}
    <path
      d="M22 45V22L36 44V22"
      stroke="currentColor"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Interlocking C arc */}
    <path
      d="M52 25.5C49.5 22.8 46 21.2 42 21.2C34.5 21.2 28.5 27.2 28.5 34.5C28.5 41.8 34.5 47.8 42 47.8C46.2 47.8 49.9 46 52.3 43.1"
      stroke="#2589E6"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

interface VerticalSchematicProps {
  verticalId: TechnicalVertical['id'];
}

/**
 * Technical architecture schematic SVG tailored to each of the 4 NEXORE verticals.
 */
export const VerticalSchematic: React.FC<VerticalSchematicProps> = ({ verticalId }) => {
  if (verticalId === 'isr') {
    return (
      <svg viewBox="0 0 480 300" fill="none" className="w-full h-full" role="img" aria-label="Unmanned Systems and Aerial Intelligence Architecture">
        <defs>
          <pattern id="grid-isr" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="480" height="300" fill="#081427" />
        <rect width="480" height="300" fill="url(#grid-isr)" />

        {/* Radar Range Rings */}
        <circle cx="240" cy="145" r="105" stroke="rgba(37,137,230,0.22)" strokeDasharray="4 4" />
        <circle cx="240" cy="145" r="70" stroke="rgba(37,137,230,0.35)" />
        <circle cx="240" cy="145" r="35" stroke="rgba(200,155,60,0.45)" />

        {/* UAV Airframe Vector */}
        <path d="M240 62L254 90L316 105L316 114L254 110L248 134L270 144V151L240 145L210 151V144L232 134L226 110L164 114V105L226 90L240 62Z" fill="#2589E6" fillOpacity="0.22" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="240" cy="96" r="4" fill="#C89B3C" />

        {/* Telemetry Cone */}
        <path d="M240 105L175 215H305L240 105Z" fill="#2589E6" fillOpacity="0.08" stroke="rgba(96,165,250,0.3)" strokeDasharray="3 3" />

        {/* Ground Control Nodes */}
        <rect x="64" y="218" width="112" height="44" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="120" y="237" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">THERMAL / EO</text>
        <text x="120" y="252" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Multi-Spectral Array</text>

        <rect x="184" y="218" width="112" height="44" rx="4" fill="#0E1F3B" stroke="#C89B3C" strokeOpacity="0.65" />
        <text x="240" y="237" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">ENCRYPTED LINK</text>
        <text x="240" y="252" textAnchor="middle" fill="#C89B3C" fontSize="9" fontFamily="Public Sans, sans-serif">Low-Latency C2 Feed</text>

        <rect x="304" y="218" width="112" height="44" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="360" y="237" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">GCS ANALYTICS</text>
        <text x="360" y="252" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Flight & Telemetry Ops</text>
      </svg>
    );
  }

  if (verticalId === 'gpu') {
    return (
      <svg viewBox="0 0 480 300" fill="none" className="w-full h-full" role="img" aria-label="High-Performance Computing and GPU Cluster Architecture">
        <defs>
          <pattern id="grid-gpu" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="480" height="300" fill="#081427" />
        <rect width="480" height="300" fill="url(#grid-gpu)" />

        {/* Central Compute Fabric */}
        <rect x="155" y="42" width="170" height="86" rx="6" fill="#0E1F3B" stroke="#2589E6" strokeWidth="1.5" />
        <text x="240" y="66" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">NVIDIA GPU CLUSTER</text>
        {[0, 1, 2, 3].map((slot) => (
          <g key={slot}>
            <rect x={172 + slot * 36} y="78" width="28" height="36" rx="2" fill="#173058" stroke="rgba(96,165,250,0.45)" />
            <line x1={178 + slot * 36} y1="88" x2={194 + slot * 36} y2="88" stroke="#C89B3C" strokeWidth="1.5" />
            <line x1={178 + slot * 36} y1="96" x2={194 + slot * 36} y2="96" stroke="#60A5FA" strokeWidth="1.5" />
            <line x1={178 + slot * 36} y1="104" x2={194 + slot * 36} y2="104" stroke="#60A5FA" strokeWidth="1.5" />
          </g>
        ))}

        {/* Interconnect Lines */}
        <path d="M240 128V166M240 166H115V196M240 166V196M240 166H365V196" stroke="rgba(200,155,60,0.65)" strokeWidth="1.5" />

        {/* Downstream Nodes */}
        <rect x="48" y="198" width="122" height="58" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="109" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">AI / ML TRAINING</text>
        <text x="109" y="239" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Defense Simulation</text>

        <rect x="180" y="198" width="120" height="58" rx="4" fill="#0E1F3B" stroke="#C89B3C" strokeOpacity="0.6" />
        <text x="240" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">MIL-STD FIELD</text>
        <text x="240" y="239" textAnchor="middle" fill="#C89B3C" fontSize="9" fontFamily="Public Sans, sans-serif">Ruggedized Hardware</text>

        <rect x="310" y="198" width="122" height="58" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="371" y="222" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">EDGE AI NODES</text>
        <text x="371" y="239" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Real-Time Inference</text>
      </svg>
    );
  }

  if (verticalId === 'c2') {
    return (
      <svg viewBox="0 0 480 300" fill="none" className="w-full h-full" role="img" aria-label="Integrated Security and C2 Command Center Architecture">
        <defs>
          <pattern id="grid-c2" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="480" height="300" fill="#081427" />
        <rect width="480" height="300" fill="url(#grid-c2)" />

        {/* Command Video Wall */}
        <rect x="85" y="38" width="310" height="114" rx="6" fill="#0E1F3B" stroke="#2589E6" strokeWidth="1.5" />
        <text x="240" y="58" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">C4ISR VIDEO WALL & COMMAND</text>
        <rect x="102" y="68" width="88" height="68" rx="3" fill="#13294B" stroke="rgba(255,255,255,0.14)" />
        <rect x="196" y="68" width="88" height="68" rx="3" fill="#13294B" stroke="#C89B3C" strokeOpacity="0.65" />
        <rect x="290" y="68" width="88" height="68" rx="3" fill="#13294B" stroke="rgba(255,255,255,0.14)" />

        {/* Perimeter Grid inside screens */}
        <circle cx="146" cy="102" r="18" stroke="#60A5FA" strokeDasharray="3 2" />
        <circle cx="146" cy="102" r="4" fill="#60A5FA" />
        <path d="M210 116L228 96L244 106L268 84" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="306" y="84" width="56" height="36" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" />

        {/* Data Bus */}
        <path d="M146 152V182M240 152V182M334 152V182M96 182H384" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />

        {/* Edge Sensors */}
        <rect x="52" y="204" width="118" height="52" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="111" y="226" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">PERIMETER IP</text>
        <text x="111" y="242" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Base-Wide Coverage</text>

        <rect x="181" y="204" width="118" height="52" rx="4" fill="#0E1F3B" stroke="#C89B3C" strokeOpacity="0.6" />
        <text x="240" y="226" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">AI ANALYTICS</text>
        <text x="240" y="242" textAnchor="middle" fill="#C89B3C" fontSize="9" fontFamily="Public Sans, sans-serif">ANPR & Intrusion</text>

        <rect x="310" y="204" width="118" height="52" rx="4" fill="#0E1F3B" stroke="rgba(255,255,255,0.16)" />
        <text x="369" y="226" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">REDUNDANT NVR</text>
        <text x="369" y="242" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Public Sans, sans-serif">Failover Archiving</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 480 300" fill="none" className="w-full h-full" role="img" aria-label="Critical Electronics and Mission-Support Systems Architecture">
      <defs>
        <pattern id="grid-pwr" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="480" height="300" fill="#081427" />
      <rect width="480" height="300" fill="url(#grid-pwr)" />

      {/* Power Distribution Bus */}
      <rect x="64" y="48" width="150" height="84" rx="5" fill="#0E1F3B" stroke="#C89B3C" strokeOpacity="0.7" />
      <text x="139" y="74" textAnchor="middle" fill="#C89B3C" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">SECURE POWER & UPS</text>
      <path d="M144 86L131 104H142L135 120L151 100H139L144 86Z" fill="#C89B3C" />

      {/* Precision HVAC */}
      <rect x="266" y="48" width="150" height="84" rx="5" fill="#0E1F3B" stroke="#2589E6" strokeWidth="1.5" />
      <text x="341" y="74" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">CLIMATE CONTROL</text>
      <path d="M312 96H370M312 108H370" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="341" cy="102" r="14" stroke="rgba(96,165,250,0.4)" />

      {/* Convergence Lines */}
      <path d="M139 132V168H341V132M240 168V198" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

      {/* Protected Environment */}
      <rect x="90" y="200" width="300" height="60" rx="5" fill="#0E1F3B" stroke="rgba(255,255,255,0.18)" />
      <text x="240" y="225" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontFamily="IBM Plex Mono, monospace" fontWeight="600">MISSION INFRASTRUCTURE ENVELOPE</text>
      <text x="240" y="244" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Public Sans, sans-serif">
        Server Rooms · Mobile Shelters · Command Offices
      </text>
    </svg>
  );
};
