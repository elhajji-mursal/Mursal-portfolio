import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {tag && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
