import { useEffect, useRef } from "react";
import Lenis from "lenis";
const HEADER_OFFSET = -72;
function useSmoothScroll({ enabled, locked, reduced }) {
  const lenisRef = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    lenisRef.current = lenis;
    let frame = 0;
    const loop = (time) => {
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
    if (locked) lenis.stop();
    else
      lenis.start();
  }, [locked, enabled]);
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target;
      const anchor = target?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href") ?? "";
      if (hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: HEADER_OFFSET, duration: 1.6 });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
        window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [reduced]);
}
export {
  useSmoothScroll
};
