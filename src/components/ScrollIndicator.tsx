import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { useMotionProfile } from '../contexts/MotionContext';
import { EASE } from '../utils/motion';

export function ScrollIndicator() {
  const { ready, reduced } = useMotionProfile();

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 hidden justify-center md:flex">
      <motion.a
        href="#about"
        className="pointer-events-auto flex flex-col items-center gap-3 text-ivory/70 transition-colors duration-300 hover:text-ivory"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ duration: 1.2, delay: reduced ? 0 : 1.7, ease: EASE }}>
        
        <span className="text-[10px] font-medium uppercase tracking-eyebrow">Scroll to explore</span>
        <motion.span
          aria-hidden="true"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          
          <ArrowDownIcon className="h-4 w-4" strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </div>);

}