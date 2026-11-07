import React from 'react';
import { Code, Server, Cpu, Network } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { SKILL_CATEGORIES } from '../../data/skills';

const categoryIcons = {
  Code: <Code className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  Cpu: <Cpu className="w-5 h-5 text-accent" />,
  Network: <Network className="w-5 h-5 text-accent" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-canvas-muted border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Technical Skills"
          title="Areas of Expertise"
          description="My technical skills cover web development, backend technologies, IT support, and computer networking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <Card key={category.id} className="flex flex-col">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                  {categoryIcons[category.iconName]}
                </div>
                <h3 className="text-xl font-bold text-slate-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2 flex-1">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2.5 rounded-lg bg-canvas border border-slate-border/80 text-sm font-medium text-slate-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
