import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { PROFILE } from '../../data/profile';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleMobileMenu,
  isMobileMenuOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md shadow-sm border-b border-slate-border'
          : 'bg-canvas border-b border-slate-border/50'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Monogram & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-mono font-bold text-base transition-transform group-hover:scale-105">
              EM
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-primary">
                {PROFILE.displayName}
              </span>
              <span className="text-xs text-slate-muted hidden sm:inline-block">
                Web &amp; Business Systems Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-secondary hover:text-slate-primary hover:bg-canvas-inset rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>

            <button
              type="button"
              onClick={onToggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-secondary hover:text-slate-primary hover:bg-canvas-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
