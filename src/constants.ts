export const NAV_LINKS = [
  { label: 'Technology', href: '#technology' },
  { label: 'How It Works', href: '#dashboard' },
  { label: 'Validation', href: '#validation' },
  { label: 'Drivers', href: '#audience' },
  { label: 'About', href: '#prelaunch' },
] as const;

export const PIPELINE_STAGES = [
  {
    id: 'observe',
    index: '01',
    title: 'Observe',
    icon: 'Eye',
    short: 'Capture relevant observations.',
    description:
      'Camera-based observation captures relevant visual indicators — head position, gaze direction, and facial cues — at frame rate, integrated with a tested authorization and lifecycle pipeline.',
    metrics: [
      'Camera authorization & lifecycle tested',
      'Orientation & mirroring validated',
      'Frame-rate observation capture',
    ],
  },
  {
    id: 'interpret',
    index: '02',
    title: 'Interpret',
    icon: 'Cpu',
    short: 'Convert observations into meaningful signals.',
    description:
      'A deterministic driver-state simulation engine converts raw observation frames into structured signals — attention, drowsiness, and gaze alignment — that can be reasoned about.',
    metrics: [
      'Deterministic state simulation engine',
      'Driver-intelligence interpretation layer',
      'Structured state-signal output',
    ],
  },
  {
    id: 'understand',
    index: '03',
    title: 'Understand',
    icon: 'BrainCircuit',
    short: 'Determine the current driver state.',
    description:
      'State signals are aggregated over time to build a continuous understanding of the driver\'s condition, distinguishing momentary glances from sustained patterns of inattention.',
    metrics: [
      'Temporal state aggregation',
      'Contextual condition modelling',
      'Sustained-pattern detection',
    ],
  },
  {
    id: 'alert',
    index: '04',
    title: 'Alert',
    icon: 'BellRing',
    short: 'Provide an appropriate awareness response.',
    description:
      'When the understood condition crosses a threshold, the system generates an awareness signal designed for the driver to re-engage — calibrated to avoid both noise and silence.',
    metrics: [
      'Threshold-calibrated alerting',
      'Re-engagement feedback design',
      'Alert-noise minimization',
    ],
  },
] as const;

export const PIPELINE_FLOW = [
  { label: 'Camera / Observation' },
  { label: 'Driver Observation' },
  { label: 'Driver Intelligence' },
  { label: 'Driver State' },
  { label: 'Awareness Response' },
] as const;

export const PROBLEM_CONCEPTS = [
  {
    id: 'distraction',
    title: 'Distraction',
    icon: 'EyeOff',
    description:
      'Moments when attention moves away from the driving task — toward a phone, a passenger, or a passing distraction outside the vehicle.',
  },
  {
    id: 'drowsiness',
    title: 'Drowsiness',
    icon: 'Moon',
    description:
      'Indicators that a driver may be becoming less alert — changes in blink patterns, head posture, or eye openness that can signal increasing fatigue.',
  },
  {
    id: 'reduced-attention',
    title: 'Reduced Attention',
    icon: 'TrendingDown',
    description:
      'Changes in attention that may warrant greater awareness — a gradual drift in focus or sustained gaze-away that could benefit from a timely signal.',
  },
] as const;

export const DASHBOARD_METRICS = [
  { label: 'Gaze Alignment', value: 95, unit: '%', state: 'optimal' },
  { label: 'Drowsiness Index', value: 5, unit: '%', state: 'optimal', inverted: true },
] as const;

export const DASHBOARD_INDICATORS = [
  { label: 'Driver State', value: 'ATTENTIVE', status: 'ok' },
  { label: 'Gaze Alignment', value: '95%', status: 'ok' },
  { label: 'Drowsiness Index', value: '5%', status: 'ok' },
  { label: 'Telemetry', value: 'ACTIVE', status: 'ok' },
  { label: 'Camera', value: 'READY', status: 'ok' },
  { label: 'Awareness', value: 'ACTIVE', status: 'ok' },
] as const;

