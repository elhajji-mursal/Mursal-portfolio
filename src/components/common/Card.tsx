import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: React.ElementType;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  as: Component = 'div',
  id,
}) => {
  return (
    <Component
      id={id}
      className={`bg-canvas-card border border-slate-border rounded-xl p-6 ${
        hoverable
          ? 'transition-all duration-200 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5'
          : 'shadow-sm'
      } ${className}`}
    >
      {children}
    </Component>
  );
};
