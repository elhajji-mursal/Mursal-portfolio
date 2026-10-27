import { Project } from '../types';

/**
 * Projects data file.
 * All entries follow strict honesty guidelines:
 * - Status is accurately designated as 'Planned', 'In Progress', or 'Completed'.
 * - No fake metrics, fabricated client testimonials, or broken demo links are included.
 * - Ready-made projects will populate this list as development concludes.
 */
export const PROJECTS: Project[] = [
  {
    id: 'business-erp-suite',
    title: 'Enterprise Business Operations Portal',
    tagline: 'Planned full-stack management platform for inventory, invoices, and operational reporting.',
    problemSpace:
      'Small and growing businesses often struggle with fragmented spreadsheets and disorganized paper receipts, causing inventory discrepancies and accounting delays.',
    architecturePlan:
      'A modular React + TypeScript front-end paired with a structured relational database schema for reliable transaction tracking and multi-tier role authorization.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SQL', 'REST API'],
    status: 'Planned',
    keyFeatures: [
      'Inventory tracking with automatic low-stock notifications',
      'Point-of-sale invoice generation and exportable digital receipts',
      'Role-based permissions (Cashier, Supervisor, Administrator)',
      'Operational sales and reconciliation dashboards',
    ],
    plannedOutputs: [
      'Responsive web portal interface',
      'Validated database migration scripts',
      'API documentation',
    ],
  },
  {
    id: 'it-helpdesk-system',
    title: 'IT Asset & Service Ticketing Hub',
    tagline: 'Planned internal tracking tool for workstation diagnostics, network devices, and user requests.',
    problemSpace:
      'Internal IT support teams waste time on untracked verbal requests and lack visibility into recurring hardware issues and warranty statuses.',
    architecturePlan:
      'Lightweight web ticketing interface designed for rapid entry on mobile and desktop, structured around ITIL service delivery concepts.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Planned',
    keyFeatures: [
      'Ticket lifecycle tracking (Open, Diagnostic, In Progress, Resolved)',
      'Office IT hardware inventory registry with serial numbers and specs',
      'Automated maintenance reminder schedules',
      'Fast technician diagnostic logs and resolution search',
    ],
    plannedOutputs: [
      'Interactive technician workbench',
      'User-facing ticket submission screen',
      'Exportable equipment health reports',
    ],
  },
];
