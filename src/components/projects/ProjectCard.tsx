import React from 'react';
import { ExternalLink, Github, Layers, Compass, CheckCircle2, Clock } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../common/Badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusConfig = {
    Completed: {
      variant: 'completed' as const,
      label: 'Completed Project',
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    },
    'In Progress': {
      variant: 'progress' as const,
      label: 'In Active Development',
      icon: <Clock className="w-3.5 h-3.5" />,
    },
    Planned: {
      variant: 'planned' as const,
      label: 'Planned Architecture',
      icon: <Compass className="w-3.5 h-3.5" />,
    },
  }[project.status];

  return (
    <div className="flex flex-col bg-canvas-card border border-slate-border rounded-xl p-6 sm:p-8 transition-all duration-200 hover:shadow-lg hover:border-slate-300">
      {/* Header: Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-primary tracking-tight">
          {project.title}
        </h3>
        <div className="self-start sm:self-auto shrink-0">
          <Badge variant={statusConfig.variant} size="sm" dot>
            {statusConfig.label}
          </Badge>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-slate-secondary text-sm sm:text-base leading-relaxed mb-6">
        {project.tagline}
      </p>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-canvas-muted p-4 rounded-lg border border-slate-border/60">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-muted block mb-1">
            Target Problem
          </span>
          <p className="text-xs sm:text-sm text-slate-secondary leading-normal">
            {project.problemSpace}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-muted block mb-1">
            Engineered Solution
          </span>
          <p className="text-xs sm:text-sm text-slate-secondary leading-normal">
            {project.architecturePlan}
          </p>
        </div>
      </div>

      {/* Key Feature Highlights */}
      <div className="mb-6 flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-muted block mb-2">
          Architecture Highlights
        </span>
        <ul className="space-y-1.5">
          {project.keyFeatures.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-slate-secondary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies & Action Footer */}
      <div className="pt-6 border-t border-slate-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-canvas-inset text-slate-secondary border border-slate-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links or Stage Indicator */}
        <div className="flex items-center gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-secondary hover:text-slate-primary"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
          {!project.liveDemoUrl && !project.repoUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-muted italic">
              <Layers className="w-3.5 h-3.5" />
              Blueprint Stage
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
