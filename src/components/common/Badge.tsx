import React from 'react';

type BadgeVariant = 'neutral' | 'accent' | 'completed' | 'progress' | 'planned' | 'navy';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
  neutral: {
    container: 'bg-canvas-inset text-slate-secondary border-slate-border',
    dot: 'bg-slate-400',
  },
  accent: {
    container: 'bg-accent-subtle text-accent border-blue-200',
    dot: 'bg-accent',
  },
  completed: {
    container: 'bg-emerald-50 text-status-completed border-emerald-200',
    dot: 'bg-status-completed',
  },
  progress: {
    container: 'bg-amber-50 text-status-progress border-amber-200',
    dot: 'bg-status-progress',
  },
  planned: {
    container: 'bg-indigo-50 text-status-planned border-indigo-200',
    dot: 'bg-status-planned',
  },
  navy: {
    container: 'bg-navy text-white border-navy-border',
    dot: 'bg-blue-400',
  },
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5 gap-1.5',
  md: 'text-xs sm:text-sm px-2.5 py-1 gap-2',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  size = 'sm',
  children,
  className = '',
  dot = false,
}) => {
  const styles = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${styles.container} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} aria-hidden="true" />}
      {children}
    </span>
  );
};
