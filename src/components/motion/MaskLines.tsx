import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMotionProfile } from '../../contexts/MotionContext';
import { EASE } from '../../utils/motion';

type MaskLinesProps = {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  when?: boolean;
  /** "mask" slides each line up from behind an invisible edge; "fade" only fades each line in. */
  mode?: 'mask' | 'fade';
};

export function MaskLines({
  lines,
  as: Tag = 'h2',
  className,
  delay = 0,
  stagger = 0.12,
  duration = 1,
  when,
  mode = 'mask'
}: MaskLinesProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const { d, reduced } = useMotionProfile();
  const show = when ?? inView;
  const masked = mode === 'mask' && !reduced;

  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      <span ref={ref} aria-hidden="true" className="block">
        {lines.map((line, i) =>
        <span key={line} className={`block ${masked ? '-mb-[0.14em] overflow-hidden pb-[0.14em]' : ''}`}>
            <motion.span
            className="block will-change-transform"
            initial={masked ? { y: '110%', opacity: 0 } : { opacity: 0, y: reduced ? 0 : 8 }}
            animate={show ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: d(duration), delay: reduced ? 0 : delay + i * stagger, ease: EASE }}>
            
              {line}
            </motion.span>
          </span>
        )}
      </span>
    </Tag>);

}