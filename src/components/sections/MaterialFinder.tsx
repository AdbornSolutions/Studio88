import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionIntro } from '../SectionIntro';
import { Reveal } from '../motion/Reveal';
import { UnderlineLink } from '../ui/UnderlineLink';
import { useMotionProfile } from '../../contexts/MotionContext';
import { materials } from '../../data/materials';
import { EASE } from '../../utils/motion';

export function MaterialFinder() {
  const [selectedId, setSelectedId] = useState(materials[0].id);
  const { reduced, isMobile } = useMotionProfile();
  const current = materials.find((m) => m.id === selectedId) ?? materials[0];
  const shift = reduced ? 0 : isMobile ? 12 : 24;

  return (
    <section id="finder" className="bg-ivory-deep py-28 text-charcoal md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionIntro
            eyebrow="Material Finder"
            lines={['Find the stone', 'for your space.']}
            className="lg:col-span-6" />
          
          <Reveal y={25} delay={0.3} className="lg:col-span-6">
            <div role="group" aria-label="Filter by material" className="flex flex-wrap gap-2 lg:justify-end">
              {materials.map((m) => {
                const on = m.id === selectedId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setSelectedId(m.id)}
                    className={`whitespace-nowrap border px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-[background-color,color,border-color] duration-300 ease-lux ${
                    on ?
                    'border-brass bg-charcoal text-ivory' :
                    'border-charcoal/15 text-charcoal hover:border-charcoal/40'}`
                    }>
                    
                    {m.name}
                  </button>);

              })}
            </div>
          </Reveal>
        </div>

        <Reveal y={30} delay={0.1} className="mt-14 md:mt-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: shift }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -shift, transition: { duration: 0.35, ease: EASE } }}
              transition={{ duration: 0.6, ease: EASE }}
              className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              
              <div data-cursor="image" className="aspect-[4/5] overflow-hidden bg-ivory lg:col-span-5">
                <img
                  src={current.image}
                  alt={current.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover" />
                
              </div>

              <div className="flex flex-col lg:col-span-7">
                <h3 className="font-display text-[clamp(2.5rem,4vw,3.75rem)] font-light uppercase leading-none tracking-[0.01em]">
                  {current.name}
                </h3>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-stone-muted">{current.summary}</p>

                <table className="mt-10 w-full text-left text-sm">
                  <caption className="sr-only">{current.name} varieties available at STUDIO88</caption>
                  <thead>
                    <tr className="border-b border-charcoal/15 text-[11px] uppercase tracking-[0.18em] text-stone-muted">
                      <th scope="col" className="py-3 pr-4 font-medium">Variety</th>
                      <th scope="col" className="py-3 pr-4 font-medium">Origin</th>
                      <th scope="col" className="py-3 pr-4 font-medium">Finish</th>
                      <th scope="col" className="hidden py-3 font-medium sm:table-cell">Thickness</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.varieties.map((v) =>
                    <tr key={v.name} className="border-b border-charcoal/10">
                        <th scope="row" className="py-4 pr-4 font-display text-xl font-normal">{v.name}</th>
                        <td className="py-4 pr-4 text-stone-muted">{v.origin}</td>
                        <td className="py-4 pr-4 text-stone-muted">{v.finish}</td>
                        <td className="hidden py-4 text-stone-muted sm:table-cell">{v.thickness}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="mt-auto pt-10">
                  <UnderlineLink href="#contact" withArrow>
                    Request {current.name} samples
                  </UnderlineLink>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>);

}