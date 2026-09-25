import React from 'react';
import { Reveal } from './motion/Reveal';
import { MaskLines } from './motion/MaskLines';

type SectionIntroProps = {
  eyebrow: string;
  lines: string[];
  description?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionIntro({ eyebrow, lines, description, tone = 'light', className = '' }: SectionIntroProps) {
  const eyebrowColor = tone === 'dark' ? 'text-brass-light' : 'text-brass-deep';

  return (
    <div className={className}>
      <Reveal y={20} duration={0.9}>
        <p className={`text-[11px] font-medium uppercase tracking-eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      </Reveal>
      <MaskLines
        lines={lines}
        delay={0.14}
        stagger={0.12}
        duration={1.1}
        className="mt-6 font-display text-[clamp(2.25rem,4.4vw,4rem)] font-light uppercase leading-[1.02] tracking-[0.01em]" />
      
      {description &&
      <Reveal y={25} delay={0.3 + lines.length * 0.12} duration={1} className="mt-8 max-w-md">
          <p className="text-[15px] leading-relaxed opacity-75">{description}</p>
        </Reveal>
      }
    </div>);

}