import { ServiceItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-business-apps',
    title: 'Custom Business Applications',
    description: 'Web-based systems for managing business operations, records, inventory, and transactions.',
    iconName: 'AppWindow',
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation',
    description: 'Digital forms, automated workflows, and reporting tools that simplify repetitive tasks.',
    iconName: 'Workflow',
  },
  {
    id: 'it-support-networking',
    title: 'IT Support & Networking',
    description: 'Computer troubleshooting, system maintenance, network setup, and technical support.',
    iconName: 'Wrench',
  },
  {
    id: 'website-development-maintenance',
    title: 'Website Development & Maintenance',
    description: "Responsive websites and ongoing support to improve businesses' online presence.",
    iconName: 'Zap',
  },
];
