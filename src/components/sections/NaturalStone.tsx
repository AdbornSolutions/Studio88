import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionIntro } from '../SectionIntro';
import { StoneCarousel } from '../stone/StoneCarousel';
import { useMotionProfile } from '../../contexts/MotionContext';
import { EASE } from '../../utils/motion';

export function NaturalStone() {
  const ref = useRef<HTMLElement>(null);
  // The room dims as you step in: ivory gallery → charcoal stone hall.
  const entered = useInView(ref, { once: true, amount: 0.2 });
  const { d } = useMotionProfile();

  return (
    <motion.section
      id="natural-stone"
      ref={ref}
      className="overflow-hidden py-28 md:py-40"
      initial={{ backgroundColor: '#F5F2EC', color: '#20201E' }}
      animate={entered ? { backgroundColor: '#20201E', color: '#F5F2EC' } : undefined}
      transition={{ duration: d(1.2), ease: EASE }}>
      
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:px-10 lg:grid-cols-12">
        <SectionIntro
          tone="dark"
          eyebrow="Natural Stone"
          lines={['The beauty of nature,', 'in every surface.']}
          description="Each stone carries millions of years in its grain. Drag, swipe or use the arrows to move through the materials in our gallery."
          className="lg:col-span-8" />
        
      </div>
      <div className="mt-16 md:mt-20">
        <StoneCarousel />
      </div>
    </motion.section>);

}