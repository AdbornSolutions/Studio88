import { createContext, useContext, useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { clamp } from "../utils/motion";
const MotionContext = createContext(null);
function MotionProvider({ ready, children }) {
  const reduced = useReducedMotion() ?? false;
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const value = useMemo(
    () => ({
      reduced,
      isDesktop,
      isMobile,
      ready,
      d: (s) => reduced ? 0.5 : isMobile ? clamp(s * 0.6, 0.6, 0.9) : s,
      dy: (px) => reduced ? 0 : isMobile ? Math.min(px, 26) : px,
      ds: (scale) => reduced ? 1 : isMobile ? 1 + (scale - 1) * 0.4 : scale
    }),
    [reduced, isDesktop, isMobile, ready]
  );
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}
function useMotionProfile() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotionProfile must be used inside MotionProvider");
  return ctx;
}
export {
  MotionProvider,
  useMotionProfile
};
