import React from 'react';
import { ArrowUpRight, FileText, CheckCircle2, Terminal } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { PROFILE } from '../../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-navy text-white pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-navy-border">
      {/* Subtle ambient gradient overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Headline & Positioning */}
          <div className="lg:col-span-8 flex flex-col gap-6">
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
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering reliable software &amp; resilient IT systems.
            </h1>

            {/* Role positioning */}
            <div className="flex items-center gap-2 text-blue-400 font-mono text-sm sm:text-base">
              <Terminal className="w-4 h-4 shrink-0 text-blue-400" />
              <span>{PROFILE.title}</span>
            </div>

            {/* Strategic Tagline */}
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-light">
              {PROFILE.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Start a Conversation
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                disabled
                title="The verified CV document is currently in preparation and will be available once finalized."
                className="bg-navy-surface/40 text-slate-300 border-navy-border/80 cursor-not-allowed opacity-75 hover:bg-navy-surface/40 hover:text-slate-300 hover:border-navy-border/80"
                icon={<FileText className="w-4 h-4" />}
              >
                CV Forthcoming
              </Button>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="bg-navy-surface border border-navy-border rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-navy-border">
                <div className="w-14 h-14 rounded-xl bg-accent text-white flex items-center justify-center font-mono font-bold text-xl shadow-md">
                  EM
                </div>
                <div>
                  <h2 className="font-bold text-lg text-white">
                    {PROFILE.displayName}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Nairobi, Kenya • EAT (UTC+3)
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Software Focus
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      React, TypeScript, REST APIs &amp; Business Systems
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Infrastructure Focus
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Systems Admin, Hardware Diagnostics &amp; LAN/WAN
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Target Audience
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      Hiring IT Teams, SMEs &amp; Retail Operations
                    </span>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-4 border-t border-navy-border/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>DIRECT REACH:</span>
                <span className="text-blue-400 font-sans font-medium">
                  {PROFILE.whatsappFormatted}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
