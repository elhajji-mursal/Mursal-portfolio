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
  Layers: <Code className="w-5 h-5 text-accent" />,
  Shield: <Server className="w-5 h-5 text-accent" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-canvas-muted border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Technical Competencies"
          title="Engineered skills grounded in practical execution."
          description="A comprehensive toolkit spanning modern client application engineering, API fundamentals, hardware maintenance, and enterprise networking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <Card key={category.id} className="flex flex-col">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                  {categoryIcons[category.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-primary">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-muted">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills list with practical context */}
              <div className="mt-6 space-y-3 flex-1">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-canvas border border-slate-border/70 hover:border-slate-300 transition-colors"
                  >
                    <span className="font-semibold text-sm text-slate-primary">
                      {skill.name}
                    </span>
                    {skill.context && (
                      <span className="text-xs text-slate-muted sm:text-right mt-1 sm:mt-0 font-mono">
                        {skill.context}
                      </span>
                    )}
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
