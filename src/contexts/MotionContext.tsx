import React, { createContext, useContext, useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { clamp } from '../utils/motion';

type MotionProfile = {
  reduced: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  ready: boolean;
  /** Adapts a reveal duration: lighter on mobile, a short fade when reduced. */
  d: (seconds: number) => number;
  /** Adapts a travel distance in px. */
  dy: (px: number) => number;
  /** Adapts an entrance scale (e.g. 1.08). */
  ds: (scale: number) => number;
};

type ProviderProps = {
  ready: boolean;
  children: React.ReactNode;
};

const MotionContext = createContext<MotionProfile | null>(null);

export function MotionProvider({ ready, children }: ProviderProps) {
  const reduced = useReducedMotion() ?? false;
  const isDesktop = useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const value = useMemo<MotionProfile>(
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

export function useMotionProfile() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotionProfile must be used inside MotionProvider');
  return ctx;
}