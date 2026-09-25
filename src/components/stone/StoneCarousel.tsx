import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { StoneCard } from './StoneCard';
import { useStoneCarousel } from './useStoneCarousel';
import { Reveal } from '../motion/Reveal';
import { useMotionProfile } from '../../contexts/MotionContext';
import { stones } from '../../data/stones';

const arrowClass =
'flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-[border-color,opacity] duration-400 ease-lux hover:border-brass-light disabled:opacity-30 disabled:hover:border-ivory/25';

export function StoneCarousel() {
  const { isDesktop, reduced } = useMotionProfile();
  const c = useStoneCarousel(reduced);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10">
        <p aria-live="polite" className="text-[12px] font-medium uppercase tracking-[0.2em] text-ivory/60">
          <span className="text-ivory">{pad(c.active + 1)}</span> / {pad(stones.length)}
        </p>
        <div className="flex gap-3">
          <button type="button" aria-label="Previous material" onClick={c.prev} disabled={!c.canPrev} className={arrowClass}>
            <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.25} />
          </button>
          <button type="button" aria-label="Next material" onClick={c.next} disabled={!c.canNext} className={arrowClass}>
            <ArrowRightIcon className="h-4 w-4" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      <Reveal y={40} duration={1.2} delay={0.1}>
        <div
          ref={c.trackRef}
          data-lenis-prevent
          role="region"
          aria-roledescription="carousel"
          aria-label="Natural stone materials"
          tabIndex={0}
          {...c.handlers}
          className={`no-scrollbar relative mt-10 flex gap-5 overflow-x-auto pb-2 pl-6 scroll-pl-6 focus-visible:outline-none md:gap-8 md:pl-10 md:scroll-pl-10 min-[1440px]:pl-[calc((100vw-1440px)/2+2.5rem)] min-[1440px]:scroll-pl-[calc((100vw-1440px)/2+2.5rem)] ${
          c.dragging ? 'select-none' : 'snap-x snap-mandatory'}`
          }>
          
          {stones.map((stone, i) =>
          <StoneCard key={stone.id} stone={stone} active={i === c.active} interactive={isDesktop && !reduced} />
          )}
          <div aria-hidden="true" className="shrink-0" style={{ width: c.spacer }} />
        </div>
      </Reveal>
    </div>);

}