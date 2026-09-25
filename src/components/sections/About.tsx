import React from 'react';
import { RevealImage } from '../motion/RevealImage';
import { Reveal } from '../motion/Reveal';
import { SectionIntro } from '../SectionIntro';
import { media } from '../../data/media';
import { principles } from '../../data/collections';

export function About() {
  return (
    <section id="about" className="bg-ivory py-28 text-charcoal md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-y-16 px-6 md:gap-x-10 md:px-10">
        <RevealImage
          src={media.aboutCraft}
          alt="A craftsman's hands finishing the edge of a marble slab"
          direction="left"
          duration={1.5}
          parallax={5}
          className="col-span-12 aspect-[4/5] md:col-span-6 lg:col-span-7" />
        

        <div className="col-span-12 flex flex-col md:col-span-6 lg:col-span-5 lg:pl-8">
          <SectionIntro
            eyebrow="About STUDIO88"
            lines={['A gallery of surfaces,', 'chosen slab by slab.']}
            description="STUDIO88 is the design gallery of MPI — a place to slow down and choose the surfaces a home will live with for generations. Every slab, tile and mandir is selected at the source and finished by hand before it reaches our floor." />
          

          <dl className="mt-14 border-t border-charcoal/10">
            {principles.map((p, i) =>
            <Reveal key={p.title} delay={0.1 + i * 0.12} y={20} duration={0.9}>
                <div className="grid grid-cols-1 gap-1 border-b border-charcoal/10 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.16em]">{p.title}</dt>
                  <dd className="text-sm leading-relaxed text-stone-muted">{p.detail}</dd>
                </div>
              </Reveal>
            )}
          </dl>

          <RevealImage
            src={media.aboutSlabs}
            alt="Natural stone slabs displayed in the STUDIO88 gallery"
            direction="bottom"
            duration={1.4}
            className="mt-16 aspect-[4/3] w-full lg:ml-auto lg:w-4/5" />
          
        </div>
      </div>
    </section>);

}