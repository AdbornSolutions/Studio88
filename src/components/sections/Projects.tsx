import React from 'react';
import { Reveal } from '../motion/Reveal';
import { SectionIntro } from '../SectionIntro';
import { UnderlineLink } from '../ui/UnderlineLink';
import { projects } from '../../data/projects';

// Editorial cascade: one lead project, two supporting ones stepping down the page.
const layout = [
{ col: 'lg:col-span-6', aspect: 'aspect-[4/5]', offset: '' },
{ col: 'lg:col-span-3', aspect: 'aspect-[3/4]', offset: 'lg:mt-28' },
{ col: 'lg:col-span-3', aspect: 'aspect-[3/4]', offset: 'lg:mt-56' }];


export function Projects() {
  return (
    <section id="projects" className="bg-ivory py-28 text-charcoal md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Selected Projects" lines={['Where our materials', 'come to rest.']} />
          <UnderlineLink href="#contact" withArrow className="self-start md:self-end">
            All projects
          </UnderlineLink>
        </div>

        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {projects.map((p, i) => {
            const l = layout[i] ?? layout[1];
            return (
              <Reveal key={p.id} y={40} delay={i * 0.15} duration={1.1} className={`${l.col} ${l.offset} ${i === 0 ? 'sm:col-span-2 lg:col-span-6' : ''}`}>
                <a href="#contact" className="group block">
                  <div data-cursor="image" className={`relative overflow-hidden bg-ivory-deep ${l.aspect}`}>
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-1200 ease-lux group-hover:scale-105" />
                    
                    <div className="absolute inset-x-4 bottom-4 hidden translate-y-3 bg-ivory/95 px-5 py-4 opacity-0 transition-[opacity,transform] duration-600 ease-lux group-hover:translate-y-0 group-hover:opacity-100 lg:block">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-muted">Materials</p>
                      <p className="mt-1 text-sm text-charcoal">{p.materials}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="relative inline-block font-display text-2xl font-normal md:text-3xl">
                        {p.title}
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-400 ease-lux group-hover:scale-x-100" />
                        
                      </h3>
                      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-muted">
                        {p.location} · {p.type}
                      </p>
                      <p className="mt-2 text-sm text-stone-muted lg:hidden">{p.materials}</p>
                    </div>
                    <span className="pt-2 text-[12px] text-stone-muted">{p.year}</span>
                  </div>
                </a>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}