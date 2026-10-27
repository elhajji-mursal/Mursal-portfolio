import { EducationItem } from '../types';

/**
 * Education and technical qualifications.
 * Maintained with strict honesty: reflects verified technical study areas
 * without fabricating unverified institutions, dates, or grades.
 */
export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'academic-computing',
    degreeOrField: 'Computer Science & Information Technology',
    focusArea: 'Software Engineering Principles & Systems Architecture',
    academicContext: 'Formal foundations in computing algorithms, software design patterns, and computer network administration.',
    coreCompetencies: [
      'Relational Database Management Systems (RDBMS)',
      'Object-Oriented & Procedural Programming Concepts',
      'Data Structures & Algorithm Analysis',
      'System Analysis & Requirements Engineering',
    ],
  },
  {
    id: 'technical-specialization',
    degreeOrField: 'Applied IT Infrastructure & Systems Support',
    focusArea: 'Hardware Engineering, Networking & Practical Troubleshooting',
    academicContext: 'Hands-on technical curriculum in computer hardware diagnostics, network topology deployment, and enterprise system administration.',
    coreCompetencies: [
      'Computer Hardware Assembly, Bench Diagnostics & Component Repair',
      'TCP/IP Routing, Subnetting & Network Device Configuration',
      'Operating System Administration (Windows & Linux)',
      'Preventative Maintenance & Disaster Recovery Planning',
    ],
  },
];
