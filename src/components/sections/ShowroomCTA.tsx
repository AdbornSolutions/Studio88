import React from 'react';
import { MaskLines } from '../motion/MaskLines';
import { Reveal } from '../motion/Reveal';
import { RevealImage } from '../motion/RevealImage';
import { PrimaryButton } from '../ui/PrimaryButton';
import { UnderlineLink } from '../ui/UnderlineLink';
import { media } from '../../data/media';

const visitInfo = [
{ term: 'Hours', value: 'Monday – Saturday, 10:00 – 19:00' },
{ term: 'Sundays', value: 'By private appointment' },
{ term: 'Consultation', value: 'Complimentary, with a material specialist' }];


export function ShowroomCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-ivory">
      <RevealImage
        src={media.showroom}
        alt="The STUDIO88 showroom with marble and travertine slabs under warm light"
        direction="vertical"
        duration={1.6}
        fill />
      
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-[1440px] flex-col justify-center px-6 py-32 md:px-10">
        <Reveal y={20} duration={0.9}>
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-brass-light">Visit the Showroom</p>
        </Reveal>
        <MaskLines
          lines={['Come experience', 'the material.']}
          delay={0.2}
          stagger={0.14}
          duration={1.2}
          className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light uppercase leading-[0.95] tracking-[0.01em]" />
        
        <Reveal y={25} delay={0.55} duration={1} className="mt-8 max-w-md">
          <p className="text-[15px] leading-relaxed text-ivory/80">
            Stone is best chosen in person — in daylight, by hand. Walk our gallery of slabs, tiles and mandirs with a
            specialist beside you.
          </p>
        </Reveal>
        <Reveal y={20} delay={0.8} duration={0.9} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <PrimaryButton href="#contact">Book a Showroom Visit</PrimaryButton>
            <UnderlineLink href="#contact" className="text-ivory">
              Get Directions
            </UnderlineLink>
          </div>
        </Reveal>

        <dl className="mt-20 grid gap-6 border-t border-ivory/15 pt-8 sm:grid-cols-3">
          {visitInfo.map((item, i) =>
          <Reveal key={item.term} y={16} delay={1 + i * 0.1} duration={0.9}>
              <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/55">{item.term}</dt>
              <dd className="mt-2 text-sm text-ivory/90">{item.value}</dd>
            </Reveal>
          )}
        </dl>
      </div>
    </section>);

}