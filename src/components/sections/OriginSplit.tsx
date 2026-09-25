import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { RevealImage } from '../motion/RevealImage';
import { Reveal } from '../motion/Reveal';
import { useMotionProfile } from '../../contexts/MotionContext';
import { origins } from '../../data/stones';
import { EASE_CSS } from '../../utils/motion';

export function OriginSplit() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isDesktop, reduced } = useMotionProfile();

  const panelStyle = (i: number): React.CSSProperties | undefined => {
    if (!isDesktop) return undefined;
    const grow = hovered === null ? 50 : hovered === i ? 55 : 45;
    return {
      flexGrow: grow,
      flexBasis: 0,
      opacity: hovered !== null && hovered !== i ? 0.85 : 1,
      transition: reduced ? 'none' : `flex-grow 0.8s ${EASE_CSS}, opacity 0.8s ${EASE_CSS}`
    };
  };

  return (
    <section aria-label="Indian and imported collections" className="bg-charcoal text-ivory">
      <div className="flex flex-col lg:h-[88vh] lg:min-h-[640px] lg:flex-row">
        {origins.map((o, i) =>
        <a
          key={o.id}
          href={o.href}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(i)}
          onBlur={() => setHovered(null)}
          style={panelStyle(i)}
          className="group relative block h-[72vh] min-h-[480px] overflow-hidden lg:h-auto lg:flex-1">
          
            <RevealImage
            src={o.image}
            alt={o.alt}
            fill
            duration={1.6}
            delay={i * 0.15}
            innerClassName="transition-transform duration-800 ease-lux group-hover:scale-[1.04]" />
          
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-14">
              <Reveal y={30} delay={0.2 + i * 0.15} duration={1.1} className="max-w-md">
                <p className="text-[11px] font-medium uppercase tracking-eyebrow text-brass-light">{o.eyebrow}</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,3.25rem)] font-light uppercase leading-[1.02] tracking-[0.01em]">
                  {o.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-ivory/80">{o.description}</p>
                <span className="mt-8 inline-flex items-center gap-3 whitespace-nowrap border-b border-ivory/30 pb-2 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 group-hover:border-brass-light">
                  {o.cta}
                  <ArrowRightIcon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-2" />
                
                </span>
              </Reveal>
            </div>
          </a>
        )}
      </div>
    </section>);

}