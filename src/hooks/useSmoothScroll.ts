import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

type Options = {
  enabled: boolean;
  locked: boolean;
  reduced: boolean;
};

const HEADER_OFFSET = -72;

export function useSmoothScroll({ enabled, locked, reduced }: Options) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    lenisRef.current = lenis;
    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    if (locked) lenis.stop();else
    lenis.start();
  }, [locked, enabled]);

  // Smooth, offset-aware in-page anchor navigation.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute('href') ?? '';
      if (hash.length < 2) return;
      const el = document.querySelector(hash) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.6 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
        window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [reduced]);
}