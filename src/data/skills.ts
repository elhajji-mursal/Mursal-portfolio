import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    iconName: 'Code',
    skills: [
      'HTML5 and CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    id: 'backend-data',
    title: 'Backend & Data Technologies',
    iconName: 'Server',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'SQL',
      'Git and GitHub',
      'Postman',
    ],
  },
  {
    id: 'it-support',
    title: 'IT Support & Systems',
    iconName: 'Cpu',
    skills: [
      'Windows and Linux',
      'Hardware troubleshooting',
      'Software installation and maintenance',
      'System configuration',
      'Technical support',
      'Data backup and recovery',
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    iconName: 'Network',
    skills: [
      'LAN and WAN',
      'TCP/IP',
      'Router and Wi-Fi configuration',
      'DNS and DHCP',
      'Network troubleshooting',
      'Network security fundamentals',
    ],
  },
];
