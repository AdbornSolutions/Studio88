import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMotionProfile } from '../contexts/MotionContext';
import { EASE } from '../utils/motion';

type CursorVariant = 'default' | 'image' | 'link';

const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, [data-cursor="link"]';

const variants = {
  default: { scale: 0.2, backgroundColor: 'rgba(245,242,236,1)', borderColor: 'rgba(245,242,236,0)' },
  image: { scale: 0.4, backgroundColor: 'rgba(245,242,236,1)', borderColor: 'rgba(245,242,236,0)' },
  link: { scale: 1, backgroundColor: 'rgba(245,242,236,0)', borderColor: 'rgba(245,242,236,1)' }
};

export function CustomCursor() {
  const { isDesktop, reduced } = useMotionProfile();
  const enabled = isDesktop && !reduced;
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Over-damped springs: the cursor glides, it never overshoots.
  const sx = useSpring(x, { stiffness: 700, damping: 60, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 60, mass: 0.4 });
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest(INTERACTIVE)) setVariant('link');else
      if (t.closest('[data-cursor="image"]')) setVariant('image');else
      setVariant('default');
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    root.addEventListener('mouseleave', onLeave);
    return () => {
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110] mix-blend-difference"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: EASE }}>
      
      <motion.div
        className="-ml-5 -mt-5 h-10 w-10 rounded-full border"
        initial={false}
        animate={variants[variant]}
        transition={{ duration: 0.35, ease: EASE }} />
      
    </motion.div>);

}