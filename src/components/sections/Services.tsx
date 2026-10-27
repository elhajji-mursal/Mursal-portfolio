import React from 'react';
import { AppWindow, Workflow, Wrench, Zap, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { SERVICES } from '../../data/services';

const serviceIcons = {
  AppWindow: <AppWindow className="w-6 h-6 text-accent" />,
  Workflow: <Workflow className="w-6 h-6 text-accent" />,
  Wrench: <Wrench className="w-6 h-6 text-accent" />,
  Zap: <Zap className="w-6 h-6 text-accent" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-canvas border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Business Services"
          title="Practical technology solutions built for growing businesses."
          description="Designed to eliminate operational friction, automate manual routines, and maintain a dependable computing infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} hoverable className="flex flex-col p-6 sm:p-8">
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center shrink-0">
                  {serviceIcons[service.iconName]}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-primary">
                    {service.title}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-medium text-accent">
                    For: {service.targetAudience}
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <p className="text-slate-primary font-medium text-sm sm:text-base mb-3">
                {service.tagline}
              </p>
              <p className="text-slate-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Capabilities checklist */}
              <div className="mt-auto pt-6 border-t border-slate-border/80">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-muted block mb-3">
                  Delivered Capabilities
                </span>
                <ul className="space-y-2">
                  {service.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
