import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

type UnderlineLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  withArrow?: boolean;
  className?: string;
};

export function UnderlineLink({ href, children, onClick, withArrow = false, className = '' }: UnderlineLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center gap-3 whitespace-nowrap py-2 text-[12px] font-medium uppercase tracking-[0.2em] ${className}`}>
      
      <span>{children}</span>
      {withArrow &&
      <ArrowRightIcon
        aria-hidden="true"
        strokeWidth={1.25}
        className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-2" />

      }
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-current opacity-25" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brass transition-transform duration-500 ease-lux group-hover:scale-x-100" />
      
    </a>);

}