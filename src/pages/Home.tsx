import React, { useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { ScrollProgress } from '../components/ScrollProgress';
import { CustomCursor } from '../components/CustomCursor';
import { Header } from '../components/header/Header';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Collections } from '../components/sections/Collections';
import { NaturalStone } from '../components/sections/NaturalStone';
import { OriginSplit } from '../components/sections/OriginSplit';
import { MaterialFinder } from '../components/sections/MaterialFinder';
import { TileGrid } from '../components/sections/TileGrid';
import { Mandir } from '../components/sections/Mandir';
import { Projects } from '../components/sections/Projects';
import { Philosophy } from '../components/sections/Philosophy';
import { ShowroomCTA } from '../components/sections/ShowroomCTA';
import { Footer } from '../components/Footer';
import { useMotionProfile } from '../contexts/MotionContext';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import type { LoadPhase } from '../types/motion';

type HomeProps = {
  phase: LoadPhase;
  onReveal: () => void;
  onDone: () => void;
  customCursor: boolean;
  smoothScroll: boolean;
};

export function Home({ phase, onReveal, onDone, customCursor, smoothScroll }: HomeProps) {
  const { isDesktop, reduced } = useMotionProfile();
  const locked = phase !== 'done';

  useSmoothScroll({ enabled: smoothScroll && isDesktop && !reduced, locked, reduced });

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = locked ? 'hidden' : '';
    return () => {
      root.style.overflow = '';
    };
  }, [locked]);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-ivory font-sans text-charcoal">
      {phase !== 'done' && <Preloader onReveal={onReveal} onDone={onDone} />}
      <ScrollProgress />
      {customCursor && <CustomCursor />}
      <Header />
      <main>
        <Hero />
        <About />
        <Collections />
        <NaturalStone />
        <OriginSplit />
        <MaterialFinder />
        <TileGrid />
        <Mandir />
        <Projects />
        <Philosophy />
        <ShowroomCTA />
      </main>
      <Footer />
    </div>);

}