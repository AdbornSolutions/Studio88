import React from 'react';

type SocialIconProps = {
  name: 'instagram' | 'youtube' | 'linkedin';
  className?: string;
};

export function SocialIcon({ name, className = 'h-4 w-4' }: SocialIconProps) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  if (name === 'instagram') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>);

  }

  if (name === 'youtube') {
    return (
      <svg {...common}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
        <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
      </svg>);

  }

  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M8 10.5V16" />
      <circle cx="8" cy="7.75" r="0.6" fill="currentColor" />
      <path d="M11.5 16v-5.5M11.5 13a2.5 2.5 0 0 1 5 0v3" />
    </svg>);

}