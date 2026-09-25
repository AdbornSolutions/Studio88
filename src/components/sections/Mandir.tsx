import React from 'react';
import { motion } from 'framer-motion';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';
import { RevealImage } from '../motion/RevealImage';
import { UnderlineLink } from '../ui/UnderlineLink';
import { useMotionProfile } from '../../contexts/MotionContext';
import { media } from '../../data/media';
import { EASE } from '../../utils/motion';

const details = [
{ term: 'Material', value: 'Makrana and Vietnam white marble' },
{ term: 'Craft', value: 'Hand-carved by artisan families' },
{ term: 'Commission', value: 'Designed to your room, 10–14 weeks' }];


export function Mandir() {
  const { reduced } = useMotionProfile();

  return (
    <section id="mandir" className="overflow-hidden bg-charcoal py-28 text-ivory md:py-44">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <Reveal y={20} duration={1.1}>
            <p className="text-[11px] font-medium uppercase tracking-eyebrow text-brass-light">Mandir Collection</p>
          </Reveal>
          <MaskLines
            lines={['A space', 'for stillness.']}
            delay={0.2}
            stagger={0.18}
            duration={1.5}
            className="mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] font-light uppercase leading-[0.95] tracking-[0.01em]" />
          
          <Reveal y={25} delay={0.6} duration={1.3} className="mt-8 max-w-md">
            <p className="text-[15px] leading-relaxed text-ivory/75">
              A mandir is the quietest room in a home. Ours are carved slowly, by hand, from a single choice of marble —
              proportioned to your wall, your light and your rituals.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-ivory/10">
            {details.map((item, i) =>
            <Reveal key={item.term} y={16} delay={0.75 + i * 0.12} duration={1.1}>
                <div className="flex items-baseline justify-between gap-6 border-b border-ivory/10 py-4">
                  <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/55">{item.term}</dt>
                  <dd className="text-right text-sm text-ivory/85">{item.value}</dd>
                </div>
              </Reveal>
            )}
          </dl>

          <Reveal y={16} delay={1.1} duration={1} className="mt-10">
            <UnderlineLink href="#contact" withArrow className="text-ivory">
              Commission a Mandir
            </UnderlineLink>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          {/* A soft, warm light that settles around the image once it has revealed. */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 shadow-[0_0_140px_-10px_rgba(201,171,122,0.28)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 2, delay: reduced ? 0 : 1.2, ease: EASE }} />
          
          <RevealImage
            src={media.mandir}
            alt="Hand-carved white marble mandir softly lit by a brass diya"
            direction="right"
            duration={1.8}
            parallax={4}
            className="aspect-[4/5]" />
          
        </div>
      </div>
    </section>);

}