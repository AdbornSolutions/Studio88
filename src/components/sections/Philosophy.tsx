import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';
import { useMotionProfile } from '../../contexts/MotionContext';
import { media } from '../../data/media';

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { isDesktop, reduced } = useMotionProfile();
  const on = isDesktop && !reduced;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Three planes drifting at slightly different rates — barely perceptible depth.
  const bgY = useTransform(scrollYProgress, [0, 1], on ? ['-5%', '5%'] : ['0%', '0%']);
  const headY = useTransform(scrollYProgress, [0, 1], on ? [30, -30] : [0, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], on ? [60, -60] : [0, 0]);

  return (
    <section
      ref={ref}
      aria-label="Our philosophy"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink text-ivory">
      
      <motion.div className="absolute inset-x-0 -bottom-[8%] -top-[8%]" style={{ y: bgY }}>
        <img
          src={media.philosophy}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover" />
        
      </motion.div>
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-32 md:px-10">
        <motion.div style={{ y: headY }}>
          <MaskLines
            mode="fade"
            lines={['Every space', 'begins with', 'a material.']}
            stagger={0.2}
            duration={1.4}
            className="font-display text-[clamp(3rem,8vw,8rem)] font-light uppercase leading-[0.92] tracking-[0.01em]" />
          
        </motion.div>
        <motion.div style={{ y: textY }} className="mt-14 md:ml-auto md:mt-0 md:max-w-sm">
          <Reveal y={25} delay={0.8} duration={1.2}>
            <p className="text-[15px] leading-relaxed text-ivory/80">
              Before colour, before furniture, before light — there is the surface you touch every day. We believe it
              should be chosen with the same care it took nature to make it.
            </p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-eyebrow text-brass-light">
              The STUDIO88 philosophy
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>);

}