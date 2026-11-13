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
        <div className="flex flex-col min-[360px]:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Main Headline & Positioning (approx 60–65% width on mobile 360px+) */}
          <div className="w-full min-[360px]:w-[62%] sm:w-[60%] flex flex-col gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 min-w-0">
            {/* Status & Availability Badge */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge variant="navy" size="sm" className="sm:hidden text-[10px] px-2 py-0.5" dot>
                {PROFILE.availability.label}
              </Badge>
              <Badge variant="navy" size="md" className="hidden sm:inline-flex" dot>
                {PROFILE.availability.label}
              </Badge>
              <span className="text-[11px] sm:text-xs text-slate-300 font-mono hidden min-[400px]:inline-block">
                {PROFILE.location}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-lg min-[360px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight break-words">
              {PROFILE.headline}
            </h1>

            {/* Role positioning */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-blue-400 font-mono text-[11px] min-[360px]:text-xs sm:text-sm md:text-base">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-blue-400" />
              <span className="truncate">{PROFILE.title}</span>
            </div>

            {/* Introduction */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
              {PROFILE.introduction}
            </p>

            {/* Primary Action Button */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="text-xs sm:text-sm sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 lg:text-base"
                icon={<ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                iconPosition="right"
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Profile Photograph Frame (approx 35–38% width on mobile 360px+) */}
          <div className="w-full min-[360px]:w-[38%] sm:w-[40%] flex justify-center min-[360px]:justify-end shrink-0 min-w-0">
            <div className="relative group max-w-full">
              {/* Subtle back ambient glow */}
              <div
                className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur transition duration-200 group-hover:opacity-40"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="relative bg-navy-surface border border-navy-border rounded-xl sm:rounded-2xl p-1.5 min-[360px]:p-2 sm:p-3 md:p-3.5 lg:p-4 shadow-xl max-w-full">
                <div className="w-28 h-28 min-[380px]:w-32 min-[380px]:h-32 min-[420px]:w-36 min-[420px]:h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-lg sm:rounded-xl overflow-hidden bg-navy mx-auto">
                  <img
                    src="/images/profile-photo.png"
                    alt="Portrait of Elhajji Mursal"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
                <div className="mt-1.5 sm:mt-2.5 md:mt-3 text-center">
                  <span className="font-bold text-[11px] min-[360px]:text-xs sm:text-sm md:text-base text-white block truncate">
                    {PROFILE.displayName}
                  </span>
                  <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs text-blue-400 font-mono block truncate">
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
