import React from 'react';
import cn from '@/app/utils/TailwindMergeAndClsx';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const variantClasses = {
    primary: 'bg-simliblue text-white hover:bg-blue-700 shadow-glow',
    secondary: 'bg-transparent border border-white text-white hover:bg-white/10',
    danger: 'bg-red text-white hover:bg-red-700',
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-full transition-all duration-300 font-abc-repro-mono font-bold',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
    >
      {children}
    </button>
  );
};

export default GlowButton; 