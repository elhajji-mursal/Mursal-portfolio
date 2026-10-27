import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from './Navbar';
import { Button } from '../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-navy/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-canvas shadow-xl flex flex-col p-6 z-10 border-l border-slate-border">
        {/* Drawer header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-border">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center font-mono font-bold text-sm">
              EM
            </span>
            <span className="font-bold text-sm text-slate-primary">Menu</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-lg text-slate-secondary hover:text-slate-primary hover:bg-canvas-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 py-6 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="px-4 py-3 text-base font-medium text-slate-primary hover:bg-canvas-inset rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div className="pt-6 border-t border-slate-border">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={onClose}
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};
