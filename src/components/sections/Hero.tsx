import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { PROFILE } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-navy-border">
      {/* Subtle ambient gradient overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Main Headline & Positioning (approx 60% width on desktop) */}
          <div className="w-full md:w-[60%] flex flex-col gap-4 sm:gap-5 lg:gap-6">
            {/* Status & Availability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="navy" size="md" dot>
                {PROFILE.availability.label}
              </Badge>
              <span className="text-xs text-slate-300 font-mono hidden sm:inline-block">
                {PROFILE.location}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {PROFILE.headline}
            </h1>

            {/* Role positioning */}
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs sm:text-sm md:text-base">
              <Terminal className="w-4 h-4 shrink-0 text-blue-400" />
              <span>{PROFILE.title}</span>
            </div>

            {/* Introduction */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              {PROFILE.introduction}
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="lg:px-6 lg:py-3 lg:text-base"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Profile Photograph Frame (approx 40% width on desktop) */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end shrink-0">
            <div className="relative group">
              {/* Subtle back ambient glow */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur transition duration-200 group-hover:opacity-40"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative bg-navy-surface border border-navy-border rounded-2xl p-2.5 sm:p-3 md:p-3.5 lg:p-4 shadow-xl">
                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-xl overflow-hidden bg-navy">
                  <img
                    src="/images/profile-photo.png"
                    alt="Portrait of Elhajji Mursal"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 sm:mt-3 text-center">
                  <span className="font-bold text-xs sm:text-sm md:text-base text-white block">
                    {PROFILE.displayName}
                  </span>
                  <span className="text-[11px] sm:text-xs text-blue-400 font-mono">
                    {PROFILE.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
