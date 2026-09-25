import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function PrimaryButton({ href, children, onClick, className = '' }: PrimaryButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-4 whitespace-nowrap bg-charcoal px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-ivory ring-1 ring-inset ring-ivory/15 transition-[background-color,box-shadow] duration-500 ease-lux hover:bg-brass-deep hover:ring-brass-deep active:bg-brass-deep ${className}`}>
      
      <span>{children}</span>
      <ArrowRightIcon
        aria-hidden="true"
        strokeWidth={1.25}
        className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-2" />
      
    </a>);

}