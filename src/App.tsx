import React, { useEffect, useState } from 'react';
import { MotionProvider } from './contexts/MotionContext';
import { Home } from './pages/Home';
import type { LoadPhase } from './types/motion';

type AppProps = {
  /** Play the STUDIO88 preloader and cinematic page reveal on load. */
  showPreloader?: boolean;
  /** Minimal custom cursor on desktop pointers. */
  customCursor?: boolean;
  /** Inertial smooth scrolling on desktop. */
  smoothScroll?: boolean;
};

export function App({ showPreloader = true, customCursor = true, smoothScroll = true }: AppProps) {
  const [phase, setPhase] = useState<LoadPhase>(showPreloader ? 'loading' : 'done');

  useEffect(() => {
    setPhase(showPreloader ? 'loading' : 'done');
  }, [showPreloader]);

  return (
    <MotionProvider ready={phase !== 'loading'}>
      <Home
        phase={phase}
        onReveal={() => setPhase('revealing')}
        onDone={() => setPhase('done')}
        customCursor={customCursor}
        smoothScroll={smoothScroll} />
      
    </MotionProvider>);

}