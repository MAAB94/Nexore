export interface VerticalCapability {
  index: string;
  title: string;
  status: 'Field Ready' | 'Integrated' | 'Live Ops';
  description: string;
}

export interface TechnicalVertical {
  id: 'isr' | 'gpu' | 'c2' | 'pwr';
  roman: string;
  code: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  summary: string;
  specs: { label: string; value: string }[];
  capabilities: VerticalCapability[];
}

export interface SoftwareProduct {
  id: 'hse' | 'pms' | 'etoll';
  index: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  outcomes: { label: string; detail: string }[];
}

export interface DeliveryStep {
  step: string;
  title: string;
  phase: string;
  summary: string;
  deliverables: string[];
}

export interface MatrixRow {
  id: string;
  focusArea: string;
  verticalId: TechnicalVertical['id'];
  projectCapability: string;
  intendedOutcome: string;
}

export const COMPANY_INFO = {
  legalName: 'NEXORE (Private) Limited',
  brandName: 'NEXORE',
  tagline: 'Nexus at the Core, Value Beyond.',
  authorization: 'Pakistan — Authorized Solutions Provider',
  sectors: ['Defense', 'Government', 'Enterprise'],
  ceo: 'Muhammad Imran Anwar',
  phone: '0345 0062626',
  phones: ['0345 0062626', '03215163366'],
  email: 'imran@nexore.org',
  emails: [
    { label: 'Executive & Inquiries', address: 'imran@nexore.org' },
    { label: 'Operations', address: 'operations@nexore.org' },
    { label: 'Technical Support', address: 'support@nexore.org' },
  ],
  website: 'www.nexore.org',
  address: 'Office No 909, ATS, NASTP, Old Airport Rawalpindi, Pakistan',
  profilePdfUrl: '/assets/aistudio/NEXORE_Company_Profile_updated__1__b20066ee.pdf',
};

export const HERO_PILLARS = [
  {
    index: '01',
    title: 'Rapid Deployment',
    description: 'Rugged systems fielded on mission timelines.',
  },
  {
    index: '02',
    title: 'Secure Integration',
    description: 'OPSEC-aware installation for defense and enterprise.',
  },
  {
    index: '03',
    title: 'Lifecycle Ownership',
    description: 'Procurement, training, warranty, and long-term SLAs.',
  },
];

export const EXECUTIVE_METRICS = [
  { value: '4', label: 'Technical Verticals' },
  { value: 'E2E', label: 'Mission Capability' },
  { value: 'MIL', label: 'Rugged Standards' },
  { value: '24/7', label: 'Operational Focus' },
];

export const STRATEGIC_PILLARS = [
  {
    index: 'Pillar 01',
    title: 'Mission',
    focus: 'Resilience',
    description:
      'Provide corporate and strategic organizations with resilient, high-performance technology, advanced electronic systems, and secure infrastructure built for continuous readiness.',
  },
  {
    index: 'Pillar 02',
    title: 'Vision',
    focus: 'Innovation',
    description:
      'Become the industry benchmark for innovative solutions that safeguard, optimize, and future-proof critical operations across defense and enterprise landscapes.',
  },
  {
    index: 'Pillar 03',
    title: 'Differentiator',
    focus: 'Readiness',
    description:
      'Ability to supply, integrate, and maintain complex systems under challenging constraints — ensuring non-stop operational readiness when it matters most.',
  },
];

