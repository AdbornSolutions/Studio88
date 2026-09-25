import React from 'react';
import { SocialIcon } from './SocialIcon';
import { footerColumns } from '../data/navigation';

const socials = [
{ name: 'instagram' as const, label: 'Instagram', href: 'https://instagram.com' },
{ name: 'youtube' as const, label: 'YouTube', href: 'https://youtube.com' },
{ name: 'linkedin' as const, label: 'LinkedIn', href: 'https://linkedin.com' }];


export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" aria-label="STUDIO88 by MPI — home" className="inline-block">
              <img
                src="/logo-studio-88.png"
                alt="STUDIO88 by MPI"
                className="w-40 object-default object-[center_27%]"
              />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
              A gallery of natural stone, tiles and hand-carved mandirs — curated for architects, designers and the homes
              they shape.
            </p>
            <ul className="mt-10 flex gap-3">
              {socials.map((s) =>
              <li key={s.name}>
                  <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition-[transform,border-color,color] duration-300 ease-lux hover:-translate-y-[3px] hover:border-brass-light hover:text-ivory">
                  
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerColumns.map((col) =>
            <nav key={col.title} aria-label={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brass-light">{col.title}</p>
                <ul className="mt-6 space-y-4">
                  {col.links.map((link) =>
                <li key={link.label}>
                      <a href={link.href} className="footer-link text-sm">
                        {link.label}
                      </a>
                    </li>
                )}
                </ul>
              </nav>
            )}
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[12px] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 STUDIO88 by MPI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="footer-link">Privacy</a>
            <a href="#home" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>);

}