import React, { useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { PROJECTS } from '../../data/projects';
import { ProjectStatus } from '../../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | ProjectStatus>('All');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  const completedCount = PROJECTS.filter((p) => p.status === 'Completed').length;
  const inProgressCount = PROJECTS.filter((p) => p.status === 'In Progress').length;
  const plannedCount = PROJECTS.filter((p) => p.status === 'Planned').length;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-canvas-muted border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Software Systems & Architecture"
          title="Engineered solutions built with purpose and clarity."
          description="A transparent look into system architectures and active software developments. Built on honest technical reporting with zero fabricated metrics."
        />

        {/* Transparent Status Notice Banner */}
        <div className="mb-12 bg-canvas border border-slate-border rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg text-slate-primary">
                Current Systems Roadmap &amp; Pipeline
              </h3>
              <p className="text-slate-secondary text-sm mt-1 leading-relaxed">
                Active software builds and commercial systems are presently progressing through architecture and implementation. The blueprints below represent confirmed engineering specifications. Fully deployed live applications will be linked here upon completion.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setFilter('All')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all ${
              filter === 'All'
                ? 'bg-navy text-white border-navy shadow-sm'
                : 'bg-canvas text-slate-secondary border-slate-border hover:bg-canvas-inset'
            }`}
          >
            All Systems ({PROJECTS.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('Planned')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all ${
              filter === 'Planned'
                ? 'bg-navy text-white border-navy shadow-sm'
                : 'bg-canvas text-slate-secondary border-slate-border hover:bg-canvas-inset'
            }`}
          >
            Planned Concepts ({plannedCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('In Progress')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all ${
              filter === 'In Progress'
                ? 'bg-navy text-white border-navy shadow-sm'
                : 'bg-canvas text-slate-secondary border-slate-border hover:bg-canvas-inset'
            }`}
          >
            In Active Development ({inProgressCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('Completed')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-all ${
              filter === 'Completed'
                ? 'bg-navy text-white border-navy shadow-sm'
                : 'bg-canvas text-slate-secondary border-slate-border hover:bg-canvas-inset'
            }`}
          >
            Completed ({completedCount})
          </button>
        </div>

        {/* Projects List or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-canvas border border-dashed border-slate-border rounded-xl p-12 text-center">
            <Compass className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="font-semibold text-slate-primary text-base">
              No entries currently in this category
            </h4>
            <p className="text-slate-muted text-sm mt-1">
              Check back as current development milestones are finalized and deployed.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};