export const TECHNICAL_VERTICALS: TechnicalVertical[] = [
  {
    id: 'isr',
    roman: 'Vertical I',
    code: 'ISR',
    shortTitle: 'Unmanned & Aerial ISR',
    title: 'Unmanned Systems & Aerial Intelligence',
    subtitle: 'Aerial Intelligence & UAV Systems',
    summary:
      'Tactical drone provisioning, multi-spectral payload integration, and encrypted command software engineered for reconnaissance and range monitoring.',
    specs: [
      { label: 'Domain', value: 'Tactical UAV & Range ISR' },
      { label: 'Payloads', value: 'Thermal & Multi-Spectral' },
      { label: 'Telemetry', value: 'Encrypted Real-Time Links' },
    ],
    capabilities: [
      {
        index: '01',
        title: 'Tactical & ISR Drones',
        status: 'Field Ready',
        description:
          'Provisioning and support for advanced UAVs equipped for intelligence, surveillance, and reconnaissance missions.',
      },
      {
        index: '02',
        title: 'Payload Integration',
        status: 'Integrated',
        description:
          'Multi-spectral sensors, thermal cameras, and secure data links tailored to defense and rugged field operations.',
      },
      {
        index: '03',
        title: 'UAV Management Systems',
        status: 'Live Ops',
        description:
          'Software platforms for flight management, data analysis, and secure real-time operational feeds.',
      },
    ],
  },
  {
    id: 'gpu',
    roman: 'Vertical II',
    code: 'GPU',
    shortTitle: 'HPC & GPU Infrastructure',
    title: 'High-Performance Computing & GPU Infrastructure',
    subtitle: 'HPC Clusters & Edge AI Nodes',
    summary:
      'NVIDIA GPU workstation clusters, MIL-STD ruggedized field hardware, and deployable edge nodes for defense modeling, simulation, and AI training.',
    specs: [
      { label: 'Compute', value: 'NVIDIA GPU Clusters' },
      { label: 'Durability', value: 'MIL-STD Extreme Temp & Shock' },
      { label: 'Deployment', value: 'Centralized & Tactical Edge' },
    ],
    capabilities: [
      {
        index: '01',
        title: 'AI & ML Acceleration',
        status: 'Field Ready',
        description:
          'NVIDIA GPU workstations and server clusters for modeling, simulation, AI training, and massive data processing.',
      },
      {
        index: '02',
        title: 'Ruggedized IT Hardware',
        status: 'Integrated',
        description:
          'MIL-STD compliant laptops and technical equipment built for extreme temperatures, shock, and vibration.',
      },
      {
        index: '03',
        title: 'Edge Computing',
        status: 'Live Ops',
        description:
          'Deployable GPU-accelerated edge nodes for real-time battlefield and field analysis.',
      },
    ],
  },
  {
    id: 'c2',
    roman: 'Vertical III',
    code: 'C2',
    shortTitle: 'Security & C2 Surveillance',
    title: 'Integrated Security & Surveillance Networks (CCTV)',
    subtitle: 'CCTV / C4ISR Command Centers',
    summary:
      'Large-scale IP surveillance fabrics, redundant C2 command centers, and AI-assisted video analytics for base perimeter security and critical infrastructure.',
    specs: [
      { label: 'Architecture', value: 'Base-Wide IP & C4ISR' },
      { label: 'Command', value: 'Video Walls & Redundant NVR' },
      { label: 'Analytics', value: 'ANPR, Facial & Perimeter AI' },
    ],
    capabilities: [
      {
        index: '01',
        title: 'End-to-End CCTV',
        status: 'Field Ready',
        description:
          'Design and deployment of large-scale IP surveillance networks for bases, campuses, and critical infrastructure.',
      },
      {
        index: '02',
        title: 'C2 Command Centers',
        status: 'Integrated',
        description:
          'Full integration of video walls, management software, and redundant recording systems.',
      },
      {
        index: '03',
        title: 'Advanced Analytics',
        status: 'Live Ops',
        description:
          'AI video analytics — facial recognition, perimeter breach detection, and license plate recognition.',
      },
    ],
  },
  {
    id: 'pwr',
    roman: 'Vertical IV',
    code: 'PWR',
    shortTitle: 'Critical Electronics & Power',
    title: 'Critical Electronics & Mission-Support Systems',
    subtitle: 'Mission Power & Climate Systems',
    summary:
      'Precision server-room air conditioning, uninterruptible power distribution, and enterprise office electronics engineered for non-stop operational uptime.',
    specs: [
      { label: 'Cooling', value: 'Server Room & Mobile Shelters' },
      { label: 'Power', value: 'UPS & Secure Distribution' },
      { label: 'Facilities', value: 'Media Walls & Enterprise Tech' },
    ],
    capabilities: [
      {
        index: '01',
        title: 'Climate Control (AC)',
        status: 'Field Ready',
        description:
          'Resilient air conditioning for server rooms, mobile shelters, and critical office environments.',
      },
      {
        index: '02',
        title: 'Office Electronics',
        status: 'Integrated',
        description:
          'Printers, computers, media walls, and high-end electronics for modern offices and demanding operations.',
      },
      {
        index: '03',
        title: 'Power Solutions',
        status: 'Live Ops',
        description:
          'UPS and secure power distribution systems for continuous technical operations.',
      },
    ],
  },
];

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: 'hse',
    index: 'Product 01',
    name: 'HSE Management System',
    category: 'Health & Safety',
    description:
      'A centralized platform to manage workplace health, safety, and environmental compliance — from incident reporting to audits — keeping personnel safe and operations compliant.',
    features: [
      'Incident & near-miss reporting',
      'Risk assessment & hazard registers',
      'Inspections, audits & checklists',
      'Permit-to-work & training records',
      'Corrective actions (CAPA) tracking',
      'Real-time safety KPIs & dashboards',
    ],
    outcomes: [
      { label: 'Compliance Visibility', detail: 'Unified audit trails across field sites and facilities.' },
      { label: 'Hazard Prevention', detail: 'Structured permit-to-work gating before high-risk tasks.' },
      { label: 'CAPA Closure', detail: 'Assigned corrective actions with tracked verification dates.' },
    ],
  },
  {
    id: 'pms',
    index: 'Product 02',
    name: 'Preventive Maintenance System (PMS)',
    category: 'Asset & Facility Readiness',
    description:
      'Plan, schedule, and track maintenance across critical equipment and facilities to reduce unplanned downtime, extend asset service life, and control maintenance costs.',
    features: [
      'Asset register & equipment history',
      'Scheduled & usage-based maintenance',
      'Work orders & technician assignment',
      'Spare parts & inventory control',
      'Automated alerts & reminders',
      'Downtime & cost analytics',
    ],
    outcomes: [
      { label: 'Equipment Uptime', detail: 'Interval triggers prevent critical mission hardware failure.' },
      { label: 'Spare Parts Control', detail: 'Linked stock thresholds for field-replaceable units.' },
      { label: 'Lifecycle Traceability', detail: 'Complete service logs per serial number and site.' },
    ],
  },
  {
    id: 'etoll',
    index: 'Product 03',
    name: 'E-Tolling System',
    category: 'Smart Revenue Collection',
    description:
      'An automated toll collection solution for highways, bridges, and controlled facilities — enabling fast, cashless, and transparent revenue collection.',
    features: [
      'RFID / tag-based cashless payments',
      'ANPR license plate recognition',
      'Lane controllers & barrier integration',
      'Real-time revenue reporting',
      'Violation detection & enforcement',
      'Central monitoring & audit trail',
    ],
    outcomes: [
      { label: 'Lane Throughput', detail: 'High-speed tag and ANPR capture reduces queue congestion.' },
      { label: 'Revenue Integrity', detail: 'Reconciled barrier events against central ledger logs.' },
      { label: 'Automated Enforcement', detail: 'Instant violation flagging with plate evidence capture.' },
    ],
  },
];

