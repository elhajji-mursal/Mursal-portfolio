import React from 'react';
import { Layers, ShieldCheck, Cpu } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { PROFILE } from '../../data/profile';

const pillarIcons = [
  <Layers key="layers" className="w-6 h-6 text-accent" />,
  <Cpu key="cpu" className="w-6 h-6 text-accent" />,
  <ShieldCheck key="shield" className="w-6 h-6 text-accent" />,
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-canvas">
      <Container>
        <SectionHeading
          tag="Professional Background"
          title="Bridging modern software development with practical IT infrastructure."
          description="A dedicated approach to solving operational bottlenecks through engineered software and resilient hardware environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-secondary leading-relaxed">
            {PROFILE.summary.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Quick Credo / Philosophy card */}
          <div className="lg:col-span-5 bg-canvas-muted border border-slate-border rounded-xl p-6 sm:p-8">
            <h3 className="text-base font-semibold uppercase tracking-wider text-slate-primary mb-4">
              Core Technical Philosophy
            </h3>
            <ul className="space-y-4 text-sm text-slate-secondary">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  <strong>Empirical Troubleshooting:</strong> Hardware and software issues are diagnosed through systematic isolation rather than guesswork.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  <strong>Type Safety &amp; Clean Code:</strong> Systems should be self-documenting, maintainable, and resilient to runtime failures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span>
                  <strong>Business Realism:</strong> Software exists to serve human workflows and business viability, not complexity for its own sake.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROFILE.corePillars.map((pillar, idx) => (
            <Card key={idx} hoverable className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center mb-5">
                {pillarIcons[idx] ?? <Layers className="w-6 h-6 text-accent" />}
              </div>
              <h3 className="text-xl font-bold text-slate-primary mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed flex-1">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
