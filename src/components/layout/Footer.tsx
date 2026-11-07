import React from 'react';
import { Container } from '../common/Container';
import { NAV_ITEMS } from './Navbar';
import { PROFILE } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-navy-border mt-auto">
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-navy-border/60">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-navy-surface border border-navy-border text-white flex items-center justify-center font-mono font-bold text-sm">
                EM
              </span>
              <span className="font-bold text-lg text-white">
                {PROFILE.displayName} <span className="text-slate-400 font-normal">|</span> Web &amp; Business Systems Developer
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {PROFILE.whatsappFormatted} (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>&copy; {currentYear} {PROFILE.displayName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
