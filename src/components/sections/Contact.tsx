import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ContactForm } from '../contact/ContactForm';
import { PROFILE } from '../../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-canvas border-t border-slate-border">
      <Container>
        <SectionHeading
          tag="Contact"
          title="Get In Touch"
          description="Have a project, technical opportunity, or business idea? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <Card hoverable className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-primary">
                    Email
                  </h3>
                  <span className="text-xs text-slate-muted">Direct inbox</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-secondary mb-4 leading-relaxed">
                Send an email for project inquiries, role specifications, or collaboration details.
              </p>
              <div className="p-2.5 bg-canvas rounded-lg border border-slate-border text-xs font-mono text-slate-primary break-all mb-3">
                {PROFILE.email}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  href={`mailto:${PROFILE.email}`}
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  Send Email
                </Button>
                <Button
                  type="button"
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="sm"
                  icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </Card>

            {/* Direct WhatsApp Card */}
            <Card hoverable className="p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-status-completed flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-primary">
                    WhatsApp
                  </h3>
                  <span className="text-xs text-slate-muted">Direct messaging</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-secondary mb-4 leading-relaxed">
                Connect directly for quick discussions, inquiries, or technical support assistance.
              </p>
              <div className="p-2.5 bg-canvas rounded-lg border border-slate-border text-xs font-mono text-slate-primary mb-3">
                {PROFILE.whatsappFormatted}
              </div>
              <Button
                href={PROFILE.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Chat on WhatsApp
              </Button>
            </Card>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
