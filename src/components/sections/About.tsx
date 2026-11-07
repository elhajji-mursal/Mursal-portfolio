import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { PROFILE } from '../../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-canvas">
      <Container>
        <SectionHeading
          tag={PROFILE.about.heading}
          title={PROFILE.about.title}
          description={PROFILE.about.description}
        />
      </Container>
    </section>
  );
};