export const STRATEGIC_COMPETENCIES = [
  {
    title: 'Compliance & Governance',
    description:
      'Full adherence to safety, security, and municipal standards (including SECP and local regulatory codes) required for defense-integrated contractors.',
  },
  {
    title: 'Robust Supply Chain',
    description:
      'A dependable network of Tier-1 hardware vendors and logistics partners, delivering authentic, field-ready equipment at pace.',
  },
  {
    title: 'Lifecycle Support',
    description:
      'From technical consultation and rapid procurement to secure installation, operator training, and long-term maintenance SLAs.',
  },
];

export const DELIVERY_PIPELINE: DeliveryStep[] = [
  {
    step: 'Step 01',
    title: 'Mission Analysis & Requirements',
    phase: 'Collaborative Planning',
    summary: 'Align technology architecture directly with specific operational and mission objectives.',
    deliverables: [
      'Site surveys & environmental constraints assessment',
      'System architecture & compliance specification',
      'Operational readiness & timeline mapping',
    ],
  },
  {
    step: 'Step 02',
    title: 'Technical Design & Sourcing',
    phase: 'Agile Sourcing',
    summary: 'Deep market reach for NVIDIA GPUs, tactical drone tech, and specialized defense electronics.',
    deliverables: [
      'Authorized Tier-1 OEM procurement & verification',
      'Payload, compute & network compatibility validation',
      'Ruggedization & backup power sizing',
    ],
  },
  {
    step: 'Step 03',
    title: 'Deployment & Integration',
    phase: 'Secure Installation',
    summary: 'OPSEC-minded deployment teams focused on physical durability and clean system cutover.',
    deliverables: [
      'On-site installation, cabling & C2 command integration',
      'Hardened network & encrypted telemetry commissioning',
      'Redundancy & failover stress testing',
    ],
  },
  {
    step: 'Step 04',
    title: 'Sustainment & Training',
    phase: 'Long-Term Support',
    summary: 'Rigorous acceptance testing, operator enablement, OEM warranty handling, and maintenance SLAs.',
    deliverables: [
      'Field operator & engineering handover training',
      'Authorized OEM warranty & spare-parts management',
      '24/7 SLA preventive and corrective maintenance',
    ],
  },
];

export const COMMITMENT_STANDARDS = [
  { title: 'Quality First', detail: 'Rigorous testing & validation' },
  { title: 'OPSEC', detail: 'Discretion for defense projects' },
  { title: 'Authorized Partners', detail: 'Official support & warranty' },
];

export const CAPABILITY_MATRIX: MatrixRow[] = [
  {
    id: 'm1',
    focusArea: 'ISR & Aerial Surveillance',
    verticalId: 'isr',
    projectCapability:
      'Supply and operational readiness of tactical drone fleets with secure data links for range monitoring.',
    intendedOutcome: 'Enhanced real-time situational awareness and rapid reconnaissance.',
  },
  {
    id: 'm2',
    focusArea: 'AI Workstations',
    verticalId: 'gpu',
    projectCapability:
      'Clustered NVIDIA GPU workstations for simulation, defense modeling, and data analytics.',
    intendedOutcome: 'Accelerated R&D, advanced battlefield modeling, and automated analysis.',
  },
  {
    id: 'm3',
    focusArea: 'Critical Office Tech',
    verticalId: 'pwr',
    projectCapability:
      'Ruggedized laptops and specialized server-room climate control systems.',
    intendedOutcome: 'Secure, continuous operational uptime in any environment.',
  },
  {
    id: 'm4',
    focusArea: 'CCTV & C2 Integration',
    verticalId: 'c2',
    projectCapability:
      'Base-wide C4ISR surveillance network and command center for base security.',
    intendedOutcome: 'Unified threat detection, automated perimeter alerts, and asset protection.',
  },
];

export const ENGAGEMENT_AREAS = [
  'Defense Contracting',
  'Critical Infrastructure',
  'High-Tech Procurement',
  'Integrated Surveillance',
];
