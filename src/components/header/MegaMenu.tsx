import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';
import { UnderlineLink } from '../ui/UnderlineLink';
import { useMotionProfile } from '../../contexts/MotionContext';
import { megaCategories } from '../../data/navigation';
import { EASE } from '../../utils/motion';

type MegaMenuProps = {
  open: boolean;
  onEnter: () => void;
  onNavigate: () => void;
};

export function MegaMenu({ open, onEnter, onNavigate }: MegaMenuProps) {
  const { reduced } = useMotionProfile();

  const stagger = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reduced ? 0 : delay, ease: EASE }
  });

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mega-menu"
        onMouseEnter={onEnter}
        initial={{ opacity: 0, y: reduced ? 0 : -15, filter: reduced ? 'blur(0px)' : 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: reduced ? 0 : -8, transition: { duration: 0.3, ease: EASE } }}
        transition={{ duration: 0.45, ease: EASE }}
        className="absolute inset-x-0 top-full hidden border-b border-charcoal/10 bg-ivory text-charcoal shadow-[0_30px_60px_-40px_rgba(32,32,30,0.35)] lg:block">
        
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-10 pb-12 pt-10">
            <div className="col-span-9 grid grid-cols-3 gap-8">
              {megaCategories.map((cat) =>
            <div key={cat.id}>
                  <a href={cat.href} onClick={onNavigate} className="group block">
                    <motion.div {...stagger(0.1)} className="aspect-[4/3] overflow-hidden bg-ivory-deep">
                      <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-800 ease-lux group-hover:scale-[1.04]" />
                  
                    </motion.div>
                    <motion.div {...stagger(0.15)} className="mt-5 flex items-center justify-between">
                      <span className="font-display text-2xl uppercase tracking-[0.02em]">{cat.title}</span>
                      <ArrowRightIcon
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="h-4 w-4 transition-transform duration-300 ease-lux group-hover:translate-x-2" />
                  
                    </motion.div>
                  </a>
                  <motion.ul {...stagger(0.15)} className="mt-4 space-y-2">
                    {cat.items.map((item) =>
                <li key={item.label}>
                        <a
                    href={item.href}
                    onClick={onNavigate}
                    className="text-[13px] text-stone-muted transition-colors duration-300 hover:text-charcoal">
                    
                          {item.label}
                        </a>
                      </li>
                )}
                  </motion.ul>
                </div>
            )}
            </div>

            <motion.div {...stagger(0.2)} className="col-span-3 flex flex-col border-l border-charcoal/10 pl-10">
              <p className="text-[11px] font-medium uppercase tracking-eyebrow text-brass-deep">The Catalogue</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                A complete library of surfaces — best seen, and touched, in person.
              </p>
              <div className="mt-auto flex flex-col items-start gap-4 pt-8">
                <PrimaryButton href="#contact" onClick={onNavigate}>
                  Book a Visit
                </PrimaryButton>
                <UnderlineLink href="#finder" onClick={onNavigate}>
                  Material Finder
                </UnderlineLink>
              </div>
            </motion.div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}