import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SectionIntro } from '../SectionIntro';
import { useMotionProfile } from '../../contexts/MotionContext';
import { collections } from '../../data/collections';
import { EASE } from '../../utils/motion';

// Deeper cards travel further, giving the row a gentle cascading settle.
const OFFSETS = [50, 70, 90];

export function Collections() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: '0px 0px -15% 0px' });
  const { d, dy, reduced } = useMotionProfile();

  return (
    <section id="collections" className="bg-ivory pb-28 text-charcoal md:pb-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionIntro
          eyebrow="Our Collections"
          lines={['Three collections.', 'One standard of craft.']}
          className="border-t border-charcoal/10 pt-20 md:pt-28" />
        

        <div ref={gridRef} className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {collections.map((c, i) =>
          <motion.a
            key={c.id}
            href={c.href}
            className="group block transition-transform duration-300 ease-lux active:scale-[0.99]"
            initial={{ opacity: 0, y: dy(OFFSETS[i] ?? 50) }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: d(1), delay: reduced ? 0 : i * 0.15, ease: EASE }}>
            
              <div data-cursor="image" className="relative aspect-[3/4] overflow-hidden bg-ivory-deep">
                <img
                src={c.image}
                alt={c.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-800 ease-lux group-hover:scale-[1.06]" />
              
                <div className="absolute inset-0 bg-ink opacity-10 transition-opacity duration-800 ease-lux group-hover:opacity-25" />
              </div>
              <div className="mt-6 flex items-start justify-between gap-6 transition-transform duration-800 ease-lux group-hover:-translate-y-[5px]">
                <div>
                  <h3 className="font-display text-3xl font-light uppercase tracking-[0.02em]">{c.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-muted">{c.description}</p>
                </div>
                <ArrowRightIcon
                aria-hidden="true"
                strokeWidth={1.25}
                className="mt-2 h-5 w-5 shrink-0 transition-transform duration-500 ease-lux group-hover:translate-x-2" />
              
              </div>
            </motion.a>
          )}
        </div>
      </div>
    </section>);

}