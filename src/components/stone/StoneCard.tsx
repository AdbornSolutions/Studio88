import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { Stone } from '../../types/catalog';

type StoneCardProps = {
  stone: Stone;
  active: boolean;
  /** Enables the cursor-following texture shift (desktop, full motion only). */
  interactive: boolean;
};

const MAX_SHIFT = 5; // px

export function StoneCard({ stone, active, interactive }: StoneCardProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Over-damped: the surface drifts with the cursor and never springs back past rest.
  const x = useSpring(mx, { stiffness: 120, damping: 30 });
  const y = useSpring(my, { stiffness: 120, damping: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -2 * MAX_SHIFT);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -2 * MAX_SHIFT);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <article
      data-card
      aria-roledescription="slide"
      aria-label={stone.name}
      className="w-[80vw] shrink-0 snap-start sm:w-[58vw] lg:w-[36vw] lg:max-w-[560px]">
      
      <div
        data-cursor="image"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-[4/5] overflow-hidden bg-charcoal-soft">
        
        <motion.div className="absolute -inset-3" style={{ x, y }}>
          <img
            src={stone.image}
            alt={stone.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`h-full w-full object-cover transition-transform duration-1200 ease-lux ${
            active ? 'scale-[1.04]' : 'scale-100'}`
            } />
          
        </motion.div>
      </div>

      <div
        className={`mt-6 transition-opacity duration-800 ease-lux ${active ? 'opacity-100' : 'opacity-70'}`}>
        
        <div className="flex items-baseline justify-between gap-6 border-b border-ivory/15 pb-4">
          <h3
            className={`font-display text-3xl font-light uppercase tracking-[0.02em] transition-transform duration-800 ease-lux md:text-4xl ${
            active ? '-translate-y-[5px]' : 'translate-y-0'}`
            }>
            
            {stone.name}
          </h3>
          <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/60">
            {stone.origin}
          </span>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/75">{stone.description}</p>
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-brass-light">
          {stone.finishes.join(' · ')}
        </p>
      </div>
    </article>);

}