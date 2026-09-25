import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';
import { PrimaryButton } from '../ui/PrimaryButton';
import { UnderlineLink } from '../ui/UnderlineLink';
import { ScrollIndicator } from '../ScrollIndicator';
import { useMotionProfile } from '../../contexts/MotionContext';
import { media } from '../../data/media';
import { EASE } from '../../utils/motion';

export function Hero() {
  const { ready, reduced, isDesktop, d, ds } = useMotionProfile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const parallax = isDesktop && !reduced;
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', parallax ? '12%' : '0%']);
  const textY = useTransform(scrollYProgress, [0, 1], [0, parallax ? -60 : 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Introduction"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-ivory">
      
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: ds(1.08) }}
          animate={ready ? { opacity: 1, scale: 1 } : undefined}
          transition={{
            opacity: { duration: d(1.8), ease: EASE },
            scale: { duration: d(2.2), ease: EASE }
          }}>
          
          <img
            src={media.hero}
            alt="Living space with a travertine wall and book-matched marble fireplace in late-afternoon light"
            className="hero-breathe h-full w-full object-cover" />
          
        </motion.div>
        <div className="absolute inset-0 bg-ink/50" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        
        <MaskLines
          as="p"
          lines={['STUDIO88 by MPI']}
          when={ready}
          delay={0.35}
          duration={0.8}
          className="text-[11px] font-medium uppercase tracking-eyebrow text-ivory/80" />
        
        <MaskLines
          as="h1"
          lines={['Crafted by nature.', 'Curated for you.']}
          when={ready}
          delay={0.5}
          stagger={0.12}
          duration={1}
          className="mt-6 font-display text-[clamp(2.75rem,7.2vw,7rem)] font-light uppercase leading-[0.95] tracking-[0.01em]" />
        
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal when={ready} delay={0.85} duration={0.8} y={24} className="max-w-md">
            <p className="text-[15px] leading-relaxed text-ivory/80">
              Natural stone, tiles and hand-carved mandirs — selected at the source and finished with the patience of
              craftsmen. Come see, touch and choose.
            </p>
          </Reveal>
          <Reveal when={ready} delay={1} duration={0.7} y={20}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <PrimaryButton href="#collections">Explore Collections</PrimaryButton>
              <UnderlineLink href="#contact" className="text-ivory">
                Visit Our Showroom
              </UnderlineLink>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>);

}