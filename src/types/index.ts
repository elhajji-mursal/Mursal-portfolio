export type ProjectStatus = 'Planned' | 'In Progress' | 'Completed';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problemSpace: string;
  architecturePlan: string;
  technologies: string[];
  status: ProjectStatus;
  keyFeatures: string[];
  plannedOutputs?: string[];
  liveDemoUrl?: string;
  repoUrl?: string;
}

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Code' | 'Server' | 'Layers' | 'Shield' | 'Cpu' | 'Network';
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  targetAudience: string;
  description: string;
  capabilities: string[];
  iconName: 'AppWindow' | 'Workflow' | 'Wrench' | 'Zap';
}

export interface EducationItem {
  id: string;
  degreeOrField: string;
  focusArea: string;
  academicContext: string;
  coreCompetencies: string[];
}

export interface ProfileData {
  displayName: string;
  title: string;
  tagline: string;
  email: string;
  whatsappPhone: string;
  whatsappFormatted: string;
  whatsappDirectUrl: string;
  location: string;
  availability: {
    status: 'available' | 'busy';
    label: string;
    description: string;
  };
  summary: string[];
  corePillars: {
    title: string;
    description: string;
  }[];
}
