export interface Project {
  id: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'Code' | 'Server' | 'Cpu' | 'Network';
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
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
  headline: string;
  introduction: string;
  email: string;
  whatsappPhone: string;
  whatsappFormatted: string;
  whatsappDirectUrl: string;
  location: string;
  availability: {
    status: 'available' | 'busy';
    label: string;
  };
  about: {
    heading: string;
    title: string;
    description: string;
  };
}
