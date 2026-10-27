import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Modern, responsive, and type-safe user interfaces',
    iconName: 'Code',
    skills: [
      { name: 'React', context: 'Component architecture & state flow' },
      { name: 'TypeScript', context: 'Strict static type safety & interfaces' },
      { name: 'JavaScript (ES6+)', context: 'Modern standards & async execution' },
      { name: 'HTML5 & CSS3', context: 'Semantic structure & responsive layouts' },
      { name: 'Tailwind CSS', context: 'Design token implementation & utility styling' },
      { name: 'Vite', context: 'Optimized bundler & build pipeline' },
    ],
  },
  {
    id: 'backend-data',
    title: 'Backend & Data Architecture',
    subtitle: 'API integration, server execution, and relational schemas',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', context: 'Runtime fundamentals & asynchronous event loop' },
      { name: 'Express.js', context: 'RESTful API routing & middleware basics' },
      { name: 'REST APIs', context: 'CRUD patterns & structured JSON serialization' },
      { name: 'SQL Databases', context: 'Relational data modeling & structured queries' },
      { name: 'Git & Version Control', context: 'Source control hygiene & branch workflows' },
      { name: 'Postman', context: 'API verification & contract testing' },
    ],
  },
  {
    id: 'ict-support',
    title: 'IT Support & Systems Diagnostics',
    subtitle: 'Hardware maintenance, OS administration, and user assistance',
    iconName: 'Cpu',
    skills: [
      { name: 'Windows 10/11 & Server', context: 'System provisioning, policies, and management' },
      { name: 'Linux Workstations', context: 'Command line operations & system utilities' },
      { name: 'Hardware Diagnostics', context: 'Component assembly, component testing & repair' },
      { name: 'Remote Helpdesk', context: 'TeamViewer, AnyDesk, and prompt user support' },
      { name: 'System Optimization', context: 'Disk maintenance, driver updates & malware cleaning' },
      { name: 'Backup & Recovery', context: 'Preventative data protection & scheduled backups' },
    ],
  },
  {
    id: 'networking-infrastructure',
    title: 'Networking & Infrastructure',
    subtitle: 'Enterprise connectivity, security fundamentals, and setup',
    iconName: 'Network',
    skills: [
      { name: 'LAN / WAN Architecture', context: 'Local cabling, patch panels & switch management' },
      { name: 'TCP/IP Protocol Suite', context: 'Subnetting, addressing & packet inspection' },
      { name: 'DNS & DHCP Configuration', context: 'Router configuration & network naming services' },
      { name: 'Wi-Fi Deployment', context: 'Access point distribution & signal stability' },
      { name: 'Network Security', context: 'Firewall rules, credential policies & access boundaries' },
      { name: 'Peripheral Management', context: 'Shared network printers & office scanner setup' },
    ],
  },
];
