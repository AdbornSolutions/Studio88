import React, { useEffect, useRef } from 'react';
import { motion, useAnimate, useReducedMotion } from 'framer-motion';
import { EASE } from '../utils/motion';

type PreloaderProps = {
  /** Fired as the mask begins lifting — the hero starts revealing underneath. */
  onReveal: () => void;
  /** Fired once the preloader has fully cleared. */
  onDone: () => void;
};

export function Preloader({ onReveal, onDone }: PreloaderProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduced = useReducedMotion();
  const callbacks = useRef({ onReveal, onDone });
  callbacks.current = { onReveal, onDone };

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (reduced) {
        await animate('[data-mark]', { opacity: 1 }, { duration: 0.4 });
        await animate('[data-line]', { scaleX: 1 }, { duration: 0.01 });
        if (cancelled) return;
        callbacks.current.onReveal();
        await animate(scope.current, { opacity: 0 }, { duration: 0.5, delay: 0.3 });
        if (!cancelled) callbacks.current.onDone();
        return;
      }

      await animate('[data-mark]', { opacity: [0, 1], y: [14, 0] }, { duration: 1, ease: EASE });
      await animate('[data-line]', { scaleX: [0, 1] }, { duration: 1.2, ease: EASE });
      await animate('[data-group]', { opacity: 0, y: -28 }, { duration: 0.9, delay: 0.15, ease: EASE });
      if (cancelled) return;
      callbacks.current.onReveal();
      await animate(
        scope.current,
        { clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)'] },
        { duration: 1.3, ease: EASE }
      );
      if (!cancelled) callbacks.current.onDone();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [animate, reduced, scope]);

  return (
    <motion.div
      ref={scope}
      role="status"
      aria-label="Loading STUDIO88 by MPI"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory text-charcoal"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}>
      
      <div data-group className="flex flex-col items-center">
        <div data-mark className="flex flex-col items-center" style={{ opacity: 0 }}>
          <span className="pl-[0.18em] font-display text-[clamp(2.5rem,6vw,4rem)] font-light tracking-[0.18em]">
            STUDIO88
          </span>
        </div>
        <span
          data-line
          aria-hidden="true"
          className="mt-7 block h-px w-40 origin-left bg-brass"
          style={{ transform: 'scaleX(0)' }} />
        
      </div>
    </motion.div>);

}