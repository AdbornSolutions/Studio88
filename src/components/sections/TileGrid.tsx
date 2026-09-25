import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionIntro } from '../SectionIntro';
import { UnderlineLink } from '../ui/UnderlineLink';
import { useMotionProfile } from '../../contexts/MotionContext';
import { tiles } from '../../data/tiles';
import { EASE } from '../../utils/motion';

export function TileGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: '0px 0px -15% 0px' });
  const { d, dy, reduced } = useMotionProfile();

  return (
    <section id="tiles" className="bg-ivory py-28 text-charcoal md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Tile Collection"
            lines={['Tiles, considered', 'to the millimetre.']}
            description="Large-format porcelain, terrazzo and handmade clay, chosen for how they wear, age and catch the light." />
          
          <UnderlineLink href="#contact" withArrow className="self-start md:self-end">
            View all tiles
          </UnderlineLink>
        </div>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) =>
          <motion.a
            key={t.id}
            href="#contact"
            initial={{ opacity: 0, y: dy(40) }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: d(0.9), delay: reduced ? 0 : i * 0.1, ease: EASE }}
            className="group flex h-full flex-col border border-charcoal/10 bg-ivory p-3 transition-colors duration-500 ease-lux hover:border-brass active:border-brass">
            
              <div data-cursor="image" className="aspect-square overflow-hidden bg-ivory-deep">
                <img
                src={t.image}
                alt={t.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-lux group-hover:scale-[1.04]" />
              
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5 transition-transform duration-500 ease-lux group-hover:-translate-y-[5px]">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-muted">{t.category}</p>
                <h3 className="mt-2 font-display text-2xl font-normal">{t.name}</h3>
                <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-[13px] text-stone-muted">
                  <span>
                    {t.size} · {t.finish}
                  </span>
                  <ArrowRightIcon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="h-4 w-4 shrink-0 text-charcoal transition-transform duration-500 ease-lux group-hover:translate-x-1.5" />
                
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}