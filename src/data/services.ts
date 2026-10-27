import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-web-apps',
    title: 'Custom Business Web Applications',
    tagline: 'Tailor-made web solutions designed around your specific operating model.',
    targetAudience: 'Growing enterprises & retail operations needing bespoke tools',
    description:
      'I engineer custom internal portals, administrative dashboards, and database tools that replace cumbersome spreadsheets with fast, secure web interfaces.',
    capabilities: [
      'Tailored business logic and transaction tracking',
      'Secure, responsive layouts functional across mobile and office desktops',
      'Relational database integration for structured records',
      'Intuitive user interfaces that require minimal staff training',
    ],
    iconName: 'AppWindow',
  },
  {
    id: 'workflow-automation',
    title: 'Business Process Automation',
    tagline: 'Eliminate repetitive manual tasks and accelerate team execution.',
    targetAudience: 'Offices and teams looking to streamline daily data entry',
    description:
      'Transform manual, paper-heavy workflows into automated digital systems that save hours of administrative overhead and eliminate human recording errors.',
    capabilities: [
      'Digital intake forms with real-time validation',
      'Automated invoice and receipt generation pipelines',
      'Cross-tool data synchronization via web APIs',
      'Exportable reporting for management and accounting review',
    ],
    iconName: 'Workflow',
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Network Setup',
    tagline: 'Dependable computer hardware, office networking, and technical support.',
    targetAudience: 'Offices requiring dependable IT setups and rapid troubleshooting',
    description:
      'From configuring local office networks and Wi-Fi coverage to workstation provisioning and routine maintenance, I ensure your technology foundation remains rock-solid.',
    capabilities: [
      'Office LAN/WAN cabling, router setup, and Wi-Fi optimization',
      'Workstation assembly, OS installation (Windows/Linux), and configuration',
      'Data backup routines and hardware preventive maintenance',
      'Rapid remote and on-site troubleshooting for staff',
    ],
    iconName: 'Wrench',
  },
  {
    id: 'modernization-maintenance',
    title: 'Website Modernization & Maintenance',
    tagline: 'Upgrading existing web assets for modern speed, security, and mobile UX.',
    targetAudience: 'Businesses with slow, outdated, or unresponsive websites',
    description:
      'Revitalize older websites with modern web standards, achieving instant page load speeds, clean typography, mobile responsiveness, and strong SEO foundations.',
    capabilities: [
      'Migration to modern frontend architectures (React/TypeScript)',
      'Speed optimization and asset compression for fast mobile loading',
      'Search Engine Optimization (SEO) and accessible markup',
      'Regular security audits, package updates, and content refreshes',
    ],
    iconName: 'Zap',
  },
];
