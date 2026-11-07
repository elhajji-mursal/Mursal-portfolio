import React from 'react';
import { AppWindow, Workflow, Wrench, Zap } from 'lucide-react';
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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-canvas border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Services"
          title="What I Offer"
          description="I provide web development, business software solutions, and IT support to help organizations operate efficiently."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} hoverable className="flex flex-col p-6 sm:p-8">
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center shrink-0">
                  {serviceIcons[service.iconName]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-primary">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-secondary text-sm sm:text-base leading-relaxed mt-2">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