export const DASHBOARD_SIGNALS = [
  { label: 'Head Position', value: 'Centered', status: 'ok' },
  { label: 'Eye Openness', value: 'Normal', status: 'ok' },
  { label: 'Blink Rate', value: '14 / min', status: 'ok' },
  { label: 'Gaze Vector', value: 'Forward', status: 'ok' },
] as const;

export const VALIDATION_STAGES = [
  {
    phase: 'Simulation',
    index: '01',
    status: 'Complete',
    description: 'Deterministic driver-state scenarios.',
    items: [
      'Driver-state concept definition',
      'Deterministic simulation engine built',
      'State-signal output validated against expected models',
    ],
  },
  {
    phase: 'Intelligence',
    index: '02',
    status: 'Complete',
    description: 'Driver observations interpreted through the intelligence engine.',
    items: [
      'Driver-intelligence interpretation engine developed',
      'Observation-to-signal conversion validated',
      'Structured state output tested against scenarios',
    ],
  },
  {
    phase: 'Automated Testing',
    index: '03',
    status: 'Complete',
    description: 'Unit and UI validation through cloud-based iOS testing.',
    items: [
      'XCTest / XCUITest automated validation suite built',
      'Cloud-based Codemagic build pipeline established',
      'Build #68 passed cloud build & automated testing',
    ],
  },
  {
    phase: 'Camera Validation',
    index: '04',
    status: 'Complete',
    description: 'Observation, orientation, authorization, and lifecycle validation.',
    items: [
      'Camera observation integration implemented',
      'Orientation and mirroring validation passed',
      'Authorization & lifecycle testing completed',
    ],
  },
  {
    phase: 'Real-Device Validation',
    index: '05',
    status: 'Future Stage',
    description: 'Future physical-device testing.',
    items: [
      'Physical iPhone validation not yet started',
      'On-device performance characterization',
      'Real-condition testing roadmap',
    ],
  },
] as const;

export const PRELAUNCH_STATUS = [
  {
    label: 'Technology',
    value: 'In development',
    icon: 'Cpu',
    state: 'active',
  },
  {
    label: 'Market validation',
    value: 'In progress',
    icon: 'TrendingUp',
    state: 'active',
  },
  {
    label: 'Physical-device validation',
    value: 'Future stage',
    icon: 'Smartphone',
    state: 'future',
  },
  {
    label: 'Commercial launch',
    value: 'Not yet announced',
    icon: 'Rocket',
    state: 'future',
  },
] as const;

export const AUDIENCE_GROUPS = [
  {
    id: 'drivers',
    title: 'Individual Drivers',
    icon: 'User',
    description:
      'People interested in technology designed to help increase awareness of changes in driver attention.',
    language: 'We\u2019re exploring this with individual drivers who are curious about how awareness technology could support their driving experience.',
  },
  {
    id: 'fleets',
    title: 'Fleets & Organizations',
    icon: 'Building2',
    description:
      'Organizations interested in future driver-awareness and driver-intelligence applications.',
    language: 'We\u2019re exploring this with organizations interested in where driver-awareness technology could provide meaningful value for their teams.',
  },
] as const;

export const EARLY_ACCESS_INTERESTS = [
  'Individual Driver',
  'Fleet',
  'Organization',
  'Technology',
  'Industry',
  'Other',
] as const;

export const FOOTER_NAV = [
  { label: 'Technology', href: '#technology' },
  { label: 'How It Works', href: '#dashboard' },
  { label: 'Validation', href: '#validation' },
  { label: 'Drivers', href: '#audience' },
  { label: 'Fleets', href: '#audience' },
  { label: 'About', href: '#prelaunch' },
  { label: 'Contact', href: 'mailto:contact@astrateq.gadgets' },
  { label: 'Early Access', href: '#early-access' },
] as const;
