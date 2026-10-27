import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { Button } from '../common/Button';
import { PROFILE } from '../../data/profile';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Honeypot field for bot protection
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionState = 'idle' | 'preparing' | 'client_opened' | 'bot_detected';

const INQUIRY_OPTIONS = [
  'IT Support & Infrastructure Inquiry',
  'Custom Business Web Application',
  'Business Systems & Automation',
  'Technical Employment / Contract Opportunity',
  'General Technical Consultation',
];

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: INQUIRY_OPTIONS[0] ?? 'General Inquiry',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (values.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(values.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@company.com).';
    }

    if (!values.subject.trim()) {
      newErrors.subject = 'Please select an inquiry subject.';
    }

    if (!values.message.trim()) {
      newErrors.message = 'Please provide a message outlining your inquiry.';
    } else if (values.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear individual field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If bot filled the hidden input, halt quietly
    if (values.honeypot.trim() !== '') {
      setSubmissionState('bot_detected');
      return;
    }

    if (!validate()) {
      return;
    }

    setSubmissionState('preparing');

    // Compile message body with sender details
    const formattedBody = `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\nMessage:\n${values.message}`;
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${values.subject} - from ${values.name}`
    )}&body=${encodeURIComponent(formattedBody)}`;

    // Dispatch mailto action to open user's default email client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSubmissionState('client_opened');
    }, 400);
  };

  const handleCopyFormattedDraft = () => {
    const draftText = `To: ${PROFILE.email}\nSubject: [Portfolio Inquiry] ${values.subject} - from ${values.name}\n\nName: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleReset = () => {
    setValues({
      name: '',
      email: '',
      subject: INQUIRY_OPTIONS[0] ?? 'General Inquiry',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setSubmissionState('idle');
  };

  return (
    <div className="bg-canvas-card border border-slate-border rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-primary">
          Send a Detailed Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-secondary mt-1">
          Fill out the form below. Once validated, your message will be dispatched directly to <span className="font-mono text-slate-primary font-medium">{PROFILE.email}</span>.
        </p>
      </div>

      {submissionState === 'client_opened' ? (
        <div className="bg-canvas-muted border border-blue-200 rounded-lg p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-accent mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-primary text-base sm:text-lg">
              Opening Your Email Client
            </h4>
            <p className="text-xs sm:text-sm text-slate-secondary mt-2 max-w-md mx-auto leading-relaxed">
              We have launched your default mail application with your inquiry pre-filled. Simply press <strong>Send</strong> in your mail application to deliver your message.
            </p>
          </div>

          <div className="p-3 bg-canvas border border-slate-border rounded text-left text-xs font-mono text-slate-secondary max-h-36 overflow-y-auto">
            <p className="font-semibold text-slate-primary mb-1">Generated Inquiry Draft:</p>
            <p><strong>To:</strong> {PROFILE.email}</p>
            <p><strong>Subject:</strong> {values.subject}</p>
            <p className="mt-1 whitespace-pre-wrap">{values.message}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              type="button"
              onClick={handleCopyFormattedDraft}
              variant="outline"
              size="sm"
              icon={copiedDraft ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            >
              {copiedDraft ? 'Copied Message Draft' : 'Copy Message to Clipboard'}
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              variant="ghost"
              size="sm"
            >
              Compose Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot field (hidden from real users & screen readers to trap bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-honeypot">Leave this field blank</label>
            <input
              type="text"
              id="website-honeypot"
              name="honeypot"
              value={values.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-primary mb-1.5"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  errors.name
                    ? 'border-red-400 focus-visible:ring-red-400 bg-red-50/20'
                    : 'border-slate-border hover:border-slate-400'
                }`}
              />
              {errors.name && (
                <p id="contact-name-error" role="alert" className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-primary mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="e.g. jane@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  errors.email
                    ? 'border-red-400 focus-visible:ring-red-400 bg-red-50/20'
                    : 'border-slate-border hover:border-slate-400'
                }`}
              />
              {errors.email && (
                <p id="contact-email-error" role="alert" className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject / Purpose of Inquiry */}
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-primary mb-1.5"
            >
              Inquiry Type / Subject <span className="text-red-500">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                errors.subject
                  ? 'border-red-400 focus-visible:ring-red-400'
                  : 'border-slate-border hover:border-slate-400'
              }`}
            >
              {INQUIRY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p id="contact-subject-error" role="alert" className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-primary mb-1.5"
            >
              Message Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Describe your project requirements, technical challenge, or role specifications..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-y ${
                errors.message
                  ? 'border-red-400 focus-visible:ring-red-400 bg-red-50/20'
                  : 'border-slate-border hover:border-slate-400'
              }`}
            />
            {errors.message && (
              <p id="contact-message-error" role="alert" className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-muted">
              Sends directly to: <strong className="text-slate-primary">{PROFILE.email}</strong>
            </span>
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={submissionState === 'preparing'}
              className="w-full sm:w-auto min-w-[160px]"
              icon={<Send className="w-4 h-4" />}
              iconPosition="right"
            >
              {submissionState === 'preparing' ? 'Preparing Draft...' : 'Open Email Draft'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
