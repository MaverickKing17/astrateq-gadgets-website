export const NAV_LINKS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Technology', href: '#technology' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Validation', href: '#validation' },
] as const;

export const PIPELINE_STAGES = [
  {
    id: 'observe',
    index: '01',
    title: 'Observe',
    icon: 'Eye',
    description:
      'Camera-based observation captures driver posture, head position, and gaze direction at frame rate, integrated with a tested authorization and lifecycle pipeline.',
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
    description:
      'A deterministic driver-state simulation engine interprets raw observation frames into structured state signals — attention, drowsiness, and gaze alignment.',
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
    description:
      'State signals are aggregated over time to build a continuous understanding of the driver’s condition, distinguishing momentary glances from sustained inattention.',
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
    description:
      'When the understood condition crosses a threshold, the system generates an alert designed for the driver to re-engage — calibrated to avoid both noise and silence.',
    metrics: [
      'Threshold-calibrated alerting',
      'Re-engagement feedback design',
      'Alert-noise minimization',
    ],
  },
] as const;

export const TIMELINE_EVENTS = [
  {
    phase: 'Concept & Architecture',
    status: 'Complete',
    items: [
      'Driver-state concept definition',
      'System architecture design',
      'Observation → Interpretation → Understanding → Alert pipeline mapped',
    ],
  },
  {
    phase: 'Simulation & Engine',
    status: 'Complete',
    items: [
      'Deterministic driver-state simulation built',
      'Driver-intelligence interpretation engine developed',
      'State-signal output validated against expected models',
    ],
  },
  {
    phase: 'Camera Integration',
    status: 'Complete',
    items: [
      'Camera observation integration implemented',
      'Orientation and mirroring validation passed',
      'Authorization & lifecycle testing completed',
    ],
  },
  {
    phase: 'Automated Testing',
    status: 'Complete',
    items: [
      'XCTest / XCUITest automated validation suite built',
      'Cloud-based Codemagic build pipeline established',
      'Build #68 passed cloud build & automated testing',
    ],
  },
  {
    phase: 'Reliability Hardening',
    status: 'In Progress',
    items: [
      'Camera reliability hardening ongoing',
      'Edge-case observation stability improvements',
      'Additional build checkpoints in active development',
    ],
  },
  {
    phase: 'Physical Device Validation',
    status: 'Pending',
    items: [
      'Physical iPhone validation not yet started',
      'On-device performance characterization',
      'Real-condition testing roadmap',
    ],
  },
] as const;

export const DASHBOARD_METRICS = [
  { label: 'Gaze Alignment', value: 95, unit: '%', state: 'optimal' },
  { label: 'Drowsiness Index', value: 5, unit: '%', state: 'optimal', inverted: true },
  { label: 'Posture Stability', value: 88, unit: '%', state: 'optimal' },
  { label: 'Distraction Risk', value: 12, unit: '%', state: 'optimal', inverted: true },
] as const;

export const DASHBOARD_SIGNALS = [
  { label: 'Head Position', value: 'Centered', status: 'ok' },
  { label: 'Eye Openness', value: 'Normal', status: 'ok' },
  { label: 'Blink Rate', value: '14 / min', status: 'ok' },
  { label: 'Gaze Vector', value: 'Forward', status: 'ok' },
  { label: 'Phone Detection', value: 'Not Detected', status: 'ok' },
  { label: 'Yaw Stability', value: 'Stable', status: 'ok' },
] as const;
