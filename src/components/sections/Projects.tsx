import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { PROJECTS } from '../../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-canvas-muted border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Projects"
          title="Project Concepts"
          description="Selected business and software solutions focused on practical operational needs."
        />

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
