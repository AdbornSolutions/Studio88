import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMotionProfile } from '../../contexts/MotionContext';
import { EASE } from '../../utils/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  /** Controlled trigger. When omitted the element reveals on entering ~80% of the viewport. */
  when?: boolean;
};

export function Reveal({ children, className, delay = 0, duration = 1, y = 30, scale = 1, when }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const { d, dy, ds, reduced } = useMotionProfile();
  const show = when ?? inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: dy(y), scale: ds(scale) }}
      animate={show ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: d(duration), delay: reduced ? 0 : delay, ease: EASE }}>
      
      {children}
    </motion.div>);

}