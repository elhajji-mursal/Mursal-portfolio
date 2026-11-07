import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col bg-canvas-card border border-slate-border rounded-xl p-6 sm:p-8 transition-all duration-200 hover:shadow-md hover:border-slate-300">
      <h3 className="text-xl font-bold text-slate-primary tracking-tight mb-3">
        {project.title}
      </h3>
      <p className="text-slate-secondary text-sm sm:text-base leading-relaxed">
        {project.description}
      </p>
    </div>
  );
};
